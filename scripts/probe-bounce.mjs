import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Scroll to 7392 where bouncing was observed
await page.evaluate(() => window.scrollTo({ top: 7392, behavior: "instant" }));
await page.waitForTimeout(100);
const a = await page.evaluate(() => ({
  scrollY: window.scrollY,
  ai: { rect: document.querySelectorAll(".solution-card")[0].getBoundingClientRect().top, transform: document.querySelectorAll(".solution-card")[0].style.transform },
}));
console.log("After scrollTo 7392 (15ms):", JSON.stringify(a));

await page.mouse.wheel(0, 1); await page.mouse.wheel(0, -1);
await page.waitForTimeout(200);
const b = await page.evaluate(() => ({
  scrollY: window.scrollY,
  ai: { rect: document.querySelectorAll(".solution-card")[0].getBoundingClientRect().top, transform: document.querySelectorAll(".solution-card")[0].style.transform },
}));
console.log("After wheel (200ms):", JSON.stringify(b));

await browser.close();
