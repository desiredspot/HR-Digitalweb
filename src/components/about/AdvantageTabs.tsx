"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export type AdvantageTab = { title: string; subtitle: string; icon: ReactNode };

// Accessible tabs (arrow keys, Home/End). All panels are server-rendered and stay in
// the HTML; inactive ones just get the `hidden` attribute, so Google indexes every panel.
export function AdvantageTabs({ tabs, panels }: { tabs: AdvantageTab[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const focusTab = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <div className="mb-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Reasons to work with me"
        className="flex flex-col justify-center gap-3 lg:col-span-5"
      >
        {tabs.map((tab, index) => {
          const isActive = active === index;
          return (
            <button
              key={tab.title}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={`group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 motion-reduce:transition-none ${
                isActive
                  ? "border-cyan-500 bg-white text-slate-900 shadow-lg lg:translate-x-1 dark:border-cyan-400 dark:bg-slate-900/90 dark:text-white dark:shadow-xl dark:shadow-cyan-500/10"
                  : "border-slate-200 bg-slate-100/80 text-slate-600 hover:bg-white hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:bg-slate-900/70 dark:hover:text-slate-200"
              }`}
            >
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b from-cyan-400 to-teal-300"
                />
              )}

              <span className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className={`rounded-xl border p-2.5 transition-colors ${
                    isActive
                      ? "border-cyan-200 bg-cyan-50 text-cyan-600 dark:border-cyan-500/40 dark:bg-cyan-500/20 dark:text-cyan-400"
                      : "border-slate-300 bg-slate-200/60 text-slate-500 dark:border-slate-700/50 dark:bg-slate-800/60 dark:text-slate-400"
                  }`}
                >
                  {tab.icon}
                </span>
                <span>
                  <span className="block text-sm font-extrabold leading-snug">{tab.title}</span>
                  <span
                    className={`block text-xs font-medium ${
                      isActive ? "text-cyan-700 dark:text-cyan-400/90" : "text-slate-500"
                    }`}
                  >
                    {tab.subtitle}
                  </span>
                </span>
              </span>

              <ChevronRight
                aria-hidden="true"
                className={`h-4 w-4 shrink-0 transition-transform ${
                  isActive
                    ? "translate-x-1 text-cyan-600 dark:text-cyan-400"
                    : "text-slate-400 opacity-0 group-hover:opacity-100 dark:text-slate-600"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Panels */}
      <div className="lg:col-span-7">
        {panels.map((panel, index) => (
          <div
            key={index}
            id={`${baseId}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${index}`}
            hidden={active !== index}
            tabIndex={0}
            className="h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 motion-safe:animate-[advantage-fade_0.35s_ease-out]"
          >
            {panel}
          </div>
        ))}
        <style>{`@keyframes advantage-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
      </div>
    </div>
  );
}