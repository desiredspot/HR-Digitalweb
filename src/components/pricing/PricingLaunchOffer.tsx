import Link from "next/link";
import { ArrowRight, CheckCircle2, Gift, MessageSquareQuote, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { launchOfferStatus } from "@/lib/launch-offer";

// Launch offer section for /pricing.
// Pure server component, no client JS. Numbers come from src/lib/launch-offer.ts (shared with
// the home page), so the spots counter is always the same everywhere and always true.
// The section hides itself when every spot is taken.

const terms = [
  "Valid on any website, funnel or marketing package",
  "Same fixed quote and full deliverables as every project",
  "An honest review of your experience once the project has launched",
];

export function PricingLaunchOffer() {
  const offer = launchOfferStatus();
  if (!offer.isOpen) return null;

  return (
    <section
      id="launch-offer"
      aria-labelledby="pricing-launch-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(50%_45%_at_50%_50%,rgba(103,232,249,0.2),transparent_70%)]
            dark:bg-[radial-gradient(50%_45%_at_50%_50%,rgba(6,182,212,0.16),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 text-center shadow-2xl shadow-slate-200/70 sm:p-12 sm:text-left dark:bg-slate-900/80 dark:shadow-black/40">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Offer details */}
            <div className="space-y-6 lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                <Gift className="h-4 w-4" aria-hidden="true" />
                Early client offer
              </p>

              <h2
                id="pricing-launch-heading"
                className="text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl dark:text-white"
              >
                Launch{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
                  offer
                </span>
              </h2>

              <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                My first <span className="font-extrabold text-cyan-700 dark:text-cyan-400">{offer.totalSpots}</span>{" "}
                clients get{" "}
                <span className="font-extrabold text-teal-700 dark:text-teal-300">
                  {offer.discountPercent}% off
                </span>{" "}
                their first project in exchange for an honest review.
              </p>

              <ul className="space-y-2.5 pt-2">
                {terms.map((t) => (
                  <li
                    key={t}
                    className="flex items-center justify-center gap-3 text-sm font-medium text-slate-700 sm:justify-start dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
                <Link
                  href={siteConfig.bookingUrl}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:w-auto sm:text-sm"
                >
                  Claim {offer.discountPercent}% off
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">No long-term contracts</span>
              </div>
            </div>

            {/* Spots + review note */}
            <div className="flex flex-col items-center justify-center space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8 lg:col-span-5 dark:border-slate-800 dark:bg-slate-950/80">
              <p
                className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/30 bg-cyan-500/10 text-3xl font-black text-cyan-700 shadow-lg shadow-cyan-500/10 dark:text-cyan-400"
                aria-label={`${offer.discountPercent} percent off`}
              >
                {offer.discountPercent}%
              </p>

              {offer.showSpots && (
                <div className="w-full space-y-2">
                  <p className="flex items-center justify-between font-mono text-xs">
                    <span className="flex items-center gap-1.5 font-bold uppercase text-slate-500 dark:text-slate-400">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      Launch spots
                    </span>
                    <span className="font-extrabold text-cyan-700 dark:text-cyan-400">
                      {offer.remaining} of {offer.totalSpots} left
                    </span>
                  </p>

                  <div
                    role="progressbar"
                    aria-label="Launch spots claimed"
                    aria-valuemin={0}
                    aria-valuemax={offer.totalSpots}
                    aria-valuenow={Math.min(offer.claimedSpots, offer.totalSpots)}
                    className="h-3 w-full overflow-hidden rounded-full border border-slate-200 bg-white p-0.5 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300"
                      style={{ width: `${Math.max(offer.percentClaimed, 4)}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="w-full space-y-1.5 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900/90">
                <p className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <MessageSquareQuote className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  Honest review, good or bad
                </p>
                <p className="text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                  Reviews from launch clients are labelled as such on this site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}