import Link from "next/link";
import type { Faq, Item, Section } from "@/content/services";
import { site } from "@/content/site";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-slate">
        <li>
          <Link href="/" className="text-slate no-underline hover:text-signal">Home</Link>
        </li>
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ink">{it.name}</span>
            ) : (
              <Link href={it.path} className="text-slate no-underline hover:text-signal">{it.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ title, intro, crumbs, children }: { title: string; intro?: string[]; crumbs?: { name: string; path: string }[]; children?: React.ReactNode }) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="wrap py-14 sm:py-20">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <h1 className="mt-5 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-[3.4rem]">{title}</h1>
        {intro?.map((p) => (
          <p key={p} className="measure mt-5 text-lg sm:text-xl">{p}</p>
        ))}
        {children}
      </div>
    </section>
  );
}

function ItemText({ item }: { item: Item }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <>
      <strong className="font-semibold text-ink">{item[0]}</strong> — {item[1]}
    </>
  );
}

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="mt-1 shrink-0">
    <circle cx="10" cy="10" r="10" fill="#dff3ec" />
    <path d="m6 10.2 2.6 2.6L14 7.5" fill="none" stroke="#0e8a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Renders a content section: heading, paragraphs, a checked list or a numbered list. */
export function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="grid gap-4 border-t border-line py-12 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12">
      <h2 className="text-2xl font-semibold sm:text-[1.7rem]">{section.heading}</h2>
      <div className="measure">
        {section.body?.map((p) => (
          <p key={p} className="mb-4 last:mb-0">{p}</p>
        ))}
        {section.items && !section.ordered && (
          <ul className="grid gap-3">
            {section.items.map((it, i) => (
              <li key={i} className="flex gap-3">
                <Check />
                <span><ItemText item={it} /></span>
              </li>
            ))}
          </ul>
        )}
        {section.items && section.ordered && (
          <ol className="grid gap-4">
            {section.items.map((it, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">{i + 1}</span>
                <span className="pt-0.5"><ItemText item={it} /></span>
              </li>
            ))}
          </ol>
        )}
        {section.links && (
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {section.links.map((l) => (
              <Link key={l.href} href={l.href} className="font-semibold">{l.label}</Link>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

export function FaqList({ faqs, heading = "Frequently asked questions" }: { faqs: Faq[]; heading?: string }) {
  return (
    <section className="grid gap-4 border-t border-line py-12 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12">
      <h2 className="text-2xl font-semibold sm:text-[1.7rem]">{heading}</h2>
      <div className="measure divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex items-center justify-between gap-6 py-4 font-semibold text-ink">
              <h3 className="font-sans text-[1.05rem] font-semibold leading-snug tracking-normal">{f.q}</h3>
              <span aria-hidden="true" className="text-2xl leading-none text-signal transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="pb-5">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Ready to grow your business online?", text = "Tell me about your project and get a free, no-obligation plan for your website and marketing within 48 hours.", button = "Get my free plan" }: { title?: string; text?: string; button?: string }) {
  return (
    <section className="bg-ink">
      <div className="wrap flex flex-col items-start gap-8 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/75">{text}</p>
        </div>
        <Link href={site.bookingUrl} className="btn btn-light shrink-0">{button}</Link>
      </div>
    </section>
  );
}
