import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

// Remove our JS scroll listener so we see PURE CSS sticky
await page.evaluate(() => {
  // clone cards to drop event listeners — but easier: just zero out their inline style after wheel
});

for (const sy of [3000, 5000, 7000, 7400, 7800, 8500]) {
  await page.evaluate((s) => window.scrollTo({ top: s, behavior: "instant" }), sy);
  await page.mouse.wheel(0, 1);
  await page.waitForTimeout(60);
  // ZERO out transform AFTER scroll so we read pure sticky
  await page.evaluate(() => {
    document.querySelectorAll(".solution-card").forEach((c) => { c.style.transform = ""; });
  });
  await page.waitForTimeout(60);
  const tops = await page.evaluate(() => Array.from(document.querySelectorAll(".solution-card")).map((c) => Math.round(c.getBoundingClientRect().top)));
  console.log(`sy=${sy}: [${tops.join(",")}]`);
}
await browser.close();
