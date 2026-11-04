"use client";

import { useState, type ReactNode } from "react";

type FilterOption = { id: string; label: string; count: number; icon: ReactNode };

// Client island for the portfolio filter.
// The project cards are server-rendered children with data-cats="websites landing-pages".
// Picking a filter only sets data-filter on the wrapper; a small generated stylesheet hides
// cards that don't match. All cards stay in the HTML for Google.
export function PortfolioFilter({ options, children }: { options: FilterOption[]; children: ReactNode }) {
  const [active, setActive] = useState("all");

  const css = options
    .filter((o) => o.id !== "all")
    .map((o) => `[data-filter="${o.id}"] [data-cats]:not([data-cats~="${o.id}"]){display:none}`)
    .join("");

  return (
    <div data-filter={active} className="space-y-10">
      <div className="relative mx-auto max-w-5xl">
        <div
          role="group"
          aria-label="Filter projects by type"
          className="portfolio-filter-scroll flex items-center justify-start gap-2 overflow-x-auto px-1 pb-4 pt-1 sm:gap-3 md:flex-wrap md:justify-center"
        >
          {options.map((o) => {
            const isActive = active === o.id;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(o.id)}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-2xl border px-4 py-2.5 text-xs font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none sm:text-sm ${
                  isActive
                    ? "scale-105 border-cyan-300 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25 [&_svg]:text-slate-950"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-white [&_svg]:text-cyan-600 dark:[&_svg]:text-cyan-400"
                }`}
              >
                {o.icon}
                {o.label}
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${
                    isActive
                      ? "bg-slate-950/15 text-slate-950"
                      : "border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                  }`}
                >
                  {o.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {active === "all" ? "all projects" : options.find((o) => o.id === active)?.label}
      </p>

      {children}

      <style>{`${css}
        .portfolio-filter-scroll{scrollbar-width:thin;scrollbar-color:rgba(34,211,238,.35) transparent}
        .portfolio-filter-scroll::-webkit-scrollbar{height:6px}
        .portfolio-filter-scroll::-webkit-scrollbar-thumb{background:rgba(34,211,238,.35);border-radius:9999px}`}</style>
    </div>
  );
}