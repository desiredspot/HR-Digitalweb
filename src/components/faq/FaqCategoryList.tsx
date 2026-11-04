import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  Globe,
  KeyRound,
  Layers,
  LifeBuoy,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  Tag,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import type { FaqCategory, FaqIcon } from "@/lib/faq";

// One FAQ category: an H2 and a list of native <details> accordions (no JS needed).
// Every answer is in the HTML. Used by the FAQ hero and any later category sections.

const icons: Record<FaqIcon, LucideIcon> = {
  userCheck: UserCheck,
  shieldCheck: ShieldCheck,
  building: Building2,
  globe: Globe,
  clock: Clock,
  refresh: RefreshCw,
  lifeBuoy: LifeBuoy,
  tag: Tag,
  creditCard: CreditCard,
  key: KeyRound,
  search: Search,
  server: Server,
  layers: Layers,
};

export function FaqCategoryList({
  category,
  openFirst = false,
  showHeading = true,
}: {
  category: FaqCategory;
  openFirst?: boolean;
  /** Set to false when the surrounding section already shows the category as its H2 */
  showHeading?: boolean;
}) {
  return (
    <div id={showHeading ? category.id : undefined} className="scroll-mt-24 space-y-6">
      {showHeading && (
        <div className="border-b border-slate-200 pb-4 text-left dark:border-slate-800">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            FAQ category
          </p>
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">{category.title}</h2>
          {category.intro && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{category.intro}</p>}
        </div>
      )}

      <div className="space-y-4 text-left">
        {category.items.map((faq, idx) => {
          const Icon = icons[faq.icon];
          return (
            <details
              key={faq.id}
              id={faq.id}
              open={openFirst && idx === 0}
              className="group scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 open:border-cyan-500 open:shadow-xl open:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:open:border-cyan-400 dark:open:bg-slate-900"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-500 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-cyan-600 transition-colors group-open:border-cyan-300 group-open:bg-cyan-400 group-open:text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400 dark:group-open:text-slate-950">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      {faq.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 transition-colors group-open:text-cyan-700 sm:text-lg dark:text-white dark:group-open:text-cyan-300">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:border-cyan-500/40 group-open:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:group-open:text-cyan-400"
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>

              <div className="space-y-4 border-t border-slate-100 px-6 pb-6 pt-4 dark:border-slate-800/80">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{faq.answer}</p>
                {faq.points && (
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {faq.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 rounded-xl border border-cyan-500/20 bg-cyan-50 p-3 text-xs font-medium text-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {faq.breakdown && (
                  <dl className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                    {faq.breakdown.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between gap-3 bg-slate-50 px-3 py-2.5 text-xs dark:bg-slate-950"
                      >
                        <dt className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                            aria-hidden="true"
                          />
                          {row.label}
                        </dt>
                        <dd className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-right font-mono text-[11px] font-bold text-cyan-800 dark:text-cyan-400">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-bold text-cyan-700 underline decoration-cyan-500/40 underline-offset-4 transition-colors hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    {faq.link.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}