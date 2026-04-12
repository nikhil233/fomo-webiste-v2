# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static + CSS float animations on widget previews

## Structure
Full-width dark hero. Center-aligned content stack:
1. Badge pill (sparkle + "NEW: Live Active Users Counter")
2. H1 headline
3. Subheadline
4. Stats row (3 inline stats)
5. Two CTA buttons
6. Widget preview cards floating below

## Background
- hero-gradient class: linear-gradient(135deg, #0F172A 0%, #1E1B4B 40%, #312E81 70%, #1E1B4B 100%)
- Subtle dot pattern overlay (dot-pattern class, opacity 0.08)
- Radial glow: radial-gradient circle at center, rgba(79,70,229,0.15) 0%, transparent 70%

## Badge
- Pill shape: border-radius 9999px
- Border: 1px solid rgba(79,70,229,0.4)
- Background: rgba(79,70,229,0.12)
- Text color: #A5B4FC
- Font-size: 14px, font-weight: 500
- Has sparkle ✨ emoji + text "Trusted by 3,100+ brands worldwide"

## H1
- Text: "Boost Sales with Real-Time\nSocial Proof & Live Activity"
- font-size: clamp(36px, 5vw, 64px)
- font-weight: 800
- color: white
- line-height: 1.1
- "Live Activity" uses gradient-text class (indigo→violet→purple)

## Subheadline
- Text: "Show live visitor counts, recent sales, and real-time activity to build instant trust and drive more conversions."
- font-size: 18px, color: rgba(255,255,255,0.7), max-width: 580px, line-height: 1.6

## Stats Row
Three inline stats (no separator lines, just gap):
1. "3,100+" — "Brands trust us"
2. "138" — "Countries"  
3. "4.9/5 ★" — "Average rating"
- stat number: font-size: 24px, font-weight: 700, color: white
- stat label: font-size: 13px, color: rgba(255,255,255,0.6)
- gap: 40px, display: flex

## CTA Buttons
1. Primary: "Start for Free →" — bg: #4F46E5, text: white, padding: 14px 28px, border-radius: 10px, font-weight: 600, font-size: 16px
   - hover: bg #4338CA, scale 1.02
2. Secondary: "Watch Demo" — bg: transparent, border: 1px solid rgba(255,255,255,0.25), text: white, same padding
   - hover: bg rgba(255,255,255,0.08)

## Widget Previews (floating cards)
Three notification widget cards displayed floating below CTAs, using animate-float classes.

**Card 1** (left, animate-float):
- Glass card style: bg rgba(255,255,255,0.95), border-radius: 12px, widget-shadow
- Width: ~260px
- Icon: 🔥 + green live dot
- Title: "Sarah K. just purchased"
- Subtitle: "Premium Plan • 2 min ago"
- Bottom: "✓ Verified purchase"

**Card 2** (center, larger, animate-float-delayed):
- Live Users counter card
- bg: white, border-radius: 14px, widget-shadow
- Header: green pulsing dot + "LIVE" badge
- Large number: "1,247" (font-size: 36px, font-weight: 800, indigo color)
- Label: "Active users right now"
- Footer: ↑12% vs last hour, in small green text

**Card 3** (right, animate-float-slow):
- Glass card similar to Card 1
- Icon: ⭐ rating stars
- Title: "New 5-star review"
- Subtitle: "\"Incredible tool!\" — Mike T."
- Bottom: "Trustpilot • just now"

## Container
- padding: 120px 24px 80px (top accounts for fixed nav)
- max-width: 1280px centered
- Cards section: relative, display flex, justify-content center, gap 20px, margin-top: 64px
