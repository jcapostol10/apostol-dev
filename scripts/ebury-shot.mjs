import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto("https://ebury.com/?r=0", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: "scripts/screens/ebury-full.png", fullPage: false });
// scroll a bit to find any 3D scene
for (let i = 0; i < 6; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * 700);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `scripts/screens/ebury-${i}.png`, fullPage: false });
}
await browser.close();
console.log("ok");
