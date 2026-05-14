import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-24">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        <div className="grid gap-12 pb-16 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Get in touch</p>
            <a href="mailto:abhishek@solvextra.com" className="mt-4 block font-display text-3xl hover:text-accent">
              abhishek@solvextra.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Navigate</p>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/" as const, label: "Index" },
                { to: "/about" as const, label: "About" },
                { to: "/work" as const, label: "Case Studies" },
                { to: "/experience" as const, label: "Experience" },
                { to: "/contact" as const, label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="https://linkedin.com/in/abhi003" target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
              <li><a href="mailto:abhishek@solvextra.com" className="hover:text-accent">Email</a></li>
              <li><span className="text-muted-foreground">India</span></li>
            </ul>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-border pt-6 pb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} — Abhishek Das</span>
          <span>Made with care</span>
        </div>
      </div>

      <div className="pointer-events-none select-none">
        <h2 className="font-display text-fluid-hero whitespace-nowrap leading-[0.8] text-foreground/95 -mb-[3vw] -ml-[2vw]">
          ABHISHEK DAS
        </h2>
      </div>
    </footer>
  );
}
