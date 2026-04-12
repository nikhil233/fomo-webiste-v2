# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** scroll-driven (gains white bg + shadow after 50px scroll)

## Structure
Fixed top navbar, full-width. Contains:
- Left: Logo (lightning bolt icon + "FomoWidget" text)
- Center: Nav links (Features, Pricing, Integrations, Results)
- Right: "Login" text link + "Start Free Trial" button

## Styles

### Outer wrapper
- position: fixed, top: 0, left: 0, right: 0, z-index: 50
- State A (top): background: transparent
- State B (scrolled 50px+): background: white, box-shadow: 0 1px 0 rgba(0,0,0,0.08)
- Transition: background 0.3s ease, box-shadow 0.3s ease

### Inner container
- max-width: 1280px, margin: 0 auto
- padding: 0 24px
- display: flex, align-items: center, justify-content: space-between
- height: 68px

### Logo
- flex items, gap: 8px
- Icon: purple/indigo lightning bolt SVG (#4F46E5), 28x28
- Text: "FomoWidget", font-weight: 700, font-size: 20px
- Text color: white when transparent, #0F172A when scrolled

### Nav links (desktop, hidden on mobile)
- display: flex, gap: 32px
- font-size: 15px, font-weight: 500
- color: rgba(255,255,255,0.85) when at top, #374151 when scrolled
- hover: color white / #111827
- transition: color 0.2s

### Right actions
- "Login": font-size: 15px, font-weight: 500, text link style
- "Start Free Trial": primary button, bg: #4F46E5, text: white, padding: 10px 20px, border-radius: 8px, font-weight: 600
- button hover: bg #4338CA

### Mobile: hamburger menu icon, hidden nav links

## Responsive
- Desktop (1024px+): full nav visible
- Mobile: hamburger toggle, nav slides in from top
