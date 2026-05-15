import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

// Disable our JS transforms to see PURE CSS sticky behavior
await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  cards.forEach((c) => { c.style.transform = "none !important"; c.style.filter = "none"; });
  // Also: hijack the JS handler by removing scroll listener (won't matter since just observing)
});

await page.evaluate(() => window.scrollTo({ top: 8000, behavior: "instant" }));
await page.waitForTimeout(200);

const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  // walk ancestors of first card and check styles
  let ancestors = [];
  let cur = cards[0].parentElement;
  while (cur && cur !== document.body) {
    const cs = getComputedStyle(cur);
    ancestors.push({
      tag: cur.tagName + (cur.className ? '.' + cur.className.split(' ')[0] : ''),
      position: cs.position,
      transform: cs.transform,
      overflow: cs.overflow,
      contain: cs.contain,
      height: cur.offsetHeight,
      width: cur.offsetWidth,
    });
    cur = cur.parentElement;
  }
  return {
    sy: window.scrollY,
    ancestors,
    rectTops: cards.map((c) => Math.round(c.getBoundingClientRect().top)),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
