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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhishek Das — Designer & Developer" },
      { name: "description", content: "Cinematic scroll-driven portfolio of Abhishek Das." },
    ],
  }),
  component: Home,
});

const projects = [
  { slug: "project-one", title: "Aurora OS", role: "Product · 2025", image: project1 },
  { slug: "project-two", title: "Noir Studio", role: "Brand · 2024", image: project2 },
  { slug: "project-three", title: "Halo App", role: "Mobile · 2024", image: project3 },
  { slug: "project-four", title: "Edition 03", role: "Editorial · 2023", image: project4 },
];

function Home() {
  return (
    <>
      <CinematicHero />
      <TrailerScenes />
      <Marquee items={["Design", "Direction", "Code", "Story", "Motion", "Brand"]} />

      <StickyChapter number="01 — About" title="A short introduction.">
        <ScrollReveal>
          <p className="text-2xl leading-snug md:text-3xl">
            I'm Abhishek Das — an independent designer and developer crafting cinematic digital experiences for ambitious brands and founders.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-xl text-base text-muted-foreground">
            Five years across brand identity, product design, and frontend engineering. I work with teams who care as much about the feel of the product as the function.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <Link to="/about" className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-xs uppercase tracking-[0.3em] hover:text-accent hover:border-accent">
            More about me <span>→</span>
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
