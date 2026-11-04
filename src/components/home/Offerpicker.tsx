"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Percent, Search } from "lucide-react";

export type OfferId = "discount" | "audit";

const offers: { id: OfferId; title: string; tag: string; desc: string; icon: typeof Percent }[] = [
  {
    id: "discount",
    title: "15% off your first project",
    tag: "Direct savings",
    desc: "An instant 15% discount on a custom website, landing page or GoHighLevel CRM automation package.",
    icon: Percent,
  },
  {
    id: "audit",
    title: "Free landing page audit",
    tag: "Conversion value",
    desc: "A full UX, speed and conversion audit of your current landing page, included free with any custom website build.",
    icon: Search,
  },
];

// Small client island: only the offer choice needs JS. The offer text itself is
// rendered on the server as well, because client components still render to HTML.
export function OfferPicker({ bookingUrl }: { bookingUrl: string }) {
  const [selected, setSelected] = useState<OfferId>("discount");

  // Pass the chosen offer to the booking page so you know which one they picked.
  const href = `${bookingUrl}${bookingUrl.includes("?") ? "&" : "?"}offer=${selected}`;

  return (
    <>
      <fieldset className="mx-auto mb-10 max-w-3xl">
        <legend className="sr-only">Choose your launch offer</legend>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {offers.map(({ id, title, tag, desc, icon: Icon }) => {
            const isActive = selected === id;
            return (
              <label
                key={id}
                className={`relative flex cursor-pointer flex-col rounded-2xl border p-6 transition duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-cyan-500 motion-reduce:transition-none ${
                  isActive
                    ? "scale-[1.02] border-cyan-500 bg-white shadow-md dark:border-cyan-400 dark:bg-slate-900/90 dark:shadow-lg dark:shadow-cyan-500/10"
                    : "border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700"
                }`}
              >
                <input
                  type="radio"
                  name="launch-offer"
                  value={id}
                  checked={isActive}
                  onChange={() => setSelected(id)}
                  className="sr-only"
                />

                {isActive && (
                  <span className="absolute right-3 top-3 rounded-full bg-cyan-400 p-1 text-slate-950" aria-hidden="true">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                )}

                <span className="mb-3 flex items-center gap-3">
                  <span className="rounded-xl border border-cyan-200 bg-cyan-50 p-3 text-cyan-600 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-lg font-bold text-slate-900 dark:text-white">{title}</span>
                    <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">{tag}</span>
                  </span>
                </span>

                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex justify-center">
        <Link
          href={href}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto"
        >
          Claim a launch spot
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}