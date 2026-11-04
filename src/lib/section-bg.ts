// Section background tones, used to give each home page section a slightly
// different shade so they don't all blend into one flat colour.
// Every tone has a light and a dark version, so your theme toggle keeps working.
//
// Change the colours here once and every section updates.

export const sectionBg = {
  // Same as the page background
  base: "bg-slate-50 dark:bg-[#0B132B]",
  // A step lighter in dark mode, a step greyer in light mode (white cards stand out)
  alt: "bg-slate-100 dark:bg-[#0E1A38]",
  // A hint of your brand cyan, for sections you want to highlight
  tint: "bg-cyan-50 dark:bg-[#0A1F33]",
} as const;

// Thin divider line between sections
export const sectionDivider = "border-t border-slate-200/70 dark:border-white/5";