"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

// Starts the phone animation when it scrolls into view. Server HTML is the
// finished state; this only adds the `play` class and counts the bid pill
// from 14 down to 11. Skipped entirely under prefers-reduced-motion.
const PILL_DELAY = 2900; // ms after play; matches --pill-delay in Hero.module.css

export default function HeroPlay({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bid = el.querySelector<HTMLElement>("[data-bid]");
    let raf = 0;
    let timer = 0;

    const play = () => {
      el.classList.add(styles.play);
      if (!bid) return;
      bid.textContent = "14";
      timer = window.setTimeout(() => {
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / 1100, 1);
          const e = 1 - Math.pow(1 - p, 3);
          bid.textContent = String(Math.round(14 - 3 * e));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }, PILL_DELAY);
    };

    if (!("IntersectionObserver" in window)) {
      play();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((x) => x.isIntersecting)) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={styles.root}>
      {children}
    </div>
  );
}
