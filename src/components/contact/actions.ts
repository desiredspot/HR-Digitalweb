"use server";

// Server action for the contact page form. Sends the enquiry through EmailJS
// (see src/lib/leads.ts for the setup and environment variables).

import { budgetRanges, contactServices, timelines } from "@/lib/contact";
import { deliverLead } from "@/lib/leads";

type Field = "name" | "email" | "service" | "budget" | "message";

export type ContactState =
  | { status: "idle" }
  | { status: "success"; firstName: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<Field, string>>;
      /** What was typed, so the form can show it again (React resets forms after an action) */
      values?: Record<string, string>;
    };

const oneOf = <T extends readonly string[]>(list: T, value: string) =>
  (list as readonly string[]).includes(value) ? value : "";

export async function sendContactEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: hidden from people, filled in by most spam bots
  if (String(formData.get("company_fax") ?? "").trim() !== "") return { status: "success", firstName: "" };

  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const name = get("name");
  const email = get("email");
  const phone = get("phone").slice(0, 40);
  const website = get("website").slice(0, 200);
  const service = oneOf(contactServices, get("service"));
  const budget = oneOf(budgetRanges, get("budget"));
  const timeline = oneOf(timelines, get("timeline")) || timelines[timelines.length - 1];
  const message = get("message");

  const fieldErrors: Partial<Record<Field, string>> = {};
  if (name.length < 2) fieldErrors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!service) fieldErrors.service = "Choose the service you need.";
  if (!budget) fieldErrors.budget = "Choose a budget range (or 'Not sure yet').";
  if (message.length < 10) fieldErrors.message = "Tell me a little about your project (at least 10 characters).";

  const values = { name, email, phone, website, service, budget, timeline, message };

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors, values };
  }

  const sent = await deliverLead({
    form: "Contact form",
    name,
    email,
    fields: [
      ["Name", name],
      ["Email", email],
      ["Phone / WhatsApp", phone],
      ["Website", website],
      ["Service", service],
      ["Budget", budget],
      ["Timeline", timeline],
      ["Project details", message],
    ],
    autoReply:
      "Thanks for telling me about your project. I've got your details and I'll reply within 1 business day with next steps and a few times for a free 30-minute call.",
  });

  if (!sent) {
    return { status: "error", message: "Your message couldn't be sent. Try again, or email me instead.", values };
  }
  return { status: "success", firstName: name.split(/\s+/)[0] ?? "" };
}