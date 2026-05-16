import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

const info = await page.evaluate(() => {
  const stack = document.querySelector(".solution-stack");
  const bio = document.querySelector("#bio");
  const cards = document.querySelectorAll(".solution-card");
  const lastCard = cards[cards.length - 1];
  const stackRect = stack.getBoundingClientRect();
  const bioRect = bio.getBoundingClientRect();
  const lastCardRect = lastCard.getBoundingClientRect();
  // doc coords
  return {
    stackTopDoc: stackRect.top + window.scrollY,
    stackBottomDoc: stackRect.bottom + window.scrollY,
    lastCardTopDoc: lastCardRect.top + window.scrollY,
    lastCardBottomDoc: lastCardRect.bottom + window.scrollY,
    bioTopDoc: bioRect.top + window.scrollY,
    stackHeight: stack.offsetHeight,
    lastCardHeight: lastCard.offsetHeight,
    docHeight: document.documentElement.scrollHeight,
    vh: window.innerHeight,
  };
});
console.log(JSON.stringify(info, null, 2));
console.log("\n-- derived --");
console.log("Gap after last card naturalBottom to BIO:", info.bioTopDoc - info.lastCardBottomDoc, "px (", ((info.bioTopDoc - info.lastCardBottomDoc) / info.vh).toFixed(2), "vh )");
console.log("Outro range needed past dock (linger 100 + scroll 500):", 600, "px");
await browser.close();
