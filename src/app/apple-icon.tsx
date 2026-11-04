import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#2d55e0" }}>
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path d="M9 21.5 14.5 16 18 19.5 23.5 11" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="23.5" cy="11" r="2.2" fill="#7ee0c3" />
        </svg>
      </div>
    ),
    size,
  );
}
