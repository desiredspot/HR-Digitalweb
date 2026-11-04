"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { CheckCircle2, Layers, Play, Volume2 } from "lucide-react";

export type ReelIncludesStep = {
  key: string;
  step: string;
  title: string;
  badge: string;
  summary: string;
  timing: string;
  icon: ReactNode;
};

// Client island for the "Every reel includes" section.
// Left: a list of steps that act as tabs. Right: a sticky "studio monitor" that
// illustrates the active step, plus its server-rendered detail panel.
// All detail panels stay in the HTML (inactive ones are `hidden`), so Google reads every step.
// Arrow keys, Home and End move between steps. The safe-zone toggle is purely visual.
export function ReelIncludesTabs({ steps, panels }: { steps: ReelIncludesStep[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const [safeZone, setSafeZone] = useState(true);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = steps[active];

  const go = (i: number) => {
    const next = (i + steps.length) % steps.length;
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
      End: steps.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
      {/* Steps */}
      <div className="space-y-4 lg:col-span-7">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2 font-mono text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <span className="flex items-center gap-1.5 font-bold text-cyan-700 dark:text-cyan-400">
            <Layers className="h-4 w-4" aria-hidden="true" />
            {steps.length} things in every edit
          </span>
          <span className="hidden sm:inline">Select a step to preview it</span>
        </div>

        <div role="tablist" aria-label="What every reel includes" aria-orientation="vertical" className="space-y-3">
          {steps.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.key}
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
                className={`group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 motion-reduce:transition-none ${
                  isActive
                    ? "translate-x-1 border-cyan-500 bg-white shadow-xl shadow-cyan-500/10 motion-reduce:translate-x-0 dark:border-cyan-400 dark:bg-slate-900"
                    : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900/90"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 top-0 w-1.5 transition-colors ${
                    isActive
                      ? "bg-gradient-to-b from-cyan-400 to-teal-300"
                      : "bg-transparent group-hover:bg-slate-300 dark:group-hover:bg-slate-700"
                  }`}
                />

                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                      : "border border-slate-200 bg-slate-50 text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400"
                  }`}
                >
                  {s.icon}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-extrabold uppercase text-cyan-700 dark:text-cyan-400">
                      Step {s.step} · {s.timing}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                        isActive
                          ? "border border-cyan-500/30 bg-cyan-500/15 text-cyan-800 dark:text-cyan-300"
                          : "bg-slate-100 text-slate-500 dark:bg-slate-950"
                      }`}
                    >
                      {s.badge}
                    </span>
                  </span>
                  <span
                    className={`block text-base font-bold transition-colors ${
                      isActive
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-800 group-hover:text-cyan-700 dark:text-slate-200 dark:group-hover:text-cyan-300"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {s.summary}
                  </span>
                </span>

                <CheckCircle2
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 self-center transition-colors ${
                    isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-300 dark:text-slate-700"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Studio monitor + active step details */}
      <div className="lg:sticky lg:top-24 lg:col-span-5">
        <div className="relative space-y-5 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 dark:bg-slate-900/90 dark:shadow-black/40">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="flex items-center justify-between border-b border-slate-200 pb-3 font-mono text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <span className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              Edit preview
            </span>
            <button
              type="button"
              aria-pressed={safeZone}
              onClick={() => setSafeZone((v) => !v)}
              className={`rounded border px-2.5 py-1 text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
                safeZone
                  ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-800 dark:text-cyan-300"
                  : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950"
              }`}
            >
              Safe zone: {safeZone ? "on" : "off"}
            </button>
          </div>

          {/* 9:16 monitor (illustration, always dark like a screen) */}
          <div
            aria-hidden="true"
            className="relative flex aspect-[9/14] w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-slate-800 bg-slate-950 p-4"
          >
            {safeZone && (
              <div className="pointer-events-none absolute inset-x-4 bottom-20 top-10 z-10 flex items-center justify-center rounded-xl border border-dashed border-cyan-500/40">
                <span className="mt-40 font-mono text-[9px] uppercase tracking-widest text-cyan-500/60">
                  Caption safe zone
                </span>
              </div>
            )}

            <div className="z-20 flex items-center justify-between font-mono text-[10px]">
              <span className="rounded border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-cyan-400">
                Step {current.step}: {current.badge}
              </span>
              <span className="text-slate-400">{current.timing}</span>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-950/40 via-slate-900/80 to-slate-950 p-6 text-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-400/30">
                <Play className="ml-0.5 h-6 w-6 fill-slate-950" />
              </span>
              <span className="inline-block max-w-full rounded bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg">
                {current.title}
              </span>
            </div>

            <div className="z-20 space-y-1.5 rounded-xl border border-slate-800/80 bg-slate-900/90 p-2.5">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="flex items-center gap-1 text-cyan-400">
                  <Volume2 className="h-3 w-3" /> Audio mix
                </span>
                <span className="text-slate-400">Voice first</span>
              </div>
              <div className="flex h-4 items-end justify-between gap-1">
                {[40, 65, 85, 30, 95, 70, 50, 90, 60, 80, 45, 100, 75, 55, 85, 40].map((h, i) => (
                  <span key={i} className="w-full rounded-full bg-cyan-400/80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {panels.map((panel, i) => (
            <div
              key={steps[i]?.key ?? i}
              id={`${baseId}-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${i}`}
              hidden={active !== i}
              className="motion-safe:animate-[reel-includes-fade_0.3s_ease-out]"
            >
              {panel}
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes reel-includes-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}