"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

// Floating "back to top" button with a scroll-progress ring.
// - Appears after the visitor scrolls SHOW_AFTER px, slides and fades in.
// - The ring fills as they scroll down the page.
// - Scroll listener is passive and throttled with requestAnimationFrame (no jank).
// - Respects "reduce motion": no slide, no bounce, instant jump instead of smooth scroll.
// Add it once in your root layout: <ScrollToTop />

const SHOW_AFTER = 400;
const SIZE = 52; // button size in px
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const ringRef = useRef<SVGCircleElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(scrollTop / max, 1) : 0;

      // Update the ring directly (no React re-render on every scroll frame)
      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress));
      }
      setVisible(scrollTop > SHOW_AFTER);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      style={{ width: SIZE, height: SIZE }}
      className={`group fixed z-40 rounded-full
        bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))]
        sm:bottom-8 sm:right-8
        transition-all duration-300 ease-out motion-reduce:transition-none
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500
        ${visible ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-90 opacity-0 motion-reduce:translate-y-0 motion-reduce:scale-100"}`}
    >
      {/* Soft glow behind the button, grows on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-cyan-400/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Button face */}
      <span
        aria-hidden="true"
        className="absolute inset-[3px] flex items-center justify-center rounded-full border border-slate-200 bg-white/90 text-cyan-600 shadow-lg shadow-slate-300/50 backdrop-blur-md transition-all duration-300
          group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-teal-300 group-hover:text-slate-950 group-hover:shadow-cyan-500/40
          group-active:scale-90
          dark:border-cyan-900/50 dark:bg-slate-900/90 dark:text-cyan-400 dark:shadow-black/50"
      >
        <ArrowUp
          className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 motion-safe:group-hover:animate-[scroll-top-nudge_0.9s_ease-in-out_infinite]"
          strokeWidth={2.5}
        />
      </span>

      {/* Scroll progress ring */}
      <svg
        aria-hidden="true"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="pointer-events-none absolute inset-0 -rotate-90"
      >
        <defs>
          <linearGradient id="scroll-top-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          className="stroke-slate-200 dark:stroke-slate-800"
        />
        <circle
          ref={ringRef}
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="url(#scroll-top-ring)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className="transition-[stroke-dashoffset] duration-150 ease-out motion-reduce:transition-none"
        />
      </svg>

      {/* Keyframes for the arrow nudge (scoped name, no global CSS file needed) */}
      <style>{`@keyframes scroll-top-nudge{0%,100%{transform:translateY(-2px)}50%{transform:translateY(-6px)}}`}</style>
    </button>
  );
}