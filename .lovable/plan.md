## Goal

A reusable portfolio template that mirrors the **structure, scroll behavior, and interaction feel** of the Rockstar GTA VI page — without copying its art, colors, fonts, copy, or logos. You'll swap in your own content later.

## Sections (separate routes where it makes sense)

```
/             Home — full-bleed cinematic hero
/about        About / bio
/work         Projects grid
/case/$slug   Individual case study (dynamic route)
/experience   Timeline / experience
/contact      Contact form + links
```

A sticky top nav links between them. Home also stitches teaser blocks for each section so it feels like one cinematic flow.

## Structural & interaction patterns to replicate

1. **Full-viewport hero** with a looping background placeholder (video slot or animated gradient stand-in) and oversized display headline pinned bottom-left.
2. **Sticky minimal top nav** — logo left, links right; background goes from transparent → solid on scroll.
3. **Scroll-snap sections** — each major block fills the viewport and snaps as you scroll.
4. **Parallax / scroll-reveal** — headlines and images slide/fade in as they enter the viewport (Motion for React).
5. **Pinned section headings** — section title sticks while content scrolls past it.
6. **Horizontal scroll gallery** for the Projects strip on desktop.
7. **Marquee ticker** band between sections (your skills, tools, or tagline loop).
8. **Hover-reveal project cards** — image scales, overlay slides up with title + role.
9. **Case study page** with chaptered scroll: cover → problem → process → outcome, each chapter a full-bleed slide.
10. **Footer "big word"** — giant word/logo bleeding off the bottom edge.

## Design tokens (placeholder, easy to swap)

Neutral monochrome system so you can recolor in one place later:
- Background: near-black `oklch(0.12 0 0)`
- Foreground: off-white `oklch(0.96 0 0)`
- Accent: single bright placeholder `oklch(0.78 0.18 80)` — change this one token to rebrand
- Display font: a bold geometric placeholder (e.g. Anton or Bebas-style via Google Fonts)
- Body font: clean sans (Inter)

All colors live as semantic tokens in `src/styles.css` so swapping later is a one-file edit.

## Image placeholders

Every image slot uses a labeled gray box with intended aspect ratio + a short note ("Hero loop — replace with .mp4", "Project 01 cover — 16:9"). No generated stock photos until you give content.

## Tech notes

- TanStack Start file-based routes (one file per page above).
- Motion for React for scroll/reveal/parallax animations.
- CSS scroll-snap on the home page sections.
- Lenis-style smooth-scroll feel via CSS `scroll-behavior` + Motion easing (no extra lib needed).
- Fully responsive: horizontal gallery becomes vertical stack on mobile; hero text scales with `clamp()`.

## Out of scope for v1

- Real copy, photos, videos, logos, brand colors (you'll provide).
- CMS / backend (can add Lovable Cloud later if you want editable content).
- Audio.

When you approve, I'll build it end-to-end, then you drop in your content and I'll restyle the token palette to your brand.