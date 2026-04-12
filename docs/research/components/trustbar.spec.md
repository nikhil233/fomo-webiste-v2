# TrustBar Specification

## Overview
- **Target file:** `src/components/TrustBar.tsx`
- **Interaction model:** static

## Structure
Light gray section just below hero. Two rows:
1. "Trusted by brands like" + company name pills
2. Stats bar with 4 numbers

## Background: #F8FAFC (slate-50), border-top/bottom: 1px solid #E2E8F0
## Padding: 40px 24px

## Company Names (text-based, no logos needed)
"Tropical Fruit Box", "All-Star Elite", "Lundberg Family Farms", "Sennheiser", "SKYN", "Shopify Brands"
- Display as gray pill badges: bg #F1F5F9, color #64748B, padding 6px 16px, border-radius 9999px, font-size 14px

## Stats Row
Four stats separated by vertical dividers:
1. "3,100+" / "Brands using FomoWidget"
2. "138" / "Countries reached"
3. "32" / "Languages supported"
4. "4.9/5 ★" / "Customer rating"

- number: font-size 28px, font-weight 700, color #0F172A
- label: font-size 13px, color #64748B
- Divider: 1px solid #E2E8F0, height 40px
