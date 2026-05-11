import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const data = await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  const last = cards[cards.length - 1];
  // pageOffsetTop method
  let y = 0; let cur = last;
  const chain = [];
  while (cur) {
    chain.push({ tag: cur.tagName, cls: cur.className?.toString().slice(0, 40), offsetTop: cur.offsetTop });
    y += cur.offsetTop;
    cur = cur.offsetParent;
  }
  return {
    pageOffsetTop: y,
    rectTopPlusScroll: last.getBoundingClientRect().top + window.scrollY,
    chain,
  };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
