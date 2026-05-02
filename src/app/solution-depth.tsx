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
    // both recedes every card AND translates the whole stack upward so the
    // section visibly hands off to whatever comes next.
    const OUTRO_TRANSITION_PX = 500;
    const OUTRO_DEPTH = 1.6;     // extra depth added uniformly during outro
    const OUTRO_TRANSLATE = 320; // px each card translates up at outro=1
    const stack = cards[0].closest(".solution-stack") as HTMLElement | null;
    const lastSticky = stickyTop(cards.length - 1);
    const lastCardHeight = cards[cards.length - 1].offsetHeight;

    const update = () => {
      // Outro 0 → 1 as the stack's bottom approaches the last card's stuck top.
      let outro = 0;
      if (stack) {
        const stackBottom = stack.getBoundingClientRect().bottom;
        const exitStart = lastSticky + lastCardHeight + OUTRO_TRANSITION_PX;
        const exitEnd = lastSticky + lastCardHeight; // outro complete here
        const span = exitStart - exitEnd;
        const raw = (exitStart - stackBottom) / span;
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
        depth += outro * OUTRO_DEPTH;
        card.style.setProperty("--depth", depth.toFixed(3));
        // Outro translates EVERY card up uniformly so the whole stack moves
        // toward the next section together.
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
