import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Placeholder } from "@/components/placeholder";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Portfolio" },
      { name: "description", content: "Cinematic portfolio of Your Name." },
    ],
  }),
  component: Home,
});

const projects = [
  { slug: "project-one", title: "Project One", role: "Brand · 2025" },
  { slug: "project-two", title: "Project Two", role: "Web · 2024" },
  { slug: "project-three", title: "Project Three", role: "Product · 2024" },
  { slug: "project-four", title: "Project Four", role: "Identity · 2023" },
];

function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Design", "Direction", "Code", "Story", "Motion", "Brand"]} />
      <AboutTeaser />
      <WorkStrip />
      <CaseStudiesTeaser />
      <ContactTeaser />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden grain">
      <motion.div style={{ y }} className="absolute inset-0">
        <Placeholder label="Hero loop · video or image" aspect="auto" className="h-full w-full !rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center lg:px-12"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-accent">Coming Soon · Folio 2026</p>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 px-6 pb-12 lg:px-12 lg:pb-16">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-fluid-hero leading-[0.85]"
        >
          YOUR<br />NAME
        </motion.h1>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-t border-foreground/20 pt-6">
          <p className="max-w-md text-sm text-muted-foreground">
            Independent designer & developer building bold digital experiences for ambitious brands.
          </p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Available for work
          </div>
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AboutTeaser() {
  return (
    <section className="relative px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — About</p>
            <h2 className="mt-6 font-display text-fluid-display">A short introduction.</h2>
          </div>
        </div>
        <div className="space-y-8 lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="text-2xl leading-snug md:text-3xl">
              Two sentences of bio go here. Replace with what you actually do — the kind of work, the kind of clients, what makes the work yours.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base text-muted-foreground">
              A second paragraph for the longer story — process, philosophy, or a recent focus. Keep it tight; the work below does the heavy lifting.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/about" className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.3em] hover:text-accent hover:border-accent">
              Read more <span>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WorkStrip() {
  return (
    <section className="relative bg-surface py-32 lg:py-48">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — Selected Work</p>
            <h2 className="mt-6 font-display text-fluid-display">Recent<br />projects.</h2>
          </div>
          <Link to="/work" className="border border-foreground px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background">
            View all
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <ul className="flex gap-6 px-6 pb-6 lg:px-12">
          {projects.map((p, i) => (
            <li key={p.slug} className="w-[80vw] shrink-0 md:w-[55vw] lg:w-[40vw]">
              <Reveal delay={i * 0.05}>
                <Link to="/case/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 group-hover:scale-105">
                      <Placeholder label={p.title} aspect="4/5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-display text-2xl">{p.title}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.role}</span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaseStudiesTeaser() {
  return (
    <section className="px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1800px]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">03 — Case Studies</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-fluid-display max-w-4xl">
            Long-form looks at how the work was made.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/case/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center justify-between gap-6 py-8 transition-colors hover:bg-surface px-2"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactTeaser() {
  return (
    <section className="relative px-6 py-32 lg:px-12 lg:py-48">
      <div className="mx-auto max-w-[1800px]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">04 — Contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-fluid-hero leading-[0.9]">
            Let's<br />build<br /><span className="text-accent">something.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-4 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.3em] hover:bg-foreground hover:text-background"
          >
            Start a project <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
