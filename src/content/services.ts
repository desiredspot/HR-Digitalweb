/** A list item is plain text, or [bold lead, rest of sentence]. */
export type Item = string | [string, string];

export type Section = {
  heading: string;
  body?: string[];
  items?: Item[];
  ordered?: boolean;
  links?: { label: string; href: string }[];
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  group: "build" | "automate" | "attract";
  card: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
  cta: string;
};

export const groups = {
  build: { title: "Build", blurb: "Websites, web apps and landing pages" },
  automate: { title: "Automate", blurb: "CRM and email that follow up for you" },
  attract: { title: "Attract", blurb: "Content, social and video that bring people in" },
} as const;

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Next.js Web Development",
    group: "build",
    card: "Custom websites and web apps built for speed, Core Web Vitals and technical SEO.",
    metaTitle: "Next.js Development Services | Custom Websites & Web Apps",
    metaDescription:
      "Freelance Next.js developer building fast, SEO-friendly websites and web apps with React, headless CMS and top Core Web Vitals scores. Get a free quote.",
    keywords: ["Next.js development services", "hire Next.js developer", "custom web app development", "React website development", "fast SEO-friendly website"],
    h1: "Next.js Development Services for Fast, SEO-Friendly Websites",
    intro: [
      "Slow websites lose visitors and rankings. I build custom websites and web applications with Next.js and React that load in a blink, score well on Core Web Vitals and are structured for search engines from the first line of code.",
    ],
    sections: [
      {
        heading: "What We Build",
        items: [
          ["Business and brand websites", "multi-page sites with a headless CMS so your team can edit content easily."],
          ["Custom web applications", "dashboards, client portals, booking systems and internal tools."],
          ["SaaS marketing sites", "product pages, pricing tables, docs and blog, built to scale."],
          ["Website redesigns and migrations", "move from a slow or outdated platform to Next.js without losing SEO."],
          ["API and third-party integrations", "CRMs like GoHighLevel, payment gateways, forms, analytics and more."],
        ],
      },
      {
        heading: "Why choose Next.js for your website?",
        items: [
          ["Speed", "server-side rendering and static generation deliver pages fast."],
          ["SEO", "clean HTML, metadata control, sitemaps and schema markup out of the box."],
          ["Security", "no plugin vulnerabilities to patch every week."],
          ["Scalability", "grows from a five-page site to a full web app on the same codebase."],
        ],
      },
      {
        heading: "What's included in every build",
        items: [
          "Mobile-first, responsive design",
          "On-page SEO: meta tags, Open Graph, XML sitemap, robots.txt, structured data",
          "Performance optimisation: image optimisation, lazy loading, code splitting",
          "Accessibility best practices (WCAG)",
          "Google Analytics 4 and Search Console setup",
          "Contact forms connected to your CRM or inbox",
          "Deployment on Vercel or your preferred host",
          "30 days of post-launch support",
        ],
      },
      {
        heading: "Who this is for",
        body: ["Startups, SaaS companies, agencies and growing businesses that need a website that performs as well as it looks."],
      },
    ],
    faqs: [
      { q: "How long does a Next.js website take?", a: "A 5–8 page business website usually takes 2–4 weeks. Web apps depend on features and are scoped individually." },
      { q: "Can I edit the content myself?", a: "Yes. I connect a headless CMS such as Sanity, Contentful or Strapi so you can update pages without code." },
      { q: "Will my current SEO rankings be affected by a redesign?", a: "I map every old URL, set up redirects and keep your metadata so rankings are protected." },
    ],
    cta: "Get a free Next.js project quote",
  },
  {
    slug: "landing-page-design",
    name: "Unbounce Landing Pages",
    group: "build",
    card: "Conversion-focused landing pages for ads, launches and lead magnets, built to A/B test.",
    metaTitle: "Unbounce Landing Page Designer | High-Converting Pages",
    metaDescription:
      "Hire an Unbounce landing page designer for conversion-focused pages for Google Ads, Meta Ads and launches. Persuasive copy, A/B testing and fast turnaround.",
    keywords: ["Unbounce landing page designer", "high-converting landing pages", "landing page design services", "PPC landing page", "lead generation landing page"],
    h1: "High-Converting Landing Pages Built in Unbounce",
    intro: [
      "You're paying for every click. Your landing page decides whether that click becomes a lead or a lost dollar. I design and build Unbounce landing pages focused on a single goal, with persuasive copy, clean design and testing built in.",
    ],
    sections: [
      {
        heading: "Landing pages I create",
        items: [
          "PPC landing pages for Google Ads and Microsoft Ads",
          "Social ad landing pages for Meta, Instagram, LinkedIn and TikTok campaigns",
          "Lead magnet and opt-in pages for ebooks, webinars and free trials",
          "Product launch and sales pages",
          "Event and webinar registration pages",
          "Thank-you pages that drive the next action",
        ],
      },
      {
        heading: "What makes a landing page convert",
        ordered: true,
        items: [
          ["Message match", "the headline mirrors the ad, so visitors know they're in the right place."],
          ["One clear call to action", "no distracting menus or competing links."],
          ["Benefit-driven copy", "what the visitor gets, not just what you do."],
          ["Social proof", "reviews, logos and results placed where doubt appears."],
          ["Speed and mobile design", "most ad traffic is on phones."],
          ["Continuous testing", "A/B variants on headlines, offers and forms."],
        ],
      },
      {
        heading: "What's included",
        items: [
          "Conversion strategy and wireframe",
          "Copywriting or copy editing",
          "Custom Unbounce design for desktop and mobile",
          "Form setup and CRM integration (GoHighLevel, HubSpot, Mailchimp and more)",
          "Conversion tracking with Google Tag Manager, GA4 and ad pixels",
          "One A/B test variant",
          "Smart Traffic setup if you want it",
        ],
      },
      {
        heading: "Not on Unbounce?",
        body: ["I also build landing pages in GoHighLevel, WordPress (Elementor) and Next.js."],
        links: [
          { label: "GoHighLevel setup", href: "/services/gohighlevel-crm" },
          { label: "WordPress websites", href: "/services/wordpress-development" },
        ],
      },
    ],
    faqs: [
      { q: "How fast can you deliver a landing page?", a: "A single landing page is usually ready in 5–7 business days, including one revision round." },
      { q: "Do you write the copy?", a: "Yes. I can write it from scratch or polish what you have." },
      { q: "Can you improve my existing landing page?", a: "Yes. I offer conversion audits with clear recommendations and can rebuild the page." },
    ],
    cta: "Get a landing page that converts",
  },
  {
    slug: "wordpress-development",
    name: "WordPress Websites",
    group: "build",
    card: "Easy-to-edit WordPress websites, theme customisation, speed optimisation and maintenance.",
    metaTitle: "WordPress Website Development | Freelance WordPress Expert",
    metaDescription:
      "Custom WordPress websites that are fast, secure and easy to update. Theme customisation, Elementor builds, WooCommerce, speed fixes and ongoing maintenance.",
    keywords: ["WordPress website development", "freelance WordPress developer", "WordPress speed optimisation", "Elementor website design", "WooCommerce development", "WordPress maintenance"],
    h1: "WordPress Website Development That's Fast, Secure and Easy to Manage",
    intro: [
      "WordPress powers a huge share of the web for good reason: it's flexible and simple to update. The problem is that many WordPress sites are slow, bloated with plugins and hard to maintain. I build lean, professional WordPress websites you'll actually enjoy managing.",
    ],
    sections: [
      {
        heading: "WordPress services",
        items: [
          ["Custom WordPress websites", "built with Elementor, Gutenberg or a custom theme."],
          ["WooCommerce stores", "product pages, payments and shipping set up."],
          ["Website redesigns", "modernise your look without losing rankings."],
          ["Speed optimisation", "caching, image compression, clean-up and Core Web Vitals fixes."],
          ["Bug fixes and troubleshooting", "broken layouts, plugin conflicts, white screens."],
          ["Security", "hardening and malware clean-up."],
          ["Monthly maintenance", "updates, backups, uptime monitoring and small edits."],
        ],
      },
      {
        heading: "Built for SEO from the start",
        body: [
          "Every WordPress site comes with Rank Math or Yoast configured, clean permalinks, XML sitemaps, schema markup, optimised images and mobile-first layouts, so search engines understand your site from day one.",
        ],
      },
      {
        heading: "You stay in control",
        body: [
          "I hand over a site you can edit yourself, with a short video walkthrough showing how to update pages, add blog posts and change images, without breaking the design.",
        ],
      },
    ],
    faqs: [
      {
        q: "WordPress or Next.js — which should I choose?",
        a: "WordPress suits content-heavy sites where your team edits often. Next.js suits businesses that need top speed or custom app features. I'll recommend the right fit on our call.",
      },
      { q: "Can you fix my slow WordPress site?", a: "Yes. I start with a speed audit, then fix hosting, caching, images and heavy plugins." },
      { q: "Do you offer ongoing support?", a: "Yes. Monthly maintenance plans cover updates, backups, security and small content changes." },
    ],
    cta: "Get my WordPress website quote",
  },
  {
    slug: "gohighlevel-crm",
    name: "GoHighLevel CRM & Automation",
    group: "automate",
    card: "Pipelines, funnels, calendars, workflows and follow-up automation that save you hours every week.",
    metaTitle: "GoHighLevel Expert | GHL CRM Setup & Automation Services",
    metaDescription:
      "GoHighLevel setup done right: pipelines, funnels, calendars, workflows, SMS and email automation that capture and convert leads on autopilot.",
    keywords: ["GoHighLevel expert", "GHL CRM setup", "GoHighLevel automation", "GoHighLevel funnel builder", "marketing automation services", "GHL workflows"],
    h1: "GoHighLevel CRM Setup and Automation That Follows Up for You",
    intro: [
      "Leads go cold in minutes. GoHighLevel can capture, nurture and book them automatically, but only when it's set up properly. I configure your GHL account end to end so every lead gets a fast response and nothing slips through the cracks.",
    ],
    sections: [
      {
        heading: "GoHighLevel services",
        items: [
          ["Account and sub-account setup", "branding, domains, phone numbers, email sending (SPF, DKIM, DMARC)."],
          ["Pipelines and opportunities", "stages that match how you actually sell."],
          ["Funnels and websites in GHL", "opt-in pages, sales pages and booking pages."],
          ["Calendars and booking", "round-robin, reminders and no-show follow-ups."],
          ["Workflows and automation", "speed-to-lead SMS, nurture emails, review requests, missed-call text-back."],
          ["Forms, surveys and chat widgets", "connected to the right pipeline."],
          ["Integrations", "Zapier, Stripe, Facebook Lead Ads, Google Ads and your website."],
          ["Migration", "from HubSpot, ClickFunnels, Calendly or spreadsheets."],
          ["Snapshots for agencies", "reusable setups for your sub-accounts."],
        ],
      },
      {
        heading: "Automations that pay for themselves",
        ordered: true,
        items: [
          "A new lead arrives and gets a personalised SMS and email within one minute.",
          "They book a call from a calendar link, and reminders go out automatically.",
          "No-shows get a friendly rebook message.",
          "After the sale, the client gets a review request and onboarding sequence.",
        ],
      },
      {
        heading: "Who this is for",
        body: ["Coaches, consultants, local service businesses, clinics, real estate teams and marketing agencies using or switching to GoHighLevel."],
      },
    ],
    faqs: [
      { q: "Do I need my own GoHighLevel account?", a: "Yes, the account stays in your name. I can help you choose the right plan." },
      { q: "Can you fix a messy GHL setup?", a: "Yes. I audit your workflows, remove conflicts and rebuild what's broken." },
      { q: "Do you offer training?", a: "Every setup includes recorded walkthroughs so your team knows how to use it." },
    ],
    cta: "Automate my business with GoHighLevel",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    group: "automate",
    card: "Welcome sequences, newsletters and nurture flows that turn subscribers into paying clients.",
    metaTitle: "Email Marketing Services | Campaigns, Automation & Newsletters",
    metaDescription:
      "Email marketing services that turn subscribers into customers: welcome sequences, newsletters, nurture flows and promotions with copy, design and automation.",
    keywords: ["email marketing services", "email marketing specialist", "email automation", "newsletter writing", "email sequence copywriting", "Klaviyo and Mailchimp setup"],
    h1: "Email Marketing Services That Turn Subscribers Into Customers",
    intro: [
      "Email is the one channel you fully own. No algorithm decides who sees your message. I plan, write, design and automate email campaigns that build trust and drive sales on repeat.",
    ],
    sections: [
      {
        heading: "Email marketing services",
        items: [
          ["Welcome sequences", "introduce your brand and make the first sale."],
          ["Lead nurture sequences", "warm up cold leads over time."],
          ["Newsletters", "weekly or monthly emails your audience looks forward to."],
          ["Promotional and launch campaigns", "for offers, events and new products."],
          ["E-commerce flows", "abandoned cart, browse abandonment, post-purchase and win-back."],
          ["List segmentation and tagging", "so the right people get the right message."],
          ["Deliverability setup", "domain authentication, list hygiene and spam-safe practices."],
        ],
      },
      { heading: "Platforms", body: ["GoHighLevel, Mailchimp, Klaviyo, ActiveCampaign, Kit (ConvertKit), Brevo and MailerLite."] },
      {
        heading: "How I approach email",
        ordered: true,
        items: [
          ["Audit", "your list, past campaigns and current results."],
          ["Plan", "the sequences and send calendar around your goals."],
          ["Write and design", "mobile-friendly emails with clear subject lines and CTAs."],
          ["Automate and test", "triggers, tags and A/B subject lines."],
          ["Report", "open rates, click rates and revenue each month."],
        ],
      },
    ],
    faqs: [
      { q: "I don't have a big list. Is email worth it?", a: "Yes. A small, engaged list often outperforms large social followings. I can also set up lead magnets to grow it." },
      { q: "Do you write the emails?", a: "Yes. Copy, design and setup are all included." },
    ],
    cta: "Start growing my email revenue",
  },
  {
    slug: "content-marketing",
    name: "Content Marketing & SEO Blogs",
    group: "attract",
    card: "Keyword-researched blog posts and website copy that rank on Google and sell.",
    metaTitle: "Content Writing Services | SEO Blog Posts & Website Copy",
    metaDescription:
      "SEO content writing services: keyword-researched blog posts, website copy and landing page content that ranks on Google and converts readers into leads.",
    keywords: ["content writing services", "SEO blog writing", "website copywriting", "content marketing services", "blog writing services for business", "landing page copywriting"],
    h1: "SEO Content Writing Services That Rank and Convert",
    intro: [
      "Great content does two jobs: it gets found on Google and it persuades people to act. I write blog posts, website pages and landing page copy backed by keyword research and written for real readers.",
    ],
    sections: [
      {
        heading: "Content I write",
        items: [
          ["SEO blog posts and articles", "1,000–2,500 words targeting keywords your customers search."],
          ["Website copy", "home, about, service and location pages."],
          ["Landing page copy", "focused on one offer and one CTA."],
          ["Pillar pages and topic clusters", "that build authority in your niche."],
          ["Case studies", "that turn client wins into proof."],
          ["Content refreshes", "updating old posts to recover lost rankings."],
        ],
      },
      {
        heading: "My content process",
        ordered: true,
        items: [
          ["Keyword and competitor research", "find topics with real search demand you can win."],
          ["Content brief and outline", "search intent, headings, questions to answer and internal links."],
          ["Writing", "original, human-written content in your brand voice."],
          ["On-page SEO", "meta title, meta description, headers, alt text, schema suggestions."],
          ["Publishing support", "I can upload and format posts in WordPress, a headless CMS or GoHighLevel."],
        ],
      },
      {
        heading: "Monthly content plans",
        body: ["Consistency wins in SEO. Monthly plans include a content calendar, 4–8 blog posts, internal linking and a simple ranking report."],
      },
    ],
    faqs: [
      {
        q: "Is your content written by AI?",
        a: "Every piece is researched, written and edited by me for accuracy, originality and your brand voice. Tools help with research, never as a copy-paste shortcut.",
      },
      { q: "How long until blog posts rank?", a: "New content usually takes 3–6 months to gain traction, faster for low-competition keywords." },
    ],
    cta: "Get a content plan for my business",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    group: "attract",
    card: "Branded posts, carousels and content calendars for Instagram, LinkedIn and Facebook.",
    metaTitle: "Social Media Marketing Services | Posts, Carousels & Calendars",
    metaDescription:
      "Social media marketing services for Instagram, LinkedIn and Facebook: branded posts, carousels, captions and content calendars that grow your audience.",
    keywords: ["social media marketing services", "social media content creation", "social media post design", "Instagram content creator", "LinkedIn content writing", "social media management for small business"],
    h1: "Social Media Marketing Services That Build Your Brand Every Week",
    intro: [
      "Posting randomly doesn't grow a business. A clear content strategy does. I create on-brand social media content that educates your audience, builds trust and points people back to your website and offers.",
    ],
    sections: [
      {
        heading: "What's included",
        items: [
          ["Content strategy", "content pillars, audience research and posting frequency."],
          ["Monthly content calendar", "planned around launches, seasons and trends."],
          ["Post and carousel design", "in your brand colours and fonts."],
          ["Captions and hashtags", "written to spark comments and saves."],
          ["Reels and short videos", "edited for each platform."],
          ["Scheduling", "with Meta Business Suite, GoHighLevel Social Planner or Buffer."],
          ["Monthly performance report", "reach, engagement, followers and website clicks."],
        ],
      },
      { heading: "Platforms", body: ["Instagram, Facebook, LinkedIn, X (Twitter), Pinterest and YouTube Shorts."] },
      {
        heading: "Content that connects to revenue",
        body: [
          "Every post has a purpose: build awareness, show expertise, share proof or drive action. Social traffic lands on optimised pages and flows into your CRM, so you can see which posts bring real leads.",
        ],
        links: [{ label: "Reels and video editing", href: "/services/reels-video-editing" }],
      },
    ],
    faqs: [
      { q: "How many posts do I get each month?", a: "Packages range from 12 to 30 posts per month. See the pricing page for details." },
      { q: "Do you manage comments and DMs?", a: "Community management is available as an add-on." },
    ],
    cta: "Plan my social media content",
  },
  {
    slug: "reels-video-editing",
    name: "Reels & Short-Form Video",
    group: "attract",
    card: "30–60 second reels and shorts edited with captions, hooks and trending formats.",
    metaTitle: "Reels Editing & Short-Form Video Services | 1-Minute Reels",
    metaDescription:
      "Short-form video editing for Instagram Reels, YouTube Shorts and TikTok. Scroll-stopping hooks, captions, B-roll and music in 30–60 second edits.",
    keywords: ["short-form video editing", "Instagram Reels editing", "reels editor for hire", "YouTube Shorts editing", "TikTok video editing", "1 minute reels"],
    h1: "Short-Form Video Editing That Stops the Scroll",
    intro: [
      "Short-form video is one of the fastest ways to reach new people. You record, I edit. I turn raw clips into polished 30–60 second reels and shorts with strong hooks, clean captions and the pacing that keeps viewers watching.",
    ],
    sections: [
      {
        heading: "What I edit",
        items: [
          "Instagram Reels and Facebook Reels",
          "YouTube Shorts and TikTok videos",
          "Talking-head and educational reels for coaches and experts",
          "Product and service promo videos",
          "Testimonial and case study clips",
          "Clips repurposed from podcasts, webinars and long YouTube videos",
        ],
      },
      {
        heading: "Every reel includes",
        items: [
          "A hook in the first 3 seconds",
          "Animated, on-brand captions",
          "B-roll, zooms and transitions to hold attention",
          "Royalty-free music and sound effects",
          "Branded intro or end card with a clear CTA",
          "Vertical 9:16 export, plus square on request",
          "Caption and hashtag suggestions for posting",
        ],
      },
      {
        heading: "Simple workflow",
        ordered: true,
        items: [
          "Upload your raw footage to a shared folder.",
          "Share your goal, brand style and any reference reels.",
          "Receive edited reels within 48–72 hours.",
          "Request revisions, then post.",
        ],
      },
    ],
    faqs: [
      { q: "Do you script reels too?", a: "Yes. I can write hooks and short scripts so you know exactly what to record." },
      { q: "Can you create reels without me on camera?", a: "Yes, using stock footage, screen recordings, text animations and voiceovers." },
    ],
    cta: "Get my first reel edited",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
