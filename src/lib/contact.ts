// src/lib/contact.ts
// Your contact details and the options in the contact form. Change them here once and the
// contact page, the form and its server-side checks all update.

export const contactDetails = {
  // TODO: check every value below before going live
  email: "hello@hrdigitalweb.com",
  /** WhatsApp number in international format, digits only (e.g. "919812345678"). Leave empty to hide it. */
  whatsapp: "",
  /** How the number is shown on the page, e.g. "+91 98123 45678" */
  whatsappDisplay: "",
  location: "Hyderabad, Telangana, India",
  hours: "Monday to Friday, 10 am to 7 pm IST",
  replyTime: "within 1 business day",
  /** Your GoHighLevel (or Calendly) booking page. Leave empty and the booking button jumps to the form. */
  calendarUrl: "",
  /** Set to false when you're fully booked; the "Taking on new projects" badge then hides */
  acceptingProjects: true,
};

export const contactServices = [
  "Website",
  "Web app",
  "Landing page",
  "WordPress",
  "SEO",
  "GoHighLevel",
  "Email marketing",
  "SEO content",
  "Social media",
  "Reels",
  "Something else",
] as const;

export const budgetRanges = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Monthly retainer",
  "Not sure yet",
] as const;

export const timelines = ["As soon as possible (1–2 weeks)", "Within a month", "In 2–3 months", "Flexible"] as const;