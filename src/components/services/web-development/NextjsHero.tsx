import { ArrowDown, ArrowRight, CheckCircle2, Code2, Gauge, PhoneCall, Search, ShieldCheck, Sparkles, Terminal, Zap } from "lucide-react";
import { sectionBg } from "@/lib/section-bg";
import { QuoteDialogTrigger, ServiceQuoteDialog } from "../quote/ServiceQuoteDialog";

// Hero for /services/web-development.
// Server component; only the quote buttons and dialog are client-side.
// Primary keyword "Next.js development services" is in the H1; secondary keywords
// (hire a Next.js developer, custom web app development, React website development,
// fast SEO-friendly website) appear naturally in the copy below.

// The section right after this hero should have this id (the "See what's included" button scrolls to it).
const NEXT_SECTION_ID = "whats-included";

const keyFeatures = [
  "Server-side rendering for fast first loads",
  "Built to pass Core Web Vitals",
  "Custom React website development with clean, typed code",
  "Lead forms connected to your CRM",
];

const metrics = [
  { value: "90+", label: "PageSpeed score I aim for", icon: Gauge },
  { value: "CWV", label: "Built to pass Core Web Vitals", icon: Zap },
  { value: "Schema", label: "Structured data included", icon: Search },
];

const primaryBtn =
  "group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-9 py-4.5 text-base font-extrabold text-slate-950 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95 motion-reduce:hover:scale-100 sm:w-auto";

export function NextjsHero() {
  return (
    <section
      aria-labelledby="nextjs-hero-heading"
      className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8 lg:pt-40`}
    >
      {/* Ambient glows: radial gradients instead of blur filters (same look, cheaper to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(60%_50%_at_50%_0%,rgba(103,232,249,0.25),transparent_70%),radial-gradient(30%_30%_at_0%_40%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(6,182,212,0.18),transparent_70%),radial-gradient(30%_30%_at_0%_40%,rgba(20,184,166,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <div className="mb-6 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            Web development (Next.js)
          </p>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <h1
            id="nextjs-hero-heading"
            className="mb-6 text-balance text-3xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Next.js development services for{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              fast, SEO-friendly websites
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            A slow website costs you visitors and rankings. I build custom websites and web apps with Next.js and React
            that load fast, are built to pass Core Web Vitals and are ready for Google from the first line of code.
            Hire a Next.js developer who also understands SEO and conversion.
          </p>
        </div>

        {/* CTAs */}
        <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ServiceQuoteDialog
            service="Next.js web development"
            title="Request a Next.js development quote"
            description="Tell me about your website or web app and I'll come back with a fixed quote."
            icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
            buttonClassName={primaryBtn}
          >
            <PhoneCall className="h-5 w-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
            Get a Next.js development quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </ServiceQuoteDialog>

          <a
            href={`#${NEXT_SECTION_ID}`}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4.5 text-base font-bold text-slate-800 transition-all hover:bg-slate-100 sm:w-auto dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800"
          >
            See what&apos;s included
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Code and performance card */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10 dark:border-cyan-500/30 dark:bg-gradient-to-br dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/40">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Code window: a real (simplified) Next.js App Router page, always dark like an editor */}
            <figure className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                    <Terminal className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                    app/services/[slug]/page.tsx
                  </span>
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                    Server component
                  </span>
                </div>

                <pre
                  tabIndex={0}
                  aria-label="Example Next.js page code"
                  className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 p-5 font-mono text-xs leading-relaxed text-slate-300"
                >
                  <code>
                    <span className="text-slate-400">{"// Static, SEO-ready pages that refresh every hour\n"}</span>
                    <span className="text-purple-400">export const</span>
                    {" revalidate = "}
                    <span className="text-amber-300">3600</span>
                    {";\n\n"}
                    <span className="text-purple-400">export async function</span>{" "}
                    <span className="text-yellow-300">generateMetadata</span>
                    {"({ params }) {\n  "}
                    <span className="text-purple-400">const</span>
                    {" page = "}
                    <span className="text-purple-400">await</span>
                    {" getPage(("}
                    <span className="text-purple-400">await</span>
                    {" params).slug);\n  "}
                    <span className="text-purple-400">return</span>
                    {" { title: page.seoTitle, description: page.summary };\n}\n\n"}
                    <span className="text-purple-400">export default async function</span>{" "}
                    <span className="text-yellow-300">Page</span>
                    {"({ params }) {\n  "}
                    <span className="text-purple-400">const</span>
                    {" page = "}
                    <span className="text-purple-400">await</span>
                    {" getPage(("}
                    <span className="text-purple-400">await</span>
                    {" params).slug);\n  "}
                    <span className="text-purple-400">return</span>
                    {" (\n    <"}
                    <span className="text-blue-400">main</span>
                    {">\n      <"}
                    <span className="text-blue-400">JsonLd</span>
                    {" data={page.schema} />\n      <"}
                    <span className="text-blue-400">Hero</span>
                    {" title={page.title} />\n      <"}
                    <span className="text-blue-400">LeadForm</span>
                    {" crm="}
                    <span className="text-emerald-300">{'"gohighlevel"'}</span>
                    {" />\n    </"}
                    <span className="text-blue-400">main</span>
                    {">\n  );\n}"}
                  </code>
                </pre>
              </div>
              <figcaption className="mt-2 text-center text-[11px] text-slate-500 lg:text-left">
                A simplified example of how I build pages: server-rendered, with metadata and schema built in.
              </figcaption>
            </figure>

            {/* Features and metrics */}
            <div className="space-y-4 lg:col-span-5">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                <Sparkles className="h-4 w-4" aria-hidden="true" /> Custom web app development
              </p>

              <h2 className="text-xl font-black text-slate-900 dark:text-white">Why businesses switch to Next.js</h2>

              <ul className="space-y-3">
                {keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <span className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-500/20 p-1 text-cyan-600 dark:text-cyan-400">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <dl className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                {metrics.map(({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col-reverse rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <dt className="text-[10px] font-medium leading-tight text-slate-500 dark:text-slate-400">{label}</dt>
                    <dd className="text-xs font-black text-cyan-700 dark:text-cyan-400">
                      <Icon className="mx-auto mb-1 h-4 w-4" aria-hidden="true" />
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-xs font-medium text-slate-700 shadow-sm sm:flex-row dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none">
          <p className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            Fixed quote • You own the code • 30 days free support after launch
          </p>

          <QuoteDialogTrigger className="flex shrink-0 items-center gap-1 font-extrabold text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300">
            Request a Next.js proposal
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </QuoteDialogTrigger>
        </div>
      </div>
    </section>
  );
}