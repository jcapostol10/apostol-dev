import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
// Check offsetTop BEFORE scrolling (no transforms applied yet)
const before = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return cards.map((c, i) => ({
    i,
    offsetTop: c.offsetTop,
    offsetParent: c.offsetParent?.className?.toString().slice(0, 40),
    transform: c.style.transform,
  }));
});
console.log("BEFORE scrolling:", JSON.stringify(before, null, 2));

// Scroll to 7600 — JS applies transforms
await page.evaluate(() => window.scrollTo({ top: 7600, behavior: "instant" }));
await page.mouse.wheel(0, 1); await page.mouse.wheel(0, -1);
await page.waitForTimeout(300);
const after = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return cards.map((c, i) => ({
    i,
    offsetTop: c.offsetTop,
    offsetParent: c.offsetParent?.className?.toString().slice(0, 40),
    transform: c.style.transform,
  }));
});
console.log("\nAFTER scrolling to 7600:", JSON.stringify(after, null, 2));
await browser.close();
