// src/sanity/lib/image.ts
// Builds image URLs for Sanity images, e.g. urlFor(post.mainImage).width(800).url()
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}