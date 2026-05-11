import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Sweep through scroll positions in DURING-STACKING phase (cards docking)
const stackTop = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[0];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
console.log("first card pageY:", stackTop);

// Scroll to various stacking points and capture depth + transform
const positions = [
  ["before-any-dock", stackTop - 200],
  ["AI-PRF-stacked", stackTop + 800],
  ["mid-stack", stackTop + 2000],
  ["near-full-stack", stackTop + 4500],
  ["INT-just-docked", stackTop + 6000],
];
for (const [name, y] of positions) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(50);
  await page.mouse.wheel(0, 1); await page.waitForTimeout(50); await page.mouse.wheel(0, -1);
  await page.waitForTimeout(200);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return cards.map((c) => ({
      depth: c.style.getPropertyValue("--depth"),
      filter: c.style.filter,
      rectTop: Math.round(c.getBoundingClientRect().top),
    }));
  });
  console.log(`\n${name} @ scroll ${y}:`);
  for (const [i, d] of data.entries()) {
    console.log(`  i=${i} depth=${d.depth} rectTop=${d.rectTop} filter="${d.filter}"`);
  }
}
await browser.close();
