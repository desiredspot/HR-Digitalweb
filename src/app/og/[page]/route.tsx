// src/app/og/[page]/route.tsx
// Serves the share image for each page at /og/<key> (e.g. /og/seo).
// Every image is generated once at build time and served as a static PNG.
import { ogPages, type OgKey } from "@/lib/og";
import { renderOgImage } from "@/lib/og-image";

export const dynamic = "force-static";
export const dynamicParams = false; // unknown keys return 404

export function generateStaticParams() {
  return Object.keys(ogPages).map((page) => ({ page }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return renderOgImage(ogPages[page as OgKey]);
}
