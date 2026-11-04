import {
  ArrowRight,
  CheckCircle2,
  FileCode,
  FileText,
  Globe,
  Lightbulb,
  Network,
  Search,
  Settings,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { SeoFeatureTabs } from "./SeoFeatureTabs";

// "Built for SEO" section for /services/wordpress-development.
// Server component; only the card switching is client-side (SeoFeatureTabs).
// Every feature panel is in the HTML so Google reads all of them.
// The search result preview and code are labelled as examples, using a made-up business.

const seoFeatures = [
  {
    key: "seo-plugin",
    icon: Settings,
    title: "Rank Math or Yoast set up",
    badge: "SEO plugin",
    desc: "Your SEO plugin configured properly, not just installed: title and description templates, indexing rules, canonical settings and sitemaps, so every new page starts with the right defaults.",
    why: "Google spends its time on the pages that matter, not on thin archive or search pages.",
    serp: {
      path: "services › emergency-plumber",
      title: "Emergency Plumber, Available Today | Brightside Plumbing",
      snippet: "Burst pipe or leak? Fast, fixed-price emergency plumbing with no call-out fee. Call now or book online.",
    },
    file: "functions.php",
    code: `// Keep thin pages (like internal search
// results) out of Google's index
add_filter('rank_math/frontend/robots', function ($robots) {
  if (is_search()) {
    $robots['index'] = 'noindex';
  }
  return $robots;
});`,
  },
  {
    key: "clean-urls",
    icon: Network,
    title: "Clean URLs and canonicals",
    badge: "URL structure",
    desc: "Short, readable URLs in a logical hierarchy, one canonical URL per page and 301 redirects for anything that moves, so you don't end up with duplicate pages competing with each other.",
    why: "People and search engines can tell what a page is about from its address alone.",
    serp: {
      path: "services › boiler-repair",
      title: "Boiler Repair and Servicing | Brightside Plumbing",
      snippet: "Gas Safe engineers for boiler repairs, annual servicing and replacements. Upfront prices before any work starts.",
    },
    file: "page source",
    code: `<!-- Settings → Permalinks: /%postname%/ -->
<!-- One canonical URL per page -->
<link
  rel="canonical"
  href="https://brightside.example/services/boiler-repair/"
/>`,
  },
  {
    key: "sitemaps",
    icon: FileCode,
    title: "XML sitemap and robots.txt",
    badge: "Crawling",
    desc: "An XML sitemap that updates itself whenever you publish, submitted to Google Search Console, plus a robots.txt that keeps crawlers out of admin areas.",
    why: "New pages are found sooner, and crawlers don't waste time on areas that shouldn't rank.",
    serp: {
      path: "blog › signs-of-a-hidden-leak",
      title: "7 Signs of a Hidden Water Leak | Brightside Plumbing",
      snippet: "Rising water bills, damp patches and a meter that keeps ticking. Here's how to spot a hidden leak early.",
    },
    file: "robots.txt",
    code: `User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://brightside.example/sitemap_index.xml`,
  },
  {
    key: "schema",
    icon: FileText,
    title: "Structured data (schema)",
    badge: "Rich results",
    desc: "JSON-LD schema for your business, services, articles, FAQs and products, so Google understands exactly what each page is and can show richer search results.",
    why: "It makes your pages eligible for rich results such as FAQs, product details and business info.",
    serp: {
      path: "contact",
      title: "Contact Brightside Plumbing | Book a Plumber",
      snippet: "Open Monday to Saturday, 8am to 6pm. Call, message or book a visit online and we'll confirm a time slot.",
    },
    file: "schema.json",
    code: `{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Brightside Plumbing",
  "url": "https://brightside.example",
  "telephone": "+44 20 0000 0000",
  "openingHours": "Mo-Sa 08:00-18:00"
}`,
  },
  {
    key: "images",
    icon: Zap,
    title: "Optimised images",
    badge: "Performance",
    desc: "Images converted to WebP or AVIF, compressed, sized for each screen with srcset and lazy loaded below the fold, with descriptive file names and alt text.",
    why: "Lighter pages load faster, which helps Core Web Vitals and keeps visitors from leaving.",
    serp: {
      path: "gallery › bathroom-installations",
      title: "Bathroom Installations Gallery | Brightside Plumbing",
      snippet: "Before and after photos of recent bathroom fits, wet rooms and shower installs across the area.",
    },
    file: "template.php",
    code: `// WordPress adds srcset and sizes automatically,
// so each screen gets a right-sized image
echo wp_get_attachment_image($image_id, 'large', false, [
  'loading'  => 'lazy',
  'decoding' => 'async',
  'alt'      => 'New walk-in shower with glass screen',
]);`,
  },
  {
    key: "mobile-first",
    icon: Smartphone,
    title: "Mobile-first layouts",
    badge: "Mobile",
    desc: "Layouts designed for phones first, since Google ranks the mobile version of your site, with space reserved for images and embeds so the page doesn't jump while loading.",
    why: "Most visitors arrive on a phone, and a stable layout scores better on Core Web Vitals.",
    serp: {
      path: "areas › north-london",
      title: "Plumber in North London | Brightside Plumbing",
      snippet: "Local plumbers covering North London for repairs, installs and emergencies. Same-day visits where available.",
    },
    file: "style.css",
    code: `/* Text that scales smoothly with the screen */
body {
  font-size: clamp(1rem, 0.95rem + 0.4vw, 1.125rem);
}

/* Reserve space so embeds don't shift the page */
.video-embed {
  width: 100%;
  aspect-ratio: 16 / 9;
}`,
  },
];

export function WordPressSeoSection() {
  return (
    <section
      id="wordpress-seo"
      aria-labelledby="wp-seo-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            SEO built in
          </p>

          <h2
            id="wp-seo-heading"
            className="text-balance text-4xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              SEO
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Every WordPress site ships with Rank Math or Yoast configured, clean URLs, an XML sitemap, schema markup,
            compressed images and mobile-first layouts.
          </p>
        </header>

        <SeoFeatureTabs
          tabs={seoFeatures.map(({ key, title, badge, icon: Icon }) => ({
            key,
            label: title,
            badge,
            icon: <Icon className="h-4 w-4" aria-hidden="true" />,
          }))}
          panels={seoFeatures.map((f) => (
            <article
              key={f.key}
              aria-labelledby={`seo-${f.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-2xl shadow-slate-200/70 sm:p-10 dark:bg-slate-900/80 dark:shadow-black/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                {/* Details + example search result */}
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <f.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                        Included on every site
                      </p>
                      <h3
                        id={`seo-${f.key}-title`}
                        className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white"
                      >
                        {f.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">{f.desc}</p>

                  <p className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-50 px-4 py-3 text-sm dark:bg-slate-950">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    <span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Why it matters:{" "}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">{f.why}</span>
                    </span>
                  </p>

                  {/* Example of how a page can look in Google */}
                  <figure className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                    <figcaption className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Example search result
                    </figcaption>
                    <div className="space-y-1">
                      <p className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                        <Globe className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                        <span className="truncate">brightside.example › {f.serp.path}</span>
                      </p>
                      <p className="text-sm font-bold text-blue-700 sm:text-base dark:text-cyan-400">{f.serp.title}</p>
                      <p className="line-clamp-2 text-xs text-slate-600 dark:text-slate-300">{f.serp.snippet}</p>
                    </div>
                  </figure>

                  <p className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    Set up and checked before launch
                  </p>
                </div>

                {/* Code example (always dark, like an editor) */}
                <figure className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 font-mono text-xs text-slate-400">
                      <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="flex items-center gap-1 text-[11px] text-cyan-400">
                        <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                        {f.file}
                      </span>
                    </div>
                    <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-300">
                      <code>{f.code}</code>
                    </pre>
                    <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2.5 font-mono text-[11px] text-slate-400">
                      <span className="text-emerald-400">Example</span>
                      <span>Technical SEO</span>
                    </div>
                  </div>
                </figure>
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="wp-seo-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="wp-seo-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Want a WordPress site that&apos;s ready to rank?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              Technical SEO is set up on every build from day one, not added as an extra later.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Get an SEO-ready website quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}