"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type GhlStep = { key: string; label: string; badge: string; icon: ReactNode };

// Client island for the "Automations that pay for themselves" section.
// A row of numbered step cards acts as tabs that switch the detail panel below.
// All panels are server-rendered and stay in the HTML (inactive ones are `hidden`),
// so Google reads every step. Arrow keys, Home and End move between steps.
export function GhlStepTabs({ steps, panels }: { steps: GhlStep[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const go = (i: number) => {
    const next = (i + steps.length) % steps.length;
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
      End: steps.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  return (
    <>
      <div role="tablist" aria-label="Automation steps" className="grid grid-cols-1 gap-3 sm:grid-cols-5">
        {steps.map((step, i) => {
          const isActive = active === i;
          return (
            <button
              key={step.key}
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
              className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none sm:flex-col sm:items-stretch sm:justify-between sm:gap-0 ${
                isActive
                  ? "scale-[1.02] border-cyan-500 bg-white shadow-xl shadow-cyan-500/15 dark:border-cyan-400 dark:bg-slate-900"
                  : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              }`}
            >
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-300"
                />
              )}

              <span className="flex shrink-0 items-center justify-between gap-3 sm:mb-4">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black transition-colors ${
                    isActive
                      ? "bg-cyan-400 text-slate-950"
                      : "border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Step </span>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`hidden rounded-xl border p-2 sm:inline-flex ${
                    isActive
                      ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                      : "border-slate-200 bg-slate-50 text-slate-500 group-hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:group-hover:text-cyan-400"
                  }`}
                >
                  {step.icon}
                </span>
              </span>

              <span className="block">
                <span className="block font-mono text-[10px] font-semibold uppercase text-cyan-700 dark:text-cyan-400">
                  {step.badge}
                </span>
                <span
                  className={`mt-0.5 block text-xs font-bold leading-tight ${
                    isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {step.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {panels.map((panel, i) => (
        <div
          key={steps[i]?.key ?? i}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="motion-safe:animate-[ghl-step-fade_0.35s_ease-out]"
        >
          {panel}
        </div>
      ))}

      <style>{`@keyframes ghl-step-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </>
  );
}