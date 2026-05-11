import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const data = await page.evaluate(() => {
  const stack = document.querySelector(".solution-stack");
  const cs = getComputedStyle(stack);
  const cards = document.querySelectorAll(".solution-card");
  const last = cards[cards.length - 1];
  const lastCs = getComputedStyle(last);
  return {
    stackPaddingBottom: cs.paddingBottom,
    stackHeight: stack.offsetHeight,
    stackClientHeight: stack.clientHeight,
    lastMarginBottom: lastCs.marginBottom,
    lastHeight: last.offsetHeight,
    lastTop: last.offsetTop,
  };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
