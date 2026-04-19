// ═══════════════════════════════════════════════════
//  CANONICAL POI DATA — Shared Data Spine
//  Source of truth for all map views
//
//  STRUCTURE:
//  - GUIDE_POIS: the 27 hand-curated POIs from guide.md (always present)
//  - GENERATION_CONFIG: templates for procedural expansion to 300+
//  - Both layers share categories, naming, and coordinate space
// ═══════════════════════════════════════════════════

export const CATEGORIES = {
  eat:      { color:'#ff4444', label:'Eat',      lightColor:'#c4362c' },
  shop:     { color:'#ffaa00', label:'Shop',     lightColor:'#d4920b' },
  transit:  { color:'#00aaff', label:'Transit',  lightColor:'#3a6fa0' },
  culture:  { color:'#aa66ff', label:'Culture',  lightColor:'#2a7b5f' },
  services: { color:'#00dd88', label:'Services', lightColor:'#7a5195' },
  hidden:   { color:'#556677', label:'Hidden',   lightColor:'#555' },
};

// ── GUIDE LAYER: The 27 curated POIs from the written guide ──
// These are the canonical "truth" nodes — always rendered, always findable
// Coordinates match the borough SVG paths in boroughs.js

export const GUIDE_POIS = [
  // EAT (from guide Section II)
  { id:'guide-joes',    cat:'eat', name:"Joe's Pizza",           borough:'manhattan', x:275, y:360, desc:"No explanation needed. If you ask for a fork they will remember your face.", meta:['Since 1975','Cash Only','Guide Pick'], section:'Carmine St', guideSection:'II' },
  { id:'guide-russ',    cat:'eat', name:"Russ & Daughters",      borough:'manhattan', x:290, y:375, desc:"Lox, cream cheese, everything bagel. Operating since 1914. Your favorite brunch spot could never.", meta:['Since 1914','Counter Only','Guide Pick'], section:'Houston St', guideSection:'II' },
  { id:'guide-lostacos',cat:'eat', name:"Los Tacos No. 1",       borough:'manhattan', x:272, y:310, desc:"The adobada taco is a spiritual experience. Cash speeds things up.", meta:['Cash Only','Counter Only','Guide Pick'], section:'Chelsea Market', guideSection:'II' },
  { id:'guide-lucali',  cat:'eat', name:"Lucali",                borough:'brooklyn',  x:355, y:465, desc:"BYOB pizza in Brooklyn. The wait is long. The pizza is why you waited.", meta:['BYOB','Cash Only','Guide Pick'], section:'Henry St, Carroll Gardens', guideSection:'II' },
  { id:'guide-halal',   cat:'eat', name:"Halal Guys",            borough:'manhattan', x:290, y:260, desc:"The white sauce is the real currency of Midtown.", meta:['Open Late','NPC Hub','Guide Pick'], section:'53rd & 6th Ave', guideSection:'II' },
  { id:'guide-xian',    cat:'eat', name:"Xi'an Famous Foods",    borough:'manhattan', x:285, y:370, desc:"Hand-pulled noodles. The spicy cumin lamb. Multiple locations, all correct.", meta:['Counter Only','Guide Pick'], section:'Multiple locations', guideSection:'II' },
  { id:'guide-luger',   cat:'eat', name:"Peter Luger",           borough:'brooklyn',  x:365, y:420, desc:"Cash only. Porterhouse for two. Been here since 1887. Don't order the menu — order the steak.", meta:['Since 1887','Cash Only','Guide Pick'], section:'Driggs Ave, Williamsburg', guideSection:'II' },
  { id:'guide-dimes',   cat:'eat', name:"Dimes",                 borough:'manhattan', x:295, y:385, desc:"Healthy-adjacent. The crowd is beautiful. The grain bowl is too.", meta:['Guide Pick'], section:'Canal St', guideSection:'II' },

  // SEE (from guide Section IV)
  { id:'guide-woolworth',cat:'culture', name:"Woolworth Building", borough:'manhattan', x:288, y:405, desc:"Neo-Gothic. 1913. They called it the Cathedral of Commerce and they were right.", meta:['Historic','Guide Pick'], section:'233 Broadway — tallest until 1930', guideSection:'IV' },
  { id:'guide-vessel',  cat:'culture', name:"Vessel",             borough:'manhattan', x:268, y:290, desc:"Love it or hate it, walk the stairs. 154 flights. The structure is the point.", meta:['Guide Pick'], section:'Hudson Yards — 2,500 steps', guideSection:'IV' },
  { id:'guide-bkbridge',cat:'culture', name:"Brooklyn Bridge",    borough:'manhattan', x:295, y:415, desc:"Tourist trap by noon. Sacred ground at 6 AM. Walk from Brooklyn to Manhattan, not the other way.", meta:['Historic','Dawn Recommended','Guide Pick'], section:'Built 1869–1883', guideSection:'IV' },
  { id:'guide-highline',cat:'culture', name:"The High Line",      borough:'manhattan', x:265, y:330, desc:"An elevated rail turned park. Walk it from Gansevoort to 34th St. The Whitney Museum is at the south entrance.", meta:['Free Entry','Guide Pick'], section:'1.45 miles', guideSection:'IV' },
  { id:'guide-totr',    cat:'culture', name:"Top of the Rock",    borough:'manhattan', x:298, y:255, desc:"You see the Empire State in your photo. Empire State: you're inside it and can't see it. Choose accordingly.", meta:['Guide Pick'], section:'30 Rock — 70 floors', guideSection:'IV' },
  { id:'guide-greenwood',cat:'culture',name:"Green-Wood Cemetery",borough:'brooklyn',  x:400, y:550, desc:"478 acres. Basquiat is buried here. So is Boss Tweed. The views of the harbor rival any observation deck.", meta:['Historic','Free Entry','Guide Pick'], section:'Est. 1838', guideSection:'IV' },

  // BUY (from guide Section V)
  { id:'guide-strand',  cat:'shop', name:"Strand Bookstore",     borough:'manhattan', x:285, y:340, desc:"18 miles of books. The rare book room upstairs is where the real ones shop.", meta:['Since 1927','Guide Pick'], section:'828 Broadway', guideSection:'V' },
  { id:'guide-canal',   cat:'shop', name:"Canal Street Market",   borough:'manhattan', x:282, y:380, desc:"Curated vendors. Good for gifts that don't look like gifts from New York.", meta:['Guide Pick'], section:'265 Canal St', guideSection:'V' },
  { id:'guide-bkflea',  cat:'shop', name:"Brooklyn Flea",         borough:'brooklyn',  x:345, y:425, desc:"Vintage, design objects, random excellence. Weekends only.", meta:['Weekends Only','Guide Pick'], section:'DUMBO + Williamsburg', guideSection:'V' },
  { id:'guide-kith',    cat:'shop', name:"Kith",                  borough:'manhattan', x:278, y:365, desc:"Streetwear temple. The cereal bar inside is not ironic — it's good.", meta:['Guide Pick'], section:'337 Lafayette St', guideSection:'V' },
  { id:'guide-mcnally', cat:'shop', name:"McNally Jackson",       borough:'manhattan', x:280, y:368, desc:"Independent. The risograph printing station in the back is usable by anyone.", meta:['Guide Pick'], section:'52 Prince St', guideSection:'V' },

  // MOVE (from guide Section III)
  { id:'guide-ferry',   cat:'transit', name:"NYC Ferry — DUMBO",  borough:'brooklyn',  x:330, y:430, desc:"$4 and better views than any rooftop bar. Rockaway Beach run in summer is mandatory.", meta:['$4 Flat Fare','Guide Pick'], section:'East River routes', guideSection:'III' },
  { id:'guide-citibike',cat:'transit', name:"Citi Bike Hub",       borough:'manhattan', x:285, y:275, desc:"Docks everywhere below 96th. The electric ones are worth the upcharge. Return before 45 minutes.", meta:['14,500+ Bikes','Guide Pick'], section:'Docks every few blocks', guideSection:'III' },

  // STAY (neighborhoods as POIs, from guide Section VI)
  { id:'guide-les',     cat:'hidden', name:"Lower East Side",     borough:'manhattan', x:300, y:380, desc:"Gritty-chic, late nights. The bars, the live music, the vintage shops. Energy concentrates after midnight.", meta:['Nightlife','Guide Pick'], section:'Best for: bars, live music, vintage', guideSection:'VI' },
  { id:'guide-wv',      cat:'hidden', name:"West Village",        borough:'manhattan', x:270, y:355, desc:"Brownstone beautiful. The most walkable, most cinematic neighborhood. Every corner is a movie set.", meta:['Walking','Guide Pick'], section:'Best for: walking, eating', guideSection:'VI' },
  { id:'guide-wburg',   cat:'hidden', name:"Williamsburg",        borough:'brooklyn',  x:370, y:400, desc:"Brooklyn's main character. The coffee is better here, the record stores are real, and the rooftops face Manhattan.", meta:['Guide Pick'], section:'Best for: coffee, records, rooftops', guideSection:'VI' },
  { id:'guide-harlem',  cat:'hidden', name:"Harlem",              borough:'manhattan', x:298, y:145, desc:"Soul and history. Gospel brunch at Sylvia's, jazz at the Red Rooster, and food that doesn't need your Instagram.", meta:['Guide Pick'], section:'Best for: gospel brunch, jazz', guideSection:'VI' },
  { id:'guide-astoria', cat:'hidden', name:"Astoria",             borough:'queens',    x:420, y:195, desc:"Queens' quiet flex. Greek food on 30th Ave, beer gardens on the waterfront, and more languages per block than anywhere.", meta:['Guide Pick'], section:'Best for: Greek food, diversity', guideSection:'VI' },
];

