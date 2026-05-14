import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Placeholder } from "@/components/placeholder";

const cases: Record<string, { title: string; role: string; year: string; client: string; intro: string }> = {
  "project-one": { title: "Project One", role: "Brand Identity", year: "2025", client: "Client Co.", intro: "A bold rebrand for a category-defining startup." },
  "project-two": { title: "Project Two", role: "Website", year: "2024", client: "Studio X", intro: "A cinematic portfolio for a film studio." },
  "project-three": { title: "Project Three", role: "Product Design", year: "2024", client: "App Inc.", intro: "Reshaping a daily-use product around speed." },
  "project-four": { title: "Project Four", role: "Visual Identity", year: "2023", client: "Label Y", intro: "An identity built from a single mark." },
  "project-five": { title: "Project Five", role: "Art Direction", year: "2023", client: "Agency Z", intro: "Campaign art direction across formats." },
  "project-six": { title: "Project Six", role: "Editorial", year: "2022", client: "Magazine", intro: "An editorial series with custom typography." },
};

export const Route = createFileRoute("/case/$slug")({
  loader: ({ params }) => {
    const c = cases[params.slug];
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Case Study` : "Case Study" },
      { name: "description", content: loaderData?.intro ?? "" },
    ],
  }),
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-fluid-display">Couldn't load</p>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 border border-foreground px-6 py-3 text-xs uppercase tracking-[0.3em]">Retry</button>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="font-display text-fluid-display">Case not found</p>
        <Link to="/work" className="mt-6 inline-block border border-foreground px-6 py-3 text-xs uppercase tracking-[0.3em]">Back to Work</Link>
      </div>
    </div>
  ),
  component: CasePage,
});

function CasePage() {
  const c = Route.useLoaderData();

  return (
    <article>
      {/* Cover */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <Placeholder label={`${c.title} cover`} aspect="auto" className="h-full w-full !rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">{c.role} · {c.year}</p>
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-fluid-hero leading-[0.88]"
          >
            {c.title}
          </motion.h1>
        </div>
      </section>

      {/* Meta */}
      <section className="border-y border-border px-6 py-10 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-8 md:grid-cols-4">
          {[
            { l: "Client", v: c.client },
            { l: "Role", v: c.role },
            { l: "Year", v: c.year },
            { l: "Scope", v: "Strategy · Design · Build" },
          ].map((m) => (
            <div key={m.l}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{m.l}</p>
              <p className="mt-2 font-display text-xl">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      {[
        { n: "01", t: "The brief", b: "What the project needed to solve. Replace with the actual brief — the constraint that shaped everything." },
        { n: "02", t: "The approach", b: "How you made the decisions. Process, exploration, the path you took to the final form." },
        { n: "03", t: "The outcome", b: "What it became, and how it landed. Numbers if you have them, story if you don't." },
      ].map((ch, i) => (
        <section key={ch.n} className={i % 2 === 0 ? "px-6 py-32 lg:px-12 lg:py-48" : "bg-surface px-6 py-32 lg:px-12 lg:py-48"}>
          <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{ch.n}</p>
              <h2 className="mt-4 font-display text-fluid-display">{ch.t}</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-8">
              <p className="text-xl leading-snug md:text-2xl">{ch.b}</p>
              <Placeholder label={`${ch.t} visual`} aspect="16/9" />
            </div>
          </div>
        </section>
      ))}

      {/* Gallery */}
      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1800px] grid gap-6 md:grid-cols-2">
          <Placeholder label="Detail 01" aspect="4/5" />
          <Placeholder label="Detail 02" aspect="4/5" className="md:mt-24" />
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-border px-6 py-16 lg:px-12">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between">
          <Link to="/work" className="text-xs uppercase tracking-[0.3em] hover:text-accent">← All work</Link>
          <Link to="/case/$slug" params={{ slug: "project-two" }} className="group text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Next project</p>
            <p className="font-display text-3xl group-hover:text-accent">Project Two →</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
