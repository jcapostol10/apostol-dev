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
    // Outro window: starts well above the natural sticky-exit zone so the
    // whole stack uniformly translates up BEFORE any individual card would
    // naturally unstick. Result: all 7 cards leave together as one unit.
    const OUTRO_LINGER_PX = 200; // buffer above natural unstick before outro starts
    const OUTRO_SCROLL_PX = 500; // scroll distance over which outro plays
    const OUTRO_TRANSLATE = 1100; // px translate at outro=1 — pushes stack past viewport top
    const stack = cards[0].closest(".solution-stack") as HTMLElement | null;
    const lastSticky = stickyTop(cards.length - 1);
    const lastCardHeight = cards[cards.length - 1].offsetHeight;
    const naturalUnstickAt = lastSticky + lastCardHeight; // viewport-y of stack-bottom when INT unsticks

    const update = () => {
      let outro = 0;
      if (stack) {
        const stackBottom = stack.getBoundingClientRect().bottom;
        const exitEnd = naturalUnstickAt + OUTRO_LINGER_PX;       // finish outro here
        const exitStart = exitEnd + OUTRO_SCROLL_PX;              // start outro here
        const raw = (exitStart - stackBottom) / OUTRO_SCROLL_PX;
        outro = Math.max(0, Math.min(1, raw));
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
        card.style.setProperty("--depth", depth.toFixed(3));
        // Uniform translation across every card so the whole stack lifts off
        // together — independent of per-card depth.
        card.style.setProperty("--outro-y", `${(-outro * OUTRO_TRANSLATE).toFixed(1)}px`);
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
