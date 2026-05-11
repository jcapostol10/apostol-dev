import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo({ top: 7430, behavior: "instant" }));
await page.waitForTimeout(400);
const data = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  const stack = document.querySelector(".solution-stack");
  const stackCs = getComputedStyle(stack);
  return {
    stackOverflow: stackCs.overflow,
    stackPosition: stackCs.position,
    stackTransform: stackCs.transform,
    sectionOverflow: getComputedStyle(stack.parentElement).overflow,
    htmlOverflow: getComputedStyle(document.documentElement).overflow,
    bodyOverflow: getComputedStyle(document.body).overflow,
    stackRect: stack.getBoundingClientRect(),
    cards: cards.map((c, i) => {
      const cs = getComputedStyle(c);
      const r = c.getBoundingClientRect();
      return {
        i,
        rectTop: Math.round(r.top),
        transform: cs.transform,
        computedTop: cs.top,
        position: cs.position,
        marginBottom: cs.marginBottom,
        marginTop: cs.marginTop,
        offsetTop: c.offsetTop,
        offsetHeight: c.offsetHeight,
      };
    }),
  };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
