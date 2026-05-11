import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const info = await page.evaluate(() => {
  const cards = Array.from(document.querySelectorAll(".solution-card"));
  const last = cards[cards.length - 1];
  const pageOffsetTop = (el) => {
    let y = 0; let cur = el;
    while (cur) { y += cur.offsetTop; cur = cur.offsetParent; }
    return y;
  };
  return {
    lastNaturalTop: pageOffsetTop(last),
    lastSticky: 80 + (cards.length - 1) * 60,
    bioTop: document.getElementById("bio")?.getBoundingClientRect().top + window.scrollY,
  };
});
const dockedScroll = info.lastNaturalTop - info.lastSticky;
console.log({ ...info, dockedScroll });

// 0: REL just docked (one step before INT)
const relDocked = dockedScroll - 600; // ~ 1 card margin earlier
// 1: INT mid-ascent
const intAscent = dockedScroll - 200;
// 2: INT just docked
const intDocked = dockedScroll + 5;
// 3: Outro mid-way
const outroMid = dockedScroll + 200;
// 4: After outro
const afterOutro = dockedScroll + 500;

const positions = [
  ["0-rel-active", relDocked],
  ["1-int-ascent", intAscent],
  ["2-int-docked", intDocked],
  ["3-outro-mid", outroMid],
  ["4-after-outro", afterOutro],
];

for (const [name, y] of positions) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `scripts/screens/seq-${name}.png` });
  console.log(name, "@", y);
}
await browser.close();
console.log("ok");
