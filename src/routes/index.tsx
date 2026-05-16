import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/marquee";
import { CinematicHero } from "@/components/cinematic-hero";
import { TrailerScenes } from "@/components/trailer-scenes";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { ScrollReveal } from "@/components/scroll-scenes";
import { CinematicRowList } from "@/components/cinematic-row-list";
import portrait from "@/assets/portrait.png";
import scene3 from "@/assets/scene-3.jpg";
import kwcBanner from "@/assets/kwc-ewc-banner.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import caseCodFraud from "@/assets/case-cod-fraud.png";
import caseIncentiveLeakage from "@/assets/case-incentive-leakage.png";
import scene2 from "@/assets/scene-2.jpg";
import tencentLogo from "@/assets/logos/tencent.png";
import wyzmindzLogo from "@/assets/logos/wyzmindz.png";
import indianOilLogo from "@/assets/logos/indian-oil.png";
import techMahindraLogo from "@/assets/logos/tech-mahindra.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhishek Das — Operations Intelligence & Trust & Safety" },
      { name: "description", content: "Operations, fraud investigations, audit governance, and CX workflow systems by Abhishek Das." },
    ],
  }),
  component: Home,
});

/* Investigations: COD → journey/logistics; seller abuse → digital/keyboard; incentive leakage → city-scale systems */
const investigations = [
  { slug: "cod-fraud", title: "COD Fraud Investigation", role: "Trust & Safety · 2025", image: caseCodFraud },
  { slug: "seller-abuse", title: "Seller Abuse & Pirated Products", role: "Trust & Safety · 2025", image: scene2 },
  { slug: "incentive-leakage", title: "Incentive Leakage in CX Metrics", role: "Audit Governance · 2025", image: caseIncentiveLeakage },
];

const systems = [
  {
    slug: "kwc-tournament-operations",
    title: "KWC · Tournament & Discord automation",
    role: "Tencent · Esports Operations · Discord automation",
    image: kwcBanner,
  },
  { slug: "solvextra", title: "SolveXtra QMS", role: "QA Governance Platform", image: project1 },
  { slug: "solvextra-go", title: "SolvExtra GO", role: "Process Gap Hub", image: project2 },
  { slug: "omnichannel", title: "Omnichannel CX", role: "Support Operations", image: project3 },
  { slug: "sql-sikho", title: "SQL Sikho", role: "Gamified Learning", image: project4 },
];

const capabilities = [
  { t: "Fraud & Abuse Detection", d: "Identify suspicious patterns, seller abuse, and COD fraud risks through investigation and pattern analysis." },
  { t: "Audit & QA Governance", d: "Improve audit visibility, reduce loopholes, and strengthen tagging accuracy across teams." },
  { t: "Process Gap Investigation", d: "Track repeated failures, identify root causes, and improve workflows that hurt CX." },
  { t: "CX Workflow Optimization", d: "Improve support processes, escalation handling, and SLA workflows." },
  { t: "Escalation Visibility", d: "Build systems that define ownership, pending actions, and resolution accountability." },
  { t: "Operational Intelligence", d: "Use VOC, audit findings, and operational data to surface breakdowns and improvements." },
];

function Home() {
  return (
    <>
      <CinematicHero />
      <TrailerScenes />
      <Marquee
        items={[
          { name: "Tencent", logo: tencentLogo },
          { name: "Wyzmindz", logo: wyzmindzLogo },
          { name: "Indian Oil", logo: indianOilLogo },
          { name: "Tech Mahindra", logo: techMahindraLogo },
        ]}
      />

      {/* 01 — About: cinematic split */}
      <section className="relative overflow-hidden border-y border-border bg-background px-6 py-32 lg:px-12 lg:py-48">
        <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={portrait}
                alt="Abhishek Das"
                className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.4em] text-foreground/70">
                01 — Operator
              </div>
            </div>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:pl-8">
            <ScrollReveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">01 — About</p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="mt-6 font-display text-fluid-display leading-[0.9]">
                Operations is <span className="text-accent">where the truth lives.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="mt-10 max-w-xl text-xl leading-snug text-foreground/85 md:text-2xl">
                I work in operations, quality, CX, and trust & safety — environments that handle
                large volumes of customers, audits, escalations, and workflows every day.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p className="mt-6 max-w-xl text-base text-muted-foreground">
                My focus is identifying operational problems before they become bigger business
                risks — and designing systems that improve visibility, accountability, and customer
                experience.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <Link
                to="/about"
                className="mt-12 inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.3em] hover:border-accent hover:text-accent"
              >
                More about me <span>→</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02 — Capabilities: numbered cinematic grid */}
      <section className="relative bg-surface px-6 py-32 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-[1800px]">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/15 pb-8">
            <ScrollReveal>
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">02 — What I Solve</p>
              <h2 className="mt-4 font-display text-fluid-display max-w-3xl leading-[0.9]">
                Operational problems, investigated and systemized.
              </h2>
            </ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              06 capabilities
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-foreground/10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <div
                key={c.t}
                className="group relative overflow-hidden bg-surface p-10 transition-colors hover:bg-background"
              >
                <span className="font-display text-6xl text-foreground/15 tabular-nums transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl leading-tight">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                <div className="mt-8 h-px w-12 bg-foreground/30 transition-all duration-500 group-hover:w-full group-hover:bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalGallery items={investigations} eyebrow="03 — Case Studies" title="Selected investigations." />

      {/* 04 — Case studies: cinematic hover list */}
      <CinematicRowList
        number="04 — Case Studies"
        title="Real investigations, written in detail."
        rows={investigations.map((p) => ({
          slug: p.slug,
          title: p.title,
          role: p.role,
          image: p.image,
        }))}
        invert
      />

      {/* 05 — Systems: cinematic hover list */}
      <CinematicRowList
        number="05 — Systems"
        title="Workflow platforms designed around real problems."
        rows={systems.map((p) => ({
          slug: p.slug,
          title: p.title,
          role: p.role,
          image: p.image,
        }))}
      />

      {/* 06 — Contact: full-bleed cinematic */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={scene3} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,oklch(0.10_0_0/0.9)_100%)]" />
        </div>

        {/* letterbox bars */}
        <div className="absolute inset-x-0 top-0 z-10 h-[6vh] bg-background" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[6vh] bg-background" />

        <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col justify-center px-6 py-40 lg:px-12">
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">06 — Contact</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="mt-8 font-display text-fluid-hero leading-[0.85]">
              Let's
              <br />
              build
              <br />
              <span className="text-accent">visibility.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-14 flex flex-wrap items-center gap-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 border border-foreground px-10 py-5 text-xs uppercase tracking-[0.4em] transition-colors hover:bg-foreground hover:text-background"
              >
                Start a conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="mailto:abhishek@solvextra.com"
                className="text-xs uppercase tracking-[0.4em] text-muted-foreground hover:text-accent"
              >
                abhishek@solvextra.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
