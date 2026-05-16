import { chromium } from "playwright";
const browser = await chromium.launch();
const vh = parseInt(process.argv[2] || "900");
const page = await (await browser.newContext({ viewport: { width: 1530, height: vh } })).newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector(".solution-card", { timeout: 10000 });
await page.waitForTimeout(2000);
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

// compute dock dynamically based on actual layout
const dock = await page.evaluate(() => {
  const cards = document.querySelectorAll(".solution-card");
  const last = cards[cards.length - 1];
  let y = 0; let cur = last;
  while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
  return y - 440;
});
console.log("computed dock:", dock);
await page.evaluate((d) => window.scrollTo({ top: d, behavior: "instant" }), dock);
await page.mouse.wheel(0, 1);
await page.waitForTimeout(200);

const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  return {
    sy: window.scrollY,
    vh: window.innerHeight,
    data: cards.map((c, i) => ({
      i,
      transform: c.style.transform,
      filter: c.style.filter,
      depth: c.style.getPropertyValue("--depth"),
      rectTop: Math.round(c.getBoundingClientRect().top),
      rectBottom: Math.round(c.getBoundingClientRect().bottom),
    })),
    bio: (() => {
      const b = document.querySelector("#bio") || document.querySelector("[id=bio]");
      if (!b) return null;
      const r = b.getBoundingClientRect();
      return { top: Math.round(r.top), bottom: Math.round(r.bottom) };
    })(),
  };
});
console.log(JSON.stringify(info, null, 2));
await page.screenshot({ path: "./temporary screenshots/probe-depth-1200vh.png" });
await browser.close();
