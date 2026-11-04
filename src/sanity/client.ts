// src/sanity/lib/client.ts
// Reads your Sanity project from .env.local:
//   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
//   NEXT_PUBLIC_SANITY_DATASET=production
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  // Cached CDN reads: fast, and new posts still appear within about a minute
  useCdn: true,
});