"use client";

import { Moon, Sun } from "lucide-react";

// The initial theme is set before paint by the inline script in layout.tsx,
// so there is no flash and no hydration mismatch: both icons render and CSS
// picks which one shows.
export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition-colors hover:bg-slate-100
        dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-400 dark:hover:bg-slate-800 ${className}`}
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
