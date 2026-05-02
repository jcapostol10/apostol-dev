"use client";

import { useEffect } from "react";

export function SolutionDepthEffect() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".solution-card"));
    if (!cards.length) return;
    const stickyTop = (i: number) => 80 + i * 60;

    const update = () => {
      cards.forEach((card, i) => {
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const rect = cards[j].getBoundingClientRect();
          if (rect.top <= stickyTop(j) + 1) depth++;
        }
        card.style.setProperty("--depth", String(depth));
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
