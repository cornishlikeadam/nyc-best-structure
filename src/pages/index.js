import Head from 'next/head';
import { useState } from 'react';

const EDITIONS_TOTAL = 100;
const MINT_PRICE = '0.001 BTC';
const PHYSICAL_PRICE = '$24';
const GAMMA_URL = '#'; // Replace with your Gamma collection URL
const STRIPE_URL = '#'; // Replace with your Stripe Payment Link for physical
const READER_URL = '/read';
const MAP_URL = '/map';
const NPC_MAP_URL = '/npc-map';

export default function Landing() {
  const [editionsMinted] = useState(0);

  return (
    <>
      <Head>
        <title>NYC Best Structure — A City Guide on Bitcoin</title>
        <meta name="description" content="100 numbered editions of a newspaper-style NYC city guide. Inscribed on Bitcoin. Printed on demand." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={styles.page}>
        {/* HEADER */}
        <header style={styles.header}>
          <div style={styles.dateline}>VOL. 1 — LIMITED TO 100 EDITIONS — INSCRIBED ON BITCOIN</div>
          <div style={styles.rule} />
          <h1 style={styles.masthead}>NYC BEST STRUCTURE</h1>
          <div style={styles.rule} />
          <p style={styles.subtitle}>A Newspaper-Style City Guide</p>
        </header>

        {/* HERO */}
        <section style={styles.hero}>
          <div style={styles.heroInner}>
            <div style={styles.heroLeft}>
              <h2 style={styles.heroHeadline}>The city guide that lives forever.</h2>
              <p style={styles.heroBody}>
                Every block in New York has a frequency. This guide tunes you in —
                the food, the architecture, the unwritten rules, the real spots.
                No algorithm. No ads. No updates. One edition, locked on-chain.
              </p>
              <div style={styles.heroActions}>
                <a href={GAMMA_URL} style={styles.btnPrimary}>
                  Mint on Gamma — {MINT_PRICE}
                </a>
                <a href={STRIPE_URL} style={styles.btnSecondary}>
                  Order Physical — {PHYSICAL_PRICE}
                </a>
              </div>
              <p style={styles.editionCounter}>
                {editionsMinted} / {EDITIONS_TOTAL} editions claimed
              </p>
            </div>
            <div style={styles.heroRight}>
              <div style={styles.mockup}>
                <div style={styles.mockupInner}>
                  <span style={styles.mockupDate}>VOL. 1</span>
                  <span style={styles.mockupTitle}>NYC BEST STRUCTURE</span>
                  <span style={styles.mockupSub}>THE GRID / EAT / MOVE / SEE / BUY / STAY / KNOW</span>
                  <span style={styles.mockupEdition}>EDITION #___/100</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={styles.divider} />

        {/* MANIFESTO */}
        <section style={styles.section}>
          <h3 style={styles.sectionLabel}>THE MANIFESTO</h3>
          <div style={styles.manifesto}>
            <p style={styles.manifestoText}>
              City guides are broken. They're written by SEO, updated by bots,
              and optimized for clicks. The best restaurant list in New York
              isn't on Google — it's in the head of someone who's been eating
              here for 20 years.
            </p>
            <p style={styles.manifestoText}>
              <strong>NYC Best Structure</strong> is a return to the object. A printed,
              numbered, opinionated guide that doesn't change when the algorithm does.
              Each edition is inscribed as a Bitcoin Ordinal — permanent, verifiable, yours.
            </p>
            <p style={styles.manifestoText}>
              This isn't a travel blog. It's a publication. 100 copies exist.
              When they're gone, they're gone.
            </p>
          </div>
        </section>

        <div style={styles.divider} />

        {/* HOW IT WORKS */}
        <section style={styles.section}>
          <h3 style={styles.sectionLabel}>HOW IT WORKS</h3>
          <div style={styles.grid3}>
            <div style={styles.card}>
              <span style={styles.cardNum}>01</span>
              <h4 style={styles.cardTitle}>On-Chain</h4>
              <p style={styles.cardBody}>
                One parent inscription holds the master booklet. 100 child
                inscriptions are the numbered editions. Ordinals' parent-child
                model — built for exactly this.
              </p>
            </div>
            <div style={styles.card}>
              <span style={styles.cardNum}>02</span>
              <h4 style={styles.cardTitle}>Digital</h4>
              <p style={styles.cardBody}>
                Every edition holder gets access to the clean, mobile-friendly
                reader. The guide lives on the web — readable anywhere,
                no app required.
              </p>
            </div>
            <div style={styles.card}>
              <span style={styles.cardNum}>03</span>
              <h4 style={styles.cardTitle}>Physical</h4>
              <p style={styles.cardBody}>
                Print-on-demand via Lulu Direct. No warehouse, no inventory.
                Order your numbered copy and it ships direct. Newspaper-grade
                stock, perfect-bound.
              </p>
            </div>
          </div>
        </section>

        <div style={styles.divider} />

        {/* PREVIEW */}
        <section style={styles.section}>
          <h3 style={styles.sectionLabel}>INSIDE THE GUIDE</h3>
          <div style={styles.tocGrid}>
            {[
              { num: 'I', title: 'THE GRID', desc: 'Why New York is built different — the 1811 plan and the philosophy of the streets' },
              { num: 'II', title: 'EAT', desc: '8 non-negotiable spots, bodega etiquette, and the dollar pizza taxonomy' },
              { num: 'III', title: 'MOVE', desc: 'Subway, Citi Bike, ferry, walking — every mode decoded' },
              { num: 'IV', title: 'SEE', desc: 'Architecture, vantage points, and why you cross the Brooklyn Bridge at dawn' },
              { num: 'V', title: 'BUY', desc: 'Where to spend, where not to, and the Times Square rule' },
              { num: 'VI', title: 'STAY', desc: 'Neighborhood decoder — 8 areas, vibes, and what each is best for' },
              { num: 'VII', title: 'KNOW', desc: '10 unwritten rules: escalator law, tipping, bodega cats, and jaywalking rights' },
            ].map((s) => (
              <div key={s.num} style={styles.tocItem}>
                <span style={styles.tocNum}>{s.num}</span>
                <div>
                  <h4 style={styles.tocTitle}>{s.title}</h4>
                  <p style={styles.tocDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href={READER_URL} style={styles.btnOutline}>Read a Preview</a>
            <a href="/npc-city" style={{ ...styles.btnOutline, marginLeft: '1rem' }}>System Map</a>
            <a href={NPC_MAP_URL} style={{ ...styles.btnOutline, marginLeft: '1rem' }}>NPC City Reader</a>
            <a href={MAP_URL} style={{ ...styles.btnOutline, marginLeft: '1rem' }}>Static Map</a>
          </div>
        </section>

        <div style={styles.divider} />

        {/* EDITION LOGIC */}
        <section style={styles.section}>
          <h3 style={styles.sectionLabel}>EDITION LOGIC</h3>
          <div style={styles.editionGrid}>
            <div style={styles.editionItem}>
              <h4 style={styles.editionTitle}>100 Total</h4>
              <p style={styles.editionBody}>Fixed supply. No reprints. When edition 100 is claimed, the mint closes permanently.</p>
            </div>
            <div style={styles.editionItem}>
              <h4 style={styles.editionTitle}>Parent-Child</h4>
              <p style={styles.editionBody}>The master booklet is the parent inscription. Each numbered edition is a child — provably part of the collection.</p>
            </div>
            <div style={styles.editionItem}>
              <h4 style={styles.editionTitle}>Digital + Physical</h4>
              <p style={styles.editionBody}>Mint gets you the on-chain edition. Physical copy is optional — order separately via Stripe, fulfilled by Lulu Direct.</p>
            </div>
            <div style={styles.editionItem}>
              <h4 style={styles.editionTitle}>Transferable</h4>
              <p style={styles.editionBody}>Your edition is a standard Ordinal inscription. Trade it, gift it, hold it. It's yours.</p>
            </div>
          </div>
        </section>

        <div style={styles.divider} />

        {/* SERIES */}
        <section style={styles.section}>
          <h3 style={styles.sectionLabel}>THE SERIES</h3>
          <p style={styles.seriesIntro}>
            NYC is Volume 1. The series continues with city guides, public-domain editions, and handbooks.
          </p>
          <div style={styles.grid3}>
            <div style={styles.seriesCard}>
              <span style={styles.seriesStatus}>NOW</span>
              <h4 style={styles.seriesTitle}>NYC Best Structure</h4>
              <p style={styles.seriesDesc}>100 editions — City Guide Vol. 1</p>
            </div>
            <div style={{ ...styles.seriesCard, opacity: 0.6 }}>
              <span style={styles.seriesStatus}>NEXT</span>
              <h4 style={styles.seriesTitle}>Tokyo Best Structure</h4>
              <p style={styles.seriesDesc}>City Guide Vol. 2</p>
            </div>
            <div style={{ ...styles.seriesCard, opacity: 0.4 }}>
              <span style={styles.seriesStatus}>SOON</span>
              <h4 style={styles.seriesTitle}>Public Domain Editions</h4>
              <p style={styles.seriesDesc}>Classic texts, new structures</p>
            </div>
          </div>
        </section>

        <div style={styles.divider} />

        {/* CTA */}
        <section style={{ ...styles.section, textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ ...styles.heroHeadline, marginBottom: '1rem' }}>Claim your edition.</h2>
          <p style={{ ...styles.heroBody, maxWidth: '500px', margin: '0 auto 2rem' }}>
            100 copies. On-chain forever. Physical on demand.
          </p>
          <div style={{ ...styles.heroActions, justifyContent: 'center' }}>
            <a href={GAMMA_URL} style={styles.btnPrimary}>Mint — {MINT_PRICE}</a>
            <a href={STRIPE_URL} style={styles.btnSecondary}>Physical — {PHYSICAL_PRICE}</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div style={styles.rule} />
          <div style={styles.footerInner}>
            <span>NYC Best Structure 2026</span>
            <span>Inscribed on Bitcoin via Ordinals</span>
            <span>
              <a href={READER_URL} style={styles.footerLink}>Read</a>
              {' / '}
              <a href={MAP_URL} style={styles.footerLink}>Map</a>
              {' / '}
              <a href={NPC_MAP_URL} style={styles.footerLink}>NPC Reader</a>
              {' / '}
              <a href={GAMMA_URL} style={styles.footerLink}>Mint</a>
              {' / '}
              <a href={STRIPE_URL} style={styles.footerLink}>Physical</a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

const styles = {
  page: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  dateline: {
    fontFamily: 'var(--mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    color: 'var(--muted)',
    marginBottom: '0.75rem',
  },
  rule: {
    height: '2px',
    background: 'var(--rule)',
    margin: '0.5rem 0',
  },
  masthead: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    padding: '0.5rem 0',
  },
  subtitle: {
    fontFamily: 'var(--serif)',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    color: 'var(--muted)',
    marginTop: '0.5rem',
  },
  hero: {
    marginBottom: '2rem',
  },
  heroInner: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  heroLeft: {
    flex: '1 1 400px',
  },
  heroRight: {
    flex: '0 0 280px',
  },
  heroHeadline: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '1rem',
  },
  heroBody: {
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: 'var(--muted)',
    marginBottom: '1.5rem',
  },
  heroActions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  btnPrimary: {
    display: 'inline-block',
    padding: '0.85rem 2rem',
    background: 'var(--ink)',
    color: 'var(--paper)',
    fontFamily: 'var(--mono)',
    fontSize: '0.85rem',
    fontWeight: 500,
    textDecoration: 'none',
    letterSpacing: '0.05em',
    transition: 'background 0.2s',
  },
  btnSecondary: {
    display: 'inline-block',
    padding: '0.85rem 2rem',
    background: 'transparent',
    color: 'var(--ink)',
    fontFamily: 'var(--mono)',
    fontSize: '0.85rem',
    fontWeight: 500,
    textDecoration: 'none',
    letterSpacing: '0.05em',
    border: '2px solid var(--ink)',
  },
  btnOutline: {
    display: 'inline-block',
    padding: '0.75rem 2rem',
    background: 'transparent',
    color: 'var(--ink)',
    fontFamily: 'var(--mono)',
    fontSize: '0.8rem',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    border: '1px solid var(--rule)',
  },
  editionCounter: {
    fontFamily: 'var(--mono)',
    fontSize: '0.8rem',
    color: 'var(--muted)',
  },
  mockup: {
    border: '2px solid var(--rule)',
    padding: '1.5rem',
    background: 'white',
    aspectRatio: '3/4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockupInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    textAlign: 'center',
  },
  mockupDate: {
    fontFamily: 'var(--mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    color: 'var(--muted)',
  },
  mockupTitle: {
    fontFamily: 'var(--serif)',
    fontSize: '1.3rem',
    fontWeight: 900,
    lineHeight: 1.1,
  },
  mockupSub: {
    fontFamily: 'var(--mono)',
    fontSize: '0.5rem',
    letterSpacing: '0.1em',
    color: 'var(--muted)',
  },
  mockupEdition: {
    fontFamily: 'var(--mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    marginTop: '1rem',
    paddingTop: '0.75rem',
    borderTop: '1px solid var(--rule)',
  },
  divider: {
    height: '1px',
    background: 'var(--rule)',
    margin: '3rem 0',
    opacity: 0.3,
  },
  section: {
    marginBottom: '1rem',
  },
  sectionLabel: {
    fontFamily: 'var(--mono)',
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    color: 'var(--accent)',
    marginBottom: '1.5rem',
  },
  manifesto: {
    maxWidth: '640px',
  },
  manifestoText: {
    fontFamily: 'var(--serif)',
    fontSize: '1.15rem',
    lineHeight: 1.8,
    marginBottom: '1.25rem',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '1.5rem',
    border: '1px solid rgba(0,0,0,0.1)',
    background: 'white',
  },
  cardNum: {
    fontFamily: 'var(--mono)',
    fontSize: '0.7rem',
    color: 'var(--accent)',
    letterSpacing: '0.1em',
  },
  cardTitle: {
    fontFamily: 'var(--serif)',
    fontSize: '1.2rem',
    fontWeight: 700,
    margin: '0.5rem 0',
  },
  cardBody: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
    color: 'var(--muted)',
  },
  tocGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  tocItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    padding: '1rem',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  },
  tocNum: {
    fontFamily: 'var(--serif)',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--accent)',
    minWidth: '2.5rem',
  },
  tocTitle: {
    fontFamily: 'var(--serif)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
  },
  tocDesc: {
    fontSize: '0.85rem',
    color: 'var(--muted)',
    lineHeight: 1.5,
  },
  editionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  editionItem: {
    padding: '1rem 0',
  },
  editionTitle: {
    fontFamily: 'var(--serif)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  editionBody: {
    fontSize: '0.85rem',
    color: 'var(--muted)',
    lineHeight: 1.6,
  },
  seriesIntro: {
    fontSize: '1rem',
    color: 'var(--muted)',
    marginBottom: '2rem',
    lineHeight: 1.7,
  },
  seriesCard: {
    padding: '1.5rem',
    border: '1px solid rgba(0,0,0,0.1)',
    background: 'white',
  },
  seriesStatus: {
    fontFamily: 'var(--mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    color: 'var(--accent)',
  },
  seriesTitle: {
    fontFamily: 'var(--serif)',
    fontSize: '1.1rem',
    fontWeight: 700,
    margin: '0.5rem 0 0.25rem',
  },
  seriesDesc: {
    fontSize: '0.85rem',
    color: 'var(--muted)',
  },
  footer: {
    marginTop: '3rem',
    paddingBottom: '2rem',
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '1rem 0',
    fontFamily: 'var(--mono)',
    fontSize: '0.7rem',
    color: 'var(--muted)',
  },
  footerLink: {
    color: 'var(--ink)',
    textDecoration: 'none',
  },
};
