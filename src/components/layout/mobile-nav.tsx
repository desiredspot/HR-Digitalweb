"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { mainNav, services, siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the panel whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-slate-200 bg-white/95 px-4 pb-6 pt-4 backdrop-blur-xl md:hidden dark:border-slate-800 dark:bg-[#0B132B]/95"
        >
          {/* Native <details>: accessible accordion with no extra state */}
          <details className="group border-b border-slate-200 dark:border-slate-800/80">
            <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-semibold text-slate-800 dark:text-slate-200 [&::-webkit-details-marker]:hidden">
              Services
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 group-open:text-cyan-400" aria-hidden="true" />
            </summary>
            <ul className="my-2 space-y-1 rounded-2xl border border-slate-200 bg-slate-50 p-2 dark:border-cyan-900/30 dark:bg-slate-900/60">
              {services.map(({ slug, title, icon: Icon }) => (
                <li key={slug}>
                  <Link
                    href={`/services#${slug}`}
                    className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-cyan-500 dark:text-cyan-400" aria-hidden="true" />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-slate-200 py-3 text-base font-semibold text-slate-800 dark:border-slate-800/80 dark:text-slate-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={siteConfig.bookingUrl}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-300 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Book a free call
          </Link>
        </nav>
      )}
    </>
  );
}
