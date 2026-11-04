"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type ConversionTab = { key: string; content: ReactNode };

// Client island for "What makes a landing page convert".
// The pillar buttons act as tabs that switch the breakdown panel below them.
// Every panel is server-rendered and stays in the HTML (inactive ones are `hidden`),
// so Google reads all of it. Arrow keys, Home and End move between tabs.
export function ConversionTabs({ tabs, panels }: { tabs: ConversionTab[]; panels: ReactNode[] }) {
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
      <div
        role="tablist"
        aria-label="What makes a landing page convert"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
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
              data-active={isActive}
              className={`group flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none ${
                isActive
                  ? "scale-[1.02] border-cyan-500 bg-cyan-500/10 text-slate-900 shadow-lg shadow-cyan-500/10 dark:border-cyan-400 dark:text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-slate-200"
              }`}
            >
              {tab.content}
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
          className="motion-safe:animate-[conversion-fade_0.35s_ease-out]"
        >
          {panel}
        </div>
      ))}
      <style>{`@keyframes conversion-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </>
  );
}