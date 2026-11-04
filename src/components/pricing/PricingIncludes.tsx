import Link from "next/link";
import { ArrowRight, FileCheck, KeyRound, LifeBuoy, RefreshCw, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { PackageIncludesSplit } from "./PackageIncludesSplit";

// "Every package includes" section for /pricing.
// Server component; only the accordion and sticky detail panel are client-side
// (PackageIncludesSplit). Every item, description and checklist is in the HTML.
// Keep these promises TRUE: they should match what's in your proposals and contract.

const items = [
  {
    key: "quote",
    icon: FileCheck,
    title: "Fixed quote and clear scope",
    badge: "Fixed price",
    summary: "A written proposal with the price and deliverables agreed before any work starts.",
    headline: "No surprises and no hourly invoices",
    desc: "Every project starts with a written plan: what's included, the timeline and one fixed price. You know exactly what you're paying for and when it will be delivered.",
    checklist: [
      "Itemised list of deliverables",
      "Fixed price in USD or INR",
      "Clear milestone dates",
      "Extras priced upfront if your scope grows",
    ],
  },
  {
    key: "mobile-seo",
    icon: Smartphone,
    title: "Mobile-friendly, SEO-ready delivery",
    badge: "Built to rank",
    summary: "Works on every screen size, with speed, Core Web Vitals and meta tags handled.",
    headline: "Fast, and easy for Google to understand",
    desc: "Everything is built with clean code, a proper heading structure, compressed images and structured data, so Google can crawl and understand your pages from day one.",
    checklist: [
      "Responsive on phones, tablets and desktops",
      "PageSpeed and Core Web Vitals checked",
      "Keyword-matched titles and meta descriptions",
      "XML sitemap and Search Console set up",
    ],
  },
  {
    key: "revisions",
    icon: RefreshCw,
    title: "Revision rounds stated in your proposal",
    badge: "Your feedback",
    summary: "Set points to review and request changes, from first designs to the final preview.",
    headline: "Your feedback is part of the schedule",
    desc: "Nothing goes live without your sign-off. Review rounds are built in at the design, copy and preview stages, and your proposal says exactly how many are included.",
    checklist: [
      "Wireframe and design reviews",
      "Copy and content feedback rounds",
      "A private preview link before launch",
      "One set of combined feedback per round",
    ],
  },
  {
    key: "support",
    icon: LifeBuoy,
    title: "30 days of support after launch",
    badge: "After launch",
    summary: "A month of help after go-live for bug fixes, small tweaks and questions.",
    headline: "Help when you need it as you go live",
    desc: "For 30 days after launch, I fix any bugs in what I built and help with small text or image updates at no extra cost, so you're never left on your own.",
    checklist: [
      "Bug fixes for anything I built",
      "Small text and image tweaks",
      "A recorded training video for your team",
      "Analytics and goal tracking checked",
    ],
  },
  {
    key: "ownership",
    icon: KeyRound,
    title: "Full ownership of code, content, accounts and files",
    badge: "Yours to keep",
    summary: "Once the project is paid for, everything I create for you belongs to you.",
    headline: "You own everything I build for you",
    desc: "When the project is complete and paid, the code, designs, content and admin access are all yours. No licence fees, no being locked into my hosting and no contracts you can't leave.",
    checklist: [
      "Ownership of the custom code and designs",
      "Admin access to your domain and hosting",
      "Full admin access to your CRM and email platform",
      "Original design files and copy handed over",
    ],
  },
];

export function PricingIncludes() {
  return (
    <section
      id="every-package"
      aria-labelledby="pricing-includes-heading"
      className={`${sectionBg.alt} ${sectionDivider} relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24`}
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

      <div className="relative mx-auto max-w-6xl space-y-16">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Included as standard
          </p>

          <h2
            id="pricing-includes-heading"
            className="text-balance text-3xl font-black leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Every package{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              includes
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Whichever service or package you choose, these are included in every {siteConfig.name} project.
          </p>
        </header>

        <PackageIncludesSplit
          items={items.map(({ icon: Icon, ...item }) => ({
            ...item,
            icon: <Icon className="h-6 w-6" aria-hidden="true" />,
            iconLarge: <Icon className="h-6 w-6" aria-hidden="true" />,
          }))}
          cta={
            <div className="space-y-3 border-t border-slate-200 pt-6 dark:border-slate-800">
              <p className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Ready to get started?
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Book a free 30-minute call and get your written fixed plan within 48 hours.
              </p>
              <Link
                href={siteConfig.bookingUrl}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:brightness-110"
              >
                Book a free discovery call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
}