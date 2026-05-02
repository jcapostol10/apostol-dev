import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/screens/stack", { recursive: true });
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const top = await page.evaluate(() => document.querySelector("#services").getBoundingClientRect().top + window.scrollY);
const bottom = await page.evaluate(() => {
  const el = document.querySelector("#services");
  return el.getBoundingClientRect().bottom + window.scrollY;
});
console.log({ top, bottom });
const steps = 12;
for (let i = 0; i < steps; i++) {
  const y = top + ((bottom - top - 400) * i) / (steps - 1);
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(200);
  await page.screenshot({ path: `scripts/screens/stack/frame-${String(i).padStart(2, "0")}.png` });
}
await browser.close();
console.log("ok");
