import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Your Name" },
      { name: "description", content: "Career timeline and selected experience." },
    ],
  }),
  component: ExperiencePage,
});

const timeline = [
  { year: "2025 —", role: "Independent", company: "Studio of Your Name", desc: "Working with founders and brands on identity and digital products." },
  { year: "2022 — 2025", role: "Senior Designer", company: "Company A", desc: "Led design for flagship product surfaces and brand evolution." },
  { year: "2020 — 2022", role: "Product Designer", company: "Company B", desc: "Shipped end-to-end across web and mobile in a fast-moving team." },
  { year: "2018 — 2020", role: "Designer", company: "Studio C", desc: "Identity, packaging, and digital for cultural and lifestyle clients." },
];

const recognitions = [
  { name: "Awwwards SOTD", year: "2024" },
  { name: "FWA of the Day", year: "2023" },
  { name: "CSS Design Awards", year: "2022" },
  { name: "Brand New Notable", year: "2022" },
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
            A short<br />history.
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
                className="grid gap-4 py-10 md:grid-cols-12 md:gap-8"
              >
                <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-muted-foreground tabular-nums">{t.year}</p>
                <div className="md:col-span-4">
                  <p className="font-display text-2xl">{t.role}</p>
                  <p className="mt-1 text-sm text-accent">{t.company}</p>
                </div>
                <p className="md:col-span-5 text-base text-muted-foreground">{t.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Recognition</p>
          <h2 className="mt-6 font-display text-fluid-display">Selected awards.</h2>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {recognitions.map((r) => (
              <li key={r.name} className="flex items-center justify-between py-6">
                <span className="font-display text-2xl md:text-3xl">{r.name}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground tabular-nums">{r.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
