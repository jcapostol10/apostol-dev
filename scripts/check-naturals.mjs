import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
// Don't scroll — check naturals at mount
const data = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  const pageOffsetTop = (el) => {
    let y = 0; let cur = el;
    while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
    return y;
  };
  return cards.map((c, i) => ({
    i,
    offsetTop: c.offsetTop,
    pageOffsetTop: pageOffsetTop(c),
    height: c.offsetHeight,
    transform: c.style.transform,
  }));
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
