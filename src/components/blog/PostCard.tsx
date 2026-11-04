import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Link2 } from "lucide-react";
import { urlFor } from "@/sanity/image";
import { getCategory, readMinutes, relatedServiceFor } from "@/lib/blog";

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  relatedService?: string;
  publishedAt?: string;
  mainImage?: { asset?: unknown; alt?: string };
  words?: number;
};

// Fallback artwork when a post has no image: a soft gradient per category
const gradients: Record<string, string> = {
  "web-development": "from-cyan-500/25 via-teal-500/10 to-blue-600/25",
  "landing-pages": "from-teal-500/25 via-cyan-500/10 to-emerald-500/25",
  gohighlevel: "from-indigo-500/25 via-cyan-500/10 to-teal-500/25",
  "email-marketing": "from-blue-500/25 via-teal-400/10 to-cyan-500/25",
  "seo-content": "from-emerald-500/25 via-cyan-500/10 to-teal-500/25",
  "social-reels": "from-cyan-500/25 via-indigo-500/10 to-teal-500/25",
};

export const fmtDate = (iso?: string) =>
  iso
    ? new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(
        new Date(iso),
      )
    : "";

export function PostCard({ post, priority = false }: { post: PostSummary; priority?: boolean }) {
  const category = getCategory(post.category);
  const service = relatedServiceFor(post.category, post.relatedService);
  const minutes = readMinutes(post.words);
  const img = post.mainImage?.asset
    ? urlFor(post.mainImage as Parameters<typeof urlFor>[0]).width(800).height(450).fit("crop").auto("format").url()
    : null;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:shadow-xl motion-reduce:hover:translate-y-0 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/30 dark:hover:border-cyan-500/40">
      <div
        className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${
          gradients[post.category ?? ""] ?? gradients["web-development"]
        } bg-slate-100 dark:bg-slate-950`}
      >
        {img && (
          <Image
            src={img}
            alt={post.mainImage?.alt || ""}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
          />
        )}
        {category && (
          <span className="absolute left-4 top-4 rounded-full border border-cyan-500/30 bg-white/90 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-800 backdrop-blur dark:bg-slate-950/80 dark:text-cyan-400">
            {category.label}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-slate-500 dark:text-slate-400">
          {post.publishedAt && (
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{fmtDate(post.publishedAt)}</time>
            </span>
          )}
          {minutes && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
              {minutes} min read
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
          {/* The whole card is clickable via this stretched link */}
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          {service ? (
            <Link
              href={service.href}
              className="relative z-10 flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] font-bold text-cyan-800 transition-colors hover:bg-cyan-400 hover:text-slate-950 dark:text-cyan-400 dark:hover:text-slate-950"
            >
              <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
              {service.label}
            </Link>
          ) : (
            <span />
          )}
          <span
            aria-hidden="true"
            className="flex items-center gap-1 text-xs font-bold text-cyan-700 dark:text-cyan-400"
          >
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}