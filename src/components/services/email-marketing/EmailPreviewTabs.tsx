"use client";

import { useId, useState, type ReactNode } from "react";

// Small client island for the email hero preview: switches between
// "Automated flows" and "Campaigns". Both panels are server-rendered and stay
// in the HTML (the inactive one is `hidden`), so Google reads both.
export function EmailPreviewTabs({
  header,
  labels,
  panels,
}: {
  header: ReactNode;
  labels: [string, string];
  panels: [ReactNode, ReactNode];
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
        {header}
        <div
          role="tablist"
          aria-label="Email types"
          className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs font-semibold dark:border-slate-800 dark:bg-slate-950"
        >
          {labels.map((label, i) => {
            const isActive = active === i;
            return (
              <button
                key={label}
                id={`${baseId}-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${i}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const next = i === 0 ? 1 : 0;
                    setActive(next);
                    document.getElementById(`${baseId}-tab-${next}`)?.focus();
                  }
                }}
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
          key={labels[i]}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="motion-safe:animate-[email-tab-fade_0.3s_ease-out]"
        >
          {panel}
        </div>
      ))}

      <style>{`@keyframes email-tab-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
    </>
  );
}