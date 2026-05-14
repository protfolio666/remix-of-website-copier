import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import scene1 from "@/assets/scene-1.jpg";
import scene2 from "@/assets/scene-2.jpg";
import scene3 from "@/assets/scene-3.jpg";

type NavItem = {
  to: "/" | "/about" | "/work" | "/experience" | "/contact";
  label: string;
  num: string;
  image: string;
  eyebrow: string;
  title: string;
  body: string;
};

const links: NavItem[] = [
  {
    to: "/",
    label: "Index",
    num: "00",
    image: heroImg,
    eyebrow: "00 — Index",
    title: "The folio.",
    body: "A cinematic walkthrough of operations work, investigations, and systems.",
  },
  {
    to: "/about",
    label: "About",
    num: "01",
    image: portrait,
    eyebrow: "01 — About",
    title: "Operator. Investigator.",
    body: "Five years across operations, trust & safety, and CX governance.",
  },
  {
    to: "/work",
    label: "Case Studies",
    num: "02",
    image: scene1,
    eyebrow: "02 — Case Studies",
    title: "Investigations.",
    body: "Fraud patterns, audit loopholes, and process gaps — written in detail.",
  },
  {
    to: "/experience",
    label: "Experience",
    num: "03",
    image: scene2,
    eyebrow: "03 — Experience",
    title: "Where I've worked.",
    body: "Tencent, Wyzmindz, Indian Oil, Tech Mahindra — and the work between.",
  },
  {
    to: "/contact",
    label: "Contact",
    num: "04",
    image: scene3,
    eyebrow: "04 — Contact",
    title: "Open to work.",
    body: "Trust & Safety, fraud ops, CX governance, marketplace integrity.",
  },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<NavItem | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Cinematic hover preview layer (desktop) */}
      <HoverPreview item={hovered} />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || hovered
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-5 lg:px-12">
          <Link to="/" className="font-display text-2xl tracking-tight">
            ABHISHEK<span className="text-accent">·</span>DAS
          </Link>

          <nav
            className="hidden items-center gap-10 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onMouseEnter={() => setHovered(l)}
                className="group relative text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
          >
            <span className="h-px w-7 bg-foreground" />
            <span className="h-px w-7 bg-foreground" />
          </button>
        </div>
      </header>

      {/* Cinematic full-screen drawer */}
      <CinematicDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ---------- Hover preview ---------- */

function HoverPreview({ item }: { item: NavItem | null }) {
  return (
    <AnimatePresence mode="wait">
      {item && (
        <motion.div
          key={item.to}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-0 z-40 hidden md:block"
        >
          {/* Image with slow ken-burns */}
          <motion.div
            key={item.image}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.18 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0"
          >
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          {/* Cinematic gradients & vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.12_0_0/0.85)_100%)]" />

          {/* Letterbox bars */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 h-[6vh] origin-top bg-background"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 h-[6vh] origin-bottom bg-background"
          />

          {/* Caption */}
          <div className="absolute inset-0 flex items-end px-6 pb-24 lg:px-12 lg:pb-32">
            <div className="max-w-3xl">
              <motion.p
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs uppercase tracking-[0.4em] text-accent"
              >
                {item.eyebrow}
              </motion.p>
              <motion.h3
                initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-display text-fluid-display leading-[0.9]"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-md text-base text-foreground/80"
              >
                {item.body}
              </motion.p>
            </div>
          </div>

          {/* grain */}
          <div className="absolute inset-0 mix-blend-overlay opacity-30 [background-image:radial-gradient(oklch(0.95_0_0/0.15)_1px,transparent_1px)] [background-size:3px_3px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Cinematic drawer ---------- */

function CinematicDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [active, setActive] = useState<NavItem>(links[0]);

  useEffect(() => {
    if (open) setActive(links[0]);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60]"
        >
          {/* Background image (changes with active item) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.image}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.16 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img src={active.image} alt="" className="h-full w-full object-cover" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,oklch(0.10_0_0/0.9)_100%)]" />

          {/* Letterbox bars sliding in */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 h-[8vh] origin-top bg-background z-10"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 h-[8vh] origin-bottom bg-background z-10"
          />

          {/* Header bar inside drawer */}
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 lg:px-12">
            <span className="font-display text-2xl">
              ABHISHEK<span className="text-accent">·</span>DAS
            </span>
            <button
              onClick={onClose}
              className="text-[11px] uppercase tracking-[0.4em] hover:text-accent"
              aria-label="Close menu"
            >
              Close ✕
            </button>
          </div>

          {/* Content */}
          <div className="relative z-20 grid h-full grid-cols-1 gap-12 px-6 pt-32 pb-24 lg:grid-cols-12 lg:gap-16 lg:px-12">
            <nav className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Navigate</p>
              <ul className="mt-6 space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={l.to}
                      onClick={onClose}
                      onMouseEnter={() => setActive(l)}
                      className="group flex items-baseline gap-6 py-2"
                    >
                      <span className="text-xs tabular-nums text-muted-foreground group-hover:text-accent transition-colors">
                        {l.num}
                      </span>
                      <span className="font-display text-5xl md:text-7xl leading-[0.9] text-foreground/70 group-hover:text-foreground transition-colors">
                        {l.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Side caption — info changes with hover */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.to}
                  initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">{active.eyebrow}</p>
                  <h3 className="mt-4 font-display text-5xl leading-[0.9]">{active.title}</h3>
                  <p className="mt-6 max-w-md text-base text-foreground/80">{active.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* footer meta */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 py-5 text-[10px] uppercase tracking-[0.4em] text-muted-foreground lg:px-12">
            <span>India · 2026</span>
            <a href="mailto:abhishek@solvextra.com" className="hover:text-accent">abhishek@solvextra.com</a>
          </div>

          {/* grain */}
          <div className="absolute inset-0 z-10 mix-blend-overlay opacity-30 [background-image:radial-gradient(oklch(0.95_0_0/0.15)_1px,transparent_1px)] [background-size:3px_3px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
