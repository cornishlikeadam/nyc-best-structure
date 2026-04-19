import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3001/npc-city.html', { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.screenshot({ path: 'screenshots/city-full.png' });

// Select a POI
await page.evaluate(() => { const d=document.querySelector('[data-id="15"]'); if(d)d.dispatchEvent(new MouseEvent('click',{bubbles:true})); });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/city-poi.png' });

// Select borough
await page.evaluate(() => { const d=document.querySelector('[data-id="manhattan"]'); if(d)d.dispatchEvent(new MouseEvent('click',{bubbles:true})); });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/city-borough.png' });

// Select Brooklyn
await page.evaluate(() => { const d=document.querySelector('[data-id="brooklyn"]'); if(d)d.dispatchEvent(new MouseEvent('click',{bubbles:true})); });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/city-brooklyn.png' });

// Toggle heat layer on
await page.evaluate(() => { toggleLayer('heat'); });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/city-heat.png' });

// Select a station
await page.evaluate(() => { const d=document.querySelector('[data-station="0"]'); if(d)d.dispatchEvent(new MouseEvent('click',{bubbles:true})); });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/city-station.png' });

// Set night hour
await page.evaluate(() => { setHour(22); });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/city-night.png' });

// Set dawn
await page.evaluate(() => { setHour(5); });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshots/city-dawn.png' });

// Mobile
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mPage = await mobile.newPage();
await mPage.goto('http://localhost:3001/npc-city.html', { waitUntil: 'load' });
await mPage.waitForTimeout(3000);
await mPage.screenshot({ path: 'screenshots/city-mobile.png' });

await browser.close();
console.log('City system screenshots done.');
