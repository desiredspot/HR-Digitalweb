import { ArrowRight, CheckCircle2, Cpu, Globe, Layers, PhoneCall, ShieldCheck, Sparkles, Terminal, Zap } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { QuoteDialogTrigger } from "@/components/services/quote/ServiceQuoteDialog";
import { WhyNextjsTabs } from "./WhyNextjsTabs";

// "Why Next.js?" section for /services/web-development.
// Server component. Only the card switching is client-side (WhyNextjsTabs), and every
// spotlight panel is in the HTML. Buttons open the page's existing quote dialog.
// Code examples use the current App Router APIs, so developers reading them see real code.

const pillars = [
  {
    key: "speed",
    title: "Speed",
    subtitle: "Pages built ahead of time, served instantly",
    desc: "Static generation and server rendering deliver pages fast.",
    detail:
      "Next.js can build pages ahead of time and refresh them in the background, or render them on the server for each visit. Visitors get fast first loads, stable layouts and pages that respond quickly.",
    icon: Zap,
    badge: "Fast loads",
    gradient: "from-cyan-500 via-teal-400 to-blue-600",
    tagColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    highlights: [
      "Static generation with background refresh",
      "Server-side rendering when you need it",
      "Automatic image and font optimisation",
      "Strong Core Web Vitals scores",
    ],
    file: "app/blog/[slug]/page.tsx",
    code: `// Build every post ahead of time,
// then refresh it in the background every minute
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}`,
  },
  {
    key: "seo",
    title: "SEO",
    subtitle: "Full control of technical SEO",
    desc: "Full control of metadata, sitemaps and schema markup.",
    detail:
      "Google rewards fast, well-structured pages. Next.js gives full control over page titles, canonical tags, XML sitemaps, social previews and structured data, all generated automatically for every page.",
    icon: Globe,
    badge: "Search-ready",
    gradient: "from-teal-400 via-emerald-400 to-blue-500",
    tagColor: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-400",
    highlights: [
      "Page titles, descriptions and social previews",
      "Automatic sitemap and robots.txt",
      "Structured data (JSON-LD schema)",
      "Clean HTML that search engines can read",
    ],
    file: "app/services/[slug]/page.tsx",
    code: `// Unique title, description and preview for every page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getService(slug);
  return {
    title: service.seoTitle,
    description: service.summary,
    alternates: { canonical: \`/services/\${slug}\` },
    openGraph: { images: [service.image] },
  };
}`,
  },
  {
    key: "security",
    title: "Security",
    subtitle: "Fewer moving parts to attack",
    desc: "No plugins to patch every week and no public admin login.",
    detail:
      "Many website hacks come through outdated plugins or an exposed admin login. A Next.js site has no plugin marketplace to keep patching, pages can be served as static files, and secrets stay on the server, never in the browser.",
    icon: ShieldCheck,
    badge: "Smaller attack surface",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    tagColor: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400",
    highlights: [
      "No third-party plugins to keep patching",
      "No public admin login on your website",
      "API keys and secrets kept server-side",
      "Hosting platforms handle server updates",
    ],
    file: "app/contact/actions.ts",
    code: `"use server";
// Runs only on the server: the API key never reaches the browser
export async function sendLead(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  if (!email.includes("@")) return { error: "Invalid email" };

  await fetch(process.env.CRM_WEBHOOK_URL!, {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}`,
  },
  {
    key: "growth",
    title: "Room to grow",
    subtitle: "Start small, grow on the same code",
    desc: "A 5-page site can grow into a full web app on the same code.",
    detail:
      "Start with a simple 5-page marketing site today, then add a client portal, booking system or dashboard later on the same codebase, without starting again from scratch.",
    icon: Layers,
    badge: "Built to scale",
    gradient: "from-purple-500 via-indigo-500 to-cyan-400",
    tagColor: "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400",
    highlights: [
      "One codebase for site and app",
      "Reusable React components",
      "Add APIs and databases when needed",
      "Grow without a full rebuild",
    ],
    file: "app/(portal)/dashboard/page.tsx",
    code: `// Later: add a client dashboard next to your marketing pages
import { requireUser } from "@/lib/auth";
import { BookingsTable } from "@/components/bookings-table";

export default async function Dashboard() {
  const user = await requireUser();
  return <BookingsTable userId={user.id} />;
}`,
  },
];

export function WhyNextjsSection() {
  return (
    <section
      id="why-nextjs"
      aria-labelledby="why-nextjs-heading"
      className={`${sectionBg.base} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(55%_45%_at_50%_50%,rgba(94,234,212,0.18),transparent_70%)]
          dark:bg-[radial-gradient(55%_45%_at_50%_50%,rgba(20,184,166,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl space-y-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            The modern web standard
          </p>

          <h2
            id="why-nextjs-heading"
            className="mb-6 text-balance text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Why{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              Next.js?
            </span>
          </h2>

          <p className="text-pretty text-base font-normal leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            The leading React framework for fast websites, strong search visibility, fewer security headaches and
            easy long-term growth. Pick a reason below to see how it works.
          </p>
        </header>

        <WhyNextjsTabs
          cards={pillars.map(({ key, title, desc, icon: Icon, badge, gradient, tagColor, highlights }) => ({
            key,
            content: (
              <>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${gradient} opacity-80 transition-opacity group-hover:opacity-100`}
                />
                <span className="block">
                  <span className="mb-6 flex items-center justify-between gap-2">
                    <span className="rounded-2xl border border-cyan-200 bg-cyan-50 p-3.5 text-cyan-600 transition-transform duration-200 group-hover:scale-110 dark:border-cyan-900/50 dark:bg-slate-900 dark:text-cyan-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${tagColor}`}
                    >
                      {badge}
                    </span>
                  </span>
                  <span className="mb-3 block text-xl font-black leading-snug text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                    {title}
                  </span>
                  <span className="mb-6 block text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-200">
                    {desc}
                  </span>
                </span>
                <span className="block space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {highlights.slice(0, 2).map((point) => (
                    <span key={point} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      {point}
                    </span>
                  ))}
                </span>
              </>
            ),
          }))}
          panels={pillars.map((p) => (
            <article
              key={p.key}
              aria-labelledby={`why-${p.key}-title`}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10 dark:border-cyan-500/30 dark:bg-gradient-to-br dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl dark:shadow-cyan-950/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                {/* Code example (always dark, like a code editor) */}
                <figure className="lg:col-span-6">
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
                      <div className="flex items-center gap-2" aria-hidden="true">
                        <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                        <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="flex min-w-0 items-center gap-1.5 truncate font-mono text-[11px] text-slate-400">
                        <Terminal className="h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
                        {p.file}
                      </span>
                      <span className="shrink-0 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                        Example
                      </span>
                    </div>
                    <pre tabIndex={0} aria-label="Code example" className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 p-5 font-mono text-xs leading-relaxed text-slate-300">
                      <code>{p.code}</code>
                    </pre>
                  </div>
                </figure>

                {/* Explanation */}
                <div className="space-y-4 lg:col-span-6">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    <Sparkles className="h-4 w-4" aria-hidden="true" /> Deep dive: {p.title}
                  </p>
                  <h3 id={`why-${p.key}-title`} className="text-2xl font-black text-slate-900 dark:text-white">
                    {p.subtitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.detail}</p>

                  <ul className="space-y-2.5 pt-2">
                    {p.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <span className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-500/20 p-1 text-cyan-600 dark:text-cyan-400">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <QuoteDialogTrigger className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 px-6 py-3 text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110">
                      <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
                      Build your Next.js site
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </QuoteDialogTrigger>
                  </div>
                </div>
              </div>
            </article>
          ))}
        />

        {/* Bottom banner */}
        <aside
          aria-labelledby="why-nextjs-cta-heading"
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 shadow-lg md:flex-row dark:border-cyan-900/40 dark:from-[#0E1A38] dark:via-slate-900 dark:to-[#0E1A38] dark:shadow-2xl"
        >
          <div className="text-center md:text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Ready to upgrade your website?
            </p>
            <h3 id="why-nextjs-cta-heading" className="text-xl font-black text-slate-900 dark:text-white">
              Let&apos;s build a fast Next.js site made for growth.
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Tell me about your project and get a fixed-price proposal.
            </p>
          </div>

          <QuoteDialogTrigger className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110">
            Get a free fixed quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </QuoteDialogTrigger>
        </aside>
      </div>
    </section>
  );
}