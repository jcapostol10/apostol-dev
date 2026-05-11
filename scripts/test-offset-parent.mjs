import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const data = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return cards.map((c, i) => {
    const op = c.offsetParent;
    return {
      i,
      offsetParentTag: op?.tagName,
      offsetParentClass: op?.className?.toString().slice(0, 60),
      cardClass: c.className,
      nextSibling: c.nextElementSibling?.tagName + " " + c.nextElementSibling?.className?.slice(0, 30),
    };
  });
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
