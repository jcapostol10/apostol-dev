"use client";

import { useEffect } from "react";

export function SolutionDepthEffect() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".solution-card"));
    if (!cards.length) return;
    const stickyTop = (i: number) => 80 + i * 60;

    const TRANSITION_PX = 280;
    const OUTRO_LINGER_PX = 100;   // brief pause to confirm dock before lift
    const OUTRO_SCROLL_PX = 500;   // distance over which the lift completes
    const OUTRO_TRANSLATE = 1100;  // overshoot so cards fully clear viewport

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

      // Outro starts after the last card docks (with brief linger).
      const distPastDock = sy - dockedScroll;
      const outro = Math.max(
        0,
        Math.min(1, (distPastDock - OUTRO_LINGER_PX) / OUTRO_SCROLL_PX),
      );
      const outroY = -outro * OUTRO_TRANSLATE;

      cards.forEach((card, i) => {
        // Depth from following cards' progress past their sticky_tops.
        let depth = 0;
        const myTarget = stickyTop(i);
        for (let j = i + 1; j < cards.length; j++) {
          const naturalIV = naturalTops[j] - sy;
          const target = stickyTop(j);
          const progress = Math.max(
            0,
            Math.min(1, (target + TRANSITION_PX - naturalIV) / TRANSITION_PX),
          );
          depth += progress;
        }

        // Manual sticky for EVERY card — native CSS sticky's parent-bottom
        // constraint was kicking in too aggressively and pushing rear cards
        // up out of formation. JS pin keeps every card at its sticky_top
        // until the outro lifts them all together.
        const naturalIV = naturalTops[i] - sy;
        let translateY = outroY;
        if (naturalIV < myTarget) {
          translateY += myTarget - naturalIV;
        }

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
