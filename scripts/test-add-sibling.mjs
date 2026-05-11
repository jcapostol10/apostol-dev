import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Add a simple empty sibling AFTER the last card
await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  const last = cards[cards.length - 1];
  const sib = document.createElement("div");
  sib.style.height = "1px";
  sib.style.display = "block";
  last.parentElement.appendChild(sib);
  // Clear our JS-applied transforms
  for (const c of cards) {
    c.style.transform = ""; c.style.filter = "";
  }
});

for (const y of [7400, 7430, 7500, 7600]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(200);
  const intTop = await page.evaluate(() => {
    const cards = document.querySelectorAll(".solution-card");
    return Math.round(cards[cards.length - 1].getBoundingClientRect().top);
  });
  console.log(`scroll ${y}: INT rect.top = ${intTop}`);
}
await browser.close();
