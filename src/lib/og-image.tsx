// src/lib/og-image.tsx
// The design of every share image: navy background with a cyan glow, your logo,
// a small label, the page headline and your domain. Used by /og/[page] and the
// default /opengraph-image. Images are made at build time, so they cost nothing per visit.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";
import type { OgPage } from "@/lib/og";

export const ogSize = { width: 1200, height: 630 };

// White version of your logo (public/logo-1.png, 328 × 183), shown at 72px tall
const LOGO = { file: "logo-1.png", width: 129, height: 72 };

export async function renderOgImage({ eyebrow, title }: OgPage) {
  const logo = await readFile(join(process.cwd(), "public", LOGO.file));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const domain = siteConfig.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const titleSize = title.length > 60 ? 58 : title.length > 40 ? 66 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0B132B",
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(6,182,212,0.35), transparent 55%), radial-gradient(circle at 0% 100%, rgba(45,212,191,0.18), transparent 50%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo and label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={LOGO.width} height={LOGO.height} alt="" />
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid rgba(34,211,238,0.45)",
              backgroundColor: "rgba(34,211,238,0.12)",
              color: "#67e8f9",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* Middle: headline with a gradient bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", width: 120, height: 8, borderRadius: 8, backgroundImage: "linear-gradient(90deg, #22d3ee, #5eead4, #3b82f6)" }} />
          <div style={{ display: "flex", fontSize: titleSize, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1056 }}>
            {title}
          </div>
        </div>

        {/* Bottom: services line and domain */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: "#94a3b8" }}>
          <div style={{ display: "flex" }}>Next.js · WordPress · GoHighLevel · SEO · Content · Reels</div>
          <div style={{ display: "flex", color: "#5eead4", fontWeight: 700 }}>{domain}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
