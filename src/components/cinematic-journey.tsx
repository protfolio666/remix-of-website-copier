import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import portrait from "@/assets/portrait.jpg";
import portraitBw from "@/assets/portrait-bw.png";
import scene1 from "@/assets/scene-1.jpg";
import scene2 from "@/assets/scene-2.jpg";
import scene3 from "@/assets/scene-3.jpg";
import kwcBanner from "@/assets/kwc-ewc-banner.png";
import caseCodFraud from "@/assets/case-cod-fraud.png";
import caseIncentiveLeakage from "@/assets/case-incentive-leakage.png";
import tencentLogo from "@/assets/logos/tencent.png";
import wyzmindzLogo from "@/assets/logos/wyzmindz.png";
import indianOilLogo from "@/assets/logos/indian-oil.png";
import techMahindraLogo from "@/assets/logos/tech-mahindra.png";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

type Chapter = {
  img: string;
  eyebrow: string;
  title: string;
  body: string;
  num: string;
  overlay?: ReactNode;
};

const experiences = [
  { name: "Tencent", role: "Esports Ops · KWC", logo: tencentLogo },
  { name: "Wyzmindz", role: "CX & Audit Governance", logo: wyzmindzLogo },
  { name: "Indian Oil", role: "Process Operations", logo: indianOilLogo },
  { name: "Tech Mahindra", role: "Support Operations", logo: techMahindraLogo },
];

const projects = [
  { slug: "kwc-tournament-operations", title: "KWC · Tournament Ops", role: "Tencent · Esports" },
  { slug: "solvextra", title: "SolveXtra QMS", role: "QA Governance" },
  { slug: "solvextra-go", title: "SolvExtra GO", role: "Process Gap Hub" },
  { slug: "omnichannel", title: "Omnichannel CX", role: "Support Ops" },
];

const investigations = [
  { slug: "cod-fraud", title: "COD Fraud Investigation", role: "Trust & Safety" },
  { slug: "seller-abuse", title: "Seller Abuse & Pirated Products", role: "Trust & Safety" },
  { slug: "incentive-leakage", title: "Incentive Leakage in CX Metrics", role: "Audit Governance" },
];

/**
 * CinematicJourney — second pinned trailer sequence.
 * Same GTA VI-style dissolve + Ken-Burns pacing as TrailerScenes,
 * but each chapter shows About / Experience / Projects / Case Studies content.
 */
export function CinematicJourney() {
  const root = useRef<HTMLElement>(null);

  const chapters: Chapter[] = [
    {
      img: portrait,
      eyebrow: "Chapter IV — About",
      title: "Operations is where the truth lives.",
      body: "I investigate operational problems, fraud patterns, audit loopholes, and workflow failures — then design systems that improve visibility, accountability, and customer experience.",
      num: "04",
      overlay: (
        <>
          {/* Cinematic side portrait — GTA VI style */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[55%] md:block lg:w-[50%]">
            <img
              src={portraitBw}
              alt="Abhishek Das portrait"
              className="absolute inset-y-0 right-0 h-full w-auto object-cover object-left grayscale contrast-110"
              style={{
                maskImage:
                  "linear-gradient(to left, black 50%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 50%, transparent 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background/70" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="absolute bottom-28 left-6 z-20 flex flex-wrap gap-3 lg:left-12">
            {["3.5+ Yrs", "9000+ Audits", "Fraud Investigations", "Workflow Systems"].map((s) => (
              <span key={s} className="border border-foreground/40 bg-background/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm">
                {s}
              </span>
            ))}
          </div>
        </>
      ),
    },
    {
      img: kwcBanner,
      eyebrow: "Chapter V — Experience",
      title: "Built across teams that scale.",
      body: "Esports operations, audit governance, CX, and process design — across Tencent, Wyzmindz, Indian Oil, and Tech Mahindra.",
      num: "05",
      overlay: (
        <div className="absolute inset-x-0 bottom-32 z-20 px-6 lg:bottom-40 lg:px-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {experiences.map((e) => (
              <div key={e.name} className="flex flex-col items-start gap-3 border-l border-foreground/30 pl-4">
                <img src={e.logo} alt={e.name} className="h-10 w-auto object-contain opacity-90" loading="lazy" />
                <div>
                  <p className="font-display text-base text-foreground">{e.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{e.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      img: scene1,
      eyebrow: "Chapter VI — Projects",
      title: "Workflow platforms, designed around real problems.",
      body: "Tournament automation, QA governance platforms, gap-tracking hubs, and omnichannel CX systems — built to make operations visible.",
      num: "06",
      overlay: (
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:right-12 lg:block">
          <div className="flex flex-col divide-y divide-foreground/20 border-y border-foreground/30 bg-background/30 backdrop-blur-sm">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                to="/case/$slug"
                params={{ slug: p.slug }}
                className="group flex w-[420px] items-center justify-between gap-6 px-5 py-4 transition-colors hover:bg-foreground/5"
              >
                <span className="text-[10px] text-muted-foreground tabular-nums">0{i + 1}</span>
                <div className="flex-1">
                  <p className="font-display text-base group-hover:text-accent">{p.title}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.role}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground">→</span>
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      img: caseCodFraud,
      eyebrow: "Chapter VII — Case Studies",
      title: "Real investigations, written in detail.",
      body: "From COD fraud rings to incentive leakage and seller abuse — each case study breaks down the pattern, the system gap, and the fix.",
      num: "07",
      overlay: (
        <div className="absolute inset-x-0 bottom-28 z-20 px-6 lg:bottom-32 lg:px-12">
          <div className="grid gap-px bg-foreground/20 md:grid-cols-3">
            {investigations.map((c, i) => (
              <Link
                key={c.slug}
                to="/case/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col gap-2 bg-background/40 p-5 backdrop-blur-sm transition-colors hover:bg-background/70"
              >
                <span className="text-[10px] text-muted-foreground tabular-nums">0{i + 1}</span>
                <p className="font-display text-lg group-hover:text-accent">{c.title}</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.role}</p>
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      img: scene2,
      eyebrow: "Chapter VIII — Contact",
      title: "Let's build visibility.",
      body: "If you have an operational problem that won't sit still — fraud patterns, audit gaps, escalation chaos — let's investigate it together.",
      num: "08",
      overlay: (
        <div className="absolute inset-x-0 bottom-28 z-20 flex justify-center px-6 lg:bottom-36">
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 border border-foreground bg-background/30 px-8 py-4 text-sm uppercase tracking-[0.3em] backdrop-blur-sm hover:bg-foreground hover:text-background"
          >
            Start a conversation <span>→</span>
          </Link>
        </div>
      ),
    },
  ];

  useGSAP(
    () => {
      if (!root.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const slides = gsap.utils.toArray<HTMLElement>(".journey-slide");
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

      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });

      slides.forEach((slide, i) => {
        const img = slide.querySelector(".journey-img");
        const eyebrow = slide.querySelector(".journey-eyebrow");
        const title = slide.querySelector(".journey-title");
        const body = slide.querySelector(".journey-body");
        const num = slide.querySelector(".journey-num");
        const overlay = slide.querySelector(".journey-overlay");

        tl.fromTo(img, { scale: 1.08, yPercent: 1.5 }, { scale: 1.3, yPercent: -1.5, ease: "none" }, i);

        tl.fromTo(
          [eyebrow, title, body, num, overlay].filter(Boolean),
          { y: 80, opacity: 0, filter: "blur(18px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.08, ease: "power3.out", duration: 0.4 },
          i + 0.05,
        );

        if (i < total - 1) {
          tl.to(
            [eyebrow, title, body, num, overlay].filter(Boolean),
            { y: -80, opacity: 0, filter: "blur(14px)", stagger: 0.05, ease: "power2.in", duration: 0.35 },
            i + 0.6,
          );
          tl.to(slide, { opacity: 0, ease: "power1.inOut", duration: 0.5 }, i + 0.7);
          tl.to(slides[i + 1], { opacity: 1, ease: "power1.inOut", duration: 0.5 }, i + 0.7);
        }
      });

      gsap.to(".journey-progress", {
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
      {chapters.map((s, i) => (
        <div key={i} className="journey-slide absolute inset-0 will-change-transform">
          <div className="journey-img absolute inset-0 will-change-transform">
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/20" />

          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-72 lg:px-12 lg:pb-80">
            <p className="journey-eyebrow text-xs uppercase tracking-[0.4em] text-accent will-change-transform">
              {s.eyebrow}
            </p>
            <h2 className="journey-title mt-4 max-w-4xl font-display text-fluid-display will-change-transform">
              {s.title}
            </h2>
            <p className="journey-body mt-6 max-w-md text-base text-foreground/80 will-change-transform">
              {s.body}
            </p>
          </div>

          {s.overlay && <div className="journey-overlay will-change-transform">{s.overlay}</div>}

          <div className="absolute right-6 top-1/2 -translate-y-1/2 lg:right-12">
            <p className="journey-num font-display text-7xl tabular-nums text-foreground/25 will-change-transform">
              {s.num}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 top-0 z-30 h-px bg-foreground/10">
        <div className="journey-progress h-full origin-left scale-x-0 bg-accent" />
      </div>

      <div className="absolute bottom-6 right-6 z-30 lg:bottom-8 lg:right-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll ↓</p>
      </div>
    </section>
  );
}