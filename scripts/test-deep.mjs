import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.evaluate(() => {
  for (const c of document.querySelectorAll(".solution-card")) {
    c.style.transform = ""; c.style.filter = "";
    c.style.removeProperty("--outro-y"); c.style.removeProperty("--depth");
  }
});
for (const y of [7400, 7430, 7500, 7600, 7700, 7800]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(200);
  const intTop = await page.evaluate(() => {
    const cards = document.querySelectorAll(".solution-card");
    return Math.round(cards[cards.length - 1].getBoundingClientRect().top);
  });
  console.log(`scroll ${y}: INT rect.top = ${intTop}`);
}
await browser.close();
