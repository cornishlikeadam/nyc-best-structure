#!/usr/bin/env node
// ═══════════════════════════════════════════════════
//  BUILD SCRIPT — Compiles the data spine + engine
//  into a single standalone HTML file
//
//  Usage: node build-system.mjs [seed]
//  Default seed: "nyc-001"
//
//  Output: public/system.html (self-contained, inscribable)
// ═══════════════════════════════════════════════════

import { readFileSync, writeFileSync } from 'fs';

const seed = process.argv[2] || 'nyc-001';

// Read canonical data
const boroughs = readFileSync('src/data/boroughs.js', 'utf8');
const subway = readFileSync('src/data/subway.js', 'utf8');
const pois = readFileSync('src/data/pois.js', 'utf8');
const engine = readFileSync('src/data/engine.js', 'utf8');

// Strip ES module syntax for inline use
function stripModule(code) {
  return code
    .replace(/^export (const|class|function|default)/gm, '$1')
    .replace(/^import .+$/gm, '// [import resolved by build]')
    .replace(/^default \{[^}]+\};?\s*$/gm, '');
}

console.log(`Building system.html with seed: "${seed}"`);
console.log(`  Boroughs: ${(boroughs.match(/id:/g)||[]).length}`);
console.log(`  Guide POIs: ${(pois.match(/id:'guide-/g)||[]).length}`);
console.log(`  Subway lines: ${(subway.match(/id:'/g)||[]).length / 2}`);

const html = `<!-- Built from data spine | seed: ${seed} | ${new Date().toISOString()} -->
<!-- Source: src/data/boroughs.js + subway.js + pois.js + engine.js -->
<script>
// ── DATA SPINE (compiled from canonical sources) ──
${stripModule(boroughs)}
${stripModule(subway)}
${stripModule(pois)}
${stripModule(engine)}

// ── BUILD CONFIG ──
const WORLD_SEED = "${seed}";
const WORLD = buildWorld(WORLD_SEED, BOROUGHS, GUIDE_POIS, { NAME_POOLS, DESC_TEMPLATES, META_OPTIONS, GENERATION_COUNTS });
console.log(\`[NYC System] seed=\${WORLD_SEED} pois=\${WORLD.pois.length} guide=\${WORLD.pois.filter(p=>p.isGuide).length}\`);
</script>`;

writeFileSync('public/spine-compiled.js', html);
console.log(`  Output: public/spine-compiled.js`);
console.log(`  Total POIs will be: 27 guide + ~240 generated = ~267`);
console.log('Done.');
