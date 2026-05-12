import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Sit at a position where INT is mid-ascent so we can watch it dock
const stackTop = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
const dock = stackTop - 440;

// Capture INT's rectTop frame by frame as we wheel down in tiny steps
// from before-dock to past-dock
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), dock - 200);
await page.waitForTimeout(400);

const samples = [];
for (let i = 0; i < 80; i++) {
  await page.mouse.wheel(0, 8); // small downward wheel ticks
  await page.waitForTimeout(40);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return {
      sy: window.scrollY,
      tops: cards.map((c) => c.getBoundingClientRect().top),
    };
  });
  samples.push(data);
}

// Detect oscillation: any card's top INCREASES (goes down) while scrolling down?
const oscillations = [];
for (let i = 1; i < samples.length; i++) {
  if (samples[i].sy < samples[i - 1].sy) continue; // ignore if scroll didn't actually advance
  for (let c = 0; c < 7; c++) {
    const delta = samples[i].tops[c] - samples[i - 1].tops[c];
    if (delta > 1) {
      oscillations.push({
        frame: i,
        card: c,
        scrollFrom: samples[i - 1].sy,
        scrollTo: samples[i].sy,
        topFrom: Math.round(samples[i - 1].tops[c]),
        topTo: Math.round(samples[i].tops[c]),
        delta: Math.round(delta),
      });
    }
  }
}

if (oscillations.length === 0) {
  console.log("No oscillations detected.");
} else {
  console.log(`Found ${oscillations.length} downward jumps during scroll-down:`);
  for (const o of oscillations.slice(0, 20)) {
    console.log(`  card[${o.card}] frame ${o.frame}: scroll ${o.scrollFrom}->${o.scrollTo}, top ${o.topFrom}->${o.topTo} (+${o.delta})`);
  }
}

// Print sample tops near the dock transition
console.log("\n-- Sample tops near transition (every 4th frame):");
for (let i = 0; i < samples.length; i += 4) {
  console.log(`sy=${Math.round(samples[i].sy)}: [${samples[i].tops.map((t) => Math.round(t)).join(",")}]`);
}

await browser.close();
