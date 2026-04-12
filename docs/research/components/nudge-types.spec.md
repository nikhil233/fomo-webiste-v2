# NudgeTypesSection Specification

## Overview
- **Target file:** `src/components/NudgeTypesSection.tsx`
- **Interaction model:** hover-driven card lift

## Structure
White section, centered content:
- Section label: "NOTIFICATION TYPES"
- H2: "Every Nudge You Need to Convert"
- Subtext
- 6-card grid (2 cols mobile, 3 cols tablet, 3 cols desktop)

## Section styles
- background: white
- padding: 96px 24px
- max-width: 1280px centered

## Section label
- font-size: 13px, font-weight: 600, letter-spacing: 0.1em, text-transform: uppercase
- color: #4F46E5

## H2
- font-size: clamp(28px, 3.5vw, 44px), font-weight: 800, color: #0F172A
- "Convert" uses gradient-text class

## Cards Grid
- grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- gap: 24px

## Each Card
- background: white
- border: 1px solid #E2E8F0
- border-radius: 16px
- padding: 32px 28px
- hover: transform translateY(-4px), box-shadow 0 12px 40px rgba(0,0,0,0.1), border-color #C7D2FE
- transition: all 0.2s ease

### Card Icon wrapper
- width: 52px, height: 52px, border-radius: 12px
- bg: specific color per card (see below)
- display flex, align items center, justify-content center

### Card Title
- font-size: 18px, font-weight: 700, color: #0F172A, margin-top: 20px

### Card Description
- font-size: 14px, color: #64748B, line-height: 1.6, margin-top: 8px

### Card Footer link
- font-size: 14px, font-weight: 600, color: #4F46E5
- "Learn more →"
- hover: color #4338CA

## 6 Cards Content

1. **Social Proof**
   - Icon bg: #EEF2FF (indigo-50), Icon: 👥 (or SVG users icon), icon color: #4F46E5
   - Title: "Social Proof"
   - Desc: "Show live visitor counts, recent purchases, and sign-ups to build trust instantly."

2. **FOMO Triggers**
   - Icon bg: #FEF3C7, Icon: 🔥, icon color: #D97706
   - Title: "FOMO Triggers"
   - Desc: "Low stock alerts, selling fast indicators, and scarcity nudges that drive urgency."

3. **Reviews & Ratings**
   - Icon bg: #FFF7ED, Icon: ⭐, icon color: #EA580C
   - Title: "Reviews & Ratings"
   - Desc: "Display verified reviews from Trustpilot, Google, and more to build credibility."

4. **Urgency Timers**
   - Icon bg: #FEF2F2, Icon: ⏱️, icon color: #DC2626
   - Title: "Urgency Timers"
   - Desc: "Countdown timers and time-limited offer notifications that push visitors to act now."

5. **Friction Reducers**
   - Icon bg: #F0FDF4, Icon: 🚚, icon color: #16A34A
   - Title: "Friction Reducers"
   - Desc: "Free delivery thresholds, discount unlocks, and cart incentives that remove hesitation."

6. **Live User Counter** ← KEY DIFFERENTIATOR
   - Icon bg: #D1FAE5, Icon: pulse dot SVG (live indicator), icon color: #059669
   - Title: "Live Active Users"
   - Desc: "Real-time counter showing how many visitors are on your site right now — the ultimate social proof."
   - Badge: small "NEW" badge in green pill next to title
