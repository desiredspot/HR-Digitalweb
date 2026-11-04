"use client";

import { useEffect, useState, type ReactNode } from "react";

type Currency = "usd" | "inr";
const STORAGE_KEY = "hr-pricing-currency";

// Client island for the pricing currency switch.
// Both USD and INR prices are server-rendered (spans with data-cur="usd" / "inr").
// Switching only sets data-currency on the wrapper, and a small stylesheet hides the
// other currency, so both stay in the HTML for Google. The visitor's choice is
// remembered in this browser.
export function CurrencyToggle({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("usd");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "usd" || saved === "inr") setCurrency(saved);
    } catch {
      // storage unavailable (private mode etc.): keep the default
    }
  }, []);

  const choose = (c: Currency) => {
    setCurrency(c);
    try {
      window.localStorage.setItem(STORAGE_KEY, c);
    } catch {
      // ignore
    }
  };

  const options: { id: Currency; label: string }[] = [
    { id: "usd", label: "USD ($)" },
    { id: "inr", label: "INR (₹)" },
  ];

  return (
    <div data-currency={currency} className="space-y-12 sm:space-y-16">
      <div className="flex items-center justify-center gap-3">
        <span id="currency-label" className="font-mono text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
          Currency:
        </span>
        <div
          role="group"
          aria-labelledby="currency-label"
          className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 p-1 text-xs font-bold dark:border-slate-800 dark:bg-slate-900"
        >
          {options.map((o) => {
            const active = currency === o.id;
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={active}
                onClick={() => choose(o.id)}
                className={`rounded-xl px-4 py-1.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
                  active
                    ? "bg-cyan-400 font-black text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </div>

      {children}

      <style>{`[data-currency="usd"] [data-cur="inr"],[data-currency="inr"] [data-cur="usd"]{display:none}`}</style>
    </div>
  );
}