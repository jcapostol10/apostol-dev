import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("./temporary screenshots", { recursive: true });

const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

const scrolls = [7400, 7600, 7800, 8000, 8200];
for (const sy of scrolls) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), sy);
  await page.mouse.wheel(0, 1);
  await page.waitForTimeout(150);
  await page.screenshot({ path: `./temporary screenshots/transition-sy${sy}.png` });
  console.log(`saved sy=${sy}`);
}
await browser.close();
