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
console.log("INT pageOffsetTop:", lastNat);
const dock = lastNat - 440;

for (const [name, scroll] of [["pre", dock-100], ["dock", dock], ["dock+30", dock+30], ["dock+100", dock+100], ["dock+200", dock+200], ["dock+400", dock+400]]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scroll);
  await page.mouse.wheel(0, 1); await page.mouse.wheel(0, -1);
  await page.waitForTimeout(200);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return cards.map((c) => Math.round(c.getBoundingClientRect().top));
  });
  console.log(`${name} (${scroll}):`, JSON.stringify(data));
}

// Check for bouncing in fine scroll
const samples = [];
for (let y = dock - 50; y <= dock + 200; y += 2) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(15);
  const data = await page.evaluate(() => Array.from(document.querySelectorAll(".solution-card")).map((c) => c.getBoundingClientRect().top));
  samples.push({ y, tops: data });
}
let bounces = 0;
for (let i = 1; i < samples.length; i++) {
  for (let c = 0; c < 7; c++) {
    if (samples[i].tops[c] > samples[i-1].tops[c] + 0.5) bounces++;
  }
}
console.log("\nBounces detected in fine-scroll near dock:", bounces);

await browser.close();
