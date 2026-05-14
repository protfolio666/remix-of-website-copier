import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/marquee";
import { CinematicHero } from "@/components/cinematic-hero";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { ScrollReveal, StickyChapter } from "@/components/scroll-scenes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Portfolio" },
      { name: "description", content: "Cinematic scroll-driven portfolio." },
    ],
  }),
  component: Home,
});

const projects = [
  { slug: "project-one", title: "Project One", role: "Brand · 2025" },
  { slug: "project-two", title: "Project Two", role: "Web · 2024" },
  { slug: "project-three", title: "Project Three", role: "Product · 2024" },
  { slug: "project-four", title: "Project Four", role: "Identity · 2023" },
  { slug: "project-five", title: "Project Five", role: "Direction · 2023" },
];

function Home() {
  return (
    <>
      <CinematicHero />
      <Marquee items={["Design", "Direction", "Code", "Story", "Motion", "Brand"]} />

      <StickyChapter number="01 — About" title="A short introduction.">
        <ScrollReveal>
          <p className="text-2xl leading-snug md:text-3xl">
            Two sentences of bio go here. Replace with what you actually do — the kind of work, the kind of clients, what makes the work yours.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-xl text-base text-muted-foreground">
            A second paragraph for the longer story — process, philosophy, or a recent focus. Keep it tight; the work below does the heavy lifting.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <Link to="/about" className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.3em] hover:text-accent hover:border-accent">
            Read more <span>→</span>
          </Link>
        </ScrollReveal>
      </StickyChapter>

      <HorizontalGallery items={projects} />

      <StickyChapter number="03 — Case Studies" title="Long-form looks at how the work was made." invert>
        <div className="divide-y divide-border border-y border-border">
          {projects.slice(0, 3).map((p, i) => (
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

      <section className="relative px-6 py-32 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-[1800px]">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">04 — Contact</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="mt-6 font-display text-fluid-hero leading-[0.9]">
              Let's<br />build<br /><span className="text-accent">something.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-4 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.3em] hover:bg-foreground hover:text-background"
            >
              Start a project <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
