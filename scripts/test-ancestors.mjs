import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const ancestors = await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  const int = cards[cards.length - 1];
  const chain = [];
  let cur = int.parentElement;
  while (cur) {
    const cs = getComputedStyle(cur);
    chain.push({
      tag: cur.tagName,
      cls: cur.className?.toString().slice(0, 80),
      transform: cs.transform,
      contain: cs.contain,
      filter: cs.filter,
      perspective: cs.perspective,
      willChange: cs.willChange,
      overflow: cs.overflow,
    });
    cur = cur.parentElement;
  }
  return chain;
});
console.log(JSON.stringify(ancestors, null, 2));
await browser.close();
