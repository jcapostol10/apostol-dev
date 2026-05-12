import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Disable smooth scroll
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

const stackTop = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
const dock = stackTop - 440;

await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), dock - 200);
await page.waitForTimeout(400);

const samples = [];
for (let i = 0; i < 80; i++) {
  await page.mouse.wheel(0, 8);
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

const oscillations = [];
for (let i = 1; i < samples.length; i++) {
  if (samples[i].sy < samples[i - 1].sy) continue;
  for (let c = 0; c < 7; c++) {
    const delta = samples[i].tops[c] - samples[i - 1].tops[c];
    if (delta > 1) {
      oscillations.push({ frame: i, card: c, scroll: samples[i].sy, delta: Math.round(delta) });
    }
  }
}

console.log("With smooth-scroll DISABLED:");
if (oscillations.length === 0) console.log("  No oscillations.");
else console.log(`  ${oscillations.length} oscillations.`);

await browser.close();
