import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("./temporary screenshots", { recursive: true });

const browser = await chromium.launch();
const vh = parseInt(process.argv[2] || "900");
const page = await (await browser.newContext({ viewport: { width: 1530, height: vh } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

const dock = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  let y = 0; let cur = c[c.length - 1];
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y - 440;
});
const scrolls = [dock, dock + 200, dock + 400, dock + 600];
for (const sy of scrolls) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), sy);
  await page.mouse.wheel(0, 1);
  await page.waitForTimeout(150);
  await page.screenshot({ path: `./temporary screenshots/vh${vh}-sy${sy}.png` });
  console.log(`saved sy=${sy}`);
}
await browser.close();
