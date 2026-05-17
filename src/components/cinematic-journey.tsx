import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import portrait from "@/assets/portrait.jpg";
import scene1 from "@/assets/scene-1.jpg";
import scene2 from "@/assets/scene-2.jpg";
import scene3 from "@/assets/scene-3.jpg";
import kwcBanner from "@/assets/kwc-ewc-banner.png";
import caseCodFraud from "@/assets/case-cod-fraud.png";
import caseIncentiveLeakage from "@/assets/case-incentive-leakage.png";
import tencentLogo from "@/assets/logos/tencent.png";
import wyzmindzLogo from "@/assets/logos/wyzmindz.png";
import indianOilLogo from "@/assets/logos/indian-oil.png";
import techMahindraLogo from "@/assets/logos/tech-mahindra.png";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

type Chapter = {
  img: string;
  eyebrow: string;
  title: string;
  body: string;
  num: string;
  overlay?: ReactNode;
};

function DetailOverlay({
  logo,
  meta,
  bullets,
  cta,
}: {
  logo?: string;
  meta: { label: string; value: string }[];
  bullets: string[];
  cta?: { label: string; to: string; slug?: string };
}) {
  return (
    <div className="absolute inset-x-0 bottom-24 z-20 px-6 lg:bottom-28 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-5 lg:max-w-xl">
          {logo && (
            <img
              src={logo}
              alt=""
              className="h-12 w-auto object-contain opacity-90"
              loading="lazy"
            />
          )}
          <ul className="flex flex-col gap-2 text-sm text-foreground/85">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 border-l border-accent/60 pl-3">
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-px bg-foreground/20 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-background/40 px-4 py-3 backdrop-blur-sm">
                <p className="font-display text-2xl tabular-nums text-foreground">{m.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
          {cta && cta.slug ? (
            <Link
              to="/case/$slug"
              params={{ slug: cta.slug }}
              className="inline-flex w-fit items-center gap-3 border border-foreground/70 bg-background/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm hover:bg-foreground hover:text-background"
            >
              {cta.label} <span>→</span>
            </Link>
          ) : cta ? (
            <Link
              to={cta.to as "/contact"}
              className="inline-flex w-fit items-center gap-3 border border-foreground/70 bg-background/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm hover:bg-foreground hover:text-background"
            >
              {cta.label} <span>→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/**
 * CinematicJourney — second pinned trailer sequence.
 * Same GTA VI-style dissolve + Ken-Burns pacing as TrailerScenes,
 * but each chapter shows About / Experience / Projects / Case Studies content.
 */
export function CinematicJourney() {
  const root = useRef<HTMLElement>(null);

  const chapters: Chapter[] = [
    {
      img: portrait,
      eyebrow: "Chapter IV — About",
      title: "Operations is where the truth lives.",
      body: "I investigate operational problems, fraud patterns, audit loopholes, and workflow failures — then design systems that improve visibility, accountability, and customer experience.",
      num: "04",
      overlay: (
        <div className="absolute bottom-28 left-6 z-20 flex flex-wrap gap-3 lg:left-12">
          {["3.5+ Yrs", "9000+ Audits", "Fraud Investigations", "Workflow Systems"].map((s) => (
            <span key={s} className="border border-foreground/40 bg-background/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm">
              {s}
            </span>
          ))}
        </div>
      ),
    },

    // ─── EXPERIENCE — one chapter per company ─────────────────────────────
    {
      img: kwcBanner,
      eyebrow: "Chapter V · Experience 01 — Tencent",
      title: "Esports operations at world-championship scale.",
      body: "Ran tournament operations for the Honor of Kings World Champion Cup (KWC) — scheduling, scoring integrity, broadcast cues, and live escalation handling across regional qualifiers and the global finale.",
      num: "05",
      overlay: (
        <DetailOverlay
          logo={tencentLogo}
          bullets={[
            "Owned live match-day ops for global esports finals",
            "Built scoring & dispute workflows used by referees and producers",
            "Coordinated regional ops leads across 6+ time zones",
            "Closed post-match audits within 24h of every fixture",
          ]}
          meta={[
            { label: "Tournament", value: "KWC" },
            { label: "Regions", value: "6+" },
            { label: "Matches", value: "200+" },
            { label: "Disputes Closed", value: "100%" },
          ]}
          cta={{ label: "Read the case study", to: "/case/$slug", slug: "kwc-tournament-operations" }}
        />
      ),
    },
    {
      img: scene2,
      eyebrow: "Chapter VI · Experience 02 — Wyzmindz",
      title: "Audit governance for CX at scale.",
      body: "Designed and ran QA audit programs for large CX operations — building SolveXtra QMS and SolvExtra GO to expose tagging gaps, incentive leakage, and process drift before they reached the customer.",
      num: "06",
      overlay: (
        <DetailOverlay
          logo={wyzmindzLogo}
          bullets={[
            "9000+ interaction audits across voice, chat, and email",
            "Built QMS calibration loops with TL / OM / Quality",
            "Caught incentive leakage worth lakhs in monthly payout",
            "Authored process-gap playbooks adopted across LOBs",
          ]}
          meta={[
            { label: "Audits", value: "9000+" },
            { label: "LOBs", value: "5" },
            { label: "Tools Built", value: "2" },
            { label: "Tenure", value: "2 Yrs" },
          ]}
          cta={{ label: "See SolveXtra", to: "/case/$slug", slug: "solvextra" }}
        />
      ),
    },
    {
      img: scene3,
      eyebrow: "Chapter VII · Experience 03 — Indian Oil",
      title: "Process operations inside a national supply chain.",
      body: "Worked inside Indian Oil's operational backbone — handling process documentation, compliance checks, and day-to-day operational coordination across distribution touchpoints.",
      num: "07",
      overlay: (
        <DetailOverlay
          logo={indianOilLogo}
          bullets={[
            "Coordinated daily distribution ops with field teams",
            "Maintained compliance documentation & audit trails",
            "Resolved field escalations with logistics partners",
            "Standardised reporting cadence for ops leadership",
          ]}
          meta={[
            { label: "Domain", value: "Energy" },
            { label: "Function", value: "Ops" },
            { label: "Scope", value: "Field+HO" },
            { label: "Tenure", value: "1 Yr" },
          ]}
        />
      ),
    },
    {
      img: scene1,
      eyebrow: "Chapter VIII · Experience 04 — Tech Mahindra",
      title: "Where the support-ops instinct started.",
      body: "Started in support operations at Tech Mahindra — learning how queues break, how escalations get lost, and why ownership matters more than scripts. The foundation behind everything I build today.",
      num: "08",
      overlay: (
        <DetailOverlay
          logo={techMahindraLogo}
          bullets={[
            "Frontline support across high-volume queues",
            "Owned escalation handoffs end-to-end",
            "Mentored new joiners on ticket hygiene",
            "First exposure to QA, calibration, and audit loops",
          ]}
          meta={[
            { label: "Role", value: "Support" },
            { label: "Channel", value: "Voice" },
            { label: "SLA", value: "Met" },
            { label: "Stage", value: "Origin" },
          ]}
        />
      ),
    },

    // ─── PROJECTS — one chapter per product ───────────────────────────────
    {
      img: kwcBanner,
      eyebrow: "Chapter IX · Project 01 — KWC Tournament Ops",
      title: "Running a global esports finale, one workflow at a time.",
      body: "An operations playbook for Honor of Kings World Champion Cup: fixture scheduling, scoring integrity, dispute resolution, broadcast cues, and live escalation routing — built so referees, producers, and ops leads stayed in lockstep.",
      num: "09",
      overlay: (
        <DetailOverlay
          bullets={[
            "Match-day runbook covering pre, live, and post phases",
            "Dispute intake → review → ruling in under 30 minutes",
            "Real-time comms bridge between referees & broadcast",
            "Post-event audit pack delivered within 24 hours",
          ]}
          meta={[
            { label: "Type", value: "Live Ops" },
            { label: "Stage", value: "Global" },
            { label: "Owner", value: "Me" },
            { label: "Outcome", value: "Shipped" },
          ]}
          cta={{ label: "Open case study", to: "/case/$slug", slug: "kwc-tournament-operations" }}
        />
      ),
    },
    {
      img: scene2,
      eyebrow: "Chapter X · Project 02 — SolveXtra QMS",
      title: "A QA platform that audits the auditors.",
      body: "SolveXtra is a Quality Management System I helped shape at Wyzmindz — calibration workflows, evidence-backed scoring, dispute resolution, and dashboards that surface where coaching actually changes behaviour.",
      num: "10",
      overlay: (
        <DetailOverlay
          bullets={[
            "Form-builder for audit templates per LOB",
            "Calibration sessions tracked with variance scoring",
            "Coaching trails linked to audit findings",
            "Leadership dashboards for fail-pattern triage",
          ]}
          meta={[
            { label: "Type", value: "QMS" },
            { label: "Users", value: "TLs+QA" },
            { label: "Audits", value: "9k+" },
            { label: "Status", value: "Live" },
          ]}
          cta={{ label: "Open case study", to: "/case/$slug", slug: "solvextra" }}
        />
      ),
    },
    {
      img: scene1,
      eyebrow: "Chapter XI · Project 03 — SolvExtra GO",
      title: "A process-gap hub that won't let drift hide.",
      body: "SolvExtra GO is the gap-tracking sibling to SolveXtra — a single hub where TLs, OMs, and process owners log, classify, and close operational gaps with SLA visibility and trend analytics.",
      num: "11",
      overlay: (
        <DetailOverlay
          bullets={[
            "Gap intake with category, severity, and owner",
            "SLA timers per stage with auto-escalation",
            "Trend view: repeat gaps surface within weeks, not quarters",
            "Closure linked back to QMS audit evidence",
          ]}
          meta={[
            { label: "Type", value: "Gap Hub" },
            { label: "Roles", value: "TL/OM" },
            { label: "Cycle", value: "Daily" },
            { label: "Status", value: "Live" },
          ]}
          cta={{ label: "Open case study", to: "/case/$slug", slug: "solvextra-go" }}
        />
      ),
    },
    {
      img: scene3,
      eyebrow: "Chapter XII · Project 04 — Omnichannel CX",
      title: "Support that follows the customer, not the channel.",
      body: "An omnichannel CX framework: unified ticket identity across voice / chat / email / social, routing rules that respect history, and SLAs that don't reset every time the customer switches channel.",
      num: "12",
      overlay: (
        <DetailOverlay
          bullets={[
            "Unified customer thread across all channels",
            "Routing rules based on intent + history",
            "Continuous SLA across channel switches",
            "Agent view of the full contact arc, not just the ticket",
          ]}
          meta={[
            { label: "Type", value: "CX Ops" },
            { label: "Channels", value: "4+" },
            { label: "Focus", value: "Identity" },
            { label: "Status", value: "Shipped" },
          ]}
          cta={{ label: "Open case study", to: "/case/$slug", slug: "omnichannel" }}
        />
      ),
    },

    // ─── CASE STUDIES — one chapter per investigation ─────────────────────
    {
      img: caseCodFraud,
      eyebrow: "Chapter XIII · Case 01 — COD Fraud",
      title: "Unmasking a Cash-on-Delivery fraud ring.",
      body: "A pattern of refused deliveries, fake addresses, and serial reorders was bleeding margin. I mapped the behavioural signature, traced the cluster, and proposed the verification gate that closed the loop.",
      num: "13",
      overlay: (
        <DetailOverlay
          bullets={[
            "Behavioural pattern: refusal rate × reorder velocity",
            "Cluster discovery across pincode + device fingerprint",
            "Verification gate at checkout for risk-scored orders",
            "Outcome: targeted friction, not blanket friction",
          ]}
          meta={[
            { label: "Domain", value: "T&S" },
            { label: "Signal", value: "Refusal" },
            { label: "Fix", value: "Gate" },
            { label: "Impact", value: "↓ Loss" },
          ]}
          cta={{ label: "Read full investigation", to: "/case/$slug", slug: "cod-fraud" }}
        />
      ),
    },
    {
      img: scene3,
      eyebrow: "Chapter XIV · Case 02 — Seller Abuse",
      title: "Seller abuse and pirated products at the catalogue edge.",
      body: "Investigated sellers exploiting catalogue gaps to push pirated and counterfeit items. Built the detection lens — listing similarity, price anomaly, and review velocity — and the takedown workflow behind it.",
      num: "14",
      overlay: (
        <DetailOverlay
          bullets={[
            "Listing similarity across seller IDs",
            "Price anomaly + review-velocity scoring",
            "Evidence package for takedown actions",
            "Feedback loop into seller onboarding checks",
          ]}
          meta={[
            { label: "Domain", value: "T&S" },
            { label: "Signal", value: "Catalog" },
            { label: "Fix", value: "Takedown" },
            { label: "Loop", value: "Onboarding" },
          ]}
          cta={{ label: "Read full investigation", to: "/case/$slug", slug: "seller-abuse" }}
        />
      ),
    },
    {
      img: caseIncentiveLeakage,
      eyebrow: "Chapter XV · Case 03 — Incentive Leakage",
      title: "When CX metrics quietly leak the incentive pool.",
      body: "Tagging drift and metric gaming were inflating CX scores — and the incentive payout. I traced the leakage, rebuilt the audit sampling, and tightened the calibration loop so payout matched real performance.",
      num: "15",
      overlay: (
        <DetailOverlay
          bullets={[
            "Tag-drift audit across disposition codes",
            "Sampling rebuilt to surface gamed metrics",
            "Calibration variance tracked per auditor",
            "Payout aligned to verified, audited performance",
          ]}
          meta={[
            { label: "Domain", value: "Audit" },
            { label: "Signal", value: "Tag Drift" },
            { label: "Fix", value: "Sampling" },
            { label: "Impact", value: "Payout ✓" },
          ]}
          cta={{ label: "Read full investigation", to: "/case/$slug", slug: "incentive-leakage" }}
        />
      ),
    },

    // ─── CONTACT ──────────────────────────────────────────────────────────
    {
      img: scene2,
      eyebrow: "Chapter XVI — Contact",
      title: "Let's build visibility.",
      body: "If you have an operational problem that won't sit still — fraud patterns, audit gaps, escalation chaos — let's investigate it together.",
      num: "16",
      overlay: (
        <div className="absolute inset-x-0 bottom-28 z-20 flex justify-center px-6 lg:bottom-36">
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 border border-foreground bg-background/30 px-8 py-4 text-sm uppercase tracking-[0.3em] backdrop-blur-sm hover:bg-foreground hover:text-background"
          >
            Start a conversation <span>→</span>
          </Link>
        </div>
      ),
    },
  ];

  useGSAP(
    () => {
      if (!root.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const slides = gsap.utils.toArray<HTMLElement>(".journey-slide");
      const total = slides.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${total * 160}%`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });

      slides.forEach((slide, i) => {
        const img = slide.querySelector(".journey-img");
        const eyebrow = slide.querySelector(".journey-eyebrow");
        const title = slide.querySelector(".journey-title");
        const body = slide.querySelector(".journey-body");
        const num = slide.querySelector(".journey-num");
        const overlay = slide.querySelector(".journey-overlay");

        tl.fromTo(img, { scale: 1.08, yPercent: 1.5 }, { scale: 1.3, yPercent: -1.5, ease: "none" }, i);

        tl.fromTo(
          [eyebrow, title, body, num, overlay].filter(Boolean),
          { y: 80, opacity: 0, filter: "blur(18px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.08, ease: "power3.out", duration: 0.4 },
          i + 0.05,
        );

        if (i < total - 1) {
          tl.to(
            [eyebrow, title, body, num, overlay].filter(Boolean),
            { y: -80, opacity: 0, filter: "blur(14px)", stagger: 0.05, ease: "power2.in", duration: 0.35 },
            i + 0.6,
          );
          tl.to(slide, { opacity: 0, ease: "power1.inOut", duration: 0.5 }, i + 0.7);
          tl.to(slides[i + 1], { opacity: 1, ease: "power1.inOut", duration: 0.5 }, i + 0.7);
        }
      });

      gsap.to(".journey-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${total * 160}%`,
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-background">
      {chapters.map((s, i) => (
        <div key={i} className="journey-slide absolute inset-0 will-change-transform">
          <div className="journey-img absolute inset-0 will-change-transform">
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/20" />

          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-72 lg:px-12 lg:pb-80">
            <p className="journey-eyebrow text-xs uppercase tracking-[0.4em] text-accent will-change-transform">
              {s.eyebrow}
            </p>
            <h2 className="journey-title mt-4 max-w-4xl font-display text-fluid-display will-change-transform">
              {s.title}
            </h2>
            <p className="journey-body mt-6 max-w-md text-base text-foreground/80 will-change-transform">
              {s.body}
            </p>
          </div>

          {s.overlay && <div className="journey-overlay will-change-transform">{s.overlay}</div>}

          <div className="absolute right-6 top-1/2 -translate-y-1/2 lg:right-12">
            <p className="journey-num font-display text-7xl tabular-nums text-foreground/25 will-change-transform">
              {s.num}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 top-0 z-30 h-px bg-foreground/10">
        <div className="journey-progress h-full origin-left scale-x-0 bg-accent" />
      </div>

      <div className="absolute bottom-6 right-6 z-30 lg:bottom-8 lg:right-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll ↓</p>
      </div>
    </section>
  );
}