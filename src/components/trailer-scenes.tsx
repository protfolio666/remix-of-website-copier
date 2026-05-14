import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import scene1 from "@/assets/scene-1.jpg";
import scene2 from "@/assets/scene-2.jpg";
import scene3 from "@/assets/scene-3.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

const scenes = [
  { img: scene1, eyebrow: "Chapter I", title: "Build the world.", body: "Brand systems and identities for ambitious teams." },
  { img: scene2, eyebrow: "Chapter II", title: "Ship the craft.", body: "Production-ready interfaces, animation, and code." },
  { img: scene3, eyebrow: "Chapter III", title: "Set the mood.", body: "Direction and storytelling that lingers." },
];

/**
 * TrailerScenes — pinned full-bleed image sequence
 * Each "scene" crossfades and Ken-Burns zooms while text rises in/out.
 * Mimics the GTA VI trailer-as-scroll feeling.
 */
export function TrailerScenes() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const slides = gsap.utils.toArray<HTMLElement>(".trailer-slide");
      const total = slides.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${total * 160}%`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // initial state: only first slide visible
      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });

      slides.forEach((slide, i) => {
        const img = slide.querySelector(".trailer-img");
        const eyebrow = slide.querySelector(".trailer-eyebrow");
        const title = slide.querySelector(".trailer-title");
        const body = slide.querySelector(".trailer-body");
        const num = slide.querySelector(".trailer-num");

        // Slow cinematic Ken-Burns across the full slide window
        tl.fromTo(img, { scale: 1.08, yPercent: 4 }, { scale: 1.32, yPercent: -4, ease: "none" }, i);

        // text in (slower, longer hold)
        tl.fromTo(
          [eyebrow, title, body, num],
          { y: 80, opacity: 0, filter: "blur(18px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.08, ease: "power3.out", duration: 0.4 },
          i + 0.05,
        );

        // text out + crossfade (longer overlap, like a film dissolve)
        if (i < total - 1) {
          tl.to(
            [eyebrow, title, body, num],
            { y: -80, opacity: 0, filter: "blur(14px)", stagger: 0.05, ease: "power2.in", duration: 0.35 },
            i + 0.6,
          );
          tl.to(slide, { opacity: 0, ease: "power1.inOut", duration: 0.5 }, i + 0.7);
          tl.to(slides[i + 1], { opacity: 1, ease: "power1.inOut", duration: 0.5 }, i + 0.7);
        }
      });

      // progress bar
      gsap.to(".trailer-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${total * 160}%`,
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-background">
      {scenes.map((s, i) => (
        <div key={i} className="trailer-slide absolute inset-0 will-change-transform">
          <div className="trailer-img absolute inset-0 will-change-transform">
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 lg:px-12 lg:pb-28">
            <p className="trailer-eyebrow text-xs uppercase tracking-[0.4em] text-accent will-change-transform">
              {s.eyebrow}
            </p>
            <h2 className="trailer-title mt-4 font-display text-fluid-display max-w-4xl will-change-transform">
              {s.title}
            </h2>
            <p className="trailer-body mt-6 max-w-md text-base text-foreground/80 will-change-transform">
              {s.body}
            </p>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 lg:right-12">
            <p className="trailer-num font-display text-7xl tabular-nums text-foreground/30 will-change-transform">
              0{i + 1}
            </p>
          </div>
        </div>
      ))}

      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 z-20 h-px bg-foreground/10">
        <div className="trailer-progress h-full origin-left scale-x-0 bg-accent" />
      </div>

      <div className="absolute bottom-6 right-6 z-20 lg:bottom-8 lg:right-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll ↓</p>
      </div>
    </section>
  );
}
