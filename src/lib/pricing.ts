// src/lib/pricing.ts
// Starting prices shown on /pricing. Edit prices here and the table, mobile cards and
// structured data all update. Use "Custom" for tiers that are always quoted.

export type PriceTier = { usd: string; inr: string; details: string };

export type PricingRow = {
  service: string;
  /** Service slug from site-config, used to link to the service page */
  slug: string;
  icon: "globe" | "layout" | "cpu" | "mail" | "fileText" | "share" | "video";
  starter: PriceTier;
  growth: PriceTier;
  premium: PriceTier;
};

export const pricingTiers = ["starter", "growth", "premium"] as const;
export const tierLabels: Record<(typeof pricingTiers)[number], string> = {
  starter: "Starter",
  growth: "Growth",
  premium: "Premium",
};

export const pricingRows: PricingRow[] = [
  {
    service: "Website (WordPress or Next.js)",
    slug: "web-development",
    icon: "globe",
    starter: { usd: "$499", inr: "₹39,999", details: "Up to 5 pages" },
    growth: { usd: "$1,199", inr: "₹94,999", details: "Up to 10 pages + blog" },
    premium: { usd: "Custom", inr: "Custom", details: "Web app or 10+ pages" },
  },
  {
    service: "Unbounce landing page",
    slug: "landing-page-design",
    icon: "layout",
    starter: { usd: "$299", inr: "₹23,999", details: "1 page" },
    growth: { usd: "$549", inr: "₹43,999", details: "Page + A/B variant" },
    premium: { usd: "$999", inr: "₹79,999", details: "3-page funnel" },
  },
  {
    service: "GoHighLevel CRM setup",
    slug: "gohighlevel-crm",
    icon: "cpu",
    starter: { usd: "$399", inr: "₹31,999", details: "Pipeline + calendar" },
    growth: { usd: "$899", inr: "₹71,999", details: "Funnels + workflows" },
    premium: { usd: "Custom", inr: "Custom", details: "Full account or agency snapshot" },
  },
  {
    service: "Email marketing (monthly)",
    slug: "email-marketing",
    icon: "mail",
    starter: { usd: "$249", inr: "₹19,999", details: "4 emails" },
    growth: { usd: "$499", inr: "₹39,999", details: "8 emails + 1 sequence" },
    premium: { usd: "Custom", inr: "Custom", details: "Full automation" },
  },
  {
    service: "SEO blog posts (monthly)",
    slug: "content-marketing",
    icon: "fileText",
    starter: { usd: "$199", inr: "₹15,999", details: "2 posts" },
    growth: { usd: "$449", inr: "₹35,999", details: "5 posts" },
    premium: { usd: "$849", inr: "₹67,999", details: "10 posts + content plan" },
  },
  {
    service: "Social media (monthly)",
    slug: "social-media-marketing",
    icon: "share",
    starter: { usd: "$199", inr: "₹15,999", details: "12 posts" },
    growth: { usd: "$399", inr: "₹31,999", details: "20 posts + 4 reels" },
    premium: { usd: "$749", inr: "₹59,999", details: "30 posts + 8 reels" },
  },
  {
    service: "Reels editing",
    slug: "reels-video-editing",
    icon: "video",
    starter: { usd: "$25", inr: "₹1,999", details: "Per reel" },
    growth: { usd: "$180", inr: "₹14,499", details: "10 reels a month" },
    premium: { usd: "$320", inr: "₹25,499", details: "20 reels a month" },
  },
];

/** "$1,199" -> 1199, "Custom" -> null */
export function priceToNumber(price: string): number | null {
  const n = Number(price.replace(/[^0-9.]/g, ""));
  return price.toLowerCase() === "custom" || Number.isNaN(n) || n === 0 ? null : n;
}