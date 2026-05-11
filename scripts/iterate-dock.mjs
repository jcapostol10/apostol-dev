import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  const last = cards[cards.length - 1];
  const stack = document.querySelector(".solution-stack");
  const pageOffsetTop = (el) => {
    let y = 0; let cur = el;
    while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
    return y;
  };
  return {
    lastNaturalTop: pageOffsetTop(last),
    lastSticky: 80 + (cards.length - 1) * 60,
    stackBottomPage: pageOffsetTop(stack) + stack.offsetHeight,
    stackOffsetHeight: stack.offsetHeight,
    bioTopPage: document.getElementById("bio")?.getBoundingClientRect().top + window.scrollY,
  };
});
const dockedScroll = info.lastNaturalTop - info.lastSticky;
console.log("INFO:", JSON.stringify(info));
console.log("dockedScroll:", dockedScroll);
console.log("INT unstick scroll:", info.stackBottomPage - 1002);

async function snap(label, scrollY) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scrollY);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `scripts/screens/dk-${label}.png` });
  const tops = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll(".solution-card"));
    return cards.map((c, i) => ({
      i,
      rectTop: Math.round(c.getBoundingClientRect().top),
      outroY: c.style.getPropertyValue("--outro-y"),
      depth: c.style.getPropertyValue("--depth"),
    }));
  });
  console.log(label, "@", scrollY);
  for (const t of tops) console.log(`  i=${t.i} rectTop=${t.rectTop} outroY=${t.outroY} depth=${t.depth}`);
}

await snap("00-pre-dock", dockedScroll - 100);
await snap("01-dock", dockedScroll);
await snap("02-dock+30", dockedScroll + 30);
await snap("03-dock+100", dockedScroll + 100);
await snap("04-dock+200", dockedScroll + 200);
await snap("05-dock+400", dockedScroll + 400);

await browser.close();
