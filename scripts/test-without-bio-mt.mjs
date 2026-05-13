import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.evaluate(() => {
  const bio = document.getElementById("bio");
  if (bio) bio.style.marginTop = "0px";
});
await page.evaluate(() => window.scrollTo({ top: 7600, behavior: "instant" }));
await page.mouse.wheel(0, 1); await page.mouse.wheel(0, -1);
await page.waitForTimeout(300);
const data = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return cards.map((c, i) => ({
    i,
    rectTop: Math.round(c.getBoundingClientRect().top),
    transform: c.style.transform,
  }));
});
console.log("With BIO -mt removed @ scroll 7600:");
console.log(JSON.stringify(data, null, 2));
await browser.close();
