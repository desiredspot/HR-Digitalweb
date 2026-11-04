"use client";

import { useId, useState, type ReactNode } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

export type PackageItem = {
  key: string;
  title: string;
  badge: string;
  summary: string;
  headline: string;
  desc: string;
  checklist: string[];
  icon: ReactNode;
  iconLarge: ReactNode;
};

// Client island for the "Every package includes" section.
// Right: an accordion of items (one open at a time). Left: a sticky panel with the open
// item's headline, description and the booking button.
// Everything is server-rendered and stays in the HTML (closed parts use `hidden`),
// so Google reads every item.
export function PackageIncludesSplit({ items, cta }: { items: PackageItem[]; cta: ReactNode }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      {/* Sticky detail panel */}
      <div className="space-y-6 lg:sticky lg:top-24 lg:col-span-5">
        <div className="relative space-y-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 dark:bg-slate-900/90 dark:shadow-black/40">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          {items.map((item, i) => (
            <div
              key={item.key}
              id={`${baseId}-detail-${i}`}
              hidden={active !== i}
              className="space-y-6 motion-safe:animate-[package-fade_0.3s_ease-out]"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-lg dark:text-cyan-400">
                  {item.iconLarge}
                </span>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                    Included in every package
                  </p>
                  <p className="text-lg font-black text-slate-900 dark:text-white">{item.badge}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-extrabold leading-tight text-slate-900 dark:text-white">{item.headline}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}

          {cta}
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-4 lg:col-span-7">
        {items.map((item, i) => {
          const isOpen = active === i;
          return (
            <div
              key={item.key}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-cyan-500 bg-white shadow-xl shadow-cyan-500/10 dark:border-cyan-400 dark:bg-slate-900"
                  : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900/90"
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={`${baseId}-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`${baseId}-panel-${i} ${baseId}-detail-${i}`}
                  onClick={() => setActive(i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-500"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                        isOpen
                          ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25"
                          : "border border-slate-200 bg-slate-50 text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>
                      <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                        {item.badge}
                      </span>
                      <span
                        className={`block text-base font-bold transition-colors sm:text-lg ${
                          isOpen ? "text-cyan-700 dark:text-cyan-300" : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 rounded-xl border p-2 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 border-cyan-500/40 bg-cyan-50 text-cyan-600 dark:bg-slate-950 dark:text-cyan-400"
                        : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </h3>

              <div
                id={`${baseId}-panel-${i}`}
                role="region"
                aria-labelledby={`${baseId}-btn-${i}`}
                hidden={!isOpen}
                className="space-y-4 border-t border-slate-100 px-6 pb-6 pt-4 dark:border-slate-800/80"
              >
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.summary}</p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {item.checklist.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`@keyframes package-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}