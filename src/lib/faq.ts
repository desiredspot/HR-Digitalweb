// src/lib/faq.ts
// Every question on /faq, grouped by category. The page renders each category and builds
// FAQPage structured data from ALL of these, so add new questions here and both update.
// Keep answers TRUE and matching your proposals, pricing page and contract.

import { pricingRows } from "./pricing";
import { serviceHref } from "./site-config";

export type FaqIcon =
  | "userCheck"
  | "shieldCheck"
  | "building"
  | "globe"
  | "clock"
  | "refresh"
  | "lifeBuoy"
  | "tag"
  | "creditCard"
  | "key"
  | "search"
  | "server"
  | "layers";

export type FaqItem = {
  id: string;
  question: string;
  /** Plain text, used on the page and in the FAQPage schema */
  answer: string;
  badge: string;
  icon: FaqIcon;
  /** Optional extra points shown under the answer */
  points?: string[];
  /** Optional label/value rows shown under the answer (e.g. timelines) */
  breakdown?: { label: string; value: string }[];
  /** Optional internal link shown after the answer (e.g. to /pricing) */
  link?: { href: string; label: string };
};

export type FaqCategory = {
  id: string;
  title: string;
  /** Small badge text shown above the section heading */
  eyebrow?: string;
  intro?: string;
  /** Optional text for the sticky side panel; a general default is used if missing */
  cta?: { eyebrow: string; title: string; text: string; label: string };
  items: FaqItem[];
};

// Website prices come straight from src/lib/pricing.ts, so the FAQ and the pricing page
// can never disagree. Change a price there and both update.
const web = pricingRows.find((r) => r.slug === "web-development");
const webFrom = web?.starter.usd ?? "$499";
const fromPrice = (t?: { usd: string; inr: string }) =>
  !t || t.usd.toLowerCase() === "custom" ? "Custom quote" : `From ${t.usd} (${t.inr})`;

