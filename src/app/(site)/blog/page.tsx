// src/app/(site)/blog/page.tsx
import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import { client } from "@/sanity/client";
import { siteConfig } from "@/lib/site-config";
import { sectionBg } from "@/lib/section-bg";
import { getCategory } from "@/lib/blog";
import { BlogHero, blogHref } from "@/components/blog/BlogHero";
import { PostCard, type PostSummary } from "@/components/blog/PostCard";
import { BlogUpcoming } from "@/components/blog/BlogUpcoming";
import { BlogCta } from "@/components/blog/BlogCta";

// New posts show up within 60 seconds of publishing in Sanity
export const revalidate = 60;

const PER_PAGE = 9;
const title = "Blog | Web Development & Digital Marketing Tips | HR Digital Web";
const description =
  "Practical guides on website costs, Next.js and WordPress, landing pages, GoHighLevel, email marketing, SEO and reels for small business owners.";

const filter = `_type=="post" && defined(slug.current) && ($category == "" || category == $category) && ($q == "" || title match $q || excerpt match $q || pt::text(body) match $q)`;
const blogIndexQuery = `{
  "posts": *[${filter}] | order(publishedAt desc) [$start...$end]{
    _id, title, "slug": slug.current, excerpt, category, relatedService, publishedAt,
    mainImage{ ..., alt },
    "words": round(length(pt::text(body)) / 5)
  },
  "total": count(*[${filter}]),
  "publishedSlugs": *[_type=="post" && defined(slug.current)].slug.current
}`;

type BlogData = { posts: PostSummary[]; total: number; publishedSlugs: string[] };
type Props = { searchParams: Promise<{ category?: string; page?: string; q?: string }> };

async function getBlogData(category: string, page: number, q: string): Promise<BlogData> {
  const start = (page - 1) * PER_PAGE;
  try {
    return await client.fetch<BlogData>(
      blogIndexQuery,
      { category, q: q ? `${q}*` : "", start, end: start + PER_PAGE },
      { next: { revalidate: 60 } },
    );
  } catch (e) {
    console.error("Sanity fetch failed:", e);
    return { posts: [], total: 0, publishedSlugs: [] };
  }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { category, page, q } = await searchParams;
  const cat = getCategory(category);
  const pageTitle = cat ? `${cat.label} Articles | HR Digital Web Blog` : title;
  const isFiltered = Boolean(q) || Boolean(page && page !== "1");
  const canonical = cat ? `/blog?category=${cat.id}` : "/blog";
  return {
    title: { absolute: pageTitle },
    description,
    keywords: ["web development blog", "digital marketing tips", "small business website tips"],
    alternates: { canonical },
    // Search results and page 2+ stay out of Google; the posts themselves are still crawled
    robots: isFiltered ? { index: false, follow: true } : undefined,
    openGraph: { type: "website", url: canonical, title: pageTitle, description, siteName: siteConfig.name, images: [ogImage("blog")] },
    twitter: { card: "summary_large_image", title: pageTitle, description, images: [ogImage("blog").url] },
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const sp = await searchParams;
  const category = getCategory(sp.category)?.id ?? "";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);
  const q = sp.q?.trim().slice(0, 80) ?? "";

  const { posts, total, publishedSlugs } = await getBlogData(category, page, q);
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const isMainView = !category && !q && page === 1;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteConfig.url}/blog#blog`,
        url: `${siteConfig.url}/blog`,
        name: `${siteConfig.name} Blog`,
        description,
        publisher: { "@id": `${siteConfig.url}/#business` },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${siteConfig.url}/blog/${p.slug}`,
          datePublished: p.publishedAt,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
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
      <BlogHero category={category} q={q} total={total} />

      <section aria-label="Articles" className={`${sectionBg.base} px-4 pb-20 sm:px-6 lg:px-8`}>
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <div className="mx-auto max-w-lg space-y-3 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900/50">
              <Newspaper className="mx-auto h-8 w-8 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {q || category ? "No matching articles" : "The first guides are on the way"}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {q || category
                  ? "Try a different search or browse all articles."
                  : "New practical guides are being published soon. See what's coming below."}
              </p>
              {(q || category) && (
                <Link
                  href="/blog"
                  className="inline-block rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-700 hover:bg-cyan-500/20 dark:text-cyan-400"
                >
                  View all articles
                </Link>
              )}
            </div>
          ) : (
            <>
              <h2 className="sr-only">{getCategory(category)?.label ?? "Latest"} articles</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((p, i) => (
                  <PostCard key={p._id} post={p} priority={i < 3} />
                ))}
              </div>
              {totalPages > 1 && <Pagination category={category} q={q} page={page} totalPages={totalPages} />}
            </>
          )}
        </div>
      </section>

      {isMainView && <BlogUpcoming publishedSlugs={publishedSlugs} />}
      <BlogCta />
    </>
  );
}

function Pagination({ category, q, page, totalPages }: { category: string; q: string; page: number; totalPages: number }) {
  const base = "flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-bold transition";
  const idle =
    "border-slate-200 bg-white text-slate-600 hover:border-cyan-500/50 hover:text-cyan-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400";

  return (
    <nav aria-label="Blog pagination" className="mt-14 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={blogHref(category, page - 1, q)} rel="prev" className={`${base} ${idle}`}>
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Previous page</span>
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <Link
          key={n}
          href={blogHref(category, n, q)}
          aria-current={n === page ? "page" : undefined}
          className={`${base} ${n === page ? "border-cyan-300 bg-cyan-400 text-slate-950" : idle}`}
        >
          {n}
        </Link>
      ))}
      {page < totalPages && (
        <Link href={blogHref(category, page + 1, q)} rel="next" className={`${base} ${idle}`}>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Next page</span>
        </Link>
      )}
    </nav>
  );
}