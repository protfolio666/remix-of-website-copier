## Goal
Replace placeholder portfolio copy with Abhishek Das's real content (Operations Intelligence / Trust & Safety / CX Governance) while keeping the cinematic GTA-VI-style scroll experience intact.

## Content mapping (what goes where)

**Home (`/`)** — keeps the cinematic shell, repurposed:
- `CinematicHero`: name "Abhishek Das" + new tagline "Operations Intelligence • Trust & Safety • CX Governance • Process Excellence" + sub-line "I investigate operational problems, fraud patterns, audit loopholes, and workflow failures — then design systems that improve visibility, accountability, and CX." + 4 stat chips (3.5+ Yrs, 9000+ Audits, Fraud Investigations, Workflow Systems) + 3 CTAs (View Case Studies / Download Resume / Contact).
- `TrailerScenes`: 3 scenes repurposed as "What I Solve" headlines — Fraud & Abuse Detection / Audit & QA Governance / CX Workflow Optimization (cinematic crossfades retained).
- New "What I Solve" grid section: 6 capability cards (full list from brief).
- `HorizontalGallery`: shows the 4 case studies + projects as scroll-pinned panels with real titles.
- "Case Studies" sticky chapter: lists the 3 investigations with links.
- "Systems & Workflow Design" sticky chapter: lists 4 projects (SolveXtra, SolvExtra GO, Omnichannel, SQL Sikho).
- Contact CTA section.

**About (`/about`)** — rewrite with the full About Me copy + 8 focus-area chips. Portrait stays.

**Work (`/work`)** — rename to "Case Studies & Projects". Two groups: Investigations (3) and Systems (4), each linking to a detail route.

**Case detail (`/case/$slug`)** — replace the `cases` map with 7 real entries:
- `cod-fraud`, `seller-abuse`, `incentive-leakage` (full investigation structure: What was analyzed / Key Findings / Business Risk / Skills)
- `solvextra`, `solvextra-go`, `omnichannel`, `sql-sikho` (Core Features / Operational Focus)
- Update template to render these new sections instead of the generic "brief / approach / outcome" chapters.

**Experience (`/experience`)** — replace timeline with the 4 real roles (Honor of Kings/Tencent, Wyzmindz, Indian Oil, Tech Mahindra) with responsibilities + achievements. Replace "Recognition" block with **Core Skills** (4 skill groups: Trust & Safety / CX & Quality / Operations & Governance / Tools).

**Contact (`/contact`)** — update copy: "Let's Connect", "Open to opportunities in:" list (7 areas), email `abhishek@solvextra.com`, LinkedIn `linkedin.com/in/abhi003`, Location India. Form stays. Add "Download Resume" button (placeholder link `#` until you provide the PDF).

**Header / Footer** — already says Abhishek Das. Update nav labels if needed (Work → Case Studies). Footer email updated to `abhishek@solvextra.com`.

## What I'm NOT adding (and why)
- **Logos / company brand marks** for Tencent, IOCL, Tech Mahindra, Wyzmindz — not provided; would need approval to use.
- **Real screenshots of SolveXtra / SolvExtra GO / Omnichannel / SQL Sikho** — using existing generated abstract project images as placeholders. Swap when you send real screenshots.
- **Resume PDF** — button will link to `#` until you upload one (drop the file and I'll wire it up).
- **Detailed numeric metrics inside SolveXtra projects** — none provided, so I'll keep feature lists only (no fabricated KPIs).
- The original generic "brief / approach / outcome" chapter template on case pages — replaced by the structured investigation format you wrote.
- The generic "Awards / Recognition" list on Experience — replaced by Core Skills (you didn't list awards beyond Spotlight/BRAVO, which I'll fold into achievements under each role instead).

## Notes / things to confirm after build
- Honor of Kings start date in your brief says **April 2026** (future). I'll keep it as written but flag it — likely a typo for 2025; tell me which.
- Email `abhishek@solvextra.com` will be used everywhere; confirm if you'd rather use a personal one.
- No backend / form submission — contact form stays as the existing client-side "Thanks" stub.

## Files to edit
- `src/components/cinematic-hero.tsx` (new copy + stat chips + 3 CTAs)
- `src/components/trailer-scenes.tsx` (3 scene captions)
- `src/components/site-header.tsx`, `src/components/site-footer.tsx` (nav + email)
- `src/routes/index.tsx` (What I Solve grid, sticky chapters list real items)
- `src/routes/about.tsx`, `src/routes/work.tsx`, `src/routes/experience.tsx`, `src/routes/contact.tsx`
- `src/routes/case.$slug.tsx` (new data map + new section structure)

No new dependencies. No backend changes. Cinematic FX, scroll, and animations untouched.