export const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting started",
    eyebrow: "Clear answers",
    intro: "Who I work with, how working together remotely works, and why you can trust a newer business.",
    items: [
      {
        id: "freelancer-vs-agency",
        question: "Why hire an independent developer instead of a big agency?",
        answer:
          "You work directly with the person doing the work. That means faster replies, lower costs and no hand-offs between account managers, designers and developers.",
        badge: "Working direct",
        icon: "userCheck",
        points: ["You talk to the person building your project", "Lower overheads, so lower prices", "Quicker changes and replies"],
      },
      {
        id: "new-business-trust",
        question: "You're a new business. Why should I trust you?",
        answer:
          "Fair question. You get a written fixed quote, payments split into milestones, 30 days of support after launch and full ownership of everything I create for you. The final payment is only due once you've approved the finished work.",
        badge: "Low risk",
        icon: "shieldCheck",
        points: ["Written fixed quote before work starts", "50% to start, 50% on completion", "30 days of support and full ownership"],
      },
      {
        id: "industries",
        question: "Which industries do you work with?",
        answer:
          "Coaches, consultants, SaaS companies, local service businesses, healthcare, real estate, e-commerce and marketing agencies.",
        badge: "Industries",
        icon: "building",
        points: [
          "Coaches and consultants: lead funnels and booking",
          "Local services and healthcare: local SEO and online booking",
          "SaaS and real estate: web apps and CRM automation",
        ],
      },
      {
        id: "international-clients",
        question: "Do you work with international clients?",
        answer: "Yes. I work remotely with clients worldwide and schedule calls in your time zone.",
        badge: "Worldwide",
        icon: "globe",
        points: ["Calls scheduled in your time zone", "Invoices in USD ($) or INR (₹)", "Regular written and video updates"],
      },
    ],
  },
  {
    id: "projects-timelines",
    title: "Projects and timelines",
    eyebrow: "Delivery expectations",
    intro: "How long projects take, how revisions work and what happens after launch.",
    items: [
      {
        id: "website-timeline",
        question: "How long does a website take?",
        answer:
          "Most business websites take 2 to 4 weeks. Landing pages take 5 to 7 business days. Web apps are scoped individually, and your proposal always includes the timeline in writing.",
        badge: "Turnaround times",
        icon: "clock",
        breakdown: [
          { label: "Landing pages", value: "5–7 business days" },
          { label: "Business websites", value: "2–4 weeks" },
          { label: "Web apps", value: "Scoped individually" },
        ],
      },
      {
        id: "revisions",
        question: "How many revisions do I get?",
        answer:
          "Your proposal states the number of revision rounds, usually two per milestone, with review points at the design stage and on the preview before launch.",
        badge: "Revisions",
        icon: "refresh",
        breakdown: [
          { label: "Designs", value: "Usually 2 rounds" },
          { label: "Preview build", value: "Usually 2 rounds" },
          { label: "Final sign-off", value: "Your approval to launch" },
        ],
      },
      {
        id: "changes-after-launch",
        question: "What if I need changes after launch?",
        answer:
          "Every project includes 30 days of support after launch for bug fixes and small tweaks. After that, you can choose optional monthly maintenance or pay for changes as you need them.",
        badge: "After launch",
        icon: "lifeBuoy",
        breakdown: [
          { label: "First 30 days", value: "Included" },
          { label: "Bugs in my work", value: "Fixed free in the first 30 days" },
          { label: "After 30 days", value: "Optional monthly care" },
        ],
      },
    ],
  },
  {
    id: "pricing-payments",
    title: "Pricing and payments",
    eyebrow: "Clear pricing",
    intro: "Starting prices for websites, how fixed quotes work and the payment methods I accept.",
    cta: {
      eyebrow: "Fixed quote",
      title: "Want an exact price for your project?",
      text: "Book a free 30-minute call and you'll get a written fixed quote within 48 hours. No hourly billing and no surprise fees.",
      label: "Get a fixed quote for your website",
    },
    items: [
      {
        id: "website-cost",
        question: "How much does a website cost?",
        answer: `Websites start from ${webFrom}. After a free discovery call you get a written fixed quote, so you know the full price before any work starts. There's no hourly billing.`,
        badge: "Website pricing",
        icon: "tag",
        breakdown: [
          { label: "Starter website (up to 5 pages)", value: fromPrice(web?.starter) },
          { label: "Growth website (up to 10 pages + blog)", value: fromPrice(web?.growth) },
          { label: "Web app or 10+ pages", value: fromPrice(web?.premium) },
        ],
        link: { href: "/pricing", label: "See all prices on the pricing page" },
      },
      {
        id: "payment-methods",
        question: "Which payment methods do you accept?",
        answer:
          "Bank transfer, PayPal, Wise and Stripe (card payments) for international clients, and UPI or bank transfer for clients in India. Invoices are in USD ($) or INR (₹). Projects are paid 50% to start and 50% on completion.",
        badge: "Payments",
        icon: "creditCard",
        breakdown: [
          { label: "International clients", value: "Bank transfer, PayPal, Wise, Stripe" },
          { label: "Clients in India", value: "UPI, bank transfer" },
          { label: "Project payments", value: "50% to start, 50% on completion" },
        ],
        link: { href: "/pricing#payment-terms", label: "Read the full payment terms" },
      },
    ],
  },
  {
    id: "ownership-seo-tools",
    title: "Ownership, SEO and tools",
    eyebrow: "Your site, your accounts",
    intro: "Who owns what, how much SEO comes with every website, hosting, and working in the tools you already use.",
    cta: {
      eyebrow: "Honest advice",
      title: "Not sure which platform or hosting is right?",
      text: "Book a free 30-minute call and I'll give you a straight recommendation for your tech stack, migration or project, even if that means using what you already have.",
      label: "Book a free discovery call",
    },
    items: [
      {
        id: "ownership",
        question: "Will I own my website?",
        answer:
          "Yes. Once the project is paid, you own the code, design, content, domain and accounts. Your domain, hosting and tool accounts are set up in your name, so you're never locked in to working with me.",
        badge: "Full ownership",
        icon: "key",
        breakdown: [
          { label: "Code, design and content", value: "Yours" },
          { label: "Domain and hosting", value: "In your name" },
          { label: "Logins and admin access", value: "Handed over at launch" },
        ],
      },
      {
        id: "seo-included",
        question: "Is SEO included?",
        answer:
          "Yes, the on-page and technical basics are included in every website: page titles, meta descriptions, a clean heading structure, an XML sitemap, mobile-friendly layouts and fast loading. Ongoing SEO content, such as blog posts, is a separate monthly service.",
        badge: "SEO basics",
        icon: "search",
        breakdown: [
          { label: "Titles, meta descriptions and headings", value: "Included" },
          { label: "Sitemap, speed and mobile checks", value: "Included" },
          { label: "Ongoing SEO content", value: "Monthly service" },
        ],
        link: { href: serviceHref("content-marketing"), label: "See SEO content and blog writing" },
      },
      {
        id: "hosting-needs",
        question: "Do I need hosting?",
        answer:
          "Yes, every website needs hosting, and I'll recommend the right option for your site: Vercel for Next.js sites and managed WordPress hosting for WordPress sites. The account is in your name and you pay the host directly.",
        badge: "Hosting",
        icon: "server",
        breakdown: [
          { label: "Next.js sites", value: "Vercel" },
          { label: "WordPress sites", value: "Managed WordPress hosting" },
          { label: "Hosting account", value: "In your name" },
        ],
      },
      {
        id: "existing-tools",
        question: "Can you work in my existing GoHighLevel, Unbounce or WordPress account?",
        answer:
          "Yes. I can work inside the accounts you already have, or set up new ones in your name if you're starting fresh.",
        badge: "Your tools",
        icon: "layers",
        breakdown: [
          { label: "Your existing accounts", value: "Yes" },
          { label: "New accounts set up for you", value: "Yes, in your name" },
          { label: "Platforms", value: "GoHighLevel, Unbounce, WordPress" },
        ],
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((c) => c.items);