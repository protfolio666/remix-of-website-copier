import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Your Name" },
      { name: "description", content: "Start a project together." },
    ],
  }),
  component: ContactPage,
});

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
            Say<br /><span className="text-accent">hello.</span>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-16 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Email</p>
              <a href="mailto:hello@example.com" className="mt-2 block font-display text-3xl hover:text-accent">hello@example.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Studio</p>
              <p className="mt-2 font-display text-xl">City, Country</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Social</p>
              <ul className="mt-2 space-y-1 text-base">
                <li><a href="#" className="hover:text-accent">Instagram ↗</a></li>
                <li><a href="#" className="hover:text-accent">Twitter ↗</a></li>
                <li><a href="#" className="hover:text-accent">LinkedIn ↗</a></li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-8 lg:col-span-7 lg:col-start-6"
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
                  <label className="block text-xs uppercase tracking-[0.3em] text-muted-foreground">Project</label>
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
