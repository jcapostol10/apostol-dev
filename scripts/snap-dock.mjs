import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const lastNat = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
for (const [name, offset] of [["dock", 0], ["dock+50", 50], ["dock+150", 150]]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), lastNat - 440 + offset);
  await page.waitForTimeout(50);
  await page.mouse.wheel(0, 1); await page.waitForTimeout(50); await page.mouse.wheel(0, -1);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `scripts/screens/dock-${name}.png` });
}
await browser.close();
