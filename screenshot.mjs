import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });

// Landing page - full
const landing = await ctx.newPage();
await landing.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await landing.waitForTimeout(2000);
await landing.screenshot({ path: 'screenshots/landing-top.png' });
await landing.evaluate(() => window.scrollBy(0, 900));
await landing.waitForTimeout(500);
await landing.screenshot({ path: 'screenshots/landing-manifesto.png' });
await landing.evaluate(() => window.scrollBy(0, 900));
await landing.waitForTimeout(500);
await landing.screenshot({ path: 'screenshots/landing-howitworks.png' });
await landing.evaluate(() => window.scrollBy(0, 900));
await landing.waitForTimeout(500);
await landing.screenshot({ path: 'screenshots/landing-inside.png' });
await landing.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await landing.waitForTimeout(500);
await landing.screenshot({ path: 'screenshots/landing-bottom.png' });

// Reader page - full
const reader = await ctx.newPage();
await reader.goto('http://localhost:3001/read', { waitUntil: 'networkidle' });
await reader.waitForTimeout(2000);
await reader.screenshot({ path: 'screenshots/reader-top.png' });
await reader.evaluate(() => window.scrollBy(0, 900));
await reader.waitForTimeout(500);
await reader.screenshot({ path: 'screenshots/reader-grid.png' });
await reader.evaluate(() => window.scrollBy(0, 900));
await reader.waitForTimeout(500);
await reader.screenshot({ path: 'screenshots/reader-eat.png' });
await reader.evaluate(() => window.scrollBy(0, 1200));
await reader.waitForTimeout(500);
await reader.screenshot({ path: 'screenshots/reader-move.png' });
await reader.evaluate(() => window.scrollBy(0, 1200));
await reader.waitForTimeout(500);
await reader.screenshot({ path: 'screenshots/reader-see.png' });
await reader.evaluate(() => window.scrollBy(0, 1200));
await reader.waitForTimeout(500);
await reader.screenshot({ path: 'screenshots/reader-stay.png' });
await reader.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await reader.waitForTimeout(500);
await reader.screenshot({ path: 'screenshots/reader-colophon.png' });

// Mobile views
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mLanding = await mobile.newPage();
await mLanding.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await mLanding.waitForTimeout(2000);
await mLanding.screenshot({ path: 'screenshots/mobile-landing.png' });

const mReader = await mobile.newPage();
await mReader.goto('http://localhost:3001/read', { waitUntil: 'networkidle' });
await mReader.waitForTimeout(2000);
await mReader.screenshot({ path: 'screenshots/mobile-reader.png' });

await browser.close();
console.log('Done — screenshots saved to screenshots/');
