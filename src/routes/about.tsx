import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Placeholder } from "@/components/placeholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Your Name" },
      { name: "description", content: "About the designer behind the work." },
    ],
  }),
  component: AboutPage,
});

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
            Designer.<br /><span className="text-accent">Builder.</span><br />Storyteller.
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Placeholder label="Portrait" aspect="3/4" />
          </div>
          <div className="space-y-8 lg:col-span-6 lg:col-start-7">
            <p className="text-2xl leading-snug">
              Replace this paragraph with your story — where you started, what you do now, what you care about.
            </p>
            <p className="text-base text-muted-foreground">
              Add a second paragraph for context: tools you love, the kind of collaborators you work best with, and what a typical engagement looks like.
            </p>
            <p className="text-base text-muted-foreground">
              A third paragraph can talk about beliefs, process, or the through-line in your work — keep it human.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Based in</p>
                <p className="mt-2 font-display text-2xl">City, Country</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Available</p>
                <p className="mt-2 font-display text-2xl text-accent">Q1 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-32 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Skills</p>
          <h2 className="mt-6 font-display text-fluid-display">What I do.</h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {[
              { t: "Brand Identity", d: "Logos, systems, guidelines, art direction." },
              { t: "Web & Interactive", d: "Sites, apps, prototypes, motion." },
              { t: "Product Design", d: "UI/UX, design systems, research." },
            ].map((s) => (
              <div key={s.t} className="bg-surface p-10">
                <h3 className="font-display text-3xl">{s.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
