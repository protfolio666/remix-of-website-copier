import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/marquee";
import { CinematicHero } from "@/components/cinematic-hero";
import { TrailerScenes } from "@/components/trailer-scenes";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { ScrollReveal, StickyChapter } from "@/components/scroll-scenes";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import scene1 from "@/assets/scene-1.jpg";
import scene2 from "@/assets/scene-2.jpg";
import scene3 from "@/assets/scene-3.jpg";

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
  { slug: "cod-fraud", title: "COD Fraud Investigation", role: "Trust & Safety · 2025", image: scene3 },
  { slug: "seller-abuse", title: "Seller Abuse & Pirated Products", role: "Trust & Safety · 2025", image: scene2 },
  { slug: "incentive-leakage", title: "Incentive Leakage in CX Metrics", role: "Audit Governance · 2025", image: scene1 },
];

const systems = [
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
          "Trust & Safety",
          "Fraud Ops",
          "QA Governance",
          "RCA",
          "CX",
          "Workflow Design",
          "Honor of Kings India (Tencent) — Freelance",
          "Wyzmindz",
          "Indian Oil Corporation",
          "Tech Mahindra",
        ]}
      />

      <section className="border-y border-border bg-background px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1800px]">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">00 — Index</p>
            <h2 className="mt-4 max-w-4xl font-display text-fluid-xl leading-[0.95] md:text-fluid-display">
              Operations, investigations, and workflow systems — built for visibility.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      <StickyChapter number="01 — About" title="Operations is where the truth lives.">
        <ScrollReveal>
          <p className="text-2xl leading-snug md:text-3xl">
            I work in operations, quality, CX, and trust & safety — environments that handle large volumes of customers, audits, escalations, and workflows every day.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-xl text-base text-muted-foreground">
            My focus is identifying operational problems before they become bigger business risks — and designing systems that improve visibility, accountability, and customer experience.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <Link to="/about" className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.3em] hover:text-accent hover:border-accent">
            More about me <span>→</span>
          </Link>
        </ScrollReveal>
      </StickyChapter>

      <section className="px-6 py-32 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-[1800px]">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — What I Solve</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="mt-6 font-display text-fluid-display max-w-3xl">Operational problems, investigated and systemized.</h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.t} className="bg-background p-10">
                <h3 className="font-display text-2xl">{c.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalGallery items={investigations} eyebrow="03 — Case Studies" title="Selected investigations." />

      <StickyChapter number="03 — Case Studies" title="Real investigations, written in detail." invert>
        <div className="divide-y divide-border border-y border-border">
          {investigations.map((p, i) => (
            <ScrollReveal key={p.slug}>
              <Link
                to="/case/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center justify-between gap-6 py-8 px-2 transition-colors hover:bg-background"
              >
                <div className="flex items-center gap-8">
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                  <h3 className="font-display text-3xl md:text-5xl group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground">
                  Read →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </StickyChapter>

      <StickyChapter number="04 — Systems" title="Workflow platforms designed around real problems.">
        <div className="divide-y divide-border border-y border-border">
          {systems.map((p, i) => (
            <ScrollReveal key={p.slug}>
              <Link
                to="/case/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center justify-between gap-6 py-8 px-2 transition-colors hover:bg-surface"
              >
                <div className="flex items-center gap-8">
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.role}</p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground">
                  View →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </StickyChapter>

      <section className="relative px-6 py-32 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-[1800px]">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">05 — Contact</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="mt-6 font-display text-fluid-hero leading-[0.9]">
              Let's<br />build<br /><span className="text-accent">visibility.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-4 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.3em] hover:bg-foreground hover:text-background"
            >
              Start a conversation <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
