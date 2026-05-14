import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import scene1 from "@/assets/scene-1.jpg";
import scene3 from "@/assets/scene-3.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Abhishek Das" },
      { name: "description", content: "Selected projects by Abhishek Das." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { slug: "project-one", title: "Aurora OS", role: "Product Design", year: "2025", image: project1 },
  { slug: "project-two", title: "Noir Studio", role: "Brand Identity", year: "2024", image: project2 },
  { slug: "project-three", title: "Halo App", role: "Mobile Product", year: "2024", image: project3 },
  { slug: "project-four", title: "Edition 03", role: "Editorial", year: "2023", image: project4 },
  { slug: "project-five", title: "Vector City", role: "Art Direction", year: "2023", image: scene1 },
  { slug: "project-six", title: "Sundown", role: "Campaign", year: "2022", image: scene3 },
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
