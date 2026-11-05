import {
  ArrowDown,
  ArrowRight,
  BarChart2,
  FileSearch,
  Gauge,
  Globe,
  Link2,
  ListChecks,
  MapPin,
  Search,
  Smartphone,
  Star,
  Store,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";
import { SeoPreviewTabs } from "./SeoPreviewTabs";

// Hero for /services/seo.
// Server component; only the quote dialog and the local/technical toggle are client-side.
// Primary keyword "SEO services for small businesses" is in the H1. Secondary keywords
// (technical SEO audit, local SEO services, on-page SEO, Google Business Profile
// optimisation, SEO consultant) appear naturally in the intro, preview and cards.

// The section right after this hero should have this id (the second button scrolls to it).
const NEXT_SECTION_ID = "whats-included";

const highlights = [
  {
    icon: Wrench,
    title: "Technical fixes first",
    desc: "Speed, indexing, broken links and mobile issues sorted, so Google can crawl and trust your site.",
    badge: "Foundation",
  },
  {
    icon: MapPin,
    title: "Local visibility",
    desc: "Google Business Profile optimisation, local citations and location pages that put you on the map in your area.",
    badge: "Local SEO",
  },
  {
    icon: BarChart2,
    title: "Clear reporting",
    desc: "A plain-English monthly report on what changed, what improved and what's next. No jargon, no vanity metrics.",
    badge: "Transparency",
  },
];

// What the preview shows: what gets checked and fixed, not invented scores or guaranteed rankings.
const localItems = [
  { icon: Store, title: "Google Business Profile", desc: "Categories, services, photos and posts set up properly" },
  { icon: MapPin, title: "Local citations", desc: "Your name, address and phone consistent everywhere" },
  { icon: Globe, title: "Location pages", desc: "A page for each area or city you serve" },
  { icon: Star, title: "Reviews", desc: "A simple system for asking happy customers for reviews" },
];

const technicalItems = [
  { icon: Gauge, title: "Speed and Core Web Vitals", desc: "Slow pages, heavy images and scripts found and fixed" },
  { icon: FileSearch, title: "Indexing", desc: "Pages Google can't find, or shouldn't, sorted out" },
  { icon: Link2, title: "Broken links and redirects", desc: "404s, redirect chains and orphan pages cleaned up" },
  { icon: Smartphone, title: "Mobile usability", desc: "Layout, tap targets and text checked on real phones" },
];

function PreviewGrid({ items }: { items: typeof localItems }) {
  return (
    <ul className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, desc }) => (
        <li
          key={title}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-950/80"
        >
          <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
          <p className="mt-2 text-base font-black text-slate-900 dark:text-white">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
        </li>
      ))}
    </ul>
  );
}

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function SeoHero() {
  return (
    <section
      aria-labelledby="seo-hero-heading"
      className={`${sectionBg.base} relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_30%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_30%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <Search className="h-4 w-4" aria-hidden="true" />
          SEO services
        </p>

        <h1
          id="seo-hero-heading"
          className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          SEO services for small businesses that{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            get you found on Google
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          Most small business websites aren&apos;t invisible because of bad luck. It&apos;s usually fixable problems:
          slow pages, missing titles, broken links, or a Google Business Profile nobody set up. As your SEO consultant,
          I start with a technical SEO audit, fix what&apos;s holding your site back, and build the on-page and local
          SEO foundations that help you climb the rankings and stay there.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <ServiceQuoteDialog
            service="SEO services"
            title="Get a free SEO check"
            description="Share your website and the area you serve, and I'll send you the biggest things holding it back on Google."
            icon={<Search className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Get a free SEO check
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <a
            href={`#${NEXT_SECTION_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            See what&apos;s included
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Preview: what gets checked for local vs technical SEO */}
        <div className="mx-auto max-w-4xl pt-2 text-left">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />

            <SeoPreviewTabs
              header={
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                    <TrendingUp className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      Small business SEO check
                    </p>
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                      What I check and fix
                    </h2>
                  </div>
                </div>
              }
              labels={["Local SEO", "Technical SEO"]}
              panels={[
                <PreviewGrid key="local" items={localItems} />,
                <PreviewGrid key="technical" items={technicalItems} />,
              ]}
            />

            {/* Example of a well-optimised local listing */}
            <figure className="mt-6 space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <figcaption className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Example search result
              </figcaption>
              <p className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                <Globe className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                <span className="truncate">yourbusiness.com › services › boiler-repair</span>
              </p>
              <p className="text-sm font-bold text-blue-700 sm:text-base dark:text-cyan-400">
                Boiler Repair in Leeds | Same-Week Visits | Your Business
              </p>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Gas Safe boiler repairs across Leeds. Clear prices before we start and same-week appointments. Call or
                book online today.
              </p>
            </figure>

            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <ListChecks className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Every fix explained in a plain-English monthly report
            </p>
          </div>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc, badge }) => (
            <li
              key={title}
              className="group space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100 dark:bg-slate-950 dark:text-cyan-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  {badge}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                {title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}