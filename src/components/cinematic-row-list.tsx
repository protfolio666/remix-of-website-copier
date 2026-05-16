import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";

export interface CinematicRow {
  slug: string;
  title: string;
  role?: string;
  image: string;
}

/**
 * Rockstar/GTA6-style row list: hovering a row reveals a large cinematic
 * image preview that floats on the right with a slow Ken-Burns scale.
 */
export function CinematicRowList({
  number,
  title,
  rows,
  invert = false,
}: {
  number: string;
  title: string;
  rows: CinematicRow[];
  invert?: boolean;
}) {
  const [active, setActive] = useState<CinematicRow | null>(null);

  return (
    <section
      className={`relative overflow-hidden px-6 py-32 lg:px-12 lg:py-48 ${
        invert ? "bg-surface" : "bg-background"
      }`}
      onMouseLeave={() => setActive(null)}
    >
      {/* Floating cinematic preview */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.12 }}
              exit={{ opacity: 0, scale: 1.18 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={active.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.10_0_0/0.85)_100%)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px]">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/15 pb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">{number}</p>
            <h2 className="mt-4 font-display text-fluid-display max-w-3xl leading-[0.9]">
              {title}
            </h2>
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            {String(rows.length).padStart(2, "0")} entries
          </p>
        </div>

        <ul className="divide-y divide-foreground/10">
          {rows.map((r, i) => (
            <li key={r.slug}>
              <Link
                to="/case/$slug"
                params={{ slug: r.slug }}
                onMouseEnter={() => setActive(r)}
                className="group grid grid-cols-12 items-center gap-6 py-7 transition-colors"
              >
                <span className="col-span-2 text-xs tabular-nums text-muted-foreground group-hover:text-accent transition-colors">
                  / 0{i + 1}
                </span>
                <div className="col-span-7">
                  <h3 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-foreground/60 group-hover:text-foreground transition-colors duration-500">
                    {r.title}
                  </h3>
                  {r.role && (
                    <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                      {r.role}
                    </p>
                  )}
                </div>
                <span className="col-span-3 justify-self-end text-[10px] uppercase tracking-[0.4em] text-muted-foreground group-hover:text-accent transition-colors">
                  View ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
