import { chromium } from 'playwright';

const browser = await chromium.launch();

// Desktop map - load the standalone HTML directly
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3001/map.html', { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.screenshot({ path: 'screenshots/map-full.png' });

// Click Joe's Pizza
await page.click('[data-id="joes"]');
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/map-poi-selected.png' });

// Click Peter Luger
await page.click('[data-id="luger"]');
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/map-poi-luger.png' });

// Click Brooklyn Bridge
await page.click('[data-id="bkbridge"]');
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/map-poi-bridge.png' });

// Click Green-Wood
await page.click('[data-id="greenwood"]');
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/map-poi-greenwood.png' });

// Mobile map
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mPage = await mobile.newPage();
await mPage.goto('http://localhost:3001/map.html', { waitUntil: 'load' });
await mPage.waitForTimeout(3000);
await mPage.screenshot({ path: 'screenshots/map-mobile.png' });

await mPage.click('[data-id="halal"]');
await mPage.waitForTimeout(500);
await mPage.screenshot({ path: 'screenshots/map-mobile-selected.png' });

await browser.close();
console.log('Map screenshots done.');
