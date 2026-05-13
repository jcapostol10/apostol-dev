import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const lastNat = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
const dock = lastNat - 440;

const samples = [];
for (let y = dock - 50; y <= dock + 200; y += 2) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(15);
  const data = await page.evaluate(() => Array.from(document.querySelectorAll(".solution-card")).map((c) => c.getBoundingClientRect().top));
  samples.push({ y, tops: data });
}

for (let c = 0; c < 7; c++) {
  const oscs = [];
  for (let i = 1; i < samples.length; i++) {
    if (samples[i].tops[c] > samples[i-1].tops[c] + 0.5) {
      oscs.push({ y: samples[i].y, from: samples[i-1].tops[c].toFixed(1), to: samples[i].tops[c].toFixed(1) });
    }
  }
  if (oscs.length > 0) {
    console.log(`card[${c}]: ${oscs.length} bounces. First 3:`, oscs.slice(0, 3));
  }
}
await browser.close();
