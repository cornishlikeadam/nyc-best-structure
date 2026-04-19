// ═══════════════════════════════════════════════════
//  CANONICAL SUBWAY DATA — Transit Layer
//  Source of truth for all map views
// ═══════════════════════════════════════════════════

export const SUBWAY_LINES = [
  { id:'1-line', name:'1/2/3', color:'#ee352e', path:'M290,400 L290,370 L288,340 L285,310 L290,280 L295,250 L300,220 L305,190 L310,160 L308,130 L302,100' },
  { id:'4-line', name:'4/5/6', color:'#00933c', path:'M305,415 L300,385 L298,355 L300,320 L305,290 L308,260 L310,230 L312,200 L310,170 L305,140 L298,105' },
  { id:'7-line', name:'7', color:'#b933ad', path:'M285,355 L300,350 L320,345 L345,340 L370,330 L395,325 L420,320 L445,310 L465,300' },
  { id:'l-line', name:'L', color:'#a7a9ac', path:'M280,365 L295,368 L315,370 L340,375 L365,380 L390,385 L415,390 L435,395' },
  { id:'g-line', name:'G', color:'#6cbe45', path:'M350,420 L355,440 L360,460 L365,480 L375,500 L390,515 L410,525' },
  { id:'nqr-line', name:'N/Q/R', color:'#fccc0a', path:'M285,395 L290,365 L295,335 L300,305 L305,275 L310,245 L320,215 L330,190 L345,165 L365,150 L390,148' },
  { id:'ace-line', name:'A/C/E', color:'#2850ad', path:'M280,410 L278,380 L276,350 L275,320 L277,290 L280,260 L282,230 L285,200 L290,170 L295,145 L300,115 L305,90' },
  { id:'bdfm-line', name:'B/D/F/M', color:'#ff6319', path:'M290,425 L285,400 L282,370 L280,340 L282,310 L285,280 L290,250 L295,220 L300,195 L305,170 L310,145 L315,120' },
];

export const SUBWAY_STATIONS = [
  { name:'Times Square', x:292, y:280, lines:['1-line','nqr-line','7-line','ace-line'], major:true },
  { name:'Grand Central', x:305, y:265, lines:['4-line','7-line'], major:true },
  { name:'Union Square', x:295, y:330, lines:['4-line','nqr-line','l-line'], major:true },
  { name:'Penn Station', x:282, y:295, lines:['1-line','ace-line'], major:true },
  { name:'Fulton St', x:290, y:400, lines:['ace-line','4-line'], major:true },
  { name:'Atlantic Ave', x:340, y:430, lines:['bdfm-line','nqr-line'], major:true },
  { name:'Bedford Ave', x:355, y:385, lines:['l-line'], major:false },
  { name:'Court Square', x:360, y:340, lines:['7-line','g-line'], major:true },
  { name:'Jackson Heights', x:440, y:310, lines:['7-line'], major:false },
  { name:'125th St', x:298, y:150, lines:['1-line','ace-line'], major:false },
  { name:'Yankee Stadium', x:330, y:110, lines:['bdfm-line'], major:false },
  { name:'Canal St', x:285, y:370, lines:['nqr-line','ace-line'], major:true },
  { name:'14th St', x:280, y:345, lines:['1-line','ace-line','l-line'], major:true },
  { name:'59th St', x:295, y:255, lines:['1-line','nqr-line'], major:false },
  { name:'Barclays Center', x:345, y:440, lines:['bdfm-line','nqr-line'], major:true },
  { name:'Coney Island', x:340, y:570, lines:['bdfm-line','nqr-line'], major:false },
  { name:'Flushing', x:470, y:295, lines:['7-line'], major:false },
  { name:'Greenpoint Ave', x:365, y:400, lines:['g-line'], major:false },
  { name:'Broadway Junction', x:420, y:430, lines:['ace-line','l-line'], major:false },
  { name:'Wall Street', x:293, y:410, lines:['4-line'], major:false },
];

export default { SUBWAY_LINES, SUBWAY_STATIONS };
