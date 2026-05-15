import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return cards.map((c, i) => ({
    i,
    position: getComputedStyle(c).position,
    top: getComputedStyle(c).top,
    transform: c.style.transform,
  }));
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
