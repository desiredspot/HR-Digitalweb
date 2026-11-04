import Image from "next/image";
import Link from "next/link";
import type { PortableTextComponents, PortableTextBlock } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import { headingId } from "@/lib/blog";

// Styles for the Sanity "Body" field, in light and dark mode.
// H2s get an id so the table of contents can link to them.

export const blockText = (block: PortableTextBlock) =>
  (block.children as { text?: string }[] | undefined)?.map((c) => c.text ?? "").join("") ?? "";

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-base leading-8 text-slate-700 sm:text-[17px] dark:text-slate-300">{children}</p>
    ),
    h2: ({ children, value }) => (
      <h2
        id={headingId(blockText(value))}
        className="mb-4 mt-12 scroll-mt-28 border-b border-slate-200 pb-3 text-2xl font-black leading-snug tracking-tight text-slate-900 sm:text-3xl dark:border-slate-800 dark:text-white"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-10 text-xl font-bold leading-snug text-slate-900 sm:text-2xl dark:text-cyan-300">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="mb-3 mt-8 text-lg font-bold text-slate-900 dark:text-white">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-2xl border-l-4 border-cyan-500 bg-cyan-50 px-6 py-4 text-lg italic leading-8 text-slate-700 dark:border-cyan-400 dark:bg-cyan-500/10 dark:text-slate-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-8 text-slate-700 marker:text-cyan-500 sm:text-[17px] dark:text-slate-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-base leading-8 text-slate-700 marker:font-bold marker:text-cyan-700 sm:text-[17px] dark:text-slate-300 dark:marker:text-cyan-400">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-4">{children}</span>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-800 dark:bg-slate-800 dark:text-cyan-300">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href: string = value?.href || "#";
      const cls =
        "font-semibold text-cyan-700 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300";
      return href.startsWith("/") ? (
        <Link href={href} className={cls}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1400).fit("max").auto("format").url()}
            alt={value.alt || ""}
            width={1400}
            height={800}
            sizes="(min-width: 1024px) 768px, 100vw"
            className="h-auto w-full rounded-2xl border border-slate-200 dark:border-slate-800"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500 dark:text-slate-400">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};