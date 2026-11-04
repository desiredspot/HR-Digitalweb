import { BarChart3, CheckCircle2, Eye, Rocket, Search, Send, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// "Included in every build" section for /services/web-development.
// Server component, no client JS. One <h2>, an <h3> per deliverable.

const deliverables = [
  {
    icon: Smartphone,
    title: "Mobile-first design",
    desc: "Layouts that adapt to every screen size, with touch-friendly buttons and menus.",
  },
  {
    icon: Search,
    title: "On-page SEO",
    desc: "Meta tags, Open Graph previews, XML sitemap, robots.txt and structured data (JSON-LD schema).",
  },
  {
    icon: Zap,
    title: "Image optimisation and lazy loading",
    desc: "Images converted to modern formats (WebP/AVIF), compressed and loaded only when needed.",
  },
  {
    icon: Eye,
    title: "Accessibility best practices",
    desc: "Readable colour contrast (WCAG AA), proper headings for screen readers and clear keyboard focus.",
  },
  {
    icon: BarChart3,
    title: "GA4 and Search Console setup",
    desc: "Google Analytics 4 with lead and click tracking, plus a verified Google Search Console.",
  },
  {
    icon: Send,
    title: "Forms connected to your CRM or inbox",
    desc: "Leads sent straight to GoHighLevel, your email inbox or any tool that accepts a webhook.",
  },
  {
    icon: Rocket,
    title: "Deployment on Vercel",
    desc: "Fast global hosting, automatic deploys from Git, preview links for every change and free SSL.",
  },
  {
    icon: ShieldCheck,
    title: "30 days of support after launch",
    desc: "Small tweaks, bug fixes and performance checks for the first month after your site goes live.",
  },
];

export function IncludedInEveryBuild() {
  return (
    <section
      id="included"
      aria-labelledby="included-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.18),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl space-y-10">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            Standard with every project
          </p>

          <h2
            id="included-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Included in{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              every build
            </span>
          </h2>
        </header>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/40 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900/90"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:text-cyan-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-base font-bold leading-snug text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}