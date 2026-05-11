import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Force-set INT's top to 100 to see if it sticks
await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  const last = cards[cards.length - 1];
  last.style.top = "100px";
  last.style.setProperty("--i", "1"); // try a low value
  // Also reset any JS-applied transforms
  for (const c of cards) {
    c.style.transform = ""; c.style.filter = "";
    c.style.removeProperty("--outro-y"); c.style.removeProperty("--depth");
  }
});

await page.evaluate(() => window.scrollTo({ top: 7500, behavior: "instant" }));
await page.waitForTimeout(400);
const data = await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  const int = cards[cards.length - 1];
  const cs = getComputedStyle(int);
  return {
    rectTop: Math.round(int.getBoundingClientRect().top),
    top: cs.top,
    position: cs.position,
  };
});
console.log(data);
await browser.close();
