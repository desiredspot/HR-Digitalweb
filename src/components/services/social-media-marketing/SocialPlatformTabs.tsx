"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type SocialPlatformTab = { key: string; name: string; category: string; badge: string; icon: ReactNode };

// Client island for the "Platforms" section: a vertical list of platforms on the left
// switches the detail panel on the right. All panels are server-rendered and stay in the
// HTML (inactive ones are `hidden`), so Google reads every platform.
// Arrow keys, Home and End move between platforms.
export function SocialPlatformTabs({ tabs, panels }: { tabs: SocialPlatformTab[]; panels: ReactNode[] }) {
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
      ArrowDown: i + 1,
      ArrowRight: i + 1,
      ArrowUp: i - 1,
      ArrowLeft: i - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  return (
    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
      <div
        role="tablist"
        aria-label="Social platforms"
        aria-orientation="vertical"
        className="flex flex-col justify-between gap-3 lg:col-span-5"
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
              className={`group flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none sm:p-5 ${
                isActive
                  ? "scale-[1.02] border-cyan-500 bg-white shadow-xl shadow-cyan-500/15 motion-reduce:scale-100 dark:border-cyan-400 dark:bg-slate-900"
                  : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900"
              }`}
            >
              <span className="flex items-center gap-3.5">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                      : "border border-slate-200 bg-slate-50 text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400"
                  }`}
                >
                  {tab.icon}
                </span>
                <span>
                  <span
                    className={`block text-base font-bold transition-colors ${
                      isActive
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-800 group-hover:text-cyan-700 dark:text-slate-200 dark:group-hover:text-cyan-300"
                    }`}
                  >
                    {tab.name}
                  </span>
                  <span className="block font-mono text-[11px] text-slate-500 dark:text-slate-400">{tab.category}</span>
                </span>
              </span>

              <span
                className={`hidden shrink-0 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider sm:inline ${
                  isActive
                    ? "border border-cyan-400/40 bg-cyan-400/20 text-cyan-800 dark:text-cyan-300"
                    : "border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950"
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-7">
        {panels.map((panel, i) => (
          <div
            key={tabs[i]?.key ?? i}
            id={`${baseId}-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${i}`}
            hidden={active !== i}
            className="h-full motion-safe:animate-[social-platform-fade_0.35s_ease-out]"
          >
            {panel}
          </div>
        ))}
      </div>

      <style>{`@keyframes social-platform-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}