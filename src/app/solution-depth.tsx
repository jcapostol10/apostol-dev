"use client";

import { useEffect } from "react";

export function SolutionDepthEffect() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".solution-card"));
    if (!cards.length) return;
    const stickyTop = (i: number) => 80 + i * 60;

    const TRANSITION_PX = 280;
    const OUTRO_LINGER_PX = 0;   // outro starts the instant the last card docks
    const OUTRO_SCROLL_PX = 600;
    const OUTRO_TRANSLATE = 1200; // overshoot — guarantees stack is fully off-screen
    const lastCard = cards[cards.length - 1];
    const lastStickyTop = stickyTop(cards.length - 1);

    // Natural-flow page-y of the last card (independent of its sticky state).
    const pageOffsetTop = (el: HTMLElement | null) => {
      let y = 0;
      let cur: HTMLElement | null = el;
      while (cur) {
        y += cur.offsetTop;
        cur = cur.offsetParent as HTMLElement | null;
      }
      return y;
    };
    const lastNaturalTop = pageOffsetTop(lastCard);

    const update = () => {
      // Scroll position where the LAST card has just docked at its sticky top.
      const dockedScroll = lastNaturalTop - lastStickyTop;
      const outroStart = dockedScroll + OUTRO_LINGER_PX;
      const outroEnd = outroStart + OUTRO_SCROLL_PX;
      const outro = Math.max(
        0,
        Math.min(1, (window.scrollY - outroStart) / (outroEnd - outroStart)),
      );

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
