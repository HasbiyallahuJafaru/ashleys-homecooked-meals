# Design: The Dinner Invitation

The site is an orange-foil dinner invitation and menu card to Ashley's table. Recorded from the built
site (`src/app/globals.css`, `src/components/*`).

## Color

White ground, orange accents from the logo (pinned by the client). Light theme only.

| Token | Value | Use |
|---|---|---|
| `paper` | `#ffffff` | Page ground |
| `ivory` | `#fdf6ec` | Inset bands and panels (at-a-glance strip, Sunday band, sides panel, Find us) |
| `ink` | `#21170f` | Text |
| `ink-soft` | `#5e5145` | Secondary text (AA on white and ivory) |
| `accent-deep` | `#b34708` | Orange used as text and links (AA on white) |
| `accent` | `#f27a1a` | Hairlines, outline button border |
| `rule` | `#f3d2ae` | Quiet borders |
| `--foil` / `--foil-conic` | orange gradients (`#e8651a` to `#fbc956`) | Fills only: primary button, plate rims, rules, the scroll thread. Never on text. |

## Type

- **Display:** Bodoni Moda. Headings, menu item names and prices. Italic in `accent-deep` for emphasis
  and for menu group titles. Tracking no tighter than -0.02em.
- **Script:** Pinyon Script. Only for Ashley's own voice: the wordmark, "Let me feed you.",
  "Sundays only". Never for body or controls.
- **Body:** Hanken Grotesk, 17px, line-height 1.65, measure capped near 52ch.

## Shape

- Every photo is a circle with an orange foil rim (`Plate`). No rectangular images anywhere.
  A missing photo renders as an ivory circle with a label.
- Controls are pills. Panels and invitation frames are square-cornered, like card stock.
- The invitation frame is a double rule: a `rule` border with an `accent` border inset 6px.

## Components

- `Plate`: circular photo, foil rim rotates with scroll, orange-tinted drop shadow.
- `Button`: `foil` (primary, one per view, always "Text to order") and `line` (secondary).
- `FoilRule`: section divider that draws outward from a centre diamond.
- `Reveal`: rise, fade and unblur on entering the viewport, once.
- `GoldThread`: fixed orange line at the left edge on large screens, drawn by page scroll.
- Menu rows: name, dotted orange leader, price; detail below. No row borders.

## Motion

Motion (`motion/react`) only. Expo ease-out `cubic-bezier(0.16, 1, 0.3, 1)`.

- Hero: invitation card wipes open, text staggers in, plates spin and settle; on scroll the plates
  drift apart and the card lifts away.
- Menu: the sticky plate swaps with a turn as each menu group reaches mid-screen.
- Sunday band: the ivory ground opens from a circle as the section arrives.
- How to order: the orange line between the steps fills with scroll.
- All of it is disabled under `prefers-reduced-motion`.

## Layout

Max width 1320px; gutters 20 / 32 / 64px. Section rhythm `py-24` mobile, `py-36` desktop.
Split layouts collapse to one column below `lg`. Nav is 72px, one line.

## Voice

Plain and warm, in Ashley's words where they exist. Facts come from the business only. One label
per action: "Text to order" for ordering, "Ask about catering" for catering.
