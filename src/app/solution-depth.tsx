"use client";

import { useEffect } from "react";

export function SolutionDepthEffect() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".solution-card"));
    if (!cards.length) return;
    const stickyTop = (i: number) => 80 + i * 60;

    // The recede starts this many pixels before the next card actually docks,
    // so prior cards smoothly fade/scale instead of jolting at the dock instant.
    const TRANSITION_PX = 280;

    const update = () => {
      cards.forEach((card, i) => {
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const rect = cards[j].getBoundingClientRect();
          const target = stickyTop(j);
          // 0 when card j is still TRANSITION_PX below target, 1 when stuck.
          const progress = Math.max(
            0,
            Math.min(1, (target + TRANSITION_PX - rect.top) / TRANSITION_PX),
          );
          depth += progress;
        }
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
