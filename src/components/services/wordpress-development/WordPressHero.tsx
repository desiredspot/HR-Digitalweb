import { ArrowDown, ArrowRight, Code2, Gauge, Lock, Sliders } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";

// Hero for /services/wordpress-development.
// Server component; only the quote button and dialog are client-side.
// Primary keyword "WordPress website development" is in the H1. Secondary keywords
// (WordPress developer for hire, WordPress speed optimisation, Elementor website design,
// WooCommerce development) appear naturally in the intro and cards.

// The section right after this hero should have this id (the second button scrolls to it).
const NEXT_SECTION_ID = "whats-included";

const highlights = [
  {
    icon: Gauge,
    title: "Fast loading",
    desc: "Lean themes, compressed images and caching, with WordPress speed optimisation aiming for a 90+ PageSpeed score.",
  },
  {
    icon: Lock,
    title: "Security hardened",
    desc: "Only the plugins you need, kept up to date, plus login protection, firewall and daily backups.",
  },
  {
    icon: Sliders,
    title: "Easy to manage",
    desc: "Elementor or custom blocks set up so your team can update pages without breaking the design.",
  },
];

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function WordPressHero() {
  return (
    <section
      aria-labelledby="wp-hero-heading"
      className={`${sectionBg.base} relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + faint grid: radial gradient instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_30%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_30%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div
          className="absolute inset-0 bg-[size:4rem_4rem]
            bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
            dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]"
        />
      </div>

      <div className="relative mx-auto max-w-5xl space-y-12 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <Code2 className="h-4 w-4" aria-hidden="true" />
          Lean, high-performance WordPress
        </p>

        <h1
          id="wp-hero-heading"
          className="mx-auto max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          WordPress website development that&apos;s{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            fast, secure
          </span>{" "}
          and easy to manage
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          WordPress is flexible and simple to update, but many WordPress sites are slow, overloaded with plugins and
          hard to maintain. I build lean, professional WordPress websites you&apos;ll actually enjoy managing, from
          Elementor website design to WooCommerce development, speed fixes and ongoing care. A WordPress developer for
          hire who gets it right the first time.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <ServiceQuoteDialog
            service="WordPress website development"
            title="Request a WordPress quote"
            description="Tell me about your website, store or fix, and I'll come back with a fixed quote."
            icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Get a WordPress quote
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

        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-6 pt-10 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 text-left transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900/90"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 dark:bg-slate-950 dark:text-cyan-400">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-base font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
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