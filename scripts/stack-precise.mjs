import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const info = await page.evaluate(() => {
  const stack = document.querySelector(".solution-stack");
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return {
    stackTop: stack.getBoundingClientRect().top + window.scrollY,
    stackBottom: stack.getBoundingClientRect().bottom + window.scrollY,
    cardCount: cards.length,
    lastCardTop: cards[cards.length - 1].getBoundingClientRect().top + window.scrollY,
  };
});
console.log(info);

// Scroll to the position where the LAST card should just be sticking
// (its natural top - 440px = scroll position where INT sticks)
const target = info.lastCardTop - 440 + 200;
await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), target);
await page.waitForTimeout(500);
await page.screenshot({ path: "scripts/screens/stack/all-stuck.png" });
console.log("ok");
await browser.close();
