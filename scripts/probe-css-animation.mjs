import { chromium } from "playwright";
const browser = await chromium.launch();
const vh = parseInt(process.argv[2] || "900");
const page = await (await browser.newContext({ viewport: { width: 1530, height: vh } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector(".solution-card");
await page.waitForTimeout(1500);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

const dock = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y - 440;
});

console.log("dock:", dock);
console.log("--outro-start:", await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--outro-start")));
console.log("--outro-end:", await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--outro-end")));

for (const offset of [0, 100, 500, 1100, 1200]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), dock + offset);
  await page.mouse.wheel(0, 1);
  await page.waitForTimeout(100);
  const info = await page.evaluate(() => {
    const card = document.querySelectorAll(".solution-card")[6];
    const cs = getComputedStyle(card);
    return {
      translate: cs.translate,
      scale: cs.scale,
      rectTop: Math.round(card.getBoundingClientRect().top),
    };
  });
  console.log(`offset=${offset}:`, JSON.stringify(info));
}
await browser.close();
