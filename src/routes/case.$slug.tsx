import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";

type Section = { heading: string; items: string[] };
type CaseData = {
  title: string;
  category: string;
  kind: "investigation" | "system";
  year: string;
  intro: string;
  sections: Section[];
  risk?: string;
  focus?: string[];
  skills?: string[];
  next: { slug: string; title: string };
};

const cases: Record<string, CaseData> = {
  "cod-fraud": {
    title: "COD Fraud Investigation",
    category: "Trust & Safety Operations",
    kind: "investigation",
    year: "2025",
    intro:
      "Investigated a fraud pattern affecting customers placing Cash on Delivery orders. Customers reported scam calls within minutes of placing orders, where fraudsters already had access to names, phone numbers, addresses, and order details.",
    sections: [
      {
        heading: "What was analyzed",
        items: [
          "28+ validated customer complaints",
          "Payment methods and order patterns",
          "Seller account repetition",
          "Logistics hub concentration",
          "Scam phone number patterns",
          "Order lifecycle tracking",
          "Cancellation and delivery trends",
        ],
      },
      {
        heading: "Key findings",
        items: [
          "Multiple cases linked to the same operational regions",
          "Similar fraud scripts used across different scam numbers",
          "Repeated seller patterns identified",
          "Signs of possible customer data leakage during order flow",
          "Majority of affected orders connected to COD workflows",
        ],
      },
    ],
    risk:
      "₹3.4L+ at-risk transactions identified from validated complaints alone. If ignored, the issue could scale into larger financial loss, customer trust damage, and operational reputation risk.",
    skills: ["Fraud Investigation", "VOC Analysis", "Root Cause Analysis", "Operational Pattern Detection", "Trust & Safety"],
    next: { slug: "seller-abuse", title: "Seller Abuse & Pirated Products" },
  },
  "seller-abuse": {
    title: "Seller Abuse & Pirated Product Investigation",
    category: "Trust & Safety Operations",
    kind: "investigation",
    year: "2025",
    intro:
      "Investigated seller abuse cases where customers received pirated digital products, fake software links, cracked applications, and misleading product promises instead of genuine products.",
    sections: [
      {
        heading: "What was analyzed",
        items: [
          "50+ negative customer reviews",
          "Seller account patterns",
          "Repeated policy violations",
          "Customer complaint keywords",
          "Fake product descriptions",
          "Review manipulation patterns",
          "External link redirection attempts",
        ],
      },
      {
        heading: "Key findings",
        items: [
          "Sellers distributing torrent links and cracked software",
          "Fake promises used to attract buyers",
          "Repeat offenders creating multiple seller accounts",
          "Customers paying for content freely available online",
          "Increased malware and scam risks for buyers",
        ],
      },
    ],
    risk:
      "Seller abuse directly impacts customer trust, refund costs, platform reputation, and long-term marketplace reliability.",
    skills: ["Seller Abuse Investigation", "VOC Analysis", "Trust & Safety", "Policy Enforcement", "Marketplace Risk Analysis"],
    next: { slug: "incentive-leakage", title: "Incentive Leakage in CX Metrics" },
  },
  "incentive-leakage": {
    title: "Fixing Incentive Leakage in CX Metrics",
    category: "Quality Operations & Audit Governance",
    kind: "investigation",
    year: "2025",
    intro:
      "Investigated loopholes in audit tagging workflows where operational metrics looked healthy, but actual audit visibility and QA accuracy were being bypassed. Discovered when audit targets started dropping despite normal-looking dashboards.",
    sections: [
      {
        heading: "What was analyzed",
        items: [
          "Telephony records",
          "Audit tagging behavior",
          "Account & UCID mapping",
          "Call logs and AI-generated call notes",
          "QA audit visibility",
          "Linked account activity",
        ],
      },
      {
        heading: "Key findings",
        items: [
          "Calls handled on one account but tagged on another",
          "Fake guest IDs used to bypass QA visibility",
          "Audit workflows missing real customer interactions",
          "Incentive structures indirectly encouraging loophole behavior",
          "Reporting dashboards hiding operational gaps",
        ],
      },
      {
        heading: "Recommendations",
        items: [
          "Mandatory tagging validation before call closure",
          "Auto-mapping between call IDs and account IDs",
          "Restrict manual mismatch tagging",
          "Flag offline tagging activity",
          "Improve governance and audit controls",
        ],
      },
    ],
    risk:
      "The loophole created false operational visibility, distorted CSAT and Repeat Rate reporting, and increased incentive leakage risk.",
    skills: ["Audit Governance", "RCA", "QA Operations", "Metric Integrity", "Workflow Investigation"],
    next: { slug: "solvextra", title: "SolveXtra QMS" },
  },
  "solvextra": {
    title: "SolveXtra — Quality Management Platform",
    category: "QA Governance & Audit Workflow System",
    kind: "system",
    year: "2025",
    intro:
      "A quality management and audit workflow platform designed to centralize audit operations, scoring systems, rebuttal management, reporting workflows, and operational visibility. Built around common QA problems: inconsistent scoring, manual workflows, audit disputes, and limited accountability.",
    sections: [
      {
        heading: "Core features",
        items: [
          "Role-based access management",
          "Dynamic audit form builder",
          "Advanced scoring workflows",
          "Fatal error tracking",
          "ATA review management",
          "Rebuttal handling workflows",
          "Audit reporting dashboards",
          "User activity visibility",
          "AI-assisted dashboard generation",
        ],
      },
    ],
    focus: ["QA Governance", "Audit Operations", "Workflow Accountability", "Reporting & Visibility"],
    next: { slug: "solvextra-go", title: "SolvExtra GO" },
  },
  "solvextra-go": {
    title: "SolvExtra GO — Process Gap Intelligence Hub",
    category: "Process Governance & Escalation Visibility",
    kind: "system",
    year: "2025",
    intro:
      "A workflow system to track operational gaps, repeated failures, escalation ownership, and resolution accountability across QA, CX, and operations teams. Built around a common problem: teams repeatedly solving the same issues without visibility into past resolutions.",
    sections: [
      {
        heading: "Core features",
        items: [
          "Process gap reporting",
          "AI-assisted duplicate detection",
          "Assignment & approval workflows",
          "POC accountability tracking",
          "Resolution history management",
          "Operational dashboards",
          "Reopen history tracking",
          "SLA & TAT visibility",
          "Real-time collaboration",
        ],
      },
    ],
    focus: ["Process Governance", "RCA Tracking", "Operational Visibility", "Escalation Management"],
    next: { slug: "omnichannel", title: "Omnichannel CX" },
  },
  "omnichannel": {
    title: "SolveXtra Omnichannel Customer Support",
    category: "Unified Support Operations Workflow",
    kind: "system",
    year: "2025",
    intro:
      "A customer support workflow platform that brings WhatsApp, Instagram, Telegram, Twitter/X, and website conversations into one operational inbox. Focused on improving response times, escalation visibility, ticket management, and SLA handling.",
    sections: [
      {
        heading: "Core features",
        items: [
          "Unified customer inbox",
          "AI-assisted first responses",
          "Ticket management workflows",
          "Escalation routing",
          "CSAT tracking",
          "Real-time agent monitoring",
          "Knowledge base integration",
          "Email reply synchronization",
          "Performance analytics",
        ],
      },
    ],
    focus: ["CX Operations", "Support Workflows", "Escalation Governance", "SLA Management"],
    next: { slug: "sql-sikho", title: "SQL Sikho" },
  },
  "sql-sikho": {
    title: "SQL Sikho — Gamified SQL Learning",
    category: "EdTech Platform",
    kind: "system",
    year: "2024",
    intro:
      "A beginner-focused SQL learning platform designed to reduce confusion and fear around learning SQL. Instead of long technical tutorials, the platform uses small learning quests, simple datasets, and guided progression.",
    sections: [
      {
        heading: "Core features",
        items: [
          "Structured learning flow",
          "Interactive SQL practice",
          "Beginner-friendly datasets",
          "Mobile-friendly learning",
          "Guided progression system",
          "Zero-friction onboarding",
        ],
      },
    ],
    focus: ["Learning Design", "EdTech", "Gamification", "Product Thinking"],
    next: { slug: "cod-fraud", title: "COD Fraud Investigation" },
  },
};

