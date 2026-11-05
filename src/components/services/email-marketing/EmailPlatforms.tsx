import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { serviceHref } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";

// "Platforms I work with" section for /services/email-marketing.
// Pure server component, no client JS. Platform names are real text (not logos),
// so they're readable by Google for searches like "Klaviyo setup" or "Mailchimp expert".

const platforms = [
  {
    key: "gohighlevel",
    name: "GoHighLevel",
    category: "All-in-one CRM and automation",
    badge: "SMS + email",
    desc: "SMS and email workflows, pipelines and trigger links, all in one place with your CRM.",
    features: ["LC Email and phone setup", "Multi-channel workflows", "Pipelines and lead tracking"],
    gradient: "from-blue-500 to-cyan-400",
    // Links to the dedicated GoHighLevel page
    href: serviceHref("gohighlevel-crm"),
  },
  {
    key: "mailchimp",
    name: "Mailchimp",
    category: "Newsletters and broadcasts",
    badge: "Popular",
    desc: "Custom templates, customer journeys and a tidy, well-tagged audience.",
    features: ["Custom HTML templates", "Audience tags and segments", "A/B testing"],
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    key: "klaviyo",
    name: "Klaviyo",
    category: "E-commerce email and SMS",
    badge: "E-commerce",
    desc: "Deep Shopify and WooCommerce integration for flows, SMS and predictive analytics.",
    features: ["Dynamic product blocks", "Abandoned cart flows", "RFM segmentation"],
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    key: "activecampaign",
    name: "ActiveCampaign",
    category: "Advanced marketing automation",
    badge: "Advanced flows",
    desc: "Multi-path automations, lead scoring and a built-in sales CRM.",
    features: ["Visual automation builder", "Behaviour and site tracking", "Sales CRM sync"],
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    key: "kit",
    name: "Kit (ConvertKit)",
    category: "Creators and digital products",
    badge: "Creators",
    desc: "Simple, text-first emails, paid newsletters and lead magnet delivery.",
    features: ["Paid newsletters", "Visual automations", "Landing pages and opt-in forms"],
    gradient: "from-rose-400 to-pink-500",
  },
  {
    key: "brevo",
    name: "Brevo (Sendinblue)",
    category: "Marketing and transactional email",
    badge: "Transactional",
    desc: "Marketing campaigns plus transactional email, SMS and WhatsApp in one account.",
    features: ["Transactional email (SMTP and API)", "SMS and WhatsApp campaigns", "Marketing automation"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    key: "mailerlite",
    name: "MailerLite",
    category: "Simple, lightweight email",
    badge: "Easy to use",
    desc: "Clean drag-and-drop emails, landing pages and straightforward automation.",
    features: ["Drag-and-drop editor", "RSS-to-email", "Pop-ups and embedded forms"],
    gradient: "from-green-400 to-emerald-500",
  },
];

export function EmailPlatforms() {
  return (
    <section
      id="platforms"
      aria-labelledby="email-platforms-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
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
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            Works with your platform
          </p>

          <h2
            id="email-platforms-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Platforms I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              work with
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            GoHighLevel, Mailchimp, Klaviyo, ActiveCampaign, Kit, Brevo and MailerLite. Already using one? I&apos;ll
            work inside it. Starting fresh? I&apos;ll help you pick the right fit.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => (
            <li
              key={p.key}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/20 dark:hover:bg-slate-900/90"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${p.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
              />

              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                    {p.category}
                  </span>
                  <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                    {p.badge}
                  </span>
                </div>

                <h3 className="mb-2 text-2xl font-black text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                  {p.name}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.desc}</p>

                <ul className="space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                  {p.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 font-mono text-[11px] text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
                <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Setup and migration
                </span>
                {p.href ? (
                  <Link
                    href={p.href}
                    className="font-bold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-400"
                  >
                    GoHighLevel services →
                  </Link>
                ) : (
                  <span>Supported</span>
                )}
              </div>
            </li>
          ))}

          {/* Other platforms */}
          <li className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-7 shadow-xl dark:from-slate-900 dark:via-cyan-950/20 dark:to-slate-900">
            <div className="space-y-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Using another provider?</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                I also work with SendGrid, Postmark, Drip, Constant Contact, custom SMTP and webhook or API
                connections.
              </p>
            </div>

            <QuoteDialogTrigger className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-colors hover:bg-cyan-300">
              Ask about your platform
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteDialogTrigger>
          </li>
        </ul>

        {/* Bottom CTA */}
        <aside
          aria-labelledby="email-platforms-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              id="email-platforms-cta-heading"
              className="flex items-center justify-center gap-2 text-xl font-black text-slate-900 sm:text-2xl md:justify-start dark:text-white"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              Need help choosing or switching platforms?
            </h3>
            <p className="text-xs text-slate-600 sm:text-sm dark:text-slate-400">
              I handle account setup, sender authentication (SPF, DKIM and DMARC) and moving your contacts and
              templates across.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-xs font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110 sm:text-sm">
            Get a platform setup quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}