// src/lib/portfolio.ts
// Your portfolio projects, used by the /portfolio page (hero grid + case studies).
//
// HONESTY RULE (important):
// - kind: "concept" = a demo you designed yourself to show your approach. No results,
//   no metrics and no client name, because there were no real customers. Use `goal`
//   ("what it's designed to do") instead of a result.
// - kind: "client" = real work (including your own site). Only add `result` or
//   `lighthouse` if you can prove it (analytics, PageSpeed report or the client's
//   permission), and only use a client's name with their OK.
// As you land real clients, add them here and the page updates automatically.

export type PortfolioCategory =
  | "websites"
  | "web-apps"
  | "landing-pages"
  | "gohighlevel"
  | "content"
  | "social-reels";

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "websites", label: "Websites" },
  { id: "web-apps", label: "Web apps" },
  { id: "landing-pages", label: "Landing pages" },
  { id: "gohighlevel", label: "GoHighLevel" },
  { id: "content", label: "Content" },
  { id: "social-reels", label: "Social and reels" },
];

export type PortfolioProject = {
  id: string;
  kind: "concept" | "client";
  title: string;
  /** Client name, client projects only (with permission) */
  client?: string;
  industry: string;
  service: string;
  categories: PortfolioCategory[];
  description: string;
  tags: string[];
  gradient: string;
  /** Live site or demo link, if there is one */
  url?: string;
  /** Client projects only, and only if you can prove it */
  result?: { value: string; label: string };
  /** Client projects only: a real PageSpeed/Lighthouse performance score you've tested */
  lighthouse?: number;
  /** Optional case study shown in the "Case studies" section */
  caseStudy?: {
    challenge: string;
    approach: string;
    /** Concept projects: what it's designed to do (instead of a result) */
    goal?: string;
    highlights: string[];
  };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "hr-digital-web",
    kind: "client",
    client: "My own site",
    title: "HR DigitalWeb website",
    industry: "Web design and marketing",
    service: "Next.js website + SEO",
    categories: ["websites"],
    description:
      "This website: a fast, SEO-first Next.js site with server components, structured data and a light and dark theme.",
    tags: ["Next.js", "Tailwind CSS", "Schema", "Vercel"],
    gradient: "from-cyan-500/25 via-teal-500/10 to-blue-600/25",
    // lighthouse: 98, // add your real score after testing at pagespeed.web.dev
    caseStudy: {
      challenge:
        "I needed a site that proves my own standards: fast on mobile, easy for Google to understand and simple to keep adding pages to.",
      approach:
        "Built with the Next.js App Router using mostly server components, so pages ship very little JavaScript. Every page has its own metadata and structured data, and the design works in light and dark mode.",
      highlights: ["Server-rendered pages", "Structured data on every page", "Light and dark theme", "Accessible, keyboard-friendly UI"],
    },
  },
  {
    id: "brightsmile-dental",
    kind: "concept",
    title: "BrightSmile Dental",
    industry: "Dental clinic",
    service: "Next.js website + GoHighLevel + local SEO",
    categories: ["websites", "gohighlevel"],
    description:
      "A concept website for a dental clinic with online booking, automatic SMS reminders and a page for each location.",
    tags: ["Next.js", "GoHighLevel", "Local SEO"],
    gradient: "from-blue-600/25 via-indigo-500/10 to-cyan-500/25",
    caseStudy: {
      challenge:
        "A typical clinic problem: paid ads bring visitors, but a slow mobile site and an old contact form mean few of them book.",
      approach:
        "A fast, mobile-first clinic website with online appointment booking, GoHighLevel SMS reminders before each visit, and location pages built for local search.",
      goal: "Designed to turn more ad clicks into booked appointments and cut no-shows.",
      highlights: ["Online booking", "SMS appointment reminders", "Location pages", "LocalBusiness schema"],
    },
  },
  {
    id: "scale-coaching",
    kind: "concept",
    title: "ScaleCoaching",
    industry: "Coaching and mentoring",
    service: "Unbounce landing page + GoHighLevel funnel + reels",
    categories: ["landing-pages", "gohighlevel", "social-reels"],
    description:
      "A concept funnel for a business coach: one focused landing page, a lead magnet with email follow-up, and short reels to drive traffic.",
    tags: ["Unbounce", "GoHighLevel", "Reels"],
    gradient: "from-teal-500/25 via-cyan-500/10 to-emerald-500/25",
    caseStudy: {
      challenge:
        "A common coaching problem: social ads send traffic to a generic page that doesn't make one clear offer, so visitors leave without opting in.",
      approach:
        "A single-offer Unbounce landing page matched to the ad, a lead magnet delivered by email, a short follow-up sequence and reels that point back to the page.",
      goal: "Designed to turn more paid social traffic into email subscribers and booked calls.",
      highlights: ["One offer, one call to action", "Lead magnet delivery", "Email follow-up sequence", "Reels matched to the offer"],
    },
  },
  {
    id: "ghl-lead-engine",
    kind: "concept",
    title: "PropertyLead Engine",
    industry: "Real estate",
    service: "GoHighLevel CRM + SMS and email workflows",
    categories: ["gohighlevel"],
    description:
      "A concept GoHighLevel setup for an estate agency: instant replies to new leads, automatic booking and a clear pipeline.",
    tags: ["GoHighLevel", "SMS", "Email workflows"],
    gradient: "from-indigo-500/25 via-cyan-500/10 to-teal-500/25",
    caseStudy: {
      challenge:
        "A common agency problem: leads come in from several places and wait hours for a reply, so many go cold or call a competitor.",
      approach:
        "A GoHighLevel pipeline with instant SMS and email replies to every new lead, a booking calendar and reminders, and tasks that tell agents who to call next.",
      goal: "Designed to reply to every lead within minutes and stop leads slipping through the cracks.",
      highlights: ["Instant lead replies", "Booking calendar and reminders", "Sales pipeline", "Missed-call text-back"],
    },
  },
  {
    id: "titan-home-services",
    kind: "concept",
    title: "Titan Home Services",
    industry: "Home services",
    service: "WordPress + local SEO + short reels",
    categories: ["websites", "social-reels"],
    description:
      "A concept website and local marketing plan for a home services business: a page per service area, local SEO and short reels.",
    tags: ["WordPress", "Local SEO", "Reels"],
    gradient: "from-blue-500/25 via-indigo-500/10 to-purple-600/25",
  },
  {
    id: "velocity-leadership",
    kind: "concept",
    title: "Velocity Leadership Studio",
    industry: "Executive coaching",
    service: "Unbounce funnel + email campaign",
    categories: ["landing-pages", "content"],
    description:
      "A concept lead-generation funnel for an executive coach: one focused landing page, a welcome email sequence and built-in booking.",
    tags: ["Unbounce", "Email nurture", "Copywriting"],
    gradient: "from-teal-500/25 via-emerald-500/10 to-blue-500/25",
  },
];