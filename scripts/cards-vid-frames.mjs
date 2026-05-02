import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

const projectRoot = path.resolve(process.cwd(), "..");
const videoPath = path.join(projectRoot, "VID_CARDS.mp4");
const tmpHtml = path.join(projectRoot, "_vidplay3.html");
writeFileSync(
  tmpHtml,
  `<!doctype html><html><body style="margin:0;background:#000">
<video id="v" src="VID_CARDS.mp4" muted preload="auto"></video>
<script>
const v = document.getElementById('v');
window._ready = new Promise(r => v.addEventListener('loadeddata', () => r({duration: v.duration, w: v.videoWidth, h: v.videoHeight})));
window._seek = t => new Promise(r => { v.currentTime = t; v.addEventListener('seeked', () => r(), {once:true}); });
v.style.display = 'block';
</script></body></html>`
);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
const page = await ctx.newPage();
await page.goto("file:///" + tmpHtml.replace(/\\/g, "/"));
const meta = await page.evaluate(() => window._ready);
console.log("video:", meta);
await page.setViewportSize({ width: meta.w || 720, height: meta.h || 1280 });
mkdirSync("scripts/screens/cards-vid", { recursive: true });
const n = 12;
for (let i = 0; i < n; i++) {
  const t = (meta.duration * (i + 0.5)) / n;
  await page.evaluate((t) => window._seek(t), t);
  await page.waitForTimeout(220);
  await page.locator("video").screenshot({ path: `scripts/screens/cards-vid/frame-${String(i).padStart(2, "0")}.png` });
}
await browser.close();
console.log("ok");
