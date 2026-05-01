import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3001";
const OUT = path.resolve("scripts", "screens");

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
];

const sectionIds = ["services", "why", "pricing", "process", "contact"];

async function run() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const issues = [];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      ...(vp.name === "mobile" ? devices["iPhone 13"] : {}),
    });
    const page = await context.newPage();

    const consoleErrors = [];
    page.on("pageerror", (err) => consoleErrors.push(err.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    await page.goto(BASE, { waitUntil: "networkidle" });

    // wait for fonts
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);

    // full-page screenshot
    await page.screenshot({
      path: path.join(OUT, `${vp.name}-full.png`),
      fullPage: true,
    });

    // hero only
    await page.screenshot({
      path: path.join(OUT, `${vp.name}-hero.png`),
      fullPage: false,
    });

    // section screenshots
    for (const id of sectionIds) {
      const el = await page.$(`#${id}`);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(200);
        await el.screenshot({ path: path.join(OUT, `${vp.name}-${id}.png`) });
      } else {
        issues.push(`[${vp.name}] missing section #${id}`);
      }
    }

    // basic link/heading check
    const h1Count = await page.locator("h1").count();
    if (h1Count !== 1) issues.push(`[${vp.name}] expected 1 <h1>, got ${h1Count}`);

    const ctaCount = await page.locator("a[href='#contact']").count();
    if (ctaCount < 2) issues.push(`[${vp.name}] expected ≥2 contact CTAs, got ${ctaCount}`);

    if (consoleErrors.length) {
      issues.push(`[${vp.name}] console errors:\n  ${consoleErrors.join("\n  ")}`);
    }

    await context.close();
    console.log(`✓ ${vp.name} (${vp.width}×${vp.height})`);
  }

  await browser.close();

  if (issues.length) {
    console.log("\nISSUES FOUND:");
    for (const i of issues) console.log(" - " + i);
    process.exit(1);
  } else {
    console.log("\nAll checks passed. Screenshots in " + OUT);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