export const Route = createFileRoute("/case/$slug")({
  loader: ({ params }) => {
    const c = cases[params.slug];
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Abhishek Das` : "Case Study" },
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
        <Link to="/work" className="mt-6 inline-block border border-foreground px-6 py-3 text-xs uppercase tracking-[0.3em]">All work</Link>
      </div>
    </div>
  ),
  component: CasePage,
});

function CasePage() {
  const c = Route.useLoaderData() as CaseData;

  return (
    <article className="pt-32">
      {/* Header */}
      <section className="px-6 lg:px-12">
        <div className="mx-auto max-w-[1800px]">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">{c.kind === "investigation" ? "Case Study" : "Project"} · {c.year}</p>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-fluid-hero leading-[0.88]"
          >
            {c.title}
          </motion.h1>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.category}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-12">
          <p className="lg:col-span-8 lg:col-start-3 text-2xl leading-snug md:text-3xl">{c.intro}</p>
        </div>
      </section>

      {/* Sections */}
      {c.sections.map((s, i) => (
        <section key={s.heading} className={i % 2 === 0 ? "bg-surface px-6 py-24 lg:px-12" : "px-6 py-24 lg:px-12"}>
          <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</p>
              <h2 className="mt-4 font-display text-fluid-display">{s.heading}</h2>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6 divide-y divide-border border-y border-border">
              {s.items.map((it) => (
                <li key={it} className="flex gap-6 py-5">
                  <span className="text-accent">—</span>
                  <span className="text-lg">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Risk */}
      {c.risk && (
        <section className="px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1800px] border-l-4 border-accent pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Business Risk</p>
            <p className="mt-4 font-display text-3xl md:text-4xl leading-snug max-w-4xl">{c.risk}</p>
          </div>
        </section>
      )}

      {/* Skills / Focus */}
      {(c.skills || c.focus) && (
        <section className="bg-surface px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1800px]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.skills ? "Skills used" : "Operational focus"}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {(c.skills ?? c.focus ?? []).map((s) => (
                <span key={s} className="border border-border bg-background px-5 py-3 text-sm">{s}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next */}
      <section className="border-t border-border px-6 py-16 lg:px-12">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between">
          <Link to="/work" className="text-xs uppercase tracking-[0.3em] hover:text-accent">← All work</Link>
          <Link to="/case/$slug" params={{ slug: c.next.slug }} className="group text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Next</p>
            <p className="font-display text-3xl group-hover:text-accent">{c.next.title} →</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
