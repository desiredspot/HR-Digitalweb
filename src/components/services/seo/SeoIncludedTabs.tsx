"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

export type SeoIncludedItem = { key: string; code: string; title: string; badge: string; icon: ReactNode };

// Client island for the "Included in every project" section.
// Left: a list of items that act as tabs. Right: a sticky panel with the active item's details.
// All panels are server-rendered and stay in the HTML (inactive ones are `hidden`),
// so Google reads every item. Arrow keys, Home and End move between items.
export function SeoIncludedTabs({ items, panels }: { items: SeoIncludedItem[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const go = (i: number) => {
    const next = (i + items.length) % items.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, number> = {
      ArrowDown: i + 1,
      ArrowRight: i + 1,
      ArrowUp: i - 1,
      ArrowLeft: i - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      <div
        role="tablist"
        aria-label="Included in every SEO project"
        aria-orientation="vertical"
        className="space-y-3 lg:col-span-7"
      >
        {items.map((item, i) => {
          const isActive = active === i;
          return (
            <button
              key={item.key}
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
              className={`group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-2xl border p-4 text-left shadow-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none sm:p-5 ${
                isActive
                  ? "-translate-y-0.5 border-cyan-500 bg-white shadow-cyan-500/15 motion-reduce:translate-y-0 dark:border-cyan-400 dark:bg-slate-900"
                  : "border-slate-200 bg-white/70 shadow-slate-200/40 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:border-slate-700 dark:hover:bg-slate-900/90"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b from-cyan-400 to-teal-300 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <span className="flex items-center gap-4 pl-2">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30"
                      : "border border-slate-200 bg-slate-50 text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400"
                  }`}
                >
                  {item.icon}
                </span>

                <span>
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] font-extrabold uppercase text-cyan-700 dark:text-cyan-400">
                      Item {item.code}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${
                        isActive
                          ? "border border-cyan-500/30 bg-cyan-500/15 text-cyan-800 dark:text-cyan-300"
                          : "bg-slate-100 text-slate-500 dark:bg-slate-950"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </span>
                  <span
                    className={`mt-0.5 block text-sm font-extrabold leading-snug transition-colors sm:text-base ${
                      isActive
                        ? "text-cyan-700 dark:text-cyan-300"
                        : "text-slate-900 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300"
                    }`}
                  >
                    {item.title}
                  </span>
                </span>
              </span>

              <CheckCircle2
                aria-hidden="true"
                className={`ml-3 h-5 w-5 shrink-0 transition-colors ${
                  isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-300 dark:text-slate-700"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="lg:sticky lg:top-24 lg:col-span-5">
        {panels.map((panel, i) => (
          <div
            key={items[i]?.key ?? i}
            id={`${baseId}-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${i}`}
            hidden={active !== i}
            className="motion-safe:animate-[seo-included-fade_0.3s_ease-out]"
          >
            {panel}
          </div>
        ))}
      </div>

      <style>{`@keyframes seo-included-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}