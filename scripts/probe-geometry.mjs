import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  const stack = document.querySelector(".solution-stack");
  let stackTop = 0; let cur = stack;
  while (cur) { stackTop += cur.offsetTop; cur = cur.offsetParent; }
  const stackHeight = stack.offsetHeight;
  const heights = cards.map((c) => c.offsetHeight);
  const naturalTops = cards.map((c) => {
    let y = 0; let n = c;
    while (n) { y += n.offsetTop; n = n.offsetParent; }
    return y;
  });
  return { stackTop, stackHeight, parentBottom: stackTop + stackHeight, heights, naturalTops };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
