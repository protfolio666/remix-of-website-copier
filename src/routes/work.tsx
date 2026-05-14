import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Placeholder } from "@/components/placeholder";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Your Name" },
      { name: "description", content: "Selected projects." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { slug: "project-one", title: "Project One", role: "Brand Identity", year: "2025" },
  { slug: "project-two", title: "Project Two", role: "Website", year: "2024" },
  { slug: "project-three", title: "Project Three", role: "Product Design", year: "2024" },
  { slug: "project-four", title: "Project Four", role: "Visual Identity", year: "2023" },
  { slug: "project-five", title: "Project Five", role: "Art Direction", year: "2023" },
  { slug: "project-six", title: "Project Six", role: "Editorial", year: "2022" },
];

function WorkPage() {
  return (
    <div className="pt-32">
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected Work</p>
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

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-x-6 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={i % 2 === 1 ? "md:mt-32" : ""}
            >
              <Link to="/case/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    <Placeholder label={p.title} aspect={i % 3 === 0 ? "4/5" : "3/2"} />
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.role}</p>
                  </div>
                  <span className="font-display text-xl tabular-nums text-muted-foreground">{p.year}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
