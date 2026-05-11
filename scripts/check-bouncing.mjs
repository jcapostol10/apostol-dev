import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Continuous scroll from before-dock to past-dock, capturing INT's rectTop each step
const stackTop = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
const dock = stackTop - 440;
console.log("dock scroll:", dock);

const tops = [];
for (let y = dock - 100; y < dock + 1000; y += 5) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.mouse.wheel(0, 1); await page.mouse.wheel(0, -1);
  await page.waitForTimeout(20);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return cards.map((c) => Math.round(c.getBoundingClientRect().top));
  });
  tops.push({ y, tops: data });
}

// Check if INT (last) ever increases (bounces back down) during continuous scroll-down
let lastIntTop = Infinity;
let bouncedAt = null;
for (const entry of tops) {
  const intTop = entry.tops[entry.tops.length - 1];
  if (intTop > lastIntTop + 1) {
    bouncedAt = entry.y;
    console.log(`BOUNCE: at scroll ${entry.y}, INT went from ${lastIntTop} to ${intTop}`);
  }
  lastIntTop = intTop;
}
if (!bouncedAt) console.log("No bounce detected for INT-07");

// Print every 50th sample
for (let i = 0; i < tops.length; i += 10) {
  console.log(`y=${tops[i].y}: ${JSON.stringify(tops[i].tops)}`);
}
await browser.close();
