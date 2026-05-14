import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import portrait from "@/assets/abhishek-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abhishek Das" },
      { name: "description", content: "About Abhishek Das, designer and developer." },
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
          <div className="space-y-8 lg:col-span-6 lg:col-start-7">
            <p className="text-2xl leading-snug">
              I'm Abhishek Das. I design and build digital products with a focus on craft, motion, and the feel of an interface — not just the function.
            </p>
            <p className="text-base text-muted-foreground">
              For five years I've worked across brand identity, product design, and frontend engineering, partnering with founders, studios, and in-house teams who care about the details.
            </p>
            <p className="text-base text-muted-foreground">
              The work tends to live where editorial meets product — typography-led, image-driven, and quietly cinematic. If that resonates, let's talk.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Based in</p>
                <p className="mt-2 font-display text-2xl">Kolkata, IN</p>
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
              { t: "Web & Interactive", d: "Sites, apps, prototypes, motion design." },
              { t: "Product Design", d: "UI/UX, design systems, frontend engineering." },
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