// ── GENERATION CONFIG: Templates for procedural expansion ──

export const NAME_POOLS = {
  eat: [
    "Copper Kettle","Midnight Ramen","Sal's Forever","Ninth Plate","Burning Loaf","Grandma Lien's",
    "Two Forks","Quiet Noodle","Brick & Broth","Route 9 Diner","Salt Cathedral","Ember Grill",
    "Standing Room","Paper Lantern","The Yolk","Carbon Café","Grateful Bread","Iron Wok",
    "Green Ledger","Bao Down","Clementine's","Slow Roast","King of Falafel","Pearl Oyster",
    "Folding Table","Night Market","Brined Pig","Lemon Theory","Humming Bowl","Basil Republic",
    "Curry Mile","Open Flame","Tomorrow's Lunch","Twice Baked","Smoke & Oak","Bean Counter",
    "Rice Paper","Old Salt","Cornbread Society","Mapo Collective","Root & Branch","Ceramic Bowl",
    "Dawn Patrol","Half Shell","Vinegar Hill","Peppercorn Treaty","Sesame Door","Porridge King",
    "Anchovy Club","Five Alarm Taco"
  ],
  shop: [
    "Almanac Books","Bolt Hole","Curio Cabinet","Thread & Needle","Map Room","Dusty Volumes",
    "Iron & Oak","Paper Trail","Signal Vintage","Compass & Key","Specimen Jar","Ledger & Co",
    "Patina Hardware","Clock Doctor","Archive Supply","Tandem Cycles","Stamp Room","Loom & Shuttle",
    "Brass Tacks","Pencil Case","Meridian Records","Frame Shop","Salvage Yard","Ink & Thorn",
    "Cobbler's Bench","Binary Thrift","Canopy Plants","Resin Studio","Found Objects","Glassblower",
    "Axiom Design","Wax Seal","Typewriter Revival","Atlas Outfitters","Darning Egg"
  ],
  transit: [
    "Grand Central Link","Penn Connector","Ferry Landing","Citi Bike Hub","Express Platform",
    "Night Bus Depot","Water Taxi Pier","Cable Car Stop","Bridge Approach","Commuter Dock",
    "Trolley Barn","Switch Yard","Overpass Station","Elevated Line","Bus Depot","Crosstown Tram",
    "Funicular Base","Freight Bypass","Turnaround","Causeway"
  ],
  culture: [
    "Parallax Gallery","Sound Library","Reel Room","Kiln Collective","Open Score","Broadside Press",
    "Fresco Hall","Listening Room","Sculpture Yard","Camera Obscura","Revival Theater","Print Union",
    "Darkroom","Cipher Wall","Mural Corridor","Phonograph","Poetry Kiosk","Light Box",
    "Gazette Office","Zine Library","Projection Room","Ceramic Archive","Stage Door","Letterpress",
    "Film Vault","Chalk Walk","Resonance Chamber","Puppet Theater","Stencil House","Living Wall",
    "Radio Basement","Woodcut Studio","Atelier Nine","Orchestra Pit","Dance Archive"
  ],
  services: [
    "Registrar","Postal Annex","Dr. Chen's","Clock Repair","Notary","Mutual Aid","Tool Library",
    "Community Laundry","Barber's Chair","Fix-It Clinic","Bath House","Apothecary","Key & Lock",
    "Message Board","Cobbler","Repair Café","Public Fountain","Info Booth","Community Fridge",
    "Night Clinic","Tailor","Bike Co-op","Mail Drop","Switchboard","Community Oven"
  ],
  hidden: [
    "Unmarked Door","Tunnel 4","Whispering Wall","Substation Z","Hollow Stump","Forgotten Court",
    "False Bookshelf","Rooftop Signal","Sealed Well","Basement 13","Ticking Room","Blind Alley",
    "Other Elevator","Ghost Station","Mirror Hall","Under Bridge Club","Negative Space",
    "Service Art","Backwards Clock","Attic Signal","Chalk Code","Hidden Spring","Lost Platform",
    "Walled Garden","Night Window","Rotating Wall","Cipher Café","Vanishing Point",
    "Submarine Hatch","Underneath"
  ]
};

