import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * ScrollReveal
 * Generic scroll-scrubbed reveal: child rises, blurs out, fades in.
 */
export function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        ref.current,
        { y: 56, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          duration: 0.85,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            fastScrollEnd: true,
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * StickyChapter
 * Pin the heading column while content column scrolls past.
 * Title scales/blurs on scroll progress.
 */
export function StickyChapter({
  number,
  title,
  children,
  invert = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  const root = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!root.current || !titleRef.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.to(titleRef.current, {
        scale: 0.85,
        opacity: 0.4,
        filter: "blur(2px)",
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className={`px-6 py-32 lg:px-12 lg:py-48 ${invert ? "bg-surface" : ""}`}
    >
      <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{number}</p>
            <h2
              ref={titleRef}
              className="chapter-title mt-6 font-display text-fluid-display origin-top-left will-change-transform"
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="space-y-8 lg:col-span-7 lg:col-start-6">{children}</div>
      </div>
    </section>
  );
}
