import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.evaluate(() => {
  const bio = document.getElementById("bio");
  if (bio) bio.style.marginTop = "0px";
});
const lastNat = await page.evaluate(() => {
  const c = document.querySelectorAll(".solution-card");
  const last = c[c.length - 1];
  let y = 0; let cur = last;
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y;
});
console.log("lastNat:", lastNat);
for (const offset of [0, 30, 100, 200, 300]) {
  const y = lastNat - 440 + offset;
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(50);
  await page.mouse.wheel(0, 1); await page.waitForTimeout(50); await page.mouse.wheel(0, -1);
  await page.waitForTimeout(200);
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return cards.map((c) => Math.round(c.getBoundingClientRect().top));
  });
  console.log(`dock+${offset}:`, JSON.stringify(data));
}
await browser.close();
