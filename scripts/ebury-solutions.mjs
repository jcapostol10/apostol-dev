import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/screens/ebury-solutions", { recursive: true });
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
await page.goto("https://ebury.com/?r=0", { waitUntil: "networkidle", timeout: 60000 });
try { await page.getByRole("button", { name: /reject all/i }).click({ timeout: 2000 }); } catch {}
await page.waitForTimeout(800);

// Find the "solutions" section. Try common labels.
const handle = await page.evaluate(() => {
  const candidates = Array.from(document.querySelectorAll("section, div"))
    .filter((el) => /solution/i.test(el.textContent || "") && el.querySelectorAll("h2, h3").length > 0);
  const target = candidates.sort((a, b) => b.offsetHeight - a.offsetHeight)[0];
  return target ? { top: target.getBoundingClientRect().top + window.scrollY, height: target.offsetHeight } : null;
});
console.log("solutions section:", handle);

if (handle) {
  // Scroll progressively through the section to capture the fold animation
  const startY = Math.max(0, handle.top - 100);
  const endY = handle.top + handle.height - 400;
  const steps = 24;
  for (let i = 0; i < steps; i++) {
    const y = startY + ((endY - startY) * i) / (steps - 1);
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
    await page.waitForTimeout(220);
    await page.screenshot({ path: `scripts/screens/ebury-solutions/frame-${String(i).padStart(2, "0")}.png` });
  }
}
await browser.close();
console.log("ok");
