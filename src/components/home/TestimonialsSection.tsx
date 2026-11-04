import { Building2, Eye, Quote, Sparkles, Star } from "lucide-react";
import { sectionBg, sectionDivider } from "@/lib/section-bg";
// HOW IT WORKS
// - Live site (npm run build / Vercel): the section is hidden until `testimonials`
//   has at least MIN_TESTIMONIALS real reviews. Nothing is rendered, not even the heading.
// - Local dev (npm run dev): while the list is too short, you see the design with
//   clearly-labelled sample cards, so you can check the layout. Samples never reach production.
//
// Only add reviews from real clients, in their own words, with permission to publish
// their name and company. Only add `resultHighlight` if the client agrees with the number.

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number; // the score they actually gave you (1-5)
  resultHighlight?: string; // e.g. "+40% more enquiries", only if the client confirms it
};

const MIN_TESTIMONIALS = 2;

// Add real testimonials here.
const testimonials: Testimonial[] = [];

// Dev-only preview data. Deliberately generic so it can't be mistaken for a real review.
const previewSamples: Testimonial[] = [1, 2, 3].map((n) => ({
  quote:
    "Your client's review goes here, in their own words. Two or three sentences about working with you and what changed for their business.",
  author: `Sample client ${n}`,
  role: "Job title",
  company: "Company name",
  rating: 5,
  resultHighlight: "Client-confirmed result",
}));

const isDev = process.env.NODE_ENV === "development";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function TestimonialsSection() {
  const hasRealTestimonials = testimonials.length >= MIN_TESTIMONIALS;
  if (!hasRealTestimonials && !isDev) return null;

  const items = hasRealTestimonials ? testimonials : previewSamples;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`${sectionBg.tint} ${sectionDivider} relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8`}
    >
      {/* Ambient glow: radial gradient instead of a blur filter (same look, cheaper to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(50%_40%_at_50%_50%,rgba(103,232,249,0.20),transparent_70%)]
          dark:bg-[radial-gradient(50%_40%_at_50%_50%,rgba(6,182,212,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {!hasRealTestimonials && (
          <p className="mb-12 flex items-center justify-center gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 dark:border-amber-500/30 dark:bg-amber-950/20 dark:text-amber-300">
            <Eye className="h-4 w-4 shrink-0 text-amber-500 dark:text-amber-400" aria-hidden="true" />
            <span>
              <strong>Preview (only visible in npm run dev):</strong> this section is hidden on the live site until
              you add {MIN_TESTIMONIALS} real reviews.
            </span>
          </p>
        )}

        {/* Section header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Client feedback &amp; reviews
          </p>

          <h2
            id="testimonials-heading"
            className="mb-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            What clients{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-500/30 underline-offset-8 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500">
              say
            </span>
          </h2>

          <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Real feedback from business owners, founders and marketing leaders who grew online with HR DigitalWeb.
          </p>
        </header>

        {/* Testimonials grid */}
        <ul className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={`${item.author}-${item.company}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-slate-50/80 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-cyan-900/30 dark:bg-slate-900/70 dark:shadow-black/50 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900/90 dark:hover:shadow-cyan-500/10"
            >
              {/* Top accent bar */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"
              />

              <figure className="flex h-full flex-col justify-between">
                <div>
                  {/* Rating and result badge */}
                  {(item.rating || item.resultHighlight) && (
                    <div className="mb-6 flex items-center justify-between gap-2">
                      {item.rating ? (
                        <p className="flex items-center gap-1" aria-label={`Rated ${item.rating} out of 5`}>
                          {Array.from({ length: item.rating }, (_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                          ))}
                        </p>
                      ) : (
                        <span />
                      )}

                      {item.resultHighlight && (
                        <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                          {item.resultHighlight}
                        </span>
                      )}
                    </div>
                  )}

                  <Quote className="mb-3 h-8 w-8 text-cyan-500/30" aria-hidden="true" />

                  <blockquote className="mb-6 text-xs font-normal italic leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
                    <p>&ldquo;{item.quote}&rdquo;</p>
                  </blockquote>
                </div>

                {/* Client details */}
                <figcaption className="flex items-center gap-3.5 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <span
                    aria-hidden="true"
                    className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-300 p-0.5 shadow-md"
                  >
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs font-black text-slate-900 dark:bg-slate-950 dark:text-cyan-400">
                      {initials(item.author)}
                    </span>
                  </span>

                  <span className="min-w-0 flex-1">
                    <cite className="block truncate text-sm font-bold not-italic text-slate-900 dark:text-white">
                      {item.author}
                    </cite>
                    <span className="block truncate text-xs text-cyan-700 dark:text-cyan-400">{item.role}</span>
                    <span className="flex items-center gap-1 truncate text-[11px] text-slate-500 dark:text-slate-400">
                      <Building2 className="h-3 w-3 shrink-0 text-slate-400" aria-hidden="true" />
                      <span className="truncate">{item.company}</span>
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}