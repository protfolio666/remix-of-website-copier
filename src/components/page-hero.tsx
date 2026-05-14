import { motion } from "motion/react";

/**
 * Route hero aligned with drawer nav: "00 — Index", "01 — About", etc.
 */
export function PageHero({
  chapter,
  label,
  children,
}: {
  chapter: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 lg:px-12">
      <div className="mx-auto max-w-[1800px]">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {chapter} — {label}
        </p>
        <motion.div
          initial={{ y: 56, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
