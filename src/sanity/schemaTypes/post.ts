// src/sanity/schemaTypes/post.ts
// Blog post schema. The category values must match the ids in src/lib/blog.ts.
import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      description: "For a planned post, use the slug from src/lib/blog.ts so it leaves the Coming soon list.",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Web Development", value: "web-development" },
          { title: "Landing Pages", value: "landing-pages" },
          { title: "GoHighLevel", value: "gohighlevel" },
          { title: "Email Marketing", value: "email-marketing" },
          { title: "SEO & Content", value: "seo-content" },
          { title: "Social & Reels", value: "social-reels" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "relatedService",
      title: "Related service (optional)",
      type: "string",
      description: "Overrides the service page linked from this post. Leave empty to use the category's service.",
      options: {
        list: [
          { title: "Web development", value: "web-development" },
          { title: "Landing page design", value: "landing-page-design" },
          { title: "WordPress development", value: "wordpress-development" },
          { title: "SEO services", value: "seo" },
          { title: "SEO content writing", value: "content-marketing" },
          { title: "GoHighLevel CRM", value: "gohighlevel-crm" },
          { title: "Email marketing", value: "email-marketing" },
          { title: "Social media marketing", value: "social-media-marketing" },
          { title: "Reels and video", value: "reels-video-editing" },
        ],
      },
    }),
    defineField({ name: "publishedAt", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.max(160).warning("Keep under 160 characters for SEO"),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "seoTitle", type: "string", title: "SEO title" }),
    defineField({ name: "seoDescription", type: "text", rows: 2, title: "SEO description" }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "mainImage" } },
  orderings: [{ title: "Newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});