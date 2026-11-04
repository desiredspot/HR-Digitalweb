import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ToolsFilter, type ToolCategoryTab } from "./Toolsfilter";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
// SEO notes
// - Server component: all 15 tools are in the initial HTML. The filter only hides
//   cards with CSS, so Google always sees the full list of platforms you work with.
// - One <h2> for the section and an <h3> per tool.

type Category = "dev" | "crm" | "marketing" | "analytics" | "design";

const categoryLabels: Record<Category, string> = {
  dev: "Web & CMS",
  crm: "Landing pages & CRM",
  marketing: "Email automation",
  analytics: "Analytics & SEO",
  design: "Design & reels",
};

const tabs: ToolCategoryTab[] = [
  { id: "all", label: "All tools" },
  ...(Object.keys(categoryLabels) as Category[]).map((id) => ({ id, label: categoryLabels[id] })),
];

const tools: { name: string; category: Category; desc: string; icon: string; highlight: string }[] = [
  // Web development and CMS
  { name: "Next.js", category: "dev", desc: "React framework for fast, server-rendered websites", icon: "⚡", highlight: "Framework" },
  { name: "React", category: "dev", desc: "Interactive UI library for scalable frontends", icon: "⚛️", highlight: "Frontend" },
  { name: "WordPress", category: "dev", desc: "Flexible CMS that's easy for clients to edit", icon: "🌐", highlight: "CMS" },
  { name: "Elementor", category: "dev", desc: "Visual page builder for WordPress sites", icon: "🎨", highlight: "Builder" },
  { name: "Sanity", category: "dev", desc: "Headless CMS for structured blog and page content", icon: "📝", highlight: "Headless CMS" },

  // Landing pages and CRM
  { name: "Unbounce", category: "crm", desc: "Conversion landing pages and A/B testing", icon: "🚀", highlight: "Funnels" },
  { name: "GoHighLevel", category: "crm", desc: "All-in-one CRM, SMS and pipeline automation", icon: "🔁", highlight: "CRM" },

  // Email and marketing automation
  { name: "Mailchimp", category: "marketing", desc: "Email newsletters and automated sequences", icon: "🐵", highlight: "Email" },
  { name: "Klaviyo", category: "marketing", desc: "E-commerce email and SMS nurture flows", icon: "✉️", highlight: "E-commerce" },

  // Analytics and SEO
  { name: "Google Analytics 4", category: "analytics", desc: "Conversion tracking and traffic analysis", icon: "📊", highlight: "Analytics" },
  { name: "Google Search Console", category: "analytics", desc: "SEO performance and indexing health", icon: "🔍", highlight: "SEO" },
  { name: "Google Tag Manager", category: "analytics", desc: "Event tracking and pixel setup", icon: "🏷️", highlight: "Tracking" },

  // Design and short video
  { name: "Figma", category: "design", desc: "UI/UX wireframes and clickable prototypes", icon: "📐", highlight: "UI design" },
  { name: "Canva", category: "design", desc: "Social media graphics and visual assets", icon: "🖼️", highlight: "Graphics" },
  { name: "CapCut", category: "design", desc: "Short-form reel editing with strong hooks", icon: "🎬", highlight: "Reels" },
];

// CSS-only filtering: hide cards whose category doesn't match the active tab.
const filterCss = (Object.keys(categoryLabels) as Category[])
  .map((c) => `.tools-filter[data-filter="${c}"] [data-category]:not([data-category="${c}"]){display:none}`)
  .join("");

export function ToolsSection() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8`}
    >
      <style dangerouslySetInnerHTML={{ __html: filterCss }} />

      {/* Ambient glow: radial gradient instead of a blur filter (same look, cheaper to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.20),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            My tech stack
          </p>

          <h2
            id="tools-heading"
            className="mb-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Tools and platforms{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              I use
            </span>
          </h2>

          <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            The frameworks, CRMs, analytics tools and media platforms I use to build websites and marketing systems
            that bring in customers.
          </p>
        </header>

        <ToolsFilter tabs={tabs}>
          {/* Tools grid */}
          <ul
            id="tools-grid"
            className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {tools.map((tool) => (
              <li
                key={tool.name}
                data-category={tool.category}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:bg-slate-50/90 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-5 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
              >
                {/* Top accent line, shown on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-300 opacity-0 transition-opacity group-hover:opacity-100"
                />

                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className="text-2xl transition-transform duration-200 group-hover:scale-110 sm:text-3xl"
                    >
                      {tool.icon}
                    </span>
                    <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      {tool.highlight}
                    </span>
                  </div>

                  <h3 className="mb-1 text-sm font-extrabold text-slate-900 transition-colors group-hover:text-cyan-600 sm:text-base dark:text-white dark:group-hover:text-cyan-400">
                    {tool.name}
                  </h3>

                  <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5 text-[10px] text-slate-500 dark:border-slate-800/80 dark:text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> In my stack
                  </span>
                  <span className="truncate text-[9px]">{categoryLabels[tool.category]}</span>
                </div>
              </li>
            ))}
          </ul>
        </ToolsFilter>

        {/* Integration banner */}
        <aside
          aria-labelledby="tools-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Already have a tech stack?
            </p>
            <h3 id="tools-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              I can work with the tools you already use.
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              Whether you&apos;re on GoHighLevel, WordPress or a custom Next.js site, I&apos;ll connect your website,
              forms and CRM without losing your existing data.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            Discuss your tech setup
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}