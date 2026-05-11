import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
// Reset all card inline styles
await page.evaluate(() => {
  for (const c of document.querySelectorAll(".solution-card")) {
    c.style.transform = "";
    c.style.filter = "";
    c.style.removeProperty("--outro-y");
    c.style.removeProperty("--depth");
  }
});
await page.evaluate(() => window.scrollTo({ top: 7430, behavior: "instant" }));
await page.waitForTimeout(400);
const data = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return cards.map((c, i) => ({
    i,
    rectTop: Math.round(c.getBoundingClientRect().top),
    transform: getComputedStyle(c).transform,
  }));
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
