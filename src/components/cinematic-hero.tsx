import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Placeholder } from "./placeholder";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * CinematicHero
 * - Pinned section, scrub-linked timeline
 * - Background slow zooms while foreground/text rises faster (parallax)
 * - Title splits into stacked words that scale, blur, and fade
 * - Dark gradient overlays intensify on scroll
 */
export function CinematicHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(".hero-bg", { scale: 1.25, yPercent: -10, ease: "none" }, 0)
        .to(".hero-overlay", { opacity: 1, ease: "none" }, 0)
        .to(".hero-eyebrow", { yPercent: -120, opacity: 0, filter: "blur(8px)", ease: "none" }, 0)
        .to(".hero-word-1", { yPercent: -180, opacity: 0, filter: "blur(12px)", ease: "none" }, 0)
        .to(".hero-word-2", { yPercent: -260, opacity: 0, filter: "blur(14px)", ease: "none" }, 0.05)
        .to(".hero-meta", { yPercent: 200, opacity: 0, ease: "none" }, 0)
        .fromTo(
          ".hero-tagline",
          { yPercent: 60, opacity: 0, filter: "blur(20px)", scale: 0.9 },
          { yPercent: 0, opacity: 1, filter: "blur(0px)", scale: 1, ease: "power2.out" },
          0.4,
        )
        .to(".hero-tagline", { opacity: 0, filter: "blur(10px)", ease: "none" }, 0.85);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden grain">
      <div className="hero-bg absolute inset-0 will-change-transform">
        <Placeholder label="Hero loop · video or image" aspect="auto" className="h-full w-full !rounded-none" />
      </div>

      <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.12_0_0/0.7)_100%)]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex-1 px-6 pt-32 lg:px-12 text-center">
          <p className="hero-eyebrow text-xs uppercase tracking-[0.4em] text-accent will-change-transform">
            Folio · Coming 2026
          </p>
        </div>

        <div className="px-6 pb-16 lg:px-12 lg:pb-20">
          <h1 className="font-display text-fluid-hero">
            <span className="hero-word-1 block overflow-hidden will-change-transform">YOUR</span>
            <span className="hero-word-2 block overflow-hidden will-change-transform">NAME</span>
          </h1>

          <div className="hero-meta mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-foreground/20 pt-6 will-change-transform">
            <p className="max-w-md text-sm text-muted-foreground">
              Scroll. The trailer plays as you go.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Available for work
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
        <p className="hero-tagline font-display text-fluid-display max-w-5xl opacity-0 will-change-transform">
          A portfolio that <span className="text-accent">moves</span>.
        </p>
      </div>
    </section>
  );
}
