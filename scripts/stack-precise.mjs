import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const cards = await page.evaluate(() =>
  Array.from(document.querySelectorAll(".solution-card")).map((c) => ({
    code: (c.querySelector(".tag")?.textContent || "").trim(),
    naturalTop: c.getBoundingClientRect().top + window.scrollY,
    height: c.getBoundingClientRect().height,
  })),
);
console.log(cards);

// Scroll so the last card just docks at top:440
const lastNatural = cards[cards.length - 1].naturalTop;
const targetScroll = lastNatural - 440 + 50; // a bit past to confirm docked
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), targetScroll);
await page.waitForTimeout(400);
await page.screenshot({ path: "scripts/screens/stack/all-docked.png" });

// Then scroll into outro
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), targetScroll + 300);
await page.waitForTimeout(400);
await page.screenshot({ path: "scripts/screens/stack/outro-1.png" });

await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), targetScroll + 600);
await page.waitForTimeout(400);
await page.screenshot({ path: "scripts/screens/stack/outro-2.png" });

await browser.close();
console.log("ok");
