import { Calendar, CheckCircle2, Gift, Layers, Rocket, Search, Share2, Sparkles } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// "Landing pages I create" section for /services/landing-page-design.
// Server component, no client JS. One <h2>, an <h3> per page type.
// Secondary keywords "PPC landing page design" and "lead generation landing page" appear in the copy.

const pageTypes = [
  {
    icon: Search,
    title: "PPC landing pages",
    desc: "PPC landing page design for Google Ads and Microsoft Ads, matched closely to your keywords and ads to help your Quality Score.",
    badge: "Paid search",
    channels: ["Google Ads", "Microsoft Ads"],
  },
  {
    icon: Share2,
    title: "Social ad pages",
    desc: "Pages designed for Meta, Instagram and LinkedIn ads, built to turn a quick scroll-stop into a lead.",
    badge: "Paid social",
    channels: ["Meta", "Instagram", "LinkedIn"],
  },
  {
    icon: Gift,
    title: "Lead magnet and opt-in pages",
    desc: "Lead generation landing pages for ebooks, webinars, guides and free trial sign-ups.",
    badge: "Lead gen",
    channels: ["Ebooks", "Webinars", "Free trials"],
  },
  {
    icon: Rocket,
    title: "Product launch and sales pages",
    desc: "Short or long-form sales pages with persuasive copy, built to launch products and drive direct sales.",
    badge: "High intent",
    channels: ["Product launches", "SaaS launches", "Direct sales"],
  },
  {
    icon: Calendar,
    title: "Event and webinar pages",
    desc: "Registration pages built to boost turnout, with add-to-calendar links and automatic reminder emails.",
    badge: "Events",
    channels: ["Live events", "Webinars", "Workshops"],
  },
  {
    icon: Layers,
    title: "Custom campaign funnels",
    desc: "Multi-step landing page funnels designed around your specific offer and audience.",
    badge: "Custom build",
    channels: ["Multi-step funnels", "B2B offers"],
  },
];

export function LandingPageTypes() {
  return (
    <section
      id="whats-included"
      aria-labelledby="lp-types-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Tailored to your campaign
          </p>

          <h2
            id="lp-types-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Landing pages{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              I create
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Custom Unbounce landing pages built for a specific ad platform, audience and conversion goal.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pageTypes.map(({ icon: Icon, title, desc, badge, channels }) => (
            <li
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/40 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900/90"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div>
                <div className="mb-6 flex items-center justify-between gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 shadow-md transition-transform group-hover:scale-110 dark:bg-slate-950 dark:text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    {badge}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
              </div>

              <ul className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 dark:border-slate-800/80" aria-label="Works for">
                {channels.map((channel) => (
                  <li
                    key={channel}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {channel}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}