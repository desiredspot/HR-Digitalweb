"use client";

import { useState, type ReactNode } from "react";

export type ToolCategoryTab = { id: string; label: string };

// Tiny client island: it only remembers the active tab and sets data-filter.
// The tool cards are server-rendered children, so all of them stay in the HTML
// for search engines even while some are hidden by the filter.
export function ToolsFilter({ tabs, children }: { tabs: ToolCategoryTab[]; children: ReactNode }) {
  const [active, setActive] = useState("all");

  return (
    <div data-filter={active} className="tools-filter">
      <div
        role="group"
        aria-label="Filter tools by category"
        className="mx-auto -mt-4 mb-12 flex max-w-3xl flex-wrap justify-center gap-2"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              aria-controls="tools-grid"
              onClick={() => setActive(tab.id)}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 ${
                isActive
                  ? "scale-105 border-cyan-400 bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {children}
    </div>
  );
}