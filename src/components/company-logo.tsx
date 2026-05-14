import { useState } from "react";

type LogoFrame = "card" | "flush";

/**
 * Company logo for timeline — bundled PNG; initials fallback on error.
 * `flush`: no panel (for transparent PNGs). `card`: subtle tray (Wyzmindz / Tech Mahindra).
 */
export function CompanyLogoMark({
  src,
  shortLabel,
  name,
  frame = "card",
  className = "",
}: {
  src: string;
  shortLabel: string;
  name: string;
  frame?: LogoFrame;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  const flush = frame === "flush";

  if (failed) {
    return (
      <div
        className={`flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center rounded-xl border border-border bg-surface font-display text-lg tracking-tight text-foreground sm:h-24 sm:w-24 ${className}`}
        title={name}
        aria-label={name}
      >
        {shortLabel}
      </div>
    );
  }

  const shell = flush
    ? "relative flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center overflow-visible rounded-xl p-1 sm:h-24 sm:w-24 sm:p-1.5"
    : "relative flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2.5 shadow-[inset_0_1px_0_oklch(1_0_0/0.04)] sm:h-24 sm:w-24 sm:p-3";

  const imgClass = flush
    ? "h-full w-full object-contain object-center drop-shadow-[0_2px_12px_oklch(0_0_0/0.45)]"
    : "h-full w-full object-contain object-center";

  return (
    <div className={`${shell} ${className}`} title={name}>
      <img src={src} alt={name} width={112} height={112} loading="lazy" decoding="async" className={imgClass} onError={() => setFailed(true)} />
    </div>
  );
}
