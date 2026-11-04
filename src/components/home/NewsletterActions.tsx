"use server";

// Newsletter sign-up. Sends you the new subscriber's email through EmailJS
// (see src/lib/leads.ts). EmailJS only sends emails: copy new subscribers into your
// email tool (GoHighLevel, Mailchimp...) or set LEAD_WEBHOOK_URL to add them automatically.

import { deliverLead } from "@/lib/leads";

export type NewsletterState = { status: "idle" } | { status: "success" } | { status: "error"; message: string };

export async function subscribeToNewsletter(_prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  // Honeypot: hidden from people, usually filled in by bots
  if (String(formData.get("company_fax") ?? "").trim() !== "") return { status: "success" };

  const email = String(formData.get("email") ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const sent = await deliverLead({
    form: "Newsletter sign-up",
    email,
    fields: [["Email", email]],
    autoReply: "Thanks for subscribing. I'll send you practical website and marketing tips, and you can unsubscribe any time.",
  });

  if (!sent) return { status: "error", message: "Your sign-up couldn't be sent. Try again in a moment." };
  return { status: "success" };
}