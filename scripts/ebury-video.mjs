import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/screens/ebury-video", { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  recordVideo: { dir: "scripts/screens/ebury-video", size: { width: 1280, height: 800 } },
});
const page = await ctx.newPage();
await page.goto("https://ebury.com/?r=0", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);
// Dismiss cookie banner if present
try { await page.getByRole("button", { name: /reject all/i }).click({ timeout: 2000 }); } catch {}
await page.waitForTimeout(800);
// Capture rotation cycle: 12 seconds
const start = Date.now();
const frames = 24;
for (let i = 0; i < frames; i++) {
  await page.waitForTimeout(500);
  await page.screenshot({ path: `scripts/screens/ebury-video/frame-${String(i).padStart(2, "0")}.png` });
}
console.log("captured in", Date.now() - start, "ms");
await ctx.close();
await browser.close();
console.log("ok");
