"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type SeoTab = { key: string; label: string; badge: string; icon: ReactNode };

// Client island for the "Built for SEO" section.
// A grid of cards acts as tabs that switch the detail panel below.
// All panels are server-rendered and stay in the HTML (inactive ones are `hidden`),
// so Google reads every feature. Arrow keys, Home and End move between cards.
export function SeoFeatureTabs({ tabs, panels }: { tabs: SeoTab[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const go = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
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
      End: tabs.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  return (
    <>
      <div role="tablist" aria-label="SEO features" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {tabs.map((tab, i) => {
          const isActive = active === i;
          return (
            <button
              key={tab.key}
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
              className={`group flex flex-col justify-between rounded-2xl border p-3.5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none ${
                isActive
                  ? "scale-[1.02] border-cyan-500 bg-cyan-50 shadow-lg shadow-cyan-500/15 dark:border-cyan-400 dark:bg-cyan-500/10 dark:shadow-cyan-500/20"
                  : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              }`}
            >
              <span className="mb-3 flex items-center justify-between gap-2">
                <span
                  className={`rounded-xl border p-2 ${
                    isActive
                      ? "border-cyan-300 bg-cyan-400 text-slate-950"
                      : "border-slate-200 bg-slate-50 text-slate-500 group-hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:group-hover:text-cyan-400"
                  }`}
                >
                  {tab.icon}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[9px] ${
                    isActive
                      ? "border border-cyan-400/40 bg-cyan-400/20 text-cyan-800 dark:text-cyan-300"
                      : "bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400"
                  }`}
                >
                  {tab.badge}
                </span>
              </span>
              <span
                className={`text-xs font-bold leading-tight ${
                  isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {panels.map((panel, i) => (
        <div
          key={tabs[i]?.key ?? i}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="motion-safe:animate-[seo-tab-fade_0.35s_ease-out]"
        >
          {panel}
        </div>
      ))}

      <style>{`@keyframes seo-tab-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </>
  );
}