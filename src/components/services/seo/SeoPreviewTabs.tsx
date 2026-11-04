"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

// Small client island for the SEO hero preview: switches between local and technical SEO.
// All panels are server-rendered and stay in the HTML (inactive ones are `hidden`),
// so Google reads every panel. Arrow keys, Home and End move between tabs.
export function SeoPreviewTabs({
  header,
  labels,
  panels,
}: {
  header: ReactNode;
  labels: string[];
  panels: ReactNode[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: labels.length - 1 };
    if (e.key in keys) {
      e.preventDefault();
      const next = (keys[e.key] + labels.length) % labels.length;
      setActive(next);
      refs.current[next]?.focus();
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
        {header}
        <div
          role="tablist"
          aria-label="SEO focus areas"
          className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs font-semibold dark:border-slate-800 dark:bg-slate-950"
        >
          {labels.map((label, i) => {
            const isActive = active === i;
            return (
              <button
                key={label}
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
                className={`rounded-lg px-3 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
                  isActive
                    ? "bg-cyan-400 font-bold text-slate-950"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {panels.map((panel, i) => (
        <div
          key={labels[i] ?? i}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="motion-safe:animate-[seo-tab-fade_0.3s_ease-out]"
        >
          {panel}
        </div>
      ))}

      <style>{`@keyframes seo-tab-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
    </>
  );
}