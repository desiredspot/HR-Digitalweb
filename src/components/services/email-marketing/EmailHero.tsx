import { ArrowDown, ArrowRight, Mail, MousePointerClick, Send, ShieldCheck, TrendingUp } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { ServiceQuoteDialog } from "@/components/services/quote/ServiceQuoteDialog";
import { EmailPreviewTabs } from "./EmailPreviewTabs";

// Hero for /services/email-marketing.
// Server component; only the quote dialog and the flows/campaigns toggle are client-side.
// Primary keyword "email marketing services" is in the H1. Secondary keywords
// (email automation, newsletter writing, email sequence copywriting,
// Mailchimp and Klaviyo setup) appear naturally in the intro, preview and cards.

// The section right after this hero should have this id (the second button scrolls to it).
const NEXT_SECTION_ID = "email-flows";

const highlights = [
  {
    icon: ShieldCheck,
    title: "A channel you own",
    desc: "No algorithm changes or rising ad costs between you and your audience. Your list is yours, and you can reach it any time.",
  },
  {
    icon: TrendingUp,
    title: "Sales on autopilot",
    desc: "Email automation like welcome, abandoned cart and post-purchase flows keeps selling in the background, long after you set it up.",
  },
  {
    icon: MousePointerClick,
    title: "Copy and design that convert",
    desc: "Email sequence copywriting and newsletter writing in your brand voice, in clean templates that look good on every phone.",
  },
];

// What the preview shows: the emails you get, not invented performance numbers.
const flows = [
  { name: "Welcome series", when: "When someone subscribes", goal: "Introduce your brand and make the first sale" },
  { name: "Abandoned cart", when: "When a cart is left behind", goal: "Bring shoppers back to finish checking out" },
  { name: "Post-purchase", when: "After an order", goal: "Thank, onboard and ask for a review" },
  { name: "Win-back", when: "After a few quiet months", goal: "Re-engage customers who've gone cold" },
];

const campaigns = [
  { name: "Newsletter", when: "Weekly or monthly", goal: "Stay top of mind with useful, on-brand content" },
  {
    name: "Product launch",
    when: "When something new is ready",
    goal: "Build anticipation and drive launch-day sales",
  },
  { name: "Promotions", when: "Seasonal or flash sales", goal: "Turn offers into revenue without over-discounting" },
  { name: "Announcements", when: "As news happens", goal: "Share updates, events and wins with your list" },
];

function PreviewGrid({ items }: { items: typeof flows }) {
  return (
    <ul className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.name}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-950/80"
        >
          <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{item.when}</p>
          <p className="mt-1 text-lg font-black text-slate-900 dark:text-white">{item.name}</p>
          <p className="mt-1 text-xs leading-relaxed text-cyan-700 dark:text-cyan-400">{item.goal}</p>
        </li>
      ))}
    </ul>
  );
}

const primaryBtn =
  "group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function EmailHero() {
  return (
    <section
      aria-labelledby="email-hero-heading"
      className={`${sectionBg.base} relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_30%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_30%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email marketing
        </p>

        <h1
          id="email-hero-heading"
          className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          Email marketing services that turn subscribers into{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            customers
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          Email is the one channel you fully own. No algorithm decides who sees it. I plan, write, design and automate
          emails that build trust and bring in sales month after month, from welcome sequences and newsletters to full
          Mailchimp and Klaviyo setup.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <ServiceQuoteDialog
            service="Email marketing"
            title="Request an email marketing quote"
            description="Tell me about your list, your platform and the emails you want, and I'll come back with a fixed quote."
            icon={<Mail className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            Get an email marketing quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <a
            href={`#${NEXT_SECTION_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Explore email flows
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Preview of what you get: automated flows vs one-off campaigns */}
        <div className="mx-auto max-w-5xl pt-2 text-left">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />

            <EmailPreviewTabs
              header={
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      Your email system
                    </p>
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                      Automated flows and campaigns
                    </h2>
                  </div>
                </div>
              }
              labels={["Automated flows", "Campaigns"]}
              panels={[<PreviewGrid key="flows" items={flows} />, <PreviewGrid key="campaigns" items={campaigns} />]}
            />
          </div>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 text-left shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100 dark:bg-slate-950 dark:text-cyan-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
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