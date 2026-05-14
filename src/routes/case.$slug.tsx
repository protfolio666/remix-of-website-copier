import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-scenes";
import scene2 from "@/assets/scene-2.jpg";
import caseCodFraud from "@/assets/case-cod-fraud.png";
import caseIncentiveLeakage from "@/assets/case-incentive-leakage.png";
import kwcBanner from "@/assets/kwc-ewc-banner.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

type Section = { heading: string; items: string[] };
type CaseData = {
  title: string;
  /** Two-line hero headline on the case page. Full `title` stays for SEO and document title. */
  heroStack?: readonly [string, string];
  category: string;
  kind: "investigation" | "system";
  year: string;
  image: string;
  /** Focal point for `object-cover` on the case hero image (Tailwind `object-*` utilities). */
  imageObjectPosition?: string;
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
    image: caseCodFraud,
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
    image: scene2,
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
    image: caseIncentiveLeakage,
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
    image: project1,
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
    image: project2,
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
    image: project3,
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
    image: project4,
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
    next: { slug: "kwc-tournament-operations", title: "KWC · Tournament & Discord automation" },
  },
  "kwc-tournament-operations": {
    title: "KWC Tournament Operations & Discord Automation System",
    heroStack: ["KWC Tournament Operations", "& Discord automation system"],
    category: "Honor of Kings India · Tencent · Esports World Cup (EWC) Qualifiers",
    kind: "system",
    year: "2026",
    image: kwcBanner,
    imageObjectPosition: "object-[62%_38%]",
    intro:
      "Designed and managed a large-scale Discord automation and tournament operations workflow system for KWC (Honor of Kings World Cup) qualifier operations connected to the Esports World Cup (EWC) competitive ecosystem under Honor of Kings India (Tencent). The project focused on managing large tournament communities, match coordination, moderation workflows, team communication, and Discord infrastructure efficiently during high-volume esports qualifier operations.",
    sections: [
      {
        heading: "Manual workflow risks",
        items: [
          "Handling tournament workflows manually for hundreds of players and teams created multiple operational risks.",
          "Delayed room setup",
          "Incorrect permissions",
          "Communication confusion",
          "Moderator overload",
          "Repetitive setup work",
          "Missing match coordination threads",
          "Operational delays during live tournament activity",
        ],
      },
      {
        heading: "Tournament scale",
        items: [
          "160+ participating teams",
          "Large-scale qualifier coordination",
          "Real-time operational management",
          "Multi-stage tournament workflows",
          "High-volume Discord activity management",
        ],
      },
      {
        heading: "Core operational problems solved",
        items: [
          "Manual Discord setup delays",
          "Inconsistent role and permission handling",
          "Difficulty managing tournament communication at scale",
          "Repetitive operational tasks for moderators",
          "Coordination inefficiencies during active tournament stages",
          "Lack of structured workflow visibility",
        ],
      },
      {
        heading: "What the system did",
        items: [
          "Automated match room creation — generated Discord channels, rooms, and communication structures for tournament matches using operational workflow logic, reducing manual setup time during qualifiers.",
          "Dynamic match threads — organized discussion threads for teams, moderators, and operational coordination to improve communication clarity during tournament progression.",
          "Automated role and permission assignment — structured Discord roles for teams, players, moderators, and tournament staff to improve operational control and reduce manual permission errors.",
          "Excel-based bulk tournament setup — structured Excel uploads to quickly configure tournament workflows, team setups, and Discord operational structures for large participation volumes.",
          "Moderation workflow support — reduced repetitive workload by automating tournament infrastructure setup and improving workflow visibility.",
          "Tournament coordination infrastructure — improved room organization, communication routing, and team coordination workflows during qualifier stages.",
          "Operational scalability — workflows supporting large esports participation volumes without relying heavily on manual operations.",
        ],
      },
      {
        heading: "Tools and systems used",
        items: [
          "Discord",
          "Excel-based operational upload systems",
          "Workflow automation logic",
          "Structured permission management",
          "Community moderation systems",
        ],
      },
      {
        heading: "Project focus",
        items: [
          "Operational workflow thinking, esports coordination handling, moderation system design, large-scale communication structuring, and automation-driven operational efficiency within competitive gaming environments — delivered for Tencent and Honor of Kings India.",
        ],
      },
    ],
    risk:
      "Business and operational impact included reduced manual setup workload for tournament moderators, faster operational coordination, fewer Discord management errors, clearer communication across teams, improved scalability for large tournament workflows, and more focus on live operational management instead of repetitive setup tasks.",
    skills: [
      "Discord Operations",
      "Esports Operations",
      "Workflow Automation",
      "Tournament Coordination",
      "Moderation Systems",
      "Community Operations",
      "Role and permission management",
      "Operational structuring",
      "Automation logic",
      "Large-scale workflow handling",
    ],
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
      <PageHero chapter="02" label="Case Studies">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          {c.kind === "investigation" ? "Case Study" : "Project"} · {c.year}
        </p>
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={
            c.heroStack
              ? "mt-4 max-w-5xl text-balance font-display leading-[0.92]"
              : "mt-4 font-display text-fluid-hero leading-[0.88]"
          }
        >
          {c.heroStack ? (
            <>
              <span className="block text-[clamp(2.35rem,7.5vw,5.75rem)] tracking-[-0.03em]">{c.heroStack[0]}</span>
              <span className="mt-3 block text-[clamp(1.35rem,3.8vw,2.65rem)] tracking-[-0.02em] text-muted-foreground">
                {c.heroStack[1]}
              </span>
            </>
          ) : (
            c.title
          )}
        </motion.h1>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.category}</p>
      </PageHero>

      <section className="px-6 lg:px-12">
        <ScrollReveal>
          <div className="relative mx-auto max-w-[1800px] overflow-hidden border border-border bg-background">
            <div className="relative aspect-[21/10] md:aspect-[21/8]">
              <img
                src={c.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover ${c.imageObjectPosition ?? ""}`}
                width={1920}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/20" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.12_0_0/0.75)_100%)]" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-8 lg:col-start-3">
            <p className="text-2xl leading-snug md:text-3xl">{c.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      {c.sections.map((s, i) => (
        <section key={s.heading} className={i % 2 === 0 ? "bg-surface px-6 py-24 lg:px-12" : "px-6 py-24 lg:px-12"}>
          <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">0{i + 1}</p>
              <h2 className="mt-4 font-display text-fluid-display">{s.heading}</h2>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-7 lg:col-start-6">
              <ul className="divide-y divide-border border-y border-border">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-6 py-5">
                    <span className="text-accent">—</span>
                    <span className="text-lg">{it}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {c.risk && (
        <section className="px-6 py-24 lg:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-[1800px] border-l-4 border-accent pl-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Business Risk</p>
              <p className="mt-4 max-w-4xl font-display text-3xl leading-snug md:text-4xl">{c.risk}</p>
            </div>
          </ScrollReveal>
        </section>
      )}

      {(c.skills || c.focus) && (
        <section className="bg-surface px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1800px]">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.skills ? "Skills used" : "Operational focus"}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {(c.skills ?? c.focus ?? []).map((s) => (
                  <span key={s} className="border border-border bg-background px-5 py-3 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="border-t border-border px-6 py-16 lg:px-12">
        <ScrollReveal>
          <div className="mx-auto flex max-w-[1800px] items-center justify-between">
            <Link to="/work" className="text-xs uppercase tracking-[0.3em] hover:text-accent">
              ← All work
            </Link>
            <Link to="/case/$slug" params={{ slug: c.next.slug }} className="group text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Next</p>
              <p className="font-display text-3xl group-hover:text-accent">{c.next.title} →</p>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
}
