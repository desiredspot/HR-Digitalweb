import { Flame, Star, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { launchOffer } from "@/lib/launch-offer";
import { OfferPicker } from "./Offerpicker";

// Launch offer settings now live in src/lib/launch-offer.ts (shared with the pricing page).
// Keep them TRUE: update claimedSpots by hand as clients sign up.
const TOTAL_SPOTS = launchOffer.totalSpots;
const CLAIMED_SPOTS = launchOffer.claimedSpots;
const SHOW_SPOTS = launchOffer.showSpots;

export function LaunchOfferSection() {
  const remaining = Math.max(TOTAL_SPOTS - CLAIMED_SPOTS, 0);
  const percentClaimed = Math.round((CLAIMED_SPOTS / TOTAL_SPOTS) * 100);

  if (remaining === 0) return null;

  return (
    <section
      id="launch-offer"
      aria-labelledby="launch-offer-heading"
      className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(34,211,238,0.14),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-cyan-50/40 to-white p-8 shadow-xl sm:p-12 dark:border-cyan-500/30 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/50">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
        />

        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Flame className="h-4 w-4" aria-hidden="true" />
            Early client offer
          </p>

          <h2
            id="launch-offer-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Launch offer for my{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              first clients
            </span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            I&apos;m newly independent, and I want my first projects to become my best case studies. For a small
            number of early clients, I&apos;m offering a launch incentive in return for an honest testimonial once
            the work is live.
          </p>
        </header>

        {SHOW_SPOTS && (
          <div className="mx-auto mb-10 max-w-xl rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-cyan-900/30 dark:bg-slate-900/50">
            <div className="mb-2 flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400">
                <Users className="h-4 w-4" aria-hidden="true" />
                Launch spots
              </span>
              <span className="text-slate-700 dark:text-slate-300">
                <span className="font-extrabold text-cyan-700 dark:text-cyan-400">{remaining}</span> of {TOTAL_SPOTS}{" "}
                spots left
              </span>
            </div>
            <div
              role="progressbar"
              aria-label="Launch spots claimed"
              aria-valuemin={0}
              aria-valuemax={TOTAL_SPOTS}
              aria-valuenow={CLAIMED_SPOTS}
              className="h-2.5 w-full overflow-hidden rounded-full border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-700 dark:bg-slate-800"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300"
                style={{ width: `${percentClaimed}%` }}
              />
            </div>
          </div>
        )}

        <OfferPicker bookingUrl={siteConfig.bookingUrl} />

        <p className="mt-8 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          <Star className="h-3.5 w-3.5 shrink-0 fill-cyan-500 text-cyan-500 dark:fill-cyan-400 dark:text-cyan-400" aria-hidden="true" />
          The only thing I ask in return: an honest testimonial for my website once your project is live.
        </p>
      </div>
    </section>
  );
}