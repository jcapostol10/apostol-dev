"use client";

import { useEffect } from "react";

export function SolutionDepthEffect() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".solution-card"));
    if (!cards.length) return;
    const stickyTop = (i: number) => 80 + i * 60;

    const TRANSITION_PX = 280;
    const OUTRO_MAX_LIFT = 1100;   // cap on translate so transform values stay sane after cards exit

    // Cache each card's natural page-Y at mount. Recomputed lazily if needed.
    const pageOffsetTop = (el: HTMLElement | null) => {
      let y = 0;
      let cur: HTMLElement | null = el;
      while (cur) {
        y += cur.offsetTop;
        cur = cur.offsetParent as HTMLElement | null;
      }
      return y;
    };
    const naturalTops = cards.map((c) => pageOffsetTop(c));
    const lastIdx = cards.length - 1;
    const lastNaturalTop = naturalTops[lastIdx];
    const lastStickyTop = stickyTop(lastIdx);
    const dockedScroll = lastNaturalTop - lastStickyTop;

    const update = () => {
      const sy = window.scrollY;

      // After dock, cards lift 1:1 with scroll — same pace as the rest of
      // the page so everything moves up together. z-index on .solution-stack
      // keeps cards above BIO-02 during the brief on-screen overlap.
      const distPastDock = sy - dockedScroll;
      const outroY = -Math.max(0, Math.min(OUTRO_MAX_LIFT, distPastDock));

      cards.forEach((card, i) => {
        // Depth from following cards' progress past their sticky_tops.
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const naturalIV = naturalTops[j] - sy;
          const target = stickyTop(j);
          const progress = Math.max(
            0,
            Math.min(1, (target + TRANSITION_PX - naturalIV) / TRANSITION_PX),
          );
          depth += progress;
        }

        // Docking handled natively by CSS sticky — no per-frame JS lag.
        // JS only adds the uniform outro lift; transform composes with
        // sticky positioning without conflict.
        const translateY = outroY;

        const scale = Math.max(0.84, 1 - depth * 0.022);
        const brightness = Math.max(0.5, 1 - depth * 0.085);
        const saturate = Math.max(0.45, 1 - depth * 0.09);
        card.style.transform = `translateY(${translateY.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        card.style.filter = `brightness(${brightness.toFixed(3)}) saturate(${saturate.toFixed(3)})`;
        card.style.setProperty("--depth", depth.toFixed(3));
      });
    };

    // Run update SYNCHRONOUSLY on scroll — using rAF caused a 1-frame visual
    // lag where the card briefly showed at its stale transform position before
    // catching up, perceived as a small bounce. Sync update eliminates that.
    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
