// src/app/(site)/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { ArrowLeft, ArrowRight, Calendar, Clock, ListOrdered, RefreshCw, Sparkles, Tag } from "lucide-react";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { siteConfig } from "@/lib/site-config";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
import { blogAuthor, getCategory, headingId, readMinutes, relatedServiceFor } from "@/lib/blog";
import { blockText, portableTextComponents } from "@/components/blog/PortableTextComponents";
import { PostCard, fmtDate, type PostSummary } from "@/components/blog/PostCard";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/blog/ShareButtons";

export const revalidate = 60;

const card = `_id, title, "slug": slug.current, excerpt, category, relatedService, publishedAt, mainImage{ ..., alt }, "words": round(length(pt::text(body)) / 5)`;
const postQuery = `*[_type=="post" && slug.current==$slug][0]{
  _id, title, "slug": slug.current, excerpt, body, category, relatedService, publishedAt, _updatedAt,
  seoTitle, seoDescription, mainImage{ ..., alt },
  "words": round(length(pt::text(body)) / 5),
  "related": *[_type=="post" && defined(slug.current) && _id != ^._id && category == ^.category]
    | order(publishedAt desc)[0...3]{ ${card} },
  "latest": *[_type=="post" && defined(slug.current) && _id != ^._id]
    | order(publishedAt desc)[0...3]{ ${card} }
}`;

type Post = PostSummary & {
  body?: PortableTextBlock[];
  _updatedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  related?: PostSummary[];
  latest?: PostSummary[];
};
type Props = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  try {
    return await client.fetch<Post | null>(postQuery, { slug }, { next: { revalidate: 60 } });
  } catch (e) {
    console.error("Sanity fetch failed:", e);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<string[]>(`*[_type=="post" && defined(slug.current)].slug.current`);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p) return {};
  const t = p.seoTitle || `${p.title} | HR Digital Web`;
  const d = p.seoDescription || p.excerpt;
  const img = p.mainImage?.asset ? urlFor(p.mainImage as Parameters<typeof urlFor>[0]).width(1200).height(630).url() : undefined;
  return {
    title: { absolute: t },
    description: d,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      title: t,
      description: d,
      siteName: siteConfig.name,
      publishedTime: p.publishedAt,
      modifiedTime: p._updatedAt,
      authors: [blogAuthor.name],
      images: [img ?? ogImage("blog").url],
    },
    twitter: { card: "summary_large_image", title: t, description: d, images: [img ?? ogImage("blog").url] },
  };
}

