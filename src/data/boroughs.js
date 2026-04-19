// ═══════════════════════════════════════════════════
//  CANONICAL BOROUGH DATA — Geographic Layer (Real)
//  Source of truth for all map views
// ═══════════════════════════════════════════════════

export const BOROUGHS = [
  {
    id: 'manhattan',
    name: 'Manhattan',
    pop: '1.6M',
    area: '22.8 sq mi',
    density: '72K/mi²',
    desc: 'The island. 22 square miles of vertical ambition compressed into a grid that bends below 14th Street. Every block has its own gravity.',
    fill: 'rgba(200,180,140,.08)',
    stroke: 'rgba(200,180,140,.25)',
    path: 'M295,340 L310,310 L320,270 L315,230 L325,190 L330,155 L325,130 L315,110 L300,95 L285,100 L275,120 L270,155 L260,200 L255,240 L258,280 L265,310 L275,340 L280,370 L285,390 L280,410 L275,425 L290,430 L305,420 L310,400 L305,375 Z',
    // Newspaper map neighborhoods within this borough
    districts: ['harlem','upper-west','upper-east','midtown','chelsea','gramercy','west-village','east-village','soho','les','chinatown','tribeca','fidi','hudson-yards']
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    pop: '2.6M',
    area: '69.4 sq mi',
    density: '37K/mi²',
    desc: 'The borough that contains multitudes. From the brownstones of Park Slope to the boardwalk at Coney Island — every neighborhood is its own thesis.',
    fill: 'rgba(140,180,200,.08)',
    stroke: 'rgba(140,180,200,.2)',
    path: 'M305,420 L290,430 L275,425 L265,435 L255,460 L260,490 L270,520 L290,550 L320,570 L360,580 L400,575 L430,560 L450,535 L460,500 L455,470 L440,445 L420,430 L395,420 L370,415 L345,418 Z',
    districts: ['williamsburg','bushwick','dumbo','carroll-gardens','red-hook','park-slope','greenwood']
  },
  {
    id: 'queens',
    name: 'Queens',
    pop: '2.3M',
    area: '108.7 sq mi',
    density: '21K/mi²',
    desc: 'The most ethnically diverse urban area on Earth. 138 languages. Every cuisine. The airports, the beaches, and everything between.',
    fill: 'rgba(160,200,160,.08)',
    stroke: 'rgba(160,200,160,.2)',
    path: 'M345,418 L370,415 L395,420 L420,430 L440,445 L455,400 L470,360 L490,320 L500,280 L495,240 L480,210 L460,190 L440,180 L415,175 L390,180 L370,200 L355,220 L345,250 L340,280 L338,310 L335,340 L330,370 L335,395 Z',
    districts: ['astoria','jackson-heights','flushing','long-island-city']
  },
  {
    id: 'bronx',
    name: 'The Bronx',
    pop: '1.4M',
    area: '42.2 sq mi',
    density: '34K/mi²',
    desc: 'The birthplace of hip-hop, the home of the Yankees, and the borough that never got the credit it deserves. The realest borough.',
    fill: 'rgba(200,160,140,.08)',
    stroke: 'rgba(200,160,140,.2)',
    path: 'M285,100 L300,95 L315,110 L325,130 L330,155 L345,160 L360,150 L380,145 L400,155 L415,175 L440,180 L445,160 L440,130 L425,105 L405,85 L380,72 L355,65 L330,62 L310,68 L295,78 Z',
    districts: ['south-bronx','fordham','riverdale']
  },
  {
    id: 'staten-island',
    name: 'Staten Island',
    pop: '475K',
    area: '57.5 sq mi',
    density: '8.3K/mi²',
    desc: 'The forgotten borough. Suburbia within city limits. The ferry ride alone is worth it — free, and the best view of the skyline from water level.',
    fill: 'rgba(160,160,180,.08)',
    stroke: 'rgba(160,160,180,.18)',
    path: 'M180,460 L200,445 L215,450 L225,465 L230,490 L225,520 L215,545 L200,560 L185,570 L170,565 L160,545 L155,520 L158,495 L165,475 Z',
    districts: ['st-george','tottenville']
  }
];

export default BOROUGHS;
