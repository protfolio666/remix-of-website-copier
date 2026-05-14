import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Placeholder } from "./placeholder";
import { Link } from "@tanstack/react-router";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Item {
  slug: string;
  title: string;
  role: string;
}

/**
 * HorizontalGallery
 * - Pinned section, scrubbed horizontal scroll
 * - Each card scales in as it enters viewport
 */
export function HorizontalGallery({ items }: { items: Item[] }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!track.current || !root.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || window.innerWidth < 768) return;

      const distance = () => track.current!.scrollWidth - window.innerWidth;

      gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".gal-card").forEach((card) => {
        gsap.fromTo(
          card.querySelector(".gal-img"),
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: ScrollTrigger.getAll().find((s) => s.pin === root.current)?.animation,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: root, dependencies: [items.length] },
  );

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-surface">
      <div className="absolute inset-x-0 top-0 z-10 px-6 pt-10 lg:px-12 lg:pt-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — Selected Work</p>
            <h2 className="mt-3 font-display text-fluid-xl">Recent projects.</h2>
          </div>
          <p className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground md:block">
            Scroll →
          </p>
        </div>
      </div>

      <div className="flex h-full items-center">
        <div ref={track} className="flex h-full items-center gap-8 pl-6 pr-[20vw] lg:pl-12 will-change-transform">
          {items.map((p, i) => (
            <Link
              key={p.slug}
              to="/case/$slug"
              params={{ slug: p.slug }}
              className="gal-card group block h-[70vh] w-[70vw] shrink-0 md:w-[42vw] lg:w-[32vw]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <div className="gal-img absolute inset-0 will-change-transform">
                  <Placeholder label={p.title} aspect="auto" className="h-full w-full !rounded-none" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-3xl">{p.title}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      0{i + 1} / 0{items.length}
                    </span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-accent">{p.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
