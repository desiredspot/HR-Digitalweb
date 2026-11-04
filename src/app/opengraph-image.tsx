import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — freelance web developer and digital marketer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#13233f", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: "#2d55e0", display: "flex" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>Websites that load fast, rank higher and turn visitors into customers</div>
          <div style={{ fontSize: 30, color: "#a9c0ff" }}>Next.js · WordPress · Unbounce · GoHighLevel · Email · Content · Reels</div>
        </div>
      </div>
    ),
    size,
  );
}
