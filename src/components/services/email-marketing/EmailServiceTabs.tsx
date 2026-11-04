"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type EmailTab = { key: string; label: string; icon: ReactNode };

// Client island for the "Email marketing services" section.
// A horizontally scrollable row of pills acts as tabs that switch the detail panel.
// All panels are server-rendered and stay in the HTML (inactive ones are `hidden`),
// so Google reads every service. Arrow keys, Home and End move between pills.
export function EmailServiceTabs({ tabs, panels }: { tabs: EmailTab[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const go = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
    setActive(next);
    const el = refs.current[next];
    el?.focus();
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  return (
    <>
      <div className="relative">
        {/* Edge fades hint that the row scrolls on smaller screens */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 left-0 top-0 z-10 w-8 bg-gradient-to-r from-slate-100 to-transparent lg:hidden dark:from-[#0E1A38]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-0 top-0 z-10 w-8 bg-gradient-to-l from-slate-100 to-transparent lg:hidden dark:from-[#0E1A38]"
        />

        <div
          role="tablist"
          aria-label="Email marketing services"
          className="email-tabs-scroll flex items-center justify-start gap-2.5 overflow-x-auto px-1 pb-3 pt-1 lg:flex-wrap lg:justify-center"
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
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none ${
                  isActive
                    ? "scale-105 border-cyan-300 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 [&_svg]:text-slate-950"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 [&_svg]:text-cyan-600 dark:[&_svg]:text-cyan-400"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {panels.map((panel, i) => (
        <div
          key={tabs[i]?.key ?? i}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="motion-safe:animate-[email-svc-fade_0.35s_ease-out]"
        >
          {panel}
        </div>
      ))}

      <style>{`
        @keyframes email-svc-fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
        .email-tabs-scroll{scrollbar-width:thin;scrollbar-color:rgba(34,211,238,.35) transparent}
        .email-tabs-scroll::-webkit-scrollbar{height:6px}
        .email-tabs-scroll::-webkit-scrollbar-thumb{background:rgba(34,211,238,.35);border-radius:9999px}
        .email-tabs-scroll::-webkit-scrollbar-thumb:hover{background:rgba(34,211,238,.7)}
      `}</style>
    </>
  );
}