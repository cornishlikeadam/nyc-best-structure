// ═══════════════════════════════════════════════════
//  SEED ENGINE — Deterministic World Generation
//
//  Same seed = same world, every time.
//  This is what makes editions collectible:
//  seed "nyc-001" always produces the same 300 POIs
//  in the same positions with the same descriptions.
// ═══════════════════════════════════════════════════

export class SeededRNG {
  constructor(seed) {
    this.seed = this.hashSeed(seed);
    this.initial = this.seed;
  }

  // Convert any string/number seed to a numeric hash
  hashSeed(seed) {
    if (typeof seed === 'number') return seed;
    let h = 0;
    const str = String(seed);
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h) || 42;
  }

  // Park-Miller LCG — deterministic
  next() {
    this.seed = ((this.seed * 48271) % 2147483647);
    return (this.seed - 1) / 2147483646;
  }

  int(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  pick(arr) {
    return arr[Math.floor(this.next() * arr.length)];
  }

  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  reset() {
    this.seed = this.initial;
  }
}

// ── Geometry helpers ──

export function pointInPolygon(px, py, pathStr) {
  const nums = pathStr.match(/[\d.]+/g).map(Number);
  const pts = [];
  for (let i = 0; i < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi))
      inside = !inside;
  }
  return inside;
}

export function boundingBox(pathStr) {
  const nums = pathStr.match(/[\d.]+/g).map(Number);
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (let i = 0; i < nums.length; i += 2) {
    x0 = Math.min(x0, nums[i]); x1 = Math.max(x1, nums[i]);
    y0 = Math.min(y0, nums[i + 1]); y1 = Math.max(y1, nums[i + 1]);
  }
  return { x0, x1, y0, y1 };
}

export function randomPointInBorough(rng, borough) {
  const bb = boundingBox(borough.path);
  let px, py, tries = 0;
  do {
    px = bb.x0 + rng.next() * (bb.x1 - bb.x0);
    py = bb.y0 + rng.next() * (bb.y1 - bb.y0);
    tries++;
  } while (!pointInPolygon(px, py, borough.path) && tries < 80);
  return { x: Math.round(px * 10) / 10, y: Math.round(py * 10) / 10 };
}

// ── World Builder ──

export function buildWorld(seed, boroughs, guidePoIs, genConfig) {
  const rng = new SeededRNG(seed);
  const { NAME_POOLS, DESC_TEMPLATES, META_OPTIONS, GENERATION_COUNTS } = genConfig;

  // Start with guide POIs (always present, canonical)
  const pois = guidePoIs.map((p, i) => ({
    ...p,
    numericId: i,
    isGuide: true,
    tracked: false,
    connections: [],
  }));

  let id = pois.length;
  const suffixes = ['II', 'III', 'IV', 'East', 'West', 'North', 'South', 'Alt'];

  // Generate procedural POIs per category
  for (const [cat, count] of Object.entries(GENERATION_COUNTS)) {
    const names = rng.shuffle([...NAME_POOLS[cat]]);
    const descs = DESC_TEMPLATES[cat];
    const metas = META_OPTIONS[cat];

    for (let i = 0; i < count; i++) {
      const borough = rng.pick(boroughs);
      const { x, y } = randomPointInBorough(rng, borough);
      const baseName = names[i % names.length];
      const name = i >= names.length
        ? baseName + ' ' + suffixes[i % suffixes.length]
        : baseName;

      const numMeta = rng.int(1, 3);
      const meta = rng.shuffle([...metas]).slice(0, numMeta);

      pois.push({
        id: `gen-${id}`,
        numericId: id,
        name,
        cat,
        borough: borough.id,
        hoodName: borough.name,
        x, y,
        desc: rng.pick(descs),
        meta,
        isGuide: false,
        tracked: false,
        connections: [],
        // Simulation properties
        activity: rng.next(),              // 0-1 base activity level
        peakHours: [rng.int(0, 23), rng.int(0, 23)].sort((a, b) => a - b),
        volatility: rng.next() * 0.5,      // how much activity fluctuates
      });
      id++;
    }
  }

  // Build connection graph: each POI connects to 1-3 nearby POIs
  pois.forEach((p, i) => {
    const nearby = pois
      .map((q, j) => ({ j, dist: Math.hypot(p.x - q.x, p.y - q.y) }))
      .filter(q => q.j !== i && q.dist < 40)
      .sort((a, b) => a.dist - b.dist)
      .slice(0, rng.int(1, 3));
    p.connections = nearby.map(n => n.j);
  });

  // Generate heat data per borough per hour
  const heatData = {};
  boroughs.forEach(b => {
    heatData[b.id] = [];
    for (let h = 0; h < 24; h++) {
      const base = rng.next() * 0.3;
      const night = (h >= 18 && h <= 23) || (h >= 0 && h <= 2);
      const rush = h >= 7 && h <= 9;
      const midday = h >= 11 && h <= 14;
      const peak = night ? 1 : rush ? 0.7 : midday ? 0.5 : 0.3;
      heatData[b.id].push(Math.min(1, base + peak * rng.next()));
    }
  });

  return { pois, heatData, seed, rng };
}

// ── Event system ──

export const EVENT_TYPES = [
  { name: 'Street Performance', hours: [10, 22], color: '#aa66ff', icon: '♫' },
  { name: 'Rush Hour Surge',    hours: [7, 9],   color: '#ffaa00', icon: '▲' },
  { name: 'Night Market',       hours: [19, 23], color: '#ffaa00', icon: '◆' },
  { name: 'Incident Report',    hours: [0, 5],   color: '#ff4444', icon: '!' },
  { name: 'Cultural Event',     hours: [14, 20], color: '#aa66ff', icon: '★' },
  { name: 'Transit Delay',      hours: [7, 10],  color: '#00aaff', icon: '◇' },
  { name: 'Food Festival',      hours: [11, 15], color: '#ff4444', icon: '●' },
  { name: 'Underground Show',   hours: [21, 3],  color: '#556677', icon: '◈' },
];

export function getEvents(hour, rng, boroughs) {
  const events = [];
  EVENT_TYPES.forEach(t => {
    const inRange = t.hours[0] <= t.hours[1]
      ? (hour >= t.hours[0] && hour <= t.hours[1])
      : (hour >= t.hours[0] || hour <= t.hours[1]);
    if (inRange) {
      for (let i = 0; i < rng.int(1, 3); i++) {
        const b = rng.pick(boroughs);
        const { x, y } = randomPointInBorough(rng, b);
        events.push({ ...t, x, y, borough: b.name });
      }
    }
  });
  return events;
}

export default { SeededRNG, buildWorld, getEvents, pointInPolygon, boundingBox };
