import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

const stackTop = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
const dock = stackTop - 440;

// Park before dock, then wheel down in small ticks
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), Math.max(0, dock - 400));
await page.waitForTimeout(400);

const samples = [];
for (let i = 0; i < 200; i++) {
  await page.mouse.wheel(0, 8);
  await page.waitForTimeout(25);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return { sy: window.scrollY, tops: cards.map((c) => c.getBoundingClientRect().top) };
  });
  samples.push(data);
}

const oscillations = [];
for (let i = 1; i < samples.length; i++) {
  if (samples[i].sy < samples[i - 1].sy) continue;
  for (let c = 0; c < 7; c++) {
    const delta = samples[i].tops[c] - samples[i - 1].tops[c];
    if (delta > 1) oscillations.push({ frame: i, card: c, sy: samples[i].sy, delta: Math.round(delta) });
  }
}

console.log(`Oscillations: ${oscillations.length}`);
oscillations.slice(0, 10).forEach((o) => console.log(`  card[${o.card}] sy=${o.sy} delta=+${o.delta}`));

// Sample positions at key checkpoints
const checkpoints = [dock - 100, dock, dock + 50, dock + 200, dock + 400, dock + 600];
for (const cp of checkpoints) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), cp);
  await page.mouse.wheel(0, 1); // force scroll event
  await page.waitForTimeout(50);
  const tops = await page.evaluate(() => Array.from(document.querySelectorAll(".solution-card")).map((c) => Math.round(c.getBoundingClientRect().top)));
  console.log(`sy~${cp}: [${tops.join(",")}]`);
}

await browser.close();
