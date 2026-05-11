import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
for (const y of [7400, 7430, 7500, 7600, 7700, 7800]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(50);
  await page.mouse.wheel(0, 1);
  await page.waitForTimeout(50);
  await page.mouse.wheel(0, -1);
  await page.waitForTimeout(200);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return cards.map((c) => Math.round(c.getBoundingClientRect().top));
  });
  console.log(`scroll ${y}:`, JSON.stringify(data));
}
await page.screenshot({ path: "scripts/screens/verify-dock-now.png" });
await browser.close();
