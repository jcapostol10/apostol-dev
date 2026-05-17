"use client";

import { useEffect } from "react";

export function SolutionDepthEffect() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".solution-card"));
    if (!cards.length) return;
    const stickyTop = (i: number) => 80 + i * 60;

    const TRANSITION_PX = 280;
    const OUTRO_LIFT_PX = 1100;

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
    const dockedScroll = naturalTops[lastIdx] - stickyTop(lastIdx);

    // Publish the outro scroll range as CSS variables — the scroll-driven
    // animation in CSS uses these as its animation-range. This runs once
    // on mount (and on resize), so there's no per-frame JS for the lift.
    const publishOutroRange = () => {
      const root = document.documentElement;
      root.style.setProperty("--outro-start", `${dockedScroll}px`);
      root.style.setProperty("--outro-end", `${dockedScroll + OUTRO_LIFT_PX}px`);
    };
    publishOutroRange();

    const update = () => {
      const sy = window.scrollY;
      cards.forEach((card, i) => {
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
        const scale = Math.max(0.84, 1 - depth * 0.022);
        const brightness = Math.max(0.5, 1 - depth * 0.085);
        const saturate = Math.max(0.45, 1 - depth * 0.09);
        // Scale is set via a CSS variable so it composes with the
        // scroll-driven `translate` keyframe (separate transform props).
        card.style.setProperty("--card-scale", scale.toFixed(3));
        card.style.filter = `brightness(${brightness.toFixed(3)}) saturate(${saturate.toFixed(3)})`;
        card.style.setProperty("--depth", depth.toFixed(3));
      });
    };

    const onScroll = () => update();
    const onResize = () => {
      publishOutroRange();
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
