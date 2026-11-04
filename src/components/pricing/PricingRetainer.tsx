import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Globe, Layers, Mail, Share2, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// "Monthly growth retainer" section for /pricing.
// Pure server component, no client JS.
// Keep the savings figures TRUE: they should match what you actually charge for a bundle
// compared with the monthly prices in src/lib/pricing.ts.

const bundleServices = [
  {
    icon: Globe,
    title: "Website and technical SEO",
    desc: "Ongoing updates, speed improvements, bug fixes and Google Search Console monitoring.",
  },
  {
    icon: FileText,
    title: "SEO content and blogs",
    desc: "Blog posts and page updates targeting the keywords your customers search for.",
  },
  {
    icon: Mail,
    title: "Email newsletters and CRM",
    desc: "Monthly newsletters, automated follow-up sequences and lead management in your CRM.",
  },
  {
    icon: Share2,
    title: "Social media and reels",
    desc: "On-brand posts, captions, graphics and short reels edited for each platform.",
  },
];

const tiers = [
  {
    name: "Core retainer",
    badge: "Popular for local businesses",
    savings: "Save around 20%",
    highlight: "Website + content + email",
    desc: "Website care, 2 SEO blog posts, 4 emails and 12 social posts every month.",
  },
  {
    name: "Full growth suite",
    badge: "Best value",
    savings: "Save around 30%",
    highlight: "Website + content + email + social and reels",
    desc: "All 4 services: full website care, 4 blog posts, email automation, 20 social posts and 4 reels every month.",
  },
];

const benefits = [
  "Lower combined monthly price",
  "One brand voice across every channel",
  "One plain-English monthly report",
  "No long-term contracts",
];

export function PricingRetainer() {
  return (
    <section
      id="retainer"
      aria-labelledby="pricing-retainer-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.13),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:28px_28px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            Everything in one place
          </p>

          <h2
            id="pricing-retainer-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Monthly growth{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              retainer
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Want one person handling your website, content, email and social every month? Ask about a retainer that
            bundles services at a lower combined price.
          </p>
        </header>

        {/* What's bundled */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bundleServices.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-cyan-500/30 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
            >
              <div>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100 dark:bg-slate-950 dark:text-cyan-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-base font-extrabold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
              </div>
              <p className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-4 font-mono text-[11px] font-bold text-cyan-700 dark:border-slate-800/80 dark:text-cyan-400">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                Included in the retainer
              </p>
            </li>
          ))}
        </ul>

        {/* Why bundle + the two retainers */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-12 dark:bg-slate-900/80 dark:shadow-black/40">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-6 text-left lg:col-span-7">
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                  <Layers className="h-4 w-4" aria-hidden="true" />
                  Why bundle your marketing?
                </p>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
                  One point of contact. One consistent message. A lower monthly cost.
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Instead of hiring separate freelancers or agencies for SEO, copywriting, social media and web
                development, a retainer puts everything with one person. Your message stays consistent, campaigns
                launch faster, and you pay less than buying each service on its own.
              </p>

              <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:col-span-5">
              {tiers.map((t, i) => (
                <article
                  key={t.name}
                  aria-labelledby={`retainer-${i}-title`}
                  className={`relative overflow-hidden rounded-2xl border p-6 text-left ${
                    i === tiers.length - 1
                      ? "border-cyan-500 bg-cyan-50/60 shadow-xl shadow-cyan-500/10 dark:border-cyan-400 dark:bg-slate-950"
                      : "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60"
                  }`}
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      {t.name} · <span className="normal-case">{t.badge}</span>
                    </p>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-800 dark:text-cyan-300">
                      {t.savings}
                    </span>
                  </div>
                  <h4 id={`retainer-${i}-title`} className="mb-1 text-sm font-black text-slate-900 sm:text-base dark:text-white">
                    {t.highlight}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{t.desc}</p>
                </article>
              ))}

              <p className="text-center font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Savings compared with buying each service&apos;s monthly package separately.
              </p>

              <Link
                href={siteConfig.bookingUrl}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
              >
                Ask about a retainer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}