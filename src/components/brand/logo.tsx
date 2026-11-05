import Image from "next/image";

// Header logo. Two files: a dark-text version for light mode and a white version for dark mode.
// Each <Image> gets the size it is SHOWN at (80px tall), so Next.js creates small copies
// (about 170px and 340px wide for sharp screens) instead of 1200px ones.
// loading="eager" + fetchPriority="high": the logo is the first thing on every page,
// so the browser fetches it straight away (better LCP).
//
// If you change the logo files, update the widths below:
// width = round(80 × file width ÷ file height)

const LIGHT_THEME = { src: "/logo-w.png", width: 172, height: 80 }; // file is 621 × 289
const DARK_THEME = { src: "/logo-1.png", width: 143, height: 80 }; //  file is 328 × 183

const ALT = "HR DigitalWeb logo";

export function Logo({ className = "" }: { className?: string }) {
  const imgClass = "h-20 w-auto"; // 80px tall in the header

  return (
    <span className={className}>
      <Image
        src={LIGHT_THEME.src}
        alt={ALT}
        width={LIGHT_THEME.width}
        height={LIGHT_THEME.height}
        loading="eager"
        fetchPriority="high"
        className={`${imgClass} dark:hidden`}
      />
      <Image
        src={DARK_THEME.src}
        alt={ALT}
        width={DARK_THEME.width}
        height={DARK_THEME.height}
        loading="eager"
        fetchPriority="high"
        className={`${imgClass} hidden dark:block`}
      />
    </span>
  );
}