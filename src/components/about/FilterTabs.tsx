"use client";

import { useState, type ReactNode } from "react";

export type FilterTab = { id: string; label: string };

// Reusable filter pills. Only stores the active tab and sets data-filter on the wrapper.
// The cards are server-rendered children and stay in the HTML; CSS hides the ones that
// don't match (see the filter CSS in the section that uses this).
export function FilterTabs({
  tabs,
  scope,
  controls,
  label,
  children,
}: {
  tabs: FilterTab[];
  scope: string; // CSS class the section's filter rules target, e.g. "skills-filter"
  controls: string; // id of the grid being filtered
  label: string; // accessible name for the group of buttons
  children: ReactNode;
}) {
  const [active, setActive] = useState("all");

  return (
    <div data-filter={active} className={scope}>
      <div role="group" aria-label={label} className="mx-auto -mt-4 mb-12 flex max-w-3xl flex-wrap justify-center gap-2">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              aria-controls={controls}
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