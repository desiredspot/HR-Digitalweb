"use server";

// Server action for the "Get my free plan" form. Sends the request through EmailJS
// (see src/lib/leads.ts for the setup and environment variables).

import { deliverLead } from "@/lib/leads";

export type FreePlanState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<"name" | "email" | "message", string>> };

const businessTypes = [
  "Small business / local service",
  "Coach / consultant",
  "SaaS / tech startup",
  "Agency / marketing partner",
  "E-commerce store",
];

const goals = [
  "Complete growth funnel (web + CRM + marketing)",
  "Fast Next.js or WordPress website",
  "Unbounce landing page and ad conversions",
  "GoHighLevel CRM and instant lead follow-up",
  "SEO content, reels and organic traffic",
];

export async function requestFreePlan(_prev: FreePlanState, formData: FormData): Promise<FreePlanState> {
  // Honeypot: real people never see or fill this field, most spam bots do.
  if (String(formData.get("company_fax") ?? "").trim() !== "") return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const businessType = String(formData.get("businessType") ?? "");
  const goal = String(formData.get("goal") ?? "");
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: NonNullable<Extract<FreePlanState, { status: "error" }>["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (message.length < 10) fieldErrors.message = "Tell me a little about your business (at least 10 characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  const sent = await deliverLead({
    form: "Free plan request",
    name,
    email,
    fields: [
      ["Name", name],
      ["Email", email],
      ["Website", website],
      ["Business type", businessTypes.includes(businessType) ? businessType : businessTypes[0]],
      ["Main goal", goals.includes(goal) ? goal : goals[0]],
      ["About the business", message],
    ],
    autoReply:
      "Thanks for requesting your free website and marketing plan. I'll review your business and email your plan within 48 hours.",
  });

  if (!sent) {
    return { status: "error", message: "Your request couldn't be sent. Try again, or email me instead." };
  }
  return { status: "success" };
}