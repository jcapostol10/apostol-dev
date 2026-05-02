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
    // After all cards have stacked, scrolling further drives an "outro" that
    // pushes every card back together so the whole stack recedes as a unit.
    const OUTRO_TRANSITION_PX = 600;
    const OUTRO_MAX_DEPTH = 3; // how much extra recede during outro
    const stack = cards[0].closest(".solution-stack") as HTMLElement | null;
    const lastSticky = stickyTop(cards.length - 1);
    const lastCardHeight = cards[cards.length - 1].offsetHeight;

    const update = () => {
      // Outro progress: 0 while the stack is still mid-section, ramps to
      // OUTRO_MAX_DEPTH as the stack's bottom approaches the last card.
      let outro = 0;
      if (stack) {
        const stackBottom = stack.getBoundingClientRect().bottom;
        // Start the outro a bit after the last card has fully docked so the
        // user has a moment to see all 7 stacked before they begin receding.
        const exitStart = lastSticky + lastCardHeight + OUTRO_TRANSITION_PX;
        const raw = (exitStart - stackBottom) / OUTRO_TRANSITION_PX;
        outro = Math.max(0, Math.min(1, raw)) * OUTRO_MAX_DEPTH;
      }

      cards.forEach((card, i) => {
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const rect = cards[j].getBoundingClientRect();
          const target = stickyTop(j);
          const progress = Math.max(
            0,
            Math.min(1, (target + TRANSITION_PX - rect.top) / TRANSITION_PX),
          );
          depth += progress;
        }
        // Apply outro to every card so they all recede together at section end.
        depth += outro;
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
