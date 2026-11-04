import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Code2, Cpu, Target, Terminal, TrendingUp, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { FilterTabs } from "./FilterTabs";

// Server component. Only the filter pills use client JS (FilterTabs).
// All cards and the summary table are in the HTML, so every tool name is crawlable.

const skills = [
  {
    id: "dev",
    area: "Development",
    badge: "Web development",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    summary: "Fast, SEO-friendly websites and easy-to-edit content management.",
    tools: ["Next.js", "React", "JavaScript", "HTML/CSS", "WordPress", "Elementor", "Sanity CMS"],
  },
  {
    id: "conversion",
    area: "Conversion",
    badge: "Landing pages and funnels",
    icon: Target,
    gradient: "from-teal-400 to-emerald-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
    summary: "Landing pages and funnels designed to turn ad clicks into leads.",
    tools: ["Unbounce", "GoHighLevel funnels", "A/B testing", "Conversion tracking"],
  },
  {
    id: "crm",
    area: "CRM and automation",
    badge: "Lead follow-up",
    icon: Zap,
    gradient: "from-blue-500 to-indigo-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    summary: "Booking pipelines and automatic follow-up by SMS and email.",
    tools: ["GoHighLevel pipelines", "Workflows", "Calendars", "SMS and email automation"],
  },
  {
    id: "marketing",
    area: "Marketing",
    badge: "Traffic and content",
    icon: TrendingUp,
    gradient: "from-indigo-500 to-purple-600",
    tagColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
    summary: "SEO content, email campaigns, social posts and short-form video.",
    tools: ["Email marketing", "SEO content writing", "Social media content", "Reels editing"],
  },
  {
    id: "analytics",
    area: "Analytics",
    badge: "Data and tracking",
    icon: BarChart3,
    gradient: "from-purple-500 to-cyan-400",
    tagColor: "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400",
    summary: "Accurate tracking of leads and sales, and a clear view of your search performance.",
    tools: ["Google Analytics 4", "Google Search Console", "Google Tag Manager"],
  },
];

const tabs = [{ id: "all", label: "All skills" }, ...skills.map((s) => ({ id: s.id, label: s.area }))];

// CSS-only filtering: hide cards whose area doesn't match the active pill.
const filterCss = skills
  .map((s) => `.skills-filter[data-filter="${s.id}"] [data-area]:not([data-area="${s.id}"]){display:none}`)
  .join("");

export function AboutSkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      <style dangerouslySetInnerHTML={{ __html: filterCss }} />

      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            Skills and tools
          </p>

          <h2
            id="skills-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            My skills and{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              platforms
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            An overview of the development tools, marketing platforms, automation systems and analytics I work with.
          </p>
        </header>

        <FilterTabs tabs={tabs} scope="skills-filter" controls="skills-grid" label="Filter skills by area">
          <ul id="skills-grid" className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ id, area, badge, icon: Icon, gradient, tagColor, summary, tools }) => (
              <li
                key={id}
                data-area={id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${gradient} opacity-80 transition-opacity group-hover:opacity-100`}
                />

                <div>
                  <div className="mb-5 flex items-center justify-between gap-2">
                    <span className="rounded-2xl border border-cyan-200 bg-cyan-50 p-3.5 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:border-cyan-900/50 dark:bg-slate-900 dark:text-cyan-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${tagColor}`}
                    >
                      {badge}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                    {area}
                  </h3>
                  <p className="mb-6 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-400">{summary}</p>
                </div>

                <div>
                  <p className="mb-3 text-[11px] font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                    What I use
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <li
                        key={tool}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-800 transition-colors hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-cyan-500/40"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </FilterTabs>

        {/* Summary table */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-cyan-900/30 dark:bg-slate-900/80 dark:shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900/90">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <h3 id="skills-table-heading" className="text-base font-extrabold text-slate-900 dark:text-white">
                Full skills overview
              </h3>
            </div>
            <span className="hidden text-xs font-semibold uppercase tracking-wider text-cyan-700 sm:block dark:text-cyan-400">
              {siteConfig.name} stack
            </span>
          </div>

          <div className="overflow-x-auto">
            <table aria-labelledby="skills-table-heading" className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/60 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-950/40 dark:text-cyan-400">
                  <th scope="col" className="w-1/3 px-6 py-4">
                    Area
                  </th>
                  <th scope="col" className="w-2/3 px-6 py-4">
                    What I use
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-medium dark:divide-slate-800/80">
                {skills.map((row) => (
                  <tr key={row.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <th scope="row" className="px-6 py-4 font-bold text-slate-900 dark:text-slate-100">
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                        {row.area}
                      </span>
                    </th>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.tools.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom banner */}
        <aside
          aria-labelledby="skills-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Need something connected?
            </p>
            <h3 id="skills-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Development, CRM automation and marketing, all from one person.
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Book a free discovery call and I&apos;ll review your current tools and growth goals.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            Talk to me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}