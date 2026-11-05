import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  ExternalLink,
  KeyRound,
  LifeBuoy,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// TODO: keep only numbers you can back up with real client results
const stats = [
  { value: "99+", label: "PageSpeed score" },
  { value: "3.5x", label: "Avg. lead increase" },
  { value: "< 5 min", label: "Automated follow-up" },
  { value: "100%", label: "Done-for-you funnel" },
];

// Promises that are true from the first project, no track record needed
const guarantees = [
  { label: "Fixed-price quotes", icon: DollarSign },
  { label: "Reply within 24 hours", icon: MessageSquare },
  { label: "You own everything I build", icon: KeyRound },
  { label: "30 days free support after launch", icon: LifeBuoy },
];

// Server component: the H1 is plain text, so it is the LCP element and
// paints on first byte. No images, no client JS, no layout shift.
// Hover effects below are pure CSS (group-hover), so they need no JS either.
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className={`${sectionBg.base}  relative isolate overflow-hidden pb-20 pt-32 lg:pt-40`}>
      {/* Background glow: radial gradients instead of blur filters (much cheaper to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.18),transparent_70%),radial-gradient(30%_30%_at_0%_40%,rgba(45,212,191,0.10),transparent_70%),radial-gradient(30%_30%_at_100%_70%,rgba(37,99,235,0.10),transparent_70%)]
          dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(6,182,212,0.16),transparent_70%),radial-gradient(30%_30%_at_0%_40%,rgba(20,184,166,0.10),transparent_70%),radial-gradient(30%_30%_at_100%_70%,rgba(37,99,235,0.12),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-medium text-slate-700 shadow-xl sm:text-sm dark:border-cyan-900/40 dark:bg-slate-900/80 dark:text-slate-300">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            Freelance web developer &amp; marketer
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">•</span>
            <span className="flex items-center gap-1 font-bold text-cyan-600 dark:text-cyan-400">
              Accepting new clients <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </p>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1
            id="hero-heading"
            className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Websites that load fast, rank higher and{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              turn visitors into customers
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            I&apos;m a freelance web developer and digital marketer helping small businesses, coaches, startups and
            agencies grow online. From fast Next.js websites and Unbounce landing pages to GoHighLevel automation, email
            campaigns and reels, you get one partner for the whole growth funnel.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={siteConfig.bookingUrl}
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:scale-105 hover:shadow-cyan-500/40 active:scale-95 sm:w-auto"
            >
              Book a free strategy call
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/portfolio"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-800 transition-colors hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
            >
              See my work
              <ExternalLink className="h-4 w-4 text-cyan-500 dark:text-cyan-400" aria-hidden="true" />
            </Link>
          </div>

          {/* Trust guarantees */}
          <div className="mx-auto mb-16 max-w-4xl">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span
                aria-hidden="true"
                className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300 dark:to-cyan-500/50"
              />
              <h2
                id="hero-guarantees"
                className="rounded-full border border-slate-300 bg-slate-100 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-700 shadow-sm dark:border-cyan-500/30 dark:bg-slate-900/90 dark:text-cyan-300 dark:shadow-lg dark:shadow-cyan-950/50"
              >
                All true from day one
              </h2>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300 dark:to-cyan-500/50"
              />
            </div>

            <ul aria-labelledby="hero-guarantees" className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {guarantees.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-3.5 text-left shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-white hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/40 dark:bg-slate-900/70 dark:shadow-lg dark:shadow-black/40 dark:hover:border-cyan-400/60 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
                >
                  <span className="shrink-0 rounded-xl border border-cyan-200 bg-cyan-50 p-2.5 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:border-cyan-500/30 dark:bg-gradient-to-br dark:from-cyan-950 dark:to-slate-900 dark:text-cyan-400">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold leading-tight text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-400">
                      {label}
                    </span>
                    <span className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 dark:text-emerald-400/90">
                      <CheckCircle2 className="h-2.5 w-2.5" aria-hidden="true" /> Guaranteed
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mx-auto grid max-w-3xl grid-cols-2 gap-4 border-t border-slate-200 pt-6 md:grid-cols-4 dark:border-slate-800/80">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800/80 dark:bg-slate-900/40"
              >
                <dt className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{s.label}</dt>
                <dd className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-2xl font-black text-transparent sm:text-3xl dark:from-cyan-400 dark:to-teal-300">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}