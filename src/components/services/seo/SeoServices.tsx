import {
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  Code2,
  FileText,
  MapPin,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { SeoServiceTabs } from "./SeoServiceTabs";

// "What I do" section for /services/seo.
// Server component; only the pill switching is client-side (SeoServiceTabs).
// Every service panel is in the HTML. id="whats-included" is the target of the hero's
// "See what's included" button. Buttons open the hero's quote dialog.
//
// The window on the right shows an example of what each service produces
// (fix list, before/after title, NAP check, schema, redirect map, report).

const seoServices = [
  {
    key: "technical-audit",
    icon: Wrench,
    title: "Technical SEO audit",
    badge: "Audit",
    bestFor: "Sites that aren't ranking and you don't know why",
    desc: "A full health check of your site: crawl errors, indexing problems, page speed, Core Web Vitals, broken links, redirects and duplicate content. You get a prioritised fix list, not a 90-page PDF.",
    highlights: [
      "Full site crawl and Google Search Console review",
      "Core Web Vitals and mobile check",
      "Prioritised fix list, quick wins first",
    ],
    file: "fix-list",
    code: `Priority  Issue                          Pages
──────────────────────────────────────────────
High      Pages blocked from indexing     4
High      Slow LCP (large hero images)    12
Medium    Broken internal links (404)     9
Medium    Missing meta descriptions       18
Low       Images without alt text         31`,
  },
  {
    key: "on-page-seo",
    icon: FileText,
    title: "On-page SEO",
    badge: "Optimisation",
    bestFor: "Pages that get impressions but few clicks",
    desc: "Every important page gets a keyword-matched title, meta description, heading structure, internal links and image alt text, so Google understands each page and searchers want to click it.",
    highlights: [
      "Keyword mapping, one main keyword per page",
      "Titles, meta descriptions and headings rewritten",
      "Internal links between related pages",
    ],
    file: "page head",
    code: `<!-- Before -->
<title>Services</title>

<!-- After -->
<title>Boiler Repair in Leeds | Same-Week Visits</title>
<meta name="description"
  content="Gas Safe boiler repairs across Leeds with
  clear prices and same-week appointments." />`,
  },
  {
    key: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    badge: "Local",
    bestFor: "Businesses that serve customers in a specific area",
    desc: "Local SEO services that help you show up in the map results and “near me” searches. This covers your Google Business Profile, consistent business listings, location pages and a steady flow of reviews.",
    highlights: [
      "Google Business Profile optimisation",
      "Citations and NAP consistency (name, address, phone)",
      "Location and service-area pages",
    ],
    file: "NAP check",
    code: `Listing             Name  Address  Phone
──────────────────────────────────────────
Google Business      ✓      ✓       ✓
Your website         ✓      ✓       ✓
Yelp                 ✓      ✗ old   ✓   → fix
Facebook             ✓      ✓       ✗   → fix
Industry directory   ✗      ✗       ✗   → add`,
  },
  {
    key: "schema",
    icon: Code2,
    title: "Schema and structured data",
    badge: "Rich results",
    bestFor: "Businesses that want richer search listings",
    desc: "Structured data for your business, services, FAQs, reviews and articles, so Google can show extra details like FAQs and business info in search results.",
    highlights: ["LocalBusiness and Service schema", "FAQ and Article schema", "Tested in Google's Rich Results Test"],
    file: "schema.json",
    code: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leeds"
  },
  "telephone": "+44 113 000 0000"
}`,
  },
  {
    key: "migrations",
    icon: ArrowLeftRight,
    title: "Site migrations and redesigns",
    badge: "Migration",
    bestFor: "Moving platforms or relaunching without losing rankings",
    desc: "Before a redesign or platform move, I map every old URL to its new home, set up 301 redirects and check everything after launch, so the traffic you've built doesn't disappear.",
    highlights: ["Full URL map and 301 redirects", "Pre- and post-launch checks", "Search Console monitoring after launch"],
    file: "redirect map",
    code: `Old URL                     New URL              Type
──────────────────────────────────────────────────────
/our-services.html          /services            301
/boiler-repairs.php         /services/boiler     301
/blog/2019/tips             /blog/boiler-tips    301
/contact-us                 /contact             301`,
  },
  {
    key: "monthly-seo",
    icon: TrendingUp,
    title: "Monthly SEO",
    badge: "Ongoing",
    bestFor: "Businesses that want steady growth, not a one-off fix",
    desc: "Ongoing SEO each month: fixing new issues, improving pages, building local signals and tracking progress, with a clear report so you always know what you're paying for.",
    highlights: [
      "Monthly technical checks and fixes",
      "Page improvements based on Search Console data",
      "Plain-English monthly report",
    ],
    file: "monthly report",
    code: `This month
✓ Fixed 6 broken links
✓ Rewrote titles on 4 service pages
✓ Added 2 new location pages
✓ 12 new Google reviews requested

Next month
→ Speed up the gallery page
→ New page for "emergency boiler repair"`,
  },
];

export function SeoServices() {
  return (
    <section
      id="whats-included"
      aria-labelledby="seo-services-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot pattern: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.18),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Everything SEO
          </p>

          <h2
            id="seo-services-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              do
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            From one-off audits to monthly SEO, pick what your site needs and see
            what&apos;s involved.
          </p>
        </header>

        <SeoServiceTabs
          tabs={seoServices.map(({ key, title, icon: Icon }) => ({
            key,
            label: title,
            icon: <Icon className="h-4 w-4" aria-hidden="true" />,
          }))}
          panels={seoServices.map((s) => (
            <article
              key={s.key}
              aria-labelledby={`seo-${s.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-12 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                {/* Details */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 shadow-lg dark:text-cyan-400">
                        <s.icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                          {s.badge}
                        </p>
                        <h3
                          id={`seo-${s.key}-title`}
                          className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                        >
                          {s.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 px-4 py-3 text-sm dark:bg-slate-950">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    <span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Best for:{" "}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{s.bestFor}</span>
                    </span>
                  </p>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{s.desc}</p>

                  <div className="space-y-2.5 pt-2">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Includes
                    </p>
                    <ul className="space-y-2.5">
                      {s.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
                      Get my free SEO check
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </QuoteDialogTrigger>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">No-obligation check</span>
                  </div>
                </div>

                {/* Code example (always dark, like an editor) */}
                <figure className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 font-mono text-xs text-slate-400">
                      <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="flex items-center gap-1.5 text-[11px] text-cyan-400">
                        <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                        {s.file}
                      </span>
                    </div>
                    <pre tabIndex={0} aria-label="Code example" className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 p-5 font-mono text-xs leading-relaxed text-slate-300">
                      <code>{s.code}</code>
                    </pre>
                    <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2.5 font-mono text-[11px] text-slate-400">
                      <span className="text-emerald-400">Example</span>
                      <span>SEO</span>
                    </div>
                  </div>
                </figure>
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="seo-services-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Free SEO check
            </p>
            <h3 id="seo-services-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Not sure where your site stands?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Get a free SEO check and I&apos;ll show you the three biggest things holding it back.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110">
            Get my free SEO check
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}