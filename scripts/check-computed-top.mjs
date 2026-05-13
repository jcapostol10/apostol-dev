import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo({ top: 3500, behavior: "instant" }));
await page.mouse.wheel(0, 1); await page.mouse.wheel(0, -1);
await page.waitForTimeout(500);
const data = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return cards.map((c, i) => {
    const cs = getComputedStyle(c);
    return { i, position: cs.position, top: cs.top, transform: cs.transform.slice(0, 60), styleTop: c.style.top };
  });
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
