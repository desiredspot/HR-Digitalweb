import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileCheck,
  FileCode,
  FileText,
  Gauge,
  Link2,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";
import { serviceHref } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { SeoIncludedTabs } from "./SeoIncludedTabs";

// "Included in every project" section for /services/seo.
// Server component; only the item switching is client-side (SeoIncludedTabs).
// Every item's details are in the HTML. Code windows show real snippets, labelled as examples.
// The bottom banner links to the SEO content writing page (internal link for SEO).

const items = [
  {
    key: "gsc-ga4",
    icon: Search,
    title: "Google Search Console and Google Analytics 4 set up and checked",
    badge: "Tracking",
    desc: "Your site verified in Google Search Console and connected to Google Analytics 4, with form submissions and calls tracked as conversions, so we can see exactly what SEO brings in.",
    file: "page head",
    code: `<!-- Google Analytics 4 -->
<script async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>`,
  },
  {
    key: "sitemap-robots",
    icon: FileCode,
    title: "XML sitemap and robots.txt reviewed",
    badge: "Crawling",
    desc: "Your XML sitemap checked and submitted to Search Console, and your robots.txt reviewed so Google can reach the pages that matter and skips the ones that don't.",
    file: "robots.txt",
    code: `User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://yourbusiness.com/sitemap_index.xml`,
  },
  {
    key: "speed-vitals",
    icon: Gauge,
    title: "Page speed and Core Web Vitals checked",
    badge: "Performance",
    desc: "Your key pages tested against Google's Core Web Vitals: how fast the main content loads (LCP), how quickly the page responds (INP) and how much the layout jumps around (CLS).",
    file: "Core Web Vitals",
    code: `Metric   What it measures         "Good" target
──────────────────────────────────────────────
LCP      Main content load time   ≤ 2.5 s
INP      Response to taps/clicks  ≤ 200 ms
CLS      Layout shifting          ≤ 0.1`,
  },
  {
    key: "mobile",
    icon: Smartphone,
    title: "Mobile-friendliness checked",
    badge: "Mobile first",
    desc: "Google ranks the mobile version of your site, so I check layouts, text size and tap targets on real phone screens and fix anything that's hard to read or use.",
    file: "mobile checks",
    code: `<meta name="viewport"
      content="width=device-width, initial-scale=1" />

/* Buttons and links easy to tap */
a, button {
  min-height: 48px;
  min-width: 48px;
}`,
  },
  {
    key: "titles-metas",
    icon: FileText,
    title: "Titles and meta descriptions on key pages",
    badge: "Click-through",
    desc: "Keyword-matched title tags and meta descriptions written for your most important pages, so they're relevant to the search and tempting to click.",
    file: "page head",
    code: `<title>Boiler Repair in Leeds | Same-Week Visits</title>
<meta
  name="description"
  content="Gas Safe boiler repairs across Leeds with
  clear prices and same-week appointments."
/>`,
  },
  {
    key: "links-redirects",
    icon: Link2,
    title: "Broken links and redirect issues fixed",
    badge: "Site health",
    desc: "404 errors, broken internal links and long redirect chains found and fixed, so visitors and Google never hit a dead end.",
    file: ".htaccess",
    code: `# Send an old page to its new home (permanent)
RewriteEngine On
RewriteRule ^old-page/?$ /services/boiler-repair [R=301,L]`,
  },
  {
    key: "summary",
    icon: FileCheck,
    title: "Plain-English summary of everything changed",
    badge: "No jargon",
    desc: "A clear summary of every change I made, why it matters and what's planned next, so you always know what you're paying for.",
    file: "summary",
    code: `What I changed
  ✓ Fixed a redirect chain on /services
  ✓ Rewrote headings on 5 pages
  ✓ Submitted the sitemap to Google

Why it matters
  Google can now find and understand
  your service pages properly.

Next
  Local listings clean-up`,
  },
];

export function SeoIncluded() {
  return (
    <section
      id="included"
      aria-labelledby="seo-included-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
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

      <div className="relative mx-auto max-w-6xl space-y-14">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            The essentials, every time
          </p>

          <h2
            id="seo-included-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Included in{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              every project
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Every SEO project includes these 7 essential checks, so Google can crawl, understand and trust your site.
          </p>
        </header>

        <SeoIncludedTabs
          items={items.map(({ key, title, badge, icon: Icon }, i) => ({
            key,
            code: String(i + 1).padStart(2, "0"),
            title,
            badge,
            icon: <Icon className="h-5 w-5" aria-hidden="true" />,
          }))}
          panels={items.map((item, i) => (
            <article
              key={item.key}
              aria-labelledby={`seo-included-${item.key}-title`}
              className="relative space-y-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/90 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-lg dark:text-cyan-400">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                    Item {String(i + 1).padStart(2, "0")} · {item.badge}
                  </p>
                  <h3
                    id={`seo-included-${item.key}-title`}
                    className="text-base font-black leading-tight text-slate-900 sm:text-lg dark:text-white"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>

              {/* Example (always dark, like an editor) */}
              <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2.5 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-cyan-400">
                    <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.file}
                  </span>
                </div>
                <pre tabIndex={0} aria-label="Code example" className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 p-4 font-mono text-xs leading-relaxed text-slate-300">
                  <code>{item.code}</code>
                </pre>
                <figcaption className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2 font-mono text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                    Example
                  </span>
                  <span>Included in every project</span>
                </figcaption>
              </figure>

              <QuoteDialogTrigger className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                Get a free SEO check
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </QuoteDialogTrigger>
            </article>
          ))}
        />

        {/* Internal link to the content writing service */}
        <aside
          aria-labelledby="seo-included-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <p className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 md:justify-start dark:text-cyan-400">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Works even better together
            </p>
            <h3 id="seo-included-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Need content too?
            </h3>
            <p className="max-w-xl text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              SEO gets your site ready to rank; content gives it something to rank for.
            </p>
          </div>

          <Link
            href={serviceHref("content-marketing")}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm"
          >
            See SEO content writing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}