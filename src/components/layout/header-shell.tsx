"use client";

import { useEffect, useState, type ReactNode } from "react";

// Tiny client wrapper: only tracks scroll position.
// Everything inside (logo, nav, links) is still server-rendered HTML.
export function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent py-5 transition-[padding,background-color,border-color,box-shadow] duration-300
        data-[scrolled=true]:py-3 data-[scrolled=true]:backdrop-blur-xl
        data-[scrolled=true]:border-slate-200 data-[scrolled=true]:bg-white/85 data-[scrolled=true]:shadow-lg data-[scrolled=true]:shadow-slate-200/50
        dark:data-[scrolled=true]:border-cyan-900/40 dark:data-[scrolled=true]:bg-[#0B132B]/85 dark:data-[scrolled=true]:shadow-black/50"
    >
      {children}
    </header>
  );
}
