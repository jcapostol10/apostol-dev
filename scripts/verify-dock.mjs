import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

// Get the INT-07 (last) card's natural position
const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  const last = cards[cards.length - 1];
  const pageOffsetTop = (el) => {
    let y = 0; let cur = el;
    while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
    return y;
  };
  return {
    count: cards.length,
    lastNaturalTop: pageOffsetTop(last),
    lastSticky: 80 + (cards.length - 1) * 60,
    bioTop: document.getElementById("bio")?.getBoundingClientRect().top + window.scrollY,
  };
});
console.log(info);

const dockedScroll = info.lastNaturalTop - info.lastSticky;
console.log("dockedScroll:", dockedScroll);

// Scroll just past dock so INT-07 is freshly stuck (outro still ~0)
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), dockedScroll + 5);
await page.waitForTimeout(400);
await page.screenshot({ path: "scripts/screens/dock-moment.png" });

// Also a frame slightly before (INT mid-ascent)
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), dockedScroll - 80);
await page.waitForTimeout(400);
await page.screenshot({ path: "scripts/screens/dock-pre.png" });

await browser.close();
console.log("ok");
