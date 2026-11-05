/**
 * EDIT THIS FILE FIRST.
 * Every page reads your brand, contact details and links from here.
 */
export const site = {
  name: "HR DigitalWeb",
  person: "HR DigitalWeb",
  tagline: "Freelance web development and digital marketing for businesses that want to grow online.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.hrdigitalweb.com").replace(/\/$/, ""),
  email: "hello@hrdigitalweb.com",
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // digits only, used for wa.me link
  city: "Hyderabad",
  region: "Telangana",
  country: "IN",
  hours: "Monday–Friday, 10 am–7 pm IST",
  // Booking link (GoHighLevel calendar, Calendly, etc.). Leave "/contact" to send people to the form.
  bookingUrl: "/contact",
  socials: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    x: "",
    youtube: "",
  },
  serviceArea: ["India", "United States", "United Kingdom", "Australia", "United Arab Emirates"],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const tools = [
  "Next.js",
  "React",
  "WordPress",
  "Unbounce",
  "GoHighLevel",
  "Mailchimp",
  "Klaviyo",
  "Google Analytics 4",
  "Search Console",
  "Canva",
  "CapCut",
  "Premiere Pro",
  "Figma",
];
