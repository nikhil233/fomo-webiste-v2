# Page Topology — FomoWidget (Nudgify Clone)

## Sections (top to bottom)

1. **Navbar** — Fixed/sticky, overlays content on scroll. Logo left, nav center, CTA right.
2. **Hero** — Full-width, dark gradient background. Centered headline + CTA + widget previews.
3. **TrustBar** — Logos strip + stats bar (brands, countries, rating).
4. **NudgeTypes** — 6 cards grid showing notification types.
5. **LiveCounter** — NEW: Feature highlight for live active users counter (key differentiator).
6. **HowItWorks** — 3-step process section.
7. **Features** — Icon grid of all features.
8. **Integrations** — Platform logo grid.
9. **Pricing** — 4-5 tier pricing cards.
10. **Testimonials** — Customer quotes.
11. **FinalCTA** — Bottom CTA with free trial offer.
12. **Footer** — Links grid.

## Interaction Models
- Navbar: scroll-driven (gains shadow/bg on scroll past ~50px)
- Hero: static with CSS animation on widget previews
- NudgeTypes: hover-driven (card lift effect)
- Pricing: click-driven (monthly/annual toggle)
- All sections: scroll-driven fade-in via IntersectionObserver
