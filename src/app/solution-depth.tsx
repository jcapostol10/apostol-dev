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

    // Cache each card's natural page-Y at mount. The natural positions don't
    // shift during scroll, so this is stable. Cards' sticky CSS is unreliable
    // in this layout — we drive their position manually below.
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
        // Depth count (cards beyond this one that are docked) — drives filter.
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const naturalInViewport = naturalTops[j] - sy;
          const targetTop = stickyTop(j);
          const progress = Math.max(
            0,
            Math.min(
              1,
              (targetTop + TRANSITION_PX - naturalInViewport) / TRANSITION_PX,
            ),
          );
          depth += progress;
        }

        // Manual sticky: pin at sticky_top if the natural position has scrolled
        // past it. Plus uniform outro shift on top.
        const naturalInViewport = naturalTops[i] - sy;
        const targetTop = stickyTop(i);
        let translateY = 0;
        if (naturalInViewport < targetTop) {
          translateY = targetTop - naturalInViewport;
        }
        translateY += outroY;

        const brightness = Math.max(0.55, 1 - depth * 0.075);
        const saturate = Math.max(0.5, 1 - depth * 0.08);
        card.style.transform = `translateY(${translateY.toFixed(1)}px)`;
        card.style.filter = `brightness(${brightness.toFixed(3)}) saturate(${saturate.toFixed(3)})`;
        card.style.setProperty("--depth", depth.toFixed(3));
      });
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
