import { createFileRoute, Link } from "@tanstack/react-router";
import kwcBanner from "@/assets/kwc-ewc-banner.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import caseCodFraud from "@/assets/case-cod-fraud.png";
import caseIncentiveLeakage from "@/assets/case-incentive-leakage.png";
import scene2 from "@/assets/scene-2.jpg";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal, StickyChapter } from "@/components/scroll-scenes";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case Studies & Projects — Abhishek Das" },
      { name: "description", content: "Operational investigations and workflow systems by Abhishek Das." },
    ],
  }),
  component: WorkPage,
});

const investigations = [
  { slug: "cod-fraud", title: "COD Fraud Investigation", role: "Trust & Safety", year: "2025", image: caseCodFraud },
  { slug: "seller-abuse", title: "Seller Abuse & Pirated Products", role: "Trust & Safety", year: "2025", image: scene2 },
  { slug: "incentive-leakage", title: "Incentive Leakage in CX Metrics", role: "Audit Governance", year: "2025", image: caseIncentiveLeakage },
];

const systems = [
  {
    slug: "kwc-tournament-operations",
    title: "KWC · Tournament & Discord automation",
    role: "Tencent · Honor of Kings India · EWC Qualifiers",
    year: "2026",
    image: kwcBanner,
  },
  { slug: "solvextra", title: "SolveXtra QMS", role: "QA Governance Platform", year: "2025", image: project1 },
  { slug: "solvextra-go", title: "SolvExtra GO", role: "Process Gap Hub", year: "2025", image: project2 },
  { slug: "omnichannel", title: "Omnichannel CX", role: "Support Workflow", year: "2025", image: project3 },
  { slug: "sql-sikho", title: "SQL Sikho", role: "Gamified Learning", year: "2024", image: project4 },
];

function WorkPage() {
  return (
    <div className="pt-32">
      <PageHero chapter="02" label="Case Studies">
        <h1 className="font-display text-fluid-hero leading-[0.88]">The work.</h1>
      </PageHero>

      <StickyChapter number="02 — Case Studies" title="Investigations.">
        <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">
          {investigations.map((p, i) => (
            <ScrollReveal key={p.slug} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Link to="/case/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1536}
                    height={1920}
                    className="w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    style={{ aspectRatio: i % 3 === 0 ? "4/5" : "3/2" }}
                  />
                </div>
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl transition-colors group-hover:text-accent">{p.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.role}</p>
                  </div>
                  <span className="font-display text-xl tabular-nums text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </StickyChapter>

      <StickyChapter number="02 — Case Studies" title="Systems & platforms." invert>
        <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">
          {systems.map((p, i) => (
            <ScrollReveal key={p.slug} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Link to="/case/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1536}
                    height={1920}
                    className="w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    style={{ aspectRatio: i % 3 === 0 ? "4/5" : "3/2" }}
                  />
                </div>
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl transition-colors group-hover:text-accent">{p.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.role}</p>
                  </div>
                  <span className="font-display text-xl tabular-nums text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </StickyChapter>
    </div>
  );
}