export const DESC_TEMPLATES = {
  eat: [
    "The chef hasn't changed the menu since day one. Nobody's complained.",
    "Three generations. The recipe is classified.",
    "Cash only. Line forms before dawn.",
    "Smells like your grandmother's kitchen, even if she never cooked this.",
    "The portions are unreasonable. The prices are stuck in 2008.",
    "Every surface is sticky. Every bite is transcendent.",
    "They serve one thing. Perfectly. Don't ask for changes.",
    "Open since before the neighborhood had a name.",
    "The secret menu requires repeat visits to unlock.",
    "The wait staff has opinions and will share them uninvited.",
    "Fluorescent lights, plastic chairs, and the best food you'll ever eat.",
    "The menu is written daily on butcher paper in terrible handwriting."
  ],
  shop: [
    "The owner can source anything in 72 hours. Don't ask how.",
    "Floor-to-ceiling inventory. The system exists only in one person's mind.",
    "Prices negotiable if you make eye contact with the cat first.",
    "Everything here was made by hand. Some of it badly. That's the charm.",
    "The back room has a different inventory entirely.",
    "Cash preferred. Stories accepted as partial payment.",
    "The bell above the door has announced every visitor since 1962.",
    "The window display changes with the owner's mood.",
    "Closed Tuesdays for 'inventory.' Code for fishing.",
    "Specializes in things you didn't know you needed."
  ],
  transit: [
    "The schedule is more of a suggestion.",
    "Transfer point for three lines. The buskers have a residency.",
    "Built in 1931. The tile work alone is worth the fare.",
    "Peak hours are a contact sport. Off-peak is meditative.",
    "The elevator has been 'temporarily' out since 2019.",
    "The mural on platform 2 tells the neighborhood history in 47 panels.",
    "Last stop before the bridge. Everyone here looks like they're deciding.",
    "The announcement system works perfectly. Nobody listens anyway."
  ],
  culture: [
    "The current exhibition has been 'closing soon' for eight months.",
    "Free admission Thursdays. Different crowd entirely.",
    "The acoustics were an accident. The architect insists otherwise.",
    "The permanent collection has one piece nobody can identify but everyone loves.",
    "Open mic night: transcendent or catastrophic. No middle ground.",
    "The curator's taste is impeccable. The budget is not.",
    "The building itself is the art. Everything inside is commentary.",
    "The archives contain every local publication since 1955.",
    "Founded by three artists who couldn't afford rent separately.",
    "Classes every Saturday. The instructor has never started on time."
  ],
  services: [
    "The NPC behind the counter has solved more problems than any politician.",
    "Open 7 days. Closed only once for a blizzard in 2014.",
    "Run by volunteers since the funding dried up. Somehow better.",
    "They fix what others say can't be fixed.",
    "Serves 400 people a week. Staffed by 3.",
    "The suggestion box has been full since 2017. They check it.",
    "The waiting room bookshelf reveals everything about the neighborhood.",
    "The hours on the door are aspirational. Call ahead."
  ],
  hidden: [
    "You won't find this on any map. Except this one.",
    "The entrance changes location. Currently: through the laundromat.",
    "The NPCs who know don't talk. Those who talk don't know.",
    "Discovered during plumbing repair in 1992. Left as-found.",
    "The password changes. The vibe doesn't.",
    "Known by every local. Listed in no directory.",
    "Behind an unmarked door that looks like every other.",
    "The city doesn't know this exists. Better that way.",
    "Membership earned, not bought. Criteria unclear and possibly fictional.",
    "Only open when the weather is 'right.' Definition private."
  ]
};

export const META_OPTIONS = {
  eat: ["Open Late","Cash Only","BYOB","Counter Only","NPC Hub","Since 1970s","Family-Run","Standing Room"],
  shop: ["Cash Preferred","Artist-Run","Dog Friendly","Estate Finds","One-of-Kind","Appointment Only"],
  transit: ["24 Hour","Accessible","Historic","Express","Night Service","Scenic Route"],
  culture: ["Free Entry","By Donation","Open Late","Artist-Run","Residency","Community Space"],
  services: ["Free","Walk-In","Volunteer-Run","Multilingual","Since 1985","Sliding Scale"],
  hidden: ["Underground","Invite Only","Seasonal","No Phone","Nocturnal","Members Only","Ephemeral"]
};

// How many to generate per category (beyond guide POIs)
export const GENERATION_COUNTS = { eat:50, shop:40, transit:25, culture:40, services:35, hidden:50 };

export default { CATEGORIES, GUIDE_POIS, NAME_POOLS, DESC_TEMPLATES, META_OPTIONS, GENERATION_COUNTS };
