import Head from 'next/head';

export default function Reader() {
  return (
    <>
      <Head>
        <title>NYC Best Structure — Read</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.reader}>
        {/* HEADER */}
        <header style={styles.header}>
          <a href="/" style={styles.backLink}>Back to Home</a>
          <div style={styles.dateline}>VOL. 1 — NEW YORK CITY — LIMITED TO 100 EDITIONS</div>
          <div style={styles.ruleThick} />
          <h1 style={styles.masthead}>NYC BEST STRUCTURE</h1>
          <div style={styles.ruleThick} />
          <p style={styles.subtitle}>A Newspaper-Style City Guide</p>
          <div style={styles.ruleThin} />
          <nav style={styles.nav}>
            {['THE GRID', 'EAT', 'MOVE', 'SEE', 'BUY', 'STAY', 'KNOW'].map((s, i) => (
              <a key={s} href={`#section-${i + 1}`} style={styles.navLink}>{s}</a>
            ))}
          </nav>
          <div style={styles.ruleThin} />
        </header>

        {/* EPIGRAPH */}
        <blockquote style={styles.epigraph}>
          "Every building you walk past was somebody's wild bet.
          Every block has a frequency. This guide tunes you in."
        </blockquote>

        {/* SECTION I */}
        <section id="section-1" style={styles.section}>
          <h2 style={styles.sectionHead}>
            <span style={styles.sectionNum}>I</span> THE GRID
          </h2>
          <h3 style={styles.subhead}>Why New York is Built Different</h3>
          <p style={styles.body}>
            Manhattan's street grid was laid in 1811 — the Commissioners' Plan — a bet that the city
            would grow north long before anyone lived above Houston Street. That's the energy here:
            build the infrastructure before the demand exists. The grid isn't just navigation. It's a philosophy.
          </p>
          <h4 style={styles.subhead2}>Key Coordinates</h4>
          <div style={styles.entry}>
            <strong>14th Street</strong> — The dividing line. Below it the streets lose their numbers
            and the city loses its predictability. That's the point.
          </div>
          <div style={styles.entry}>
            <strong>125th Street</strong> — Harlem's main artery. The Apollo is here but so is everything
            else — the vendors, the churches, the Dominican food spots that don't need your review.
          </div>
          <div style={styles.entry}>
            <strong>Canal Street</strong> — Where Chinatown, Tribeca, and SoHo collide. The smell of fish,
            the sound of haggling, the $800 handbag next to the $8 one. Possibly the same bag.
          </div>
        </section>

        <div style={styles.sectionBreak}>&#10038;</div>

        {/* SECTION II */}
        <section id="section-2" style={styles.section}>
          <h2 style={styles.sectionHead}>
            <span style={styles.sectionNum}>II</span> EAT
          </h2>
          <h3 style={styles.subhead}>The Non-Negotiables</h3>

          {[
            { name: "Joe's Pizza, Carmine St.", desc: "No explanation needed. If you ask for a fork they will remember your face." },
            { name: "Russ & Daughters, Houston St.", desc: "Lox, cream cheese, everything bagel. Operating since 1914. Your favorite brunch spot could never." },
            { name: "Los Tacos No. 1, Chelsea Market", desc: "The adobada taco is a spiritual experience. Cash speeds things up." },
            { name: "Lucali, Carroll Gardens", desc: "BYOB pizza in Brooklyn. The wait is long. The pizza is why you waited." },
            { name: "Halal Guys, 53rd & 6th", desc: "The white sauce is the real currency of Midtown." },
            { name: "Xi'an Famous Foods", desc: "Hand-pulled noodles. The spicy cumin lamb. Multiple locations, all correct." },
            { name: "Peter Luger, Williamsburg", desc: "Cash only. Porterhouse for two. Been here since 1887. Don't order the menu — order the steak." },
            { name: "Dimes, Chinatown/LES", desc: "Healthy-adjacent. The crowd is beautiful. The grain bowl is too." },
          ].map((item, i) => (
            <div key={i} style={styles.listEntry}>
              <span style={styles.listNum}>{i + 1}</span>
              <div>
                <strong style={styles.listName}>{item.name}</strong>
                <span style={styles.listDesc}> — {item.desc}</span>
              </div>
            </div>
          ))}

          <div style={styles.sidebar}>
            <h4 style={styles.sidebarTitle}>STREET RULES</h4>
            <ul style={styles.sidebarList}>
              <li>Dollar pizza is a genre, not a price point. $1.50 is still dollar pizza.</li>
              <li>If there's no line, question it.</li>
              <li>Bodegas are restaurants. Act accordingly.</li>
            </ul>
          </div>
        </section>

        <div style={styles.sectionBreak}>&#10038;</div>

        {/* SECTION III */}
        <section id="section-3" style={styles.section}>
          <h2 style={styles.sectionHead}>
            <span style={styles.sectionNum}>III</span> MOVE
          </h2>
          <h3 style={styles.subhead}>Getting Around Without Looking Lost</h3>

          {[
            { mode: 'Subway', text: "The MTA is chaos with a schedule. Download the app but trust the locals on the platform more. Express vs. local will humble you at least once." },
            { mode: 'Citi Bike', text: "Docks are everywhere below 96th. The electric ones are worth the upcharge. Return it before the 45-minute mark or pay." },
            { mode: 'Walking', text: "This is the real transit. You'll cover 5–8 miles a day without trying. Wear real shoes." },
            { mode: 'Ferry', text: "NYC Ferry from Brooklyn to Manhattan is $4 and has better views than any rooftop bar. Rockaway Beach run in summer is mandatory." },
            { mode: 'Cab Rule', text: "If the roof light center panel is lit, it's available. If the side lights are on, it's off duty. If nothing's lit, it's taken. Now you know." },
          ].map((item, i) => (
            <div key={i} style={styles.entry}>
              <strong>{item.mode}</strong> — {item.text}
            </div>
          ))}
        </section>

        <div style={styles.sectionBreak}>&#10038;</div>

        {/* SECTION IV */}
        <section id="section-4" style={styles.section}>
          <h2 style={styles.sectionHead}>
            <span style={styles.sectionNum}>IV</span> SEE
          </h2>
          <h3 style={styles.subhead}>Architecture & Vantage Points</h3>

          {[
            { place: 'The Woolworth Building', desc: "Neo-Gothic. 1913. They called it the Cathedral of Commerce and they were right." },
            { place: 'Vessel, Hudson Yards', desc: "Love it or hate it, walk the stairs. 154 flights. The structure is the point." },
            { place: 'Brooklyn Bridge at dawn', desc: "Tourist trap by noon. Sacred ground at 6 AM. Walk from Brooklyn to Manhattan, not the other way." },
            { place: 'The High Line', desc: "An elevated rail turned park. Walk it from Gansevoort to 34th St. The Whitney Museum is at the south entrance." },
            { place: 'Top of the Rock vs. Empire State', desc: "Top of the Rock: you see the Empire State in your photo. Empire State: you're inside it and can't see it. Choose accordingly." },
            { place: 'Green-Wood Cemetery, Brooklyn', desc: "478 acres. Basquiat is buried here. So is Boss Tweed. The views of the harbor rival any observation deck." },
          ].map((item, i) => (
            <div key={i} style={styles.entry}>
              <strong>{item.place}</strong> — {item.desc}
            </div>
          ))}
        </section>

        <div style={styles.sectionBreak}>&#10038;</div>

        {/* SECTION V */}
        <section id="section-5" style={styles.section}>
          <h2 style={styles.sectionHead}>
            <span style={styles.sectionNum}>V</span> BUY
          </h2>
          <h3 style={styles.subhead}>Where to Spend (and Where Not To)</h3>

          {[
            { place: 'Strand Bookstore, Broadway & 12th', desc: "18 miles of books. The rare book room upstairs is where the real ones shop." },
            { place: 'Canal Street Market', desc: "Curated vendors. Good for gifts that don't look like gifts from New York." },
            { place: 'Brooklyn Flea, Dumbo/Williamsburg', desc: "Vintage, design objects, random excellence. Weekends only." },
            { place: 'Kith, SoHo', desc: "Streetwear temple. The cereal bar inside is not ironic — it's good." },
            { place: 'McNally Jackson Books', desc: "Independent. The risograph printing station in the back is usable by anyone." },
            { place: 'Artists & Fleas', desc: "Chelsea Market/Williamsburg — Local makers. Jewelry, prints, leather goods. Rotating vendors keep it fresh." },
          ].map((item, i) => (
            <div key={i} style={styles.entry}>
              <strong>{item.place}</strong> — {item.desc}
            </div>
          ))}

          <div style={styles.sidebar}>
            <h4 style={styles.sidebarTitle}>BUYING RULE</h4>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1rem' }}>
              If you're in Times Square and about to buy something, don't.
            </p>
          </div>
        </section>

        <div style={styles.sectionBreak}>&#10038;</div>

        {/* SECTION VI */}
        <section id="section-6" style={styles.section}>
          <h2 style={styles.sectionHead}>
            <span style={styles.sectionNum}>VI</span> STAY
          </h2>
          <h3 style={styles.subhead}>Neighborhood Decoder</h3>

          <div style={styles.neighborhoodGrid}>
            {[
              { hood: 'Lower East Side', vibe: 'Gritty-chic, late nights', best: 'Bars, live music, vintage' },
              { hood: 'West Village', vibe: 'Brownstone beautiful', best: 'Walking, eating, people-watching' },
              { hood: 'Williamsburg', vibe: "Brooklyn's main character", best: 'Coffee, records, rooftops' },
              { hood: 'Bushwick', vibe: 'The art is on the buildings', best: 'DIY culture, studios, warehouse parties' },
              { hood: 'Harlem', vibe: 'Soul and history', best: 'Gospel brunch, jazz, real food' },
              { hood: 'Chinatown', vibe: 'Sensory overload (good)', best: 'Dumplings at 2 AM, tea shops' },
              { hood: 'Astoria', vibe: "Queens' quiet flex", best: 'Greek food, beer gardens, diversity' },
              { hood: 'Red Hook', vibe: 'Industrial waterfront', best: "Key Lime Pie at Steve's, IKEA ferry" },
            ].map((n, i) => (
              <div key={i} style={styles.neighborhoodCard}>
                <h4 style={styles.neighborhoodName}>{n.hood}</h4>
                <p style={styles.neighborhoodVibe}>{n.vibe}</p>
                <p style={styles.neighborhoodBest}><strong>Best for:</strong> {n.best}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={styles.sectionBreak}>&#10038;</div>

        {/* SECTION VII */}
        <section id="section-7" style={styles.section}>
          <h2 style={styles.sectionHead}>
            <span style={styles.sectionNum}>VII</span> KNOW
          </h2>
          <h3 style={styles.subhead}>Unwritten Rules</h3>

          {[
            "Stand on the right side of the escalator. Walk on the left.",
            "Don't stop in the middle of the sidewalk. Pull over like a car.",
            "Eye contact on the subway is a choice. Make it wisely.",
            "Tipping: 20% minimum. This isn't optional. Servers make $2/hour base.",
            "The \"showtime\" dancers on the L train are talented. Keep your face clear.",
            "Jaywalking is a birthright. But look both ways — bike lanes are silent killers.",
            "If someone asks for directions, help them. You live here now.",
            "Rats are neighbors. Pigeons are coworkers. Accept it.",
            "The bodega cat is not a pet. It's management.",
            "If a place has been open for 40+ years, eat there before it's gone.",
          ].map((rule, i) => (
            <div key={i} style={styles.ruleItem}>
              <span style={styles.ruleNum}>{String(i + 1).padStart(2, '0')}</span>
              <p style={styles.ruleText}>{rule}</p>
            </div>
          ))}
        </section>

        {/* COLOPHON */}
        <footer style={styles.colophon}>
          <div style={styles.ruleThick} />
          <div style={styles.colophonInner}>
            <p style={styles.colophonTitle}>COLOPHON</p>
            <p style={styles.colophonText}>
              NYC Best Structure — Edition ___ of 100<br />
              Inscribed on Bitcoin via Ordinals
            </p>
            <p style={{ ...styles.colophonText, marginTop: '1.5rem' }}>
              This guide exists because the best version of a city can't be captured by an algorithm.
              It's captured by people who've walked the blocks, eaten the food, and learned the rules the hard way.
            </p>
            <p style={{ ...styles.colophonText, marginTop: '1rem' }}>
              Each edition is numbered. Each is permanent. No reprints, no updates, no second chances.
            </p>
            <p style={styles.colophonQuote}>
              "The city is a fact in nature, like a cave, a run of mackerel or an ant heap.
              But it is also a conscious work of art, and it holds within its communal framework
              many simpler and more personal forms of art."
              <br /><em>— Lewis Mumford</em>
            </p>
            <p style={styles.colophonText}>
              <strong>Next in the series:</strong> Tokyo Best Structure — Edition 002
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

const styles = {
  reader: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  backLink: {
    display: 'inline-block',
    fontFamily: 'var(--mono)',
    fontSize: '0.75rem',
    color: 'var(--muted)',
    textDecoration: 'none',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
  },
  dateline: {
    fontFamily: 'var(--mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    color: 'var(--muted)',
    marginBottom: '0.75rem',
  },
  ruleThick: {
    height: '3px',
    background: 'var(--rule)',
    margin: '0.5rem 0',
  },
  ruleThin: {
    height: '1px',
    background: 'var(--rule)',
    margin: '0.5rem 0',
    opacity: 0.3,
  },
  masthead: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(2rem, 7vw, 3.5rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    padding: '0.75rem 0',
  },
  subtitle: {
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: '1rem',
    color: 'var(--muted)',
    margin: '0.5rem 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem 1.5rem',
    padding: '0.75rem 0',
  },
  navLink: {
    fontFamily: 'var(--mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    color: 'var(--ink)',
    textDecoration: 'none',
  },
  epigraph: {
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: '1.15rem',
    lineHeight: 1.8,
    textAlign: 'center',
    color: 'var(--muted)',
    padding: '2rem 1rem',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    marginBottom: '3rem',
  },
  section: {
    marginBottom: '2rem',
  },
  sectionHead: {
    fontFamily: 'var(--serif)',
    fontSize: '1.8rem',
    fontWeight: 900,
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.75rem',
  },
  sectionNum: {
    fontFamily: 'var(--serif)',
    fontSize: '1rem',
    color: 'var(--accent)',
    fontWeight: 400,
  },
  subhead: {
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    color: 'var(--muted)',
    marginBottom: '1.25rem',
  },
  subhead2: {
    fontFamily: 'var(--mono)',
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    color: 'var(--accent)',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  body: {
    fontFamily: 'var(--serif)',
    fontSize: '1.05rem',
    lineHeight: 1.85,
    marginBottom: '1rem',
  },
  entry: {
    fontFamily: 'var(--serif)',
    fontSize: '1rem',
    lineHeight: 1.75,
    marginBottom: '1rem',
    paddingLeft: '1rem',
    borderLeft: '2px solid var(--paper-dark)',
  },
  listEntry: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    fontFamily: 'var(--serif)',
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  listNum: {
    fontFamily: 'var(--mono)',
    fontSize: '0.8rem',
    color: 'var(--accent)',
    fontWeight: 500,
    minWidth: '1.5rem',
    paddingTop: '0.15rem',
  },
  listName: {
    fontWeight: 700,
  },
  listDesc: {
    color: 'var(--muted)',
  },
  sidebar: {
    background: 'white',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '1.25rem 1.5rem',
    marginTop: '2rem',
  },
  sidebarTitle: {
    fontFamily: 'var(--mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    color: 'var(--accent)',
    marginBottom: '0.75rem',
  },
  sidebarList: {
    fontFamily: 'var(--serif)',
    fontSize: '0.95rem',
    lineHeight: 1.7,
    paddingLeft: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  sectionBreak: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: 'var(--muted)',
    padding: '2rem 0',
    opacity: 0.5,
  },
  neighborhoodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
  },
  neighborhoodCard: {
    padding: '1.25rem',
    border: '1px solid rgba(0,0,0,0.08)',
    background: 'white',
  },
  neighborhoodName: {
    fontFamily: 'var(--serif)',
    fontSize: '1.05rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
  },
  neighborhoodVibe: {
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: '0.9rem',
    color: 'var(--muted)',
    marginBottom: '0.25rem',
  },
  neighborhoodBest: {
    fontSize: '0.85rem',
    color: 'var(--muted)',
  },
  ruleItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    marginBottom: '0.75rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  ruleNum: {
    fontFamily: 'var(--mono)',
    fontSize: '0.75rem',
    color: 'var(--accent)',
    minWidth: '1.5rem',
    paddingTop: '0.2rem',
  },
  ruleText: {
    fontFamily: 'var(--serif)',
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  colophon: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  colophonInner: {
    padding: '2rem 0',
  },
  colophonTitle: {
    fontFamily: 'var(--mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.25em',
    color: 'var(--accent)',
    marginBottom: '1rem',
  },
  colophonText: {
    fontFamily: 'var(--serif)',
    fontSize: '0.95rem',
    lineHeight: 1.7,
    color: 'var(--muted)',
  },
  colophonQuote: {
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: '0.9rem',
    lineHeight: 1.8,
    color: 'var(--muted)',
    margin: '2rem auto',
    maxWidth: '500px',
    padding: '1.5rem',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
};
