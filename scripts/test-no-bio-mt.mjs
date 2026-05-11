import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Clear sticky-affecting things, including BIO negative margin
await page.evaluate(() => {
  const bio = document.getElementById("bio");
  if (bio) bio.style.marginTop = "0";
  for (const c of document.querySelectorAll(".solution-card")) {
    c.style.transform = ""; c.style.filter = "";
    c.style.removeProperty("--outro-y"); c.style.removeProperty("--depth");
  }
});

const lastNat = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  const last = c[c.length - 1];
  let y = 0; let cur = last;
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
console.log("INT natural page-y:", lastNat);

for (const y of [lastNat - 440, lastNat - 440 + 30, lastNat - 440 + 100, lastNat - 440 + 200]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(200);
  const intTop = await page.evaluate(() => {
    const cards = document.querySelectorAll(".solution-card");
    return Math.round(cards[cards.length - 1].getBoundingClientRect().top);
  });
  console.log(`scroll ${y}: INT rect.top = ${intTop}`);
}
await browser.close();
