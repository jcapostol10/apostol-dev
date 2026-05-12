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
    const lastIdx = cards.length - 1;
    const lastCard = cards[lastIdx];
    const lastStickyTop = stickyTop(lastIdx);
    const lastNaturalTop = pageOffsetTop(lastCard);
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
        // Depth count from following cards' progress toward their sticky tops.
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const r = cards[j].getBoundingClientRect();
          const target = stickyTop(j);
          const progress = Math.max(
            0,
            Math.min(1, (target + TRANSITION_PX - r.top) / TRANSITION_PX),
          );
          depth += progress;
        }

        // Cards 0..N-2 use native CSS sticky — only apply outro translate.
        // The LAST card uses manual sticky (CSS sticky unreliable on it).
        let translateY = outroY;
        if (i === lastIdx) {
          const naturalInViewport = lastNaturalTop - sy;
          if (naturalInViewport < lastStickyTop) {
            translateY += lastStickyTop - naturalInViewport;
          }
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
