import { ArrowRight, CheckCircle2, Gauge, Layout, Puzzle, RefreshCw, ShieldCheck, ShoppingBag, Sparkles, Wrench } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// "WordPress services" section for /services/wordpress-development.
// Server component, no client JS. One <h2>, an <h3> per service.
// id="whats-included" is the target of the hero's "See what's included" button.
// The CTA opens the hero's quote dialog (one dialog per page).

const wpServices = [
  {
    icon: Layout,
    title: "Custom WordPress websites",
    desc: "Websites built around your brand with Elementor, the Gutenberg block editor or a lightweight custom theme.",
    badge: "New builds",
  },
  {
    icon: ShoppingBag,
    title: "WooCommerce stores",
    desc: "WooCommerce development for online stores: product catalogues, Stripe and PayPal payments, and shipping rules set up for you.",
    badge: "E-commerce",
  },
  {
    icon: RefreshCw,
    title: "SEO-safe redesigns",
    desc: "A fresh design and faster site, with 301 redirects mapped and your content carried over to protect your existing rankings.",
    badge: "Redesign",
  },
  {
    icon: Gauge,
    title: "Speed and Core Web Vitals fixes",
    desc: "WordPress speed optimisation: slow database queries, heavy images, render-blocking scripts and layout shifts found and fixed.",
    badge: "Performance",
  },
  {
    icon: Wrench,
    title: "Bug fixes and security clean-up",
    desc: "Plugin conflicts, broken layouts, database errors and malware removal, followed by security hardening so it doesn't happen again.",
    badge: "Repair",
  },
  {
    icon: Puzzle,
    title: "Custom plugins and integrations",
    desc: "Custom plugins, CRM connections, webhooks and third-party APIs built around the way your business works.",
    badge: "Custom code",
  },
  {
    icon: ShieldCheck,
    title: "Monthly maintenance and care plans",
    desc: "Plugin and core updates, daily off-site backups, uptime monitoring, security patches and small content edits each month.",
    badge: "Care plan",
  },
];

export function WordPressServices() {
  return (
    <section
      id="whats-included"
      aria-labelledby="wp-services-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
    >
      {/* Ambient glow + faint grid: radial gradient instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.16),transparent_70%)]
            dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
        />
        <div
          className="absolute inset-0 bg-[size:4rem_4rem]
            bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
            dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Everything WordPress
          </p>

          <h2
            id="wp-services-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            WordPress{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              services
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            From new websites and WooCommerce stores to speed fixes and monthly maintenance.
          </p>
        </header>

        {/* 3 columns on desktop; the 7th card is centred on its own row */}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wpServices.map(({ icon: Icon, title, desc, badge }, idx) => (
            <li
              key={title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/40 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900/90 ${
                idx === wpServices.length - 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div>
                <div className="mb-6 flex items-center justify-between gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 dark:bg-slate-950 dark:text-cyan-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    {badge}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
              </div>

              <p className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-700 dark:border-slate-800/80 dark:text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                Fixed quote before work starts
              </p>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <aside
          aria-labelledby="wp-services-cta-heading"
          className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-xl sm:flex-row sm:p-10 dark:from-cyan-950/40 dark:via-slate-900 dark:to-blue-950/40 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h3 id="wp-services-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Need WordPress development or maintenance?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tell me about your site, speed goals or care plan needs and get a fixed quote.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:brightness-110">
            Get a WordPress quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}