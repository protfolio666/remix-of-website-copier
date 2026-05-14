import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhishek Das" },
      { name: "description", content: "Open to opportunities in Trust & Safety, Fraud Ops, Quality, CX Governance, and Process Excellence." },
    ],
  }),
  component: ContactPage,
});

const openTo = [
  "Trust & Safety",
  "Fraud Operations",
  "Quality Operations",
  "CX Governance",
  "Marketplace Integrity",
  "Process Excellence",
  "Operations Intelligence",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32">
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-fluid-hero leading-[0.88]"
          >
            Let's<br /><span className="text-accent">connect.</span>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Email</p>
              <a href="mailto:abhishek@solvextra.com" className="mt-2 block font-display text-3xl hover:text-accent">abhishek@solvextra.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">LinkedIn</p>
              <a href="https://linkedin.com/in/abhi003" target="_blank" rel="noreferrer" className="mt-2 block font-display text-2xl hover:text-accent">linkedin.com/in/abhi003 ↗</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Location</p>
              <p className="mt-2 font-display text-2xl">India</p>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Open to opportunities in</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {openTo.map((o) => (
                  <li key={o} className="border border-border px-3 py-1.5 text-xs">{o}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em]">
              <a href="#" className="border border-foreground/40 px-5 py-3 hover:border-accent hover:text-accent">Download Resume</a>
              <a href="https://linkedin.com/in/abhi003" target="_blank" rel="noreferrer" className="border border-foreground/40 px-5 py-3 hover:border-accent hover:text-accent">LinkedIn ↗</a>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-8 lg:col-span-6 lg:col-start-7"
          >
            {sent ? (
              <div className="border border-accent p-10 text-center">
                <p className="font-display text-3xl text-accent">Thanks — I'll be in touch.</p>
              </div>
            ) : (
              <>
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Company" name="company" required={false} />
                <div>
                  <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-lg outline-none focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 border border-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background"
                >
                  Send message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-lg outline-none focus:border-accent"
      />
    </div>
  );
}
