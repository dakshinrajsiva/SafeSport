---
name: SafeSport India frontend patterns
description: Key architectural patterns, tech stack, and design system conventions for the SafeSport India Next.js website
type: project
---

SafeSport India is a Next.js 14.2.3 website for India's first dedicated safeguarding enterprise.

**Why:** Understanding these patterns avoids re-discovery in future conversations.

**How to apply:** Reference these conventions when making changes to any component.

## Tech Stack
- Next.js 14 App Router, React 18, Tailwind CSS
- GSAP + ScrollTrigger for scroll-driven animations (horizontal scroll, pinning, line drawing)
- Framer Motion for component-level animations (whileInView, AnimatePresence for modals/accordions)
- Lenis for smooth scrolling (via SmoothScroll wrapper in layout)
- Fonts: Inter (sans default), Montserrat (body/labels), League Gothic (display/headings)
- Brand colors: #004AAD (primary blue), #800020 (maroon accent), #F5F7FA (light bg)

## Architecture Patterns
- Footer uses fixed positioning with curtain-reveal effect (content wrapper has `mb-[100vh]`)
- Every page wraps content in `relative z-10 bg-white shadow-[...] mb-[100vh]` div above footer
- Skip-to-content link exists in layout, targets `#main-content`
- `prefers-reduced-motion` is respected in globals.css and individual GSAP components
- Horizontal scroll sections (WorkWith, Services) use GSAP ScrollTrigger pin + scrub

## Key Files
- Layout: `src/app/layout.tsx` (fonts, metadata, JSON-LD, Navbar, SmoothScroll, BackToTop)
- Global CSS: `src/app/globals.css` (Lenis styles, skip-to-content, focus-visible, reduced motion)
- Tailwind config: `tailwind.config.js` (brand-blue, maroon, league, montserrat font families)
