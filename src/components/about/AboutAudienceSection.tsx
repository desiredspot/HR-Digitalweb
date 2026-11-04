import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  UserCheck,
  Users,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";

// Server component, no client JS. One <h2> for the section, an <h3> per audience.
// Naming each audience in plain words also helps you rank for searches like
// "web developer for coaches" or "white-label GoHighLevel developer".

const audiences = [
  {
    title: "Small and medium businesses",
    desc: "Established businesses that want a modern website, better local search rankings and more visitors turning into enquiries.",
    icon: Building2,
    badge: "SMB growth",
    gradient: "from-cyan-500 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    capabilities: ["Fast Next.js or WordPress sites", "Local SEO and schema", "Lead capture forms"],
  },
  {
    title: "Coaches and consultants",
    desc: "Service providers who need landing pages that convert, automated booking calendars and email follow-up sequences.",
    icon: UserCheck,
    badge: "High-ticket services",
    gradient: "from-teal-400 to-emerald-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
    capabilities: ["Unbounce landing pages", "Calendar booking set-up", "Email welcome sequences"],
  },
  {
    title: "SaaS startups",
    desc: "Founders who need a fast marketing website, a sign-up funnel that converts and automated onboarding emails.",
    icon: Rocket,
    badge: "Tech and SaaS",
    gradient: "from-blue-500 to-indigo-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    capabilities: ["Fast Next.js marketing sites", "Sign-up funnel optimisation", "Automated onboarding flows"],
  },
  {
    title: "Local service businesses",
    desc: "Contractors, home services and local professionals who need missed-call text-back, Google Maps visibility and short reels.",
    icon: Wrench,
    badge: "Trades and services",
    gradient: "from-indigo-500 to-purple-600",
    tagColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
    capabilities: ["Missed-call text-back", "Google Business Profile SEO", "30 to 60 second reels"],
  },
  {
    title: "E-commerce brands",
    desc: "Online stores that want ad landing pages that convert, abandoned-checkout recovery and automated customer emails.",
    icon: ShoppingBag,
    badge: "D2C and retail",
    gradient: "from-purple-500 to-pink-500",
    tagColor: "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400",
    capabilities: ["Ad landing pages", "Klaviyo email flows", "Fast-loading product pages"],
  },
  {
    title: "Marketing agencies (white-label)",
    desc: "Design, SEO and ad agencies that need a dependable partner for Next.js builds, WordPress speed fixes and GoHighLevel set-ups, under NDA.",
    icon: Briefcase,
    badge: "White-label partner",
    gradient: "from-cyan-400 to-teal-400",
    tagColor: "border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300",
    capabilities: ["NDA signed before we start", "Delivered under your brand", "Fast turnaround"],
  },
];

export function AboutAudienceSection() {
  return (
    <section
      id="who-i-work-with"
      aria-labelledby="audience-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            Who I help
          </p>

          <h2
            id="audience-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Who I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              work with
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Small and medium businesses, coaches and consultants, SaaS startups, local service businesses, e-commerce
            brands, and marketing agencies that need a reliable white-label development partner.
          </p>
        </header>

        <ul className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ title, desc, icon: Icon, badge, gradient, tagColor, capabilities }) => (
            <li
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              />

              <div>
                <div className="mb-6 flex items-center justify-between gap-2">
                  <span className="rounded-2xl border border-cyan-200 bg-cyan-50 p-3.5 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:border-cyan-900/50 dark:bg-slate-900 dark:text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${tagColor}`}
                  >
                    {badge}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                  {title}
                </h3>
                <p className="mb-6 text-sm font-normal leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
              </div>

              <ul className="space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {cap}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Agency white-label banner */}
        <aside
          aria-labelledby="agency-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-700 md:justify-start dark:text-cyan-400">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" /> White-label for agencies
            </p>
            <h3 id="agency-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Need reliable development and CRM help for your agency clients?
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              I work behind the scenes under NDA, with fixed partner pricing and fast turnaround.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            Partner with me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}