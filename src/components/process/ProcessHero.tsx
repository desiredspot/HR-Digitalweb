import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Code2,
  Eye,
  FileCheck,
  Headphones,
  Layout,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg } from "@/lib/section-bg";

// Hero for /process.
// Pure server component, no client JS. Each step's extra detail uses a native
// <details> element (instead of a JS modal), so all of it is in the HTML for Google
// and works without JavaScript.
// Primary keyword "website development process" is in the H1. Secondary keywords
// (web design process, how freelance projects work, digital marketing process)
// appear naturally in the intro and step details.

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Free discovery call (30 minutes)",
    summary: "Your business, goals, audience, competitors and timeline.",
    timeframe: "30 mins",
    badge: "Discovery",
    details:
      "We talk through your goals, who your customers are, what competitors are doing, the features you need and when you'd like to launch, so we agree on the basics before I suggest anything.",
    deliverable: "Call notes and a first outline of the scope",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Plan and fixed quote",
    summary: "Within 48 hours: a written plan, sitemap or campaign outline, timeline and price.",
    timeframe: "48 hours",
    badge: "Fixed quote",
    details:
      "Within 48 hours you get a written proposal with the sitemap or campaign outline, what's included, the milestones, the timeline and one fixed price.",
    deliverable: "Written proposal with a fixed price",
  },
  {
    number: "03",
    icon: Layout,
    title: "Design and content",
    summary: "Wireframes, mock-ups and copy shared for your feedback before we build.",
    timeframe: "Design",
    badge: "Your feedback",
    details:
      "I create wireframes, visual mock-ups and draft copy, then share preview links so you can give feedback and approve the direction before any development starts.",
    deliverable: "Mock-ups and copy drafts to review",
  },
  {
    number: "04",
    icon: Code2,
    title: "Build and test",
    summary: "Development, integrations, tracking and testing on every device.",
    timeframe: "Build",
    badge: "Testing",
    details:
      "Clean, fast development with analytics, forms and CRM connected, speed optimised and tested on mobile, tablet and desktop before you see the finished version.",
    deliverable: "A private preview link to test everything",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch and handover",
    summary: "Go-live, SEO checks, analytics and a recorded training video.",
    timeframe: "Go-live",
    badge: "Handover",
    details:
      "I connect your domain, launch the site, check Google Search Console and analytics, and record a video walkthrough showing your team how to update content.",
    deliverable: "Your live site plus a training video",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Grow",
    summary: "Optional monthly support for content, email, social media and CRM.",
    timeframe: "Ongoing",
    badge: "Monthly",
    details:
      "Keep momentum after launch with optional monthly support: new content, email newsletters, social media posts and CRM tweaks, part of a digital marketing process that keeps improving.",
    deliverable: "A monthly summary of work and next steps",
  },
];

const promises = [
  {
    icon: Eye,
    title: "Always in the loop",
    desc: "You know where your project stands at every step, with no guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed price, agreed upfront",
    desc: "A written quote before any work starts, so there are no surprise invoices.",
  },
  {
    icon: Headphones,
    title: "Talk to the person doing the work",
    desc: "You deal with me directly, not an account manager passing messages along.",
  },
];

export function ProcessHero() {
  return (
    <section
      aria-labelledby="process-hero-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glow + dot grid: radial gradients instead of a blur filter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[radial-gradient(55%_45%_at_50%_25%,rgba(103,232,249,0.25),transparent_70%)]
            dark:bg-[radial-gradient(55%_45%_at_50%_25%,rgba(6,182,212,0.18),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-14 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-cyan-700 shadow-lg shadow-cyan-500/10 sm:text-sm dark:text-cyan-400">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          How I work
        </p>

        <h1
          id="process-hero-heading"
          className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          A simple, transparent website development process{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
            from first call to launch
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          You always know what&apos;s happening, what comes next and what it costs. Whether it&apos;s a website, a
          landing page or a marketing project, every {siteConfig.name} project follows the same 6 steps, so you know
          exactly how freelance projects work with me before we start.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Link
            href={siteConfig.bookingUrl}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto"
          >
            Book a free discovery call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <a
            href="#steps"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            See all 6 steps
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* The 6 steps */}
        <ol id="steps" className="mx-auto grid max-w-6xl scroll-mt-24 grid-cols-1 gap-6 pt-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, summary, timeframe, badge, details, deliverable }) => (
            <li
              key={number}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/20 dark:hover:bg-slate-900/90"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-50 text-lg font-black text-cyan-700 transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100 dark:bg-slate-950 dark:text-cyan-400"
                  >
                    {number}
                  </span>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    {timeframe}
                  </span>
                </div>

                <h2 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                  <span className="sr-only">Step {number}: </span>
                  {title}
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{summary}</p>
              </div>

              {/* Extra detail, no JS needed */}
              <details className="group/details border-t border-slate-100 pt-4 text-xs dark:border-slate-800/80">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded font-mono text-[11px] text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:text-slate-400 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    {badge}
                  </span>
                  <span className="flex items-center gap-1 font-sans text-xs font-bold text-cyan-700 dark:text-cyan-400">
                    Details
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform group-open/details:rotate-180"
                      aria-hidden="true"
                    />
                  </span>
                </summary>

                <div className="space-y-3 pt-4">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{details}</p>
                  <p className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                    <span className="block font-bold text-cyan-700 dark:text-cyan-400">You get</span>
                    <span className="text-slate-700 dark:text-slate-300">{deliverable}</span>
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ol>

        {/* What you can count on */}
        <div className="mx-auto max-w-6xl pt-4 text-left">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8 dark:bg-slate-900/80 dark:shadow-black/40">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
            />
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {promises.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="shrink-0 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}