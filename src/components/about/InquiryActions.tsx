"use server";

import { inquiryRegions, inquiryScopes } from "./InquiryOptions";

// Server action for the About page "Let's talk about your project" form.
// Sends each enquiry as JSON to LEAD_WEBHOOK_URL (the same GoHighLevel/Zapier webhook
// as the home page free plan form). Set it in .env.local and in Vercel's env settings.

export type InquiryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<"name" | "email" | "message", string>> };

export async function sendProjectInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // Honeypot: hidden from people, usually filled in by bots
  if (String(formData.get("company_fax") ?? "").trim() !== "") return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const region = String(formData.get("region") ?? "");
  const scope = String(formData.get("scope") ?? "");
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: NonNullable<Extract<InquiryState, { status: "error" }>["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (message.length < 10) fieldErrors.message = "Tell me a little about your project (at least 10 characters).";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("LEAD_WEBHOOK_URL is not set, so the project enquiry was not delivered.");
    return { status: "error", message: "Something went wrong on my side. Please email me instead." };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "Website: about page enquiry",
        name,
        email,
        region: inquiryRegions.includes(region) ? region : "Somewhere else",
        scope: inquiryScopes.includes(scope) ? scope : "Not sure yet",
        message: message.slice(0, 5000),
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    return { status: "success" };
  } catch (err) {
    console.error("Project enquiry failed:", err);
    return { status: "error", message: "Your message couldn't be sent. Try again, or email me instead." };
  }
}