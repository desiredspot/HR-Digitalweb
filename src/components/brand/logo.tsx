import Image from "next/image";

// 1. Put your logo file in /public, e.g. public/logo.png (or .svg / .webp)
// 2. Set LOGO_WIDTH / LOGO_HEIGHT to the file's real pixel size (keeps the ratio, no layout shift)
// 3. If your logo is hard to see on the light theme, add a second file
//    (e.g. public/logo-dark-text.png) and set LIGHT_THEME_SRC to it.

const LOGO_SRC = "/logo-1.png"; // shown in dark mode (and in light mode if no variant)
const LIGHT_THEME_SRC: "/logo-w.png" = "/logo-w.png"; // e.g. "/logo-dark-text.png"
const LOGO_WIDTH = 600;
const LOGO_HEIGHT = 200;

const ALT = "HR DigitalWeb logo";

export function Logo({ className = "" }: { className?: string }) {
  const imgClass = "h-20 w-auto"; // display height in the header – adjust to taste

  if (!LIGHT_THEME_SRC) {
    return (
      <Image
        src={LOGO_SRC}
        alt={ALT}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={`${imgClass} ${className}`}
      />
    );
  }

  return (
    <span className={className}>
      <Image src={LIGHT_THEME_SRC} alt={ALT} width={LOGO_WIDTH} height={LOGO_HEIGHT} className={`${imgClass} dark:hidden`} />
      <Image src={LOGO_SRC} alt={ALT} width={LOGO_WIDTH} height={LOGO_HEIGHT} className={`${imgClass} hidden dark:block`} />
    </span>
  );
}