import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import logoIndianOil from "@/assets/logos/indian-oil.png?url";
import logoTechMahindra from "@/assets/logos/tech-mahindra.png?url";
import logoTencent from "@/assets/logos/tencent.png?url";
import logoWyzmindz from "@/assets/logos/wyzmindz.png?url";
import { CompanyLogoMark } from "@/components/company-logo";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Abhishek Das" },
      { name: "description", content: "Career, responsibilities, and core skills." },
    ],
  }),
  component: ExperiencePage,
});

const timeline = [
  {
    year: "Apr 2026 — Present",
    role: "Operations Moderator",
    company: "Honor of Kings India (Tencent) — Freelance",
    logoSrc: logoTencent,
    logoShort: "T",
    logoFrame: "flush" as const,
    desc: "Moderation operations, Discord community workflows, esports support, and automation systems for tournament environments.",
    bullets: [
      "Manage moderation workflows across community channels",
      "Support live esports operations during tournaments",
      "Automate Discord room/channel creation and role assignment",
      "Improve operational coordination using structured workflow logic",
    ],
    focus: ["Community Operations", "Moderation Workflows", "Esports Operations", "Automation"],
  },
  {
    year: "Jan 2025 — Present",
    role: "Senior Quality Analyst",
    company: "Wyzmindz",
    logoSrc: logoWyzmindz,
    logoShort: "W",
    desc: "CX operations, quality governance, VOC analysis, fraud investigations, and operational RCA across support environments.",
    bullets: [
      "Conduct quality audits and identify customer pain points",
      "Investigate fraud and seller abuse patterns",
      "Design SOP improvements and lead RCA sessions",
      "Audit governance, compliance tracking, escalation analysis",
    ],
    achievements: ["Contributed to repeat-contact reduction initiatives", "Improved audit hygiene & QA visibility", "Spotlight on Excellence recognition"],
    focus: ["Quality Operations", "Trust & Safety", "VOC Analysis", "RCA & Governance"],
  },
  {
    year: "Feb 2024 — Jan 2025",
    role: "Operations Apprentice — Terminal Operations",
    company: "Indian Oil Corporation",
    logoSrc: logoIndianOil,
    logoShort: "IO",
    logoFrame: "flush" as const,
    desc: "Terminal operations: monitoring, SOP compliance, stock movement coordination, and safety process tracking in fuel terminal environments.",
    bullets: [
      "Monitor terminal activities and maintain operational logs",
      "Support stock reconciliation and tank truck movement tracking",
      "Maintain Journey Risk Management records and SAP transactions",
      "Ensure SOP and safety compliance across operations",
    ],
    focus: ["Operational Compliance", "Process Monitoring", "SAP Operations", "Safety Governance"],
  },
  {
    year: "Aug 2022 — Feb 2024",
    role: "CX Specialist",
    company: "Tech Mahindra",
    logoSrc: logoTechMahindra,
    logoShort: "TM",
    desc: "Customer experience operations, quality improvements, SOP optimization, and operational coaching.",
    bullets: [
      "Customer support handling and CSAT improvement",
      "Coach and support agents on quality standards",
      "SOP redesign and quality-focused workflow improvements",
      "Audit hygiene and operational coordination",
    ],
    achievements: ["Contributed to CSAT improvement initiatives", "BRAVO Award recognition"],
    focus: ["Customer Experience", "Quality Operations", "SOP Improvement", "Agent Coaching"],
  },
];

const skillGroups = [
  { t: "Trust & Safety", items: ["Fraud Investigation", "Seller Abuse Detection", "Marketplace Risk Analysis", "Policy Enforcement", "Escalation Handling"] },
  { t: "CX & Quality Operations", items: ["VOC Analysis", "QA Auditing", "CSAT Improvement", "Journey Mapping", "Service Design", "Repeat Contact Analysis"] },
  { t: "Operations & Governance", items: ["Root Cause Analysis", "SOP Design", "Workflow Optimization", "Process Governance", "Audit Visibility", "Escalation Management"] },
  { t: "Tools & Systems", items: ["Excel", "SQL", "JIRA", "Avaya CMS", "SAP", "Miro", "FigJam", "n8n", "AI No-Code Platforms"] },
];

function ExperiencePage() {
  return (
    <div className="pt-32">
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Experience</p>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-fluid-hero leading-[0.88]"
          >
            Where I've
            <br />
            worked.
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <ul className="divide-y divide-border border-y border-border">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="grid gap-6 py-12 md:grid-cols-12 md:gap-8"
              >
                <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-muted-foreground tabular-nums">{t.year}</p>
                <div className="md:col-span-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                    <CompanyLogoMark src={t.logoSrc} shortLabel={t.logoShort} name={t.company} frame={t.logoFrame ?? "card"} />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-2xl leading-[1.1]">{t.role}</p>
                      <p className="mt-2 text-sm text-accent">{t.company}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.focus.map((f) => (
                      <span key={f} className="border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5 space-y-4">
                  <p className="text-base text-muted-foreground">{t.desc}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="text-accent">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {t.achievements && (
                    <div className="border-l-2 border-accent pl-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Recognition</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        {t.achievements.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Core Skills</p>
          <h2 className="mt-6 font-display text-fluid-display">What I bring.</h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.t} className="bg-surface p-10 md:p-12">
                <h3 className="font-display text-2xl tracking-tight">{g.t}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="border border-border px-3 py-1.5 text-xs text-foreground/90">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
