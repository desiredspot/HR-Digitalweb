"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type WhyNextjsCard = { key: string; content: ReactNode };

// Client island for the "Why Next.js?" section.
// The four cards act as tabs that switch the spotlight panel below them.
// All panels are server-rendered and stay in the HTML (inactive ones are `hidden`),
// so Google indexes every word. Arrow keys, Home and End move between cards.
export function WhyNextjsTabs({ cards, panels }: { cards: WhyNextjsCard[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const go = (i: number) => {
    const next = (i + cards.length) % cards.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, number> = {
      ArrowRight: i + 1,
      ArrowDown: i + 1,
      ArrowLeft: i - 1,
      ArrowUp: i - 1,
      Home: 0,
      End: cards.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  return (
    <>
      <div role="tablist" aria-label="Why Next.js" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => {
          const isActive = active === i;
          return (
            <button
              key={card.key}
              ref={(el) => {
                refs.current[i] = el;
              }}
              id={`${baseId}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-7 text-left shadow-xl transition-all duration-300 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                isActive
                  ? "border-cyan-500 bg-white shadow-cyan-500/10 dark:border-cyan-400 dark:bg-slate-900/90 dark:shadow-cyan-500/20"
                  : "border-slate-200 bg-white/90 shadow-slate-200/80 hover:border-cyan-500/30 hover:bg-slate-50 dark:border-cyan-900/30 dark:bg-slate-900/60 dark:shadow-black/50 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900/80"
              }`}
            >
              {card.content}
            </button>
          );
        })}
      </div>

      {panels.map((panel, i) => (
        <div
          key={cards[i]?.key ?? i}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="motion-safe:animate-[why-next-fade_0.35s_ease-out]"
        >
          {panel}
        </div>
      ))}
      <style>{`@keyframes why-next-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </>
  );
}