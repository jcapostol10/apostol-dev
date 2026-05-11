import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo({ top: 7700, behavior: "instant" }));
await page.waitForTimeout(400);
const data = await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  const int = cards[cards.length - 1];
  return {
    inlineTransform: int.style.transform,
    inlineOutroY: int.style.getPropertyValue("--outro-y"),
    computedTransform: getComputedStyle(int).transform,
    rectTop: Math.round(int.getBoundingClientRect().top),
  };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
