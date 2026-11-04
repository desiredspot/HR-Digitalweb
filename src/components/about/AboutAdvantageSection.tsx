import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Flame, HeartHandshake, ShieldCheck, Tag, UserCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { AdvantageTabs } from "./AdvantageTabs";

// Server component. Only the tab switching runs on the client (AdvantageTabs).
// All four panels are rendered into the HTML, so every word is crawlable.

// TODO: only promise a project cap you'll actually stick to.
const MAX_ACTIVE_PROJECTS = 3;

const advantages = [
  {
    title: "My full attention",
    subtitle: "A small number of clients at a time",
    desc: `You're not account number 247 in a busy agency queue. I keep my active projects to a small number, so your build moves quickly, questions get answered fast and nothing gets stuck waiting.`,
    icon: HeartHandshake,
    badge: "Fully focused",
    stat: `Max ${MAX_ACTIVE_PROJECTS}`,
    statLabel: "Projects at a time",
    highlights: [
      "Your project gets attention every working day",
      "Talk to me directly on WhatsApp, Slack or email",
      "Feedback and changes handled within 24 hours",
    ],
  },
  {
    title: "Work I want to show off",
    subtitle: "Portfolio-quality on every project",
    desc: "Every project I take on could become my next case study. I care about your conversion rate and page speed because your results are what build my reputation.",
    icon: Award,
    badge: "Case-study quality",
    stat: "90+",
    statLabel: "PageSpeed score I aim for",
    highlights: [
      "Careful design and clean code",
      "Conversion-focused copy included",
      "Built to be found on Google",
    ],
  },
  {
    title: "Experienced work, direct access",
    subtitle: "No middlemen",
    desc: "You talk directly to me, the person designing and building your site. No hand-offs to juniors, no account managers and nothing lost in translation.",
    icon: UserCheck,
    badge: "Direct access",
    stat: "0",
    statLabel: "Account managers in between",
    highlights: [
      "You speak with the person doing the work",
      "Quick milestone reviews",
      "No agency layers or hand-offs",
    ],
  },
  {
    title: "Fair early-stage pricing",
    subtitle: "Fixed price, agreed up front",
    desc: "Get professional Next.js, WordPress and GoHighLevel work at fair launch rates while I build my client portfolio.",
    icon: Tag,
    badge: "Launch rates",
    stat: "Fixed",
    statLabel: "Quotes with no surprises",
    highlights: [
      "Fixed price agreed before work starts",
      "You own the code and content",
      "Agency-quality work without agency overheads",
    ],
  },
];

export function AboutAdvantageSection() {
  return (
    <section
      id="why-me"
      aria-labelledby="advantage-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" />
            The early-client advantage
          </p>

          <h2
            id="advantage-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Why work with a{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              new freelancer?
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            Because you get my full attention. Every project I take on is one I want to show off. You get experienced
            work, direct communication with the person building your site, and fair pricing while I grow my portfolio.
          </p>
        </header>

        <AdvantageTabs
          tabs={advantages.map(({ title, subtitle, icon: Icon }) => ({
            title,
            subtitle,
            icon: <Icon className="h-5 w-5" />,
          }))}
          panels={advantages.map((item) => (
            <article
              key={item.title}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-cyan-300 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 p-8 shadow-2xl shadow-slate-200/80 sm:p-10 dark:border-cyan-500/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-cyan-950/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                    {item.badge}
                  </span>

                  <p className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-right shadow-sm dark:border-cyan-900/40 dark:bg-slate-900/80 dark:shadow-none">
                    <span className="block bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-xl font-black leading-none text-transparent dark:from-cyan-400 dark:to-teal-300">
                      {item.stat}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{item.statLabel}</span>
                  </p>
                </div>

                <h3 className="mb-3 text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">{item.title}</h3>
                <p className="mb-8 text-sm font-normal leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                  {item.desc}
                </p>

                <ul className="mb-8 space-y-3">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/20 p-1 text-cyan-600 dark:text-cyan-400">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-slate-800">
                <p className="flex items-center gap-2 text-xs font-medium text-cyan-700 dark:text-cyan-400">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Fixed price, direct access, no lock-in
                </p>
                <Link
                  href={siteConfig.bookingUrl}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:brightness-110 sm:w-auto"
                >
                  Start your project
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        />

        {/* Bottom banner */}
        <aside
          aria-labelledby="advantage-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:bg-slate-900/70 dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Want this kind of attention?
            </p>
            <h3 id="advantage-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Let&apos;s make your project my next case study.
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Book a free strategy call to talk about your website, CRM automation or sales funnel.
            </p>
          </div>

          <Link
            href={siteConfig.bookingUrl}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}