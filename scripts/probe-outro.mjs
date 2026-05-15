import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

// scroll deeply via wheel to trigger sticky AND JS
await page.evaluate(() => window.scrollTo({ top: 7400, behavior: "instant" }));
await page.waitForTimeout(300);
for (let i = 0; i < 60; i++) {
  await page.mouse.wheel(0, 10);
  await page.waitForTimeout(15);
}

const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return {
    sy: window.scrollY,
    data: cards.map((c) => ({
      rectTop: Math.round(c.getBoundingClientRect().top),
      computedTop: getComputedStyle(c).top,
      transform: c.style.transform,
      offsetTop: c.offsetTop,
    })),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
