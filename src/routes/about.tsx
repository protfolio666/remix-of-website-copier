import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abhishek Das" },
      { name: "description", content: "Abhishek Das — operations, trust & safety, and CX governance." },
    ],
  }),
  component: AboutPage,
});

const focus = [
  "Fraud & Abuse Investigation",
  "Trust & Safety Operations",
  "CX Governance",
  "QA & Audit Operations",
  "RCA & Process Improvement",
  "Workflow Systems",
  "Escalation Management",
  "Operational Intelligence",
];

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-fluid-hero leading-[0.88]"
          >
            Investigator.<br /><span className="text-accent">Operator.</span><br />Systems builder.
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={portrait}
              alt="Abhishek Das"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <p className="text-2xl leading-snug">
              I work in operations, quality, customer experience, and trust & safety environments where businesses handle large volumes of customers, audits, escalations, and workflows every day.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My work focuses on identifying operational problems before they become bigger business risks. Over the years I've worked on fraud investigations, audit governance, process gap analysis, seller abuse detection, CX improvements, workflow optimization, and escalation management.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I enjoy understanding how systems break, why processes fail, where visibility gets lost, and how operations can be improved using better workflows, accountability, and governance.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I also design operational systems and workflow platforms using AI-assisted no-code tools to solve real business problems faster.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Based in</p>
                <p className="mt-2 font-display text-2xl">India</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Open to</p>
                <p className="mt-2 font-display text-2xl text-accent">Trust & Safety roles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Areas of focus</p>
          <h2 className="mt-6 font-display text-fluid-display">What I work on.</h2>
          <div className="mt-16 flex flex-wrap gap-3">
            {focus.map((f) => (
              <span key={f} className="border border-border bg-background px-5 py-3 text-sm">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
