import { chromium } from 'playwright';

const browser = await chromium.launch();

// Desktop
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3001/npc-map.html', { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.screenshot({ path: 'screenshots/npc-full.png' });

// Click POI via JS dispatch
await page.evaluate(() => {
  const dot = document.querySelector('[data-id="10"]');
  if(dot) dot.dispatchEvent(new MouseEvent('click', {bubbles:true}));
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/npc-poi-detail.png' });

// Another POI
await page.evaluate(() => {
  const dot = document.querySelector('[data-id="120"]');
  if(dot) dot.dispatchEvent(new MouseEvent('click', {bubbles:true}));
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/npc-poi-detail2.png' });

// Hidden category POI
await page.evaluate(() => {
  const dot = document.querySelector('[data-id="260"]');
  if(dot) dot.dispatchEvent(new MouseEvent('click', {bubbles:true}));
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/npc-poi-hidden.png' });

// Click neighborhood
await page.evaluate(() => {
  const hood = document.querySelector('[data-hood="midnight-quarter"]');
  if(hood) hood.dispatchEvent(new MouseEvent('click', {bubbles:true}));
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/npc-hood-detail.png' });

// Another neighborhood
await page.evaluate(() => {
  const hood = document.querySelector('[data-hood="copper-row"]');
  if(hood) hood.dispatchEvent(new MouseEvent('click', {bubbles:true}));
});
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/npc-hood-detail2.png' });

// Search
await page.fill('#search-input', 'midnight');
await page.waitForTimeout(800);
await page.screenshot({ path: 'screenshots/npc-search.png' });

// Mobile
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mPage = await mobile.newPage();
await mPage.goto('http://localhost:3001/npc-map.html', { waitUntil: 'load' });
await mPage.waitForTimeout(3000);
await mPage.screenshot({ path: 'screenshots/npc-mobile.png' });

await mPage.evaluate(() => {
  const dot = document.querySelector('[data-id="30"]');
  if(dot) dot.dispatchEvent(new MouseEvent('click', {bubbles:true}));
});
await mPage.waitForTimeout(500);
await mPage.screenshot({ path: 'screenshots/npc-mobile-poi.png' });

await browser.close();
console.log('NPC map screenshots done.');
