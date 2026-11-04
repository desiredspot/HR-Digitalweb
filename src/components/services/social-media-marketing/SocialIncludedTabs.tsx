"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type SocialIncludedCard = {
  key: string;
  label: string;
  badge: string;
  summary: string;
  footer: string;
  icon: ReactNode;
};

// Client island for the "What's included" section.
// A grid of cards acts as tabs that switch the detail panel below.
// All cards and panels are server-rendered and stay in the HTML (inactive panels are `hidden`),
// so Google reads every deliverable. Arrow keys, Home and End move between cards.
export function SocialIncludedTabs({ cards, panels }: { cards: SocialIncludedCard[]; panels: ReactNode[] }) {
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
      <div role="tablist" aria-label="What's included" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 text-left shadow-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none ${
                isActive
                  ? "-translate-y-1 border-cyan-500 bg-white shadow-cyan-500/10 motion-reduce:translate-y-0 dark:border-cyan-400 dark:bg-slate-900"
                  : "border-slate-200 bg-white/70 shadow-slate-200/50 hover:border-cyan-500/40 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <span className="block">
                <span className="mb-6 flex items-center justify-between gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100 ${
                      isActive
                        ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                        : "border border-cyan-500/20 bg-cyan-50 text-cyan-600 dark:bg-slate-950 dark:text-cyan-400"
                    }`}
                  >
                    {card.icon}
                  </span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    {card.badge}
                  </span>
                </span>

                <span
                  className={`mb-3 block text-xl font-bold transition-colors ${
                    isActive
                      ? "text-cyan-700 dark:text-cyan-300"
                      : "text-slate-900 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-400"
                  }`}
                >
                  {card.label}
                </span>
                <span className="mb-4 block text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {card.summary}
                </span>
              </span>

              <span className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                <span className="font-mono text-[11px] text-cyan-700 dark:text-cyan-400">{card.footer}</span>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {isActive ? "Showing details" : "View details"}
                </span>
              </span>
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
          className="motion-safe:animate-[social-included-fade_0.35s_ease-out]"
        >
          {panel}
        </div>
      ))}

      <style>{`@keyframes social-included-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </>
  );
}