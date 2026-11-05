import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  FileText,
  Globe,
  Layout,
  Mail,
  Share2,
  Sparkles,
  Tag,
  Video,
  type LucideIcon,
} from "lucide-react";
import { serviceHref, siteConfig } from "@/lib/site-config";
import { sectionBg } from "@/lib/section-bg";
import { pricingRows, pricingTiers, tierLabels, type PriceTier, type PricingRow } from "@/lib/pricing";
import { CurrencyToggle } from "./CurrencyToggle";

// Hero for /pricing.
// Server component; only the currency switch is client-side (CurrencyToggle).
// Prices live in src/lib/pricing.ts. Both currencies are in the HTML; service names link
// to each service page (good internal linking for SEO).
// Primary keyword "website design packages" is in the H1. Secondary keywords
// (landing page design cost, GoHighLevel setup cost, social media management packages)
// are in the intro.

const icons: Record<PricingRow["icon"], LucideIcon> = {
  globe: Globe,
  layout: Layout,
  cpu: Cpu,
  mail: Mail,
  fileText: FileText,
  share: Share2,
  video: Video,
};

function Price({ tier, className }: { tier: PriceTier; className?: string }) {
  const isCustom = tier.usd.toLowerCase() === "custom";
  if (isCustom) return <span className={className}>Custom quote</span>;
  return (
    <span className={className}>
      <span className="text-xs font-semibold">From </span>
      <span data-cur="usd">{tier.usd}</span>
      <span data-cur="inr">{tier.inr}</span>
    </span>
  );
}

const tierText = {
  starter: "text-cyan-700 dark:text-cyan-400",
  growth: "text-teal-700 dark:text-teal-300",
  premium: "text-blue-700 dark:text-blue-400",
} as const;

export function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-hero-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_25%,rgba(103,232,249,0.22),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_25%,rgba(6,182,212,0.16),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-10">
        <header className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
            <Tag className="h-4 w-4" aria-hidden="true" />
            Transparent pricing
          </p>

          <h1
            id="pricing-hero-heading"
            className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Website design packages and{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              digital marketing pricing
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Every project gets a fixed quote after a free discovery call. These starting prices help you plan, from
            landing page design cost and GoHighLevel setup cost to social media management packages.
          </p>
        </header>

        <CurrencyToggle>
          {/* Desktop table */}
          <div className="relative hidden overflow-hidden rounded-3xl border border-cyan-500/30 bg-white shadow-2xl shadow-slate-200/70 md:block dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Starting prices by service and package</caption>
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60">
                  <th scope="col" className="w-1/3 p-6 font-mono text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Service
                  </th>
                  {pricingTiers.map((t) => (
                    <th
                      key={t}
                      scope="col"
                      className={`p-6 font-mono text-sm font-black uppercase tracking-wider ${tierText[t]} ${
                        t === "growth" ? "bg-cyan-500/5" : ""
                      }`}
                    >
                      {tierLabels[t]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-800/80">
                {pricingRows.map((row) => {
                  const Icon = icons[row.icon];
                  return (
                    <tr key={row.slug} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <th scope="row" className="p-6 font-bold">
                        <Link
                          href={serviceHref(row.slug)}
                          className="flex items-center gap-3 text-slate-900 underline-offset-4 hover:text-cyan-700 hover:underline dark:text-white dark:hover:text-cyan-300"
                        >
                          <span className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          {row.service}
                        </Link>
                      </th>
                      {pricingTiers.map((t) => (
                        <td key={t} className={`p-6 ${t === "growth" ? "bg-cyan-500/5" : ""}`}>
                          <Price
                            tier={row[t]}
                            className={`block text-base font-extrabold ${
                              t === "growth" ? "text-cyan-700 dark:text-cyan-300" : "text-slate-900 dark:text-white"
                            }`}
                          />
                          <span className="mt-0.5 block font-mono text-xs text-slate-500 dark:text-slate-400">
                            {row[t].details}
                          </span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <ul className="space-y-6 md:hidden">
            {pricingRows.map((row) => {
              const Icon = icons[row.icon];
              return (
                <li
                  key={row.slug}
                  className="space-y-4 rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-xl shadow-slate-200/60 dark:bg-slate-900/80 dark:shadow-black/30"
                >
                  <h2 className="border-b border-slate-200 pb-4 dark:border-slate-800">
                    <Link
                      href={serviceHref(row.slug)}
                      className="flex items-center gap-3 text-lg font-black text-slate-900 dark:text-white"
                    >
                      <span className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {row.service}
                    </Link>
                  </h2>

                  <dl className="grid grid-cols-3 gap-2 text-center text-xs">
                    {pricingTiers.map((t) => (
                      <div
                        key={t}
                        className={`flex flex-col gap-1 rounded-2xl border p-3 ${
                          t === "growth"
                            ? "border-cyan-500/30 bg-cyan-500/10"
                            : "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
                        }`}
                      >
                        <dt className={`font-mono text-[10px] font-bold uppercase ${tierText[t]}`}>{tierLabels[t]}</dt>
                        <dd>
                          <Price tier={row[t]} className="block text-sm font-black text-slate-900 dark:text-white" />
                          <span className="block text-[10px] leading-tight text-slate-500 dark:text-slate-400">
                            {row[t].details}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </li>
              );
            })}
          </ul>
        </CurrencyToggle>

        {/* CTA */}
        <aside
          aria-labelledby="pricing-hero-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 text-center shadow-xl sm:p-10 md:flex-row md:text-left dark:bg-slate-900/90 dark:shadow-2xl"
        >
          <div className="space-y-1.5">
            <p className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 md:justify-start dark:text-cyan-400">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Fixed quotes, no hidden fees
            </p>
            <h2 id="pricing-hero-cta-heading" className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
              Need something custom or a combination?
            </h2>
            <p className="max-w-xl text-xs text-slate-600 sm:text-sm dark:text-slate-300">
              Book a free 30-minute discovery call to talk through your project, and get a written fixed quote within 48
              hours.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
          >
            Book a free discovery call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}