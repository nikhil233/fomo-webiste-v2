# Behaviors Reference

## Navbar
- Scroll trigger: 50px
- State A: transparent bg, no shadow
- State B: white bg, box-shadow 0 1px 0 rgba(0,0,0,0.08)
- Transition: background 0.3s ease, box-shadow 0.3s ease

## Sections Fade In
- IntersectionObserver threshold: 0.15
- Animation: opacity 0→1, translateY 24px→0
- Duration: 0.6s ease-out
- Stagger: 0.1s per child

## Widget Preview Cards (Hero)
- Float animation: translateY oscillates ±8px, 3s ease-in-out infinite
- Stagger float delays per card

## Pricing Toggle
- Monthly/Annual pill selector
- Annual shows ~20% discount badges
- Transition: opacity fade on price numbers

## Card Hover
- Transform: translateY(-4px)
- Box-shadow enhancement
- Transition: 0.2s ease

## Pulse/Live Indicator
- Green dot pulsing animation
- keyframes: scale 1→1.4→1, opacity 1→0.5→1
- Duration: 1.5s infinite