// Only show "Updated" when the post was edited at least a day after publishing
const wasUpdated = (pub?: string, upd?: string) =>
  Boolean(pub && upd && new Date(upd).getTime() - new Date(pub).getTime() > 86_400_000);

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p) notFound();

  const url = `${siteConfig.url}/blog/${slug}`;
  const category = getCategory(p.category);
  const service = relatedServiceFor(p.category, p.relatedService);
  const minutes = readMinutes(p.words);
  const updated = wasUpdated(p.publishedAt, p._updatedAt);
  const img = p.mainImage?.asset
    ? urlFor(p.mainImage as Parameters<typeof urlFor>[0]).width(1600).height(900).fit("crop").auto("format").url()
    : null;
  const related = p.related?.length ? p.related : (p.latest ?? []);

  // Table of contents from the post's H2 headings
  const toc = (p.body ?? [])
    .filter((b) => b._type === "block" && b.style === "h2")
    .map((b) => ({ id: headingId(blockText(b)), title: blockText(b) }))
    .filter((t) => t.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: p.title,
        description: p.seoDescription || p.excerpt,
        image: img ?? undefined,
        datePublished: p.publishedAt,
        dateModified: p._updatedAt ?? p.publishedAt,
        wordCount: p.words ?? undefined,
        articleSection: category?.label,
        author: { "@type": "Person", name: blogAuthor.name, url: `${siteConfig.url}/about` },
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ReadingProgress />

      <article className={`${sectionBg.base} relative isolate overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-x-0 top-0 h-[700px]
              bg-[radial-gradient(55%_45%_at_50%_15%,rgba(103,232,249,0.2),transparent_70%)]
              dark:bg-[radial-gradient(55%_45%_at_50%_15%,rgba(6,182,212,0.14),transparent_70%)]"
          />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="border-b border-slate-200 pb-5 dark:border-slate-800/80">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/blog" className="group inline-flex items-center gap-2 font-bold hover:text-cyan-700 dark:hover:text-cyan-400">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                  Blog
                </Link>
              </li>
              {category && (
                <>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={`/blog?category=${category.id}`} className="hover:text-cyan-700 dark:hover:text-cyan-400">
                      {category.label}
                    </Link>
                  </li>
                </>
              )}
            </ol>
          </nav>

          {/* Header */}
          <header className="mx-auto max-w-4xl space-y-6 text-center">
            {category && (
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                {category.label}
              </p>
            )}
            <h1 className="text-balance text-3xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              {p.title}
            </h1>
            {p.excerpt && (
              <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
                {p.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-slate-200 py-4 font-mono text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-xs font-black text-slate-950">
                  {blogAuthor.initials}
                </span>
                <span className="text-left">
                  <span className="block font-bold leading-tight text-slate-900 dark:text-white">{blogAuthor.name}</span>
                  <span className="block text-[10px]">{blogAuthor.role}</span>
                </span>
              </div>
              {p.publishedAt && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  <time dateTime={p.publishedAt}>{fmtDate(p.publishedAt)}</time>
                </span>
              )}
              {updated && p._updatedAt && (
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  Updated <time dateTime={p._updatedAt}>{fmtDate(p._updatedAt)}</time>
                </span>
              )}
              {minutes && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                  {minutes} min read
                </span>
              )}
              <ShareButtons url={url} title={p.title} />
            </div>
          </header>

          {img && (
            <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:shadow-black/40">
              <Image
                src={img}
                alt={p.mainImage?.alt || ""}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="grid grid-cols-1 items-start gap-10 pt-4 lg:grid-cols-12">
            {/* Body */}
            <div className="min-w-0 lg:col-span-8">
              {toc.length > 1 && (
                <details className="group mb-8 rounded-2xl border border-slate-200 bg-white p-5 lg:hidden dark:border-slate-800 dark:bg-slate-900/70">
                  <summary className="flex cursor-pointer list-none items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
                    <ListOrdered className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    In this article
                  </summary>
                  <TocList toc={toc} />
                </details>
              )}

              {service && (
                <aside className="mb-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-lg shadow-slate-200/60 sm:flex-row sm:items-center dark:bg-slate-900/90 dark:shadow-black/30">
                  <div className="space-y-1">
                    <p className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Related service
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white">Want this done for you?</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      See what&apos;s included and the starting prices for {service.label.toLowerCase()}.
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-400/15 transition-all hover:brightness-110"
                  >
                    View {service.label.toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </aside>
              )}

              {p.body && <PortableText value={p.body} components={portableTextComponents} />}

              {/* Author box */}
              <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-white p-6 text-center sm:flex-row sm:text-left dark:border-slate-800 dark:bg-slate-900">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 via-teal-300 to-blue-500 text-xl font-black text-slate-950 shadow-lg shadow-cyan-400/20">
                  {blogAuthor.initials}
                </span>
                <div className="space-y-1">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">Written by</p>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white">{blogAuthor.name}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{blogAuthor.bio}</p>
                  <Link href="/about" className="inline-block pt-1 text-xs font-bold text-cyan-700 hover:underline dark:text-cyan-400">
                    More about me
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Article tools" className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
              {toc.length > 1 && (
                <nav
                  aria-labelledby="toc-heading"
                  className="hidden rounded-3xl border border-slate-200 bg-white p-6 lg:block dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <p
                    id="toc-heading"
                    className="flex items-center gap-2 border-b border-slate-200 pb-3 font-mono text-sm font-bold uppercase tracking-wider text-slate-900 dark:border-slate-800 dark:text-white"
                  >
                    <ListOrdered className="h-4 w-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                    In this article
                  </p>
                  <TocList toc={toc} />
                </nav>
              )}

              <div className="relative space-y-4 overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-7 dark:bg-slate-900/90 dark:shadow-black/40">
                <span aria-hidden="true" className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500" />
                <p className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase text-cyan-700 dark:text-cyan-400">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Free discovery call
                </p>
                <p className="text-xl font-black leading-snug text-slate-900 dark:text-white">Want a fixed quote for your project?</p>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Book a free 30-minute call. I&apos;ll map out what you need and send a written fixed quote within 48 hours.
                </p>
                <Link
                  href={siteConfig.bookingUrl}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 py-3.5 text-xs font-black text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:brightness-110"
                >
                  Book a free discovery call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className={`${sectionBg.alt} ${sectionDivider} px-4 py-16 sm:px-6 lg:px-8 lg:py-20`}>
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">Keep reading</p>
                <h2 id="related-heading" className="text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
                  Related articles
                </h2>
              </div>
              <Link href="/blog" className="flex items-center gap-1 font-mono text-xs font-bold text-cyan-700 hover:underline dark:text-cyan-400">
                View all articles
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r._id} post={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function TocList({ toc }: { toc: { id: string; title: string }[] }) {
  return (
    <ol className="mt-3 space-y-1 text-sm">
      {toc.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            className="block rounded-xl px-3 py-1.5 text-slate-600 transition-colors hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-400 dark:hover:bg-slate-950 dark:hover:text-cyan-300"
          >
            {t.title}
          </a>
        </li>
      ))}
    </ol>
  );
}