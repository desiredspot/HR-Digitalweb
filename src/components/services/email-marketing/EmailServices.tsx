import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Newspaper,
  Rocket,
  Send,
  ShoppingBag,
  Sliders,
  Sparkles,
  Target,
  Terminal,
} from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { EmailServiceTabs } from "./EmailServiceTabs";

// "What I do" section for /services/email-marketing.
// Server component; only the pill switching is client-side (EmailServiceTabs).
// Every service panel is in the HTML. id="email-flows" is the target of the hero's
// "Explore email flows" button. Buttons open the hero's quote dialog.
//
// The window on the right shows how each flow or campaign is laid out (or real HTML/DNS
// where that applies), labelled as an example.

const emailServices = [
  {
    key: "welcome-sequences",
    icon: Send,
    title: "Welcome sequences",
    badge: "First sale",
    bestFor: "Turning new subscribers into first-time buyers",
    desc: "Your welcome emails are usually the most-opened emails you'll ever send. I write and automate a short series that introduces your brand, builds trust and gives new subscribers a reason to buy.",
    highlights: [
      "Sends the moment someone subscribes",
      "First-order offer or lead magnet delivery",
      "Your brand story and why people choose you",
    ],
    file: "flow: welcome-series",
    code: `Trigger:  Subscribes to your list

Email 1   Send now      Welcome + your promise
Email 2   Wait 1 day    Your story and social proof
Email 3   Wait 2 days   First-order offer
          ↳ Skip if they've already bought`,
  },
  {
    key: "nurture-sequences",
    icon: Flame,
    title: "Nurture sequences",
    badge: "Lead warm-up",
    bestFor: "Service businesses with a longer path to a sale",
    desc: "Not every lead buys on day one. Email sequence copywriting that teaches, answers common objections and shares results, so you're the obvious choice when they're ready.",
    highlights: [
      "Helpful, value-first emails",
      "Objection handling and case studies",
      "Tags or alerts when a lead shows buying intent",
    ],
    file: "flow: lead-nurture",
    code: `Trigger:  Downloads your guide

Email 1   Send now      Deliver the guide
Email 2   Wait 3 days   The #1 mistake to avoid
Email 3   Wait 4 days   Case study
Email 4   Wait 5 days   Book a call
          ↳ Clicked "book"? Tag: warm-lead`,
  },
  {
    key: "newsletters",
    icon: Newspaper,
    title: "Newsletters",
    badge: "Retention",
    bestFor: "Staying top of mind with customers and leads",
    desc: "Newsletter writing and design on a regular schedule, weekly or monthly, with content people actually want to open and links that bring them back to your site.",
    highlights: [
      "A reusable template in your brand style",
      "Subject lines written to get opened",
      "Planned content calendar and link tracking",
    ],
    file: "newsletter.html",
    code: `<!-- Table-based layout: renders reliably in
     Gmail, Outlook and Apple Mail -->
<table role="presentation" width="100%">
  <tr>
    <td align="center" style="padding:24px;
        font-family:Arial,sans-serif;">
      <h1>This month's top tips</h1>
    </td>
  </tr>
</table>`,
  },
  {
    key: "launch-promos",
    icon: Rocket,
    title: "Launch and promo campaigns",
    badge: "Campaigns",
    bestFor: "Product launches, seasonal sales and limited offers",
    desc: "A planned campaign calendar for launches, holidays and flash sales, with teaser, launch and last-chance emails and smart resends to the people who missed the first one.",
    highlights: [
      "Teaser, launch and last-chance emails",
      "Resends to subscribers who didn't open",
      "Countdown timers for real deadlines",
    ],
    file: "campaign: spring-sale",
    code: `Day 1   Teaser         "Something's coming..."
Day 3   Launch         Offer goes live
Day 4   Resend         New subject → non-openers
Day 5   Last chance    "Ends tonight"
        ↳ Exclude anyone who's already bought`,
  },
  {
    key: "ecommerce-flows",
    icon: ShoppingBag,
    title: "E-commerce flows",
    badge: "Store automations",
    bestFor: "Online stores on Shopify or WooCommerce",
    desc: "Email automation that recovers abandoned carts, thanks and cross-sells after each order, asks for reviews and wins back customers who've gone quiet.",
    highlights: [
      "Abandoned cart and browse abandonment",
      "Post-purchase thank you, cross-sell and review request",
      "Win-back for lapsed customers",
    ],
    file: "flow: abandoned-cart",
    code: `Trigger:  Checkout started, no order

Email 1   Wait 1 hour    "Did you forget something?"
Email 2   Wait 1 day     Reviews of the items in cart
Email 3   Wait 2 days    Small incentive (optional)
          ↳ Exit as soon as they order`,
  },
  {
    key: "deliverability",
    icon: Sliders,
    title: "Setup, segmentation and deliverability",
    badge: "Foundations",
    bestFor: "New lists, platform moves and emails landing in spam",
    desc: "Mailchimp and Klaviyo setup done properly: sender authentication (SPF, DKIM and DMARC), segments based on behaviour and purchase history, and regular list clean-ups.",
    highlights: [
      "SPF, DKIM and DMARC for your sending domain",
      "Segments by engagement and purchase history",
      "Inactive contacts cleaned to protect your sender reputation",
    ],
    file: "DNS records",
    code: `# Your sending domain (values come from
# your email platform's setup screen)
yourdomain.com          TXT  "v=spf1 include:<platform> ~all"
k1._domainkey           CNAME  <platform DKIM record>

# Start with monitoring, then tighten
_dmarc.yourdomain.com   TXT  "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com"`,
  },
];

export function EmailServices() {
  return (
    <section
      id="email-flows"
      aria-labelledby="email-services-heading"
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
            Full-service email marketing
          </p>

          <h2
            id="email-services-heading"
            className="text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              do
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            From welcome sequences to deliverability setup, I build email systems that bring in sales month after month. Pick a service to see
            what&apos;s involved.
          </p>
        </header>

        <EmailServiceTabs
          tabs={emailServices.map(({ key, title, icon: Icon }) => ({
            key,
            label: title,
            icon: <Icon className="h-4 w-4" aria-hidden="true" />,
          }))}
          panels={emailServices.map((s) => (
            <article
              key={s.key}
              aria-labelledby={`email-${s.key}-title`}
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
                          id={`email-${s.key}-title`}
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
                      What&apos;s involved
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
                      Build this for me
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </QuoteDialogTrigger>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Copy, design and automation included</span>
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
                    <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-300">
                      <code>{s.code}</code>
                    </pre>
                    <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2.5 font-mono text-[11px] text-slate-400">
                      <span className="text-emerald-400">Example</span>
                      <span>Mailchimp · Klaviyo · GHL</span>
                    </div>
                  </div>
                </figure>
              </div>
            </article>
          ))}
        />

        {/* Bottom CTA */}
        <aside
          aria-labelledby="email-services-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-8 shadow-xl sm:p-10 md:flex-row dark:bg-slate-900/80 dark:shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Email strategy
            </p>
            <h3 id="email-services-cta-heading" className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
              Ready to turn your email list into revenue?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tell me about your list and platform, and I&apos;ll plan the sequences, campaigns and setup you need.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:brightness-110">
            Get an email marketing quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}