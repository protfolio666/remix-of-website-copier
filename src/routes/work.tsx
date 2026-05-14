import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import scene1 from "@/assets/scene-1.jpg";
import scene2 from "@/assets/scene-2.jpg";
import scene3 from "@/assets/scene-3.jpg";

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
  { slug: "cod-fraud", title: "COD Fraud Investigation", role: "Trust & Safety", year: "2025", image: scene1 },
  { slug: "seller-abuse", title: "Seller Abuse & Pirated Products", role: "Trust & Safety", year: "2025", image: scene2 },
  { slug: "incentive-leakage", title: "Incentive Leakage in CX Metrics", role: "Audit Governance", year: "2025", image: scene3 },
];

const systems = [
  { slug: "solvextra", title: "SolveXtra QMS", role: "QA Governance Platform", year: "2025", image: project1 },
  { slug: "solvextra-go", title: "SolvExtra GO", role: "Process Gap Hub", year: "2025", image: project2 },
  { slug: "omnichannel", title: "Omnichannel CX", role: "Support Workflow", year: "2025", image: project3 },
  { slug: "sql-sikho", title: "SQL Sikho", role: "Gamified Learning", year: "2024", image: project4 },
];

function WorkPage() {
  return (
    <div className="pt-32">
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Case Studies & Projects</p>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-fluid-hero leading-[0.88]"
          >
            The work.
          </motion.h1>
        </div>
      </section>

      <Group label="01 — Investigations" subtitle="Operational problems traced, analyzed, and resolved." items={investigations} />
      <Group label="02 — Systems" subtitle="Workflow platforms built around governance and visibility." items={systems} offset />
    </div>
  );
}

function Group({
  label,
  subtitle,
  items,
  offset,
}: {
  label: string;
  subtitle: string;
  items: { slug: string; title: string; role: string; year: string; image: string }[];
  offset?: boolean;
}) {
  return (
    <section className={`px-6 py-24 lg:px-12 ${offset ? "bg-surface" : ""}`}>
      <div className="mx-auto max-w-[1800px]">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
        <h2 className="mt-3 font-display text-fluid-display">{subtitle}</h2>

        <div className="mt-16 grid gap-x-6 gap-y-20 md:grid-cols-2">
          {items.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
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
                    <h3 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.role}</p>
                  </div>
                  <span className="font-display text-xl tabular-nums text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
