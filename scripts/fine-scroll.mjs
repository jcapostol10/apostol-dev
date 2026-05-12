import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Sample very densely AT EACH SCROLL INCREMENT
const stackTop = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});

// Test the docking of MIDDLE card (CVR/MBL) — where user said they see bouncing
// Specifically, when "a visible card" appears
const samples = [];
const startScroll = 3500; // around where CVR docks (approximately)
const endScroll = 4500;
for (let y = startScroll; y <= endScroll; y += 2) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(15);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return cards.map((c) => c.getBoundingClientRect().top);
  });
  samples.push({ y, tops: data });
}

// Track every card top across all scroll positions
// Look for ANY non-monotonic moments (card moves down briefly while user scrolling down)
for (let c = 0; c < 7; c++) {
  let oscPos = [];
  for (let i = 1; i < samples.length; i++) {
    if (samples[i].tops[c] > samples[i - 1].tops[c] + 0.5) {
      oscPos.push({ y: samples[i].y, from: samples[i - 1].tops[c], to: samples[i].tops[c] });
    }
  }
  if (oscPos.length > 0) {
    console.log(`card[${c}] has ${oscPos.length} downward jumps during scroll-down:`);
    for (const o of oscPos.slice(0, 5)) {
      console.log(`  at scroll ${o.y}: top ${o.from.toFixed(1)} -> ${o.to.toFixed(1)}`);
    }
  }
}

console.log("Scan complete. Tested", samples.length, "scroll positions.");
await browser.close();
