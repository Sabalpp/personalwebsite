# Personal Website Worklog

Updated: 2026-04-15

## Summary

This repo started as a static HTML/CSS MVP modeled after `abu.fyi`, then was converted into a minimal Next.js + TypeScript + Tailwind setup so React components could be integrated cleanly.

The main design work in this session focused on the hero wordmark for `SABAL`, especially the font, thickness, spacing, and overall visual feel.

## Major Changes Made

### 1. Initial static MVP

Started with a plain static site:

- giant `SABAL` hero
- dark background
- `ABOUT` and `CONNECT` sections
- footer credit to Abu

Files at that stage:

- `index.html`
- `styles.css`
- `script.js`

### 2. Removed extra hero clutter

Cut items that made the first screen weaker:

- removed the center avatar/character
- removed the top hero eyebrow text
- removed the extra middle section
- simplified the page to:
  - hero
  - about
  - connect
  - footer

### 3. Converted the repo to React/Next

The repo did not support the requested component integration, so it was converted to a minimal app structure with:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn-compatible structure

Files added during conversion:

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/ui/hand-writing-text.tsx`
- `components/ui/demo.tsx`
- `components.json`
- `lib/utils.ts`
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.mjs`

### 4. Added then removed the handwritten hero effect

The `HandWrittenTitle` component was added under:

- `components/ui/hand-writing-text.tsx`

It was tested in the `SABAL` hero, but it changed the look too much and was reverted from active use.

Important:

- the component file still exists in the repo
- it is not currently used in the hero

### 5. Restored the minimal text-only hero

The hero was pushed back toward the cleaner reference:

- black/dark field
- giant `SABAL`
- no avatar
- no handwritten outline
- no helper text in the hero when testing the pure version

## Hero Typography Experiments

Most of the iteration was around the `SABAL` wordmark.

### Fonts tested

1. `Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif`
   - loud
   - thick
   - aggressive
   - tends to make letters feel close/touching

2. `"Arial Narrow", "Helvetica Neue Condensed", "Roboto Condensed", Haettenschweiler, sans-serif`
   - thinner
   - taller
   - cleaner
   - less aggressive

3. `"Oswald", Impact, sans-serif`
   - best middle ground
   - cleaner than Impact
   - still strong
   - more predictable than random condensed system fallbacks

### Hero class combinations tested

These combinations were tried in `app/page.tsx`:

1. Heavy/loud version

```tsx
font-hero-loud
text-[clamp(8rem,35vw,28rem)]
leading-[0.88]
tracking-[-0.05em]
```

Result:

- strong visual impact
- too bold
- letters felt too close

2. Thinner/condensed version

```tsx
font-display
text-[clamp(8rem,34vw,28rem)]
leading-[0.9]
tracking-[-0.045em]
```

Result:

- cleaner
- more like the preferred earlier screenshot
- less loud than the heavy version

3. Taller full-screen version

```tsx
font-hero
scale-y-[1.12]
text-[clamp(9rem,39vw,32rem)]
tracking-[-0.035em]
```

Result:

- taller
- filled the screen more
- drifted away from the preferred reference

### Container widths tested

These were also changed while trying to stop letters from touching:

- `max-w-[1520px]`
- `max-w-[1640px]`
- `max-w-[1720px]`

Wider containers helped reduce crowding, but the biggest driver of the problem was still the font weight and tracking.

## Font Problem Explained

The mismatch was **not** caused by HTML vs React.

The differences came from:

1. font family
2. font availability on the machine
3. tracking
4. font weight
5. container width

### Why the hero kept changing

- `Impact` made the wordmark louder, but too thick
- condensed system stacks made it thinner, but could vary depending on installed fonts
- `Oswald` gave a more stable result when loaded properly
- tight negative tracking on a bold font made letters feel like they were touching

### Why the old static version looked different

The older static version used:

- `Plus Jakarta Sans` for body
- `Oswald` for the hero
- a specific `hero-word` class with:

```css
.hero-word {
  color: var(--ink);
  font-family: Oswald, Impact, sans-serif;
  width: 100%;
  text-align: center;
  font-size: clamp(8rem, 34vw, 28rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 0.9;
  text-transform: uppercase;
}
```

That combination produced the cleaner version the user liked more.

## Current State

The repo currently contains:

- Next.js app structure
- Tailwind setup
- TypeScript setup
- shadcn-compatible folders
- `HandWrittenTitle` component saved for later
- `ABOUT` and `CONNECT` sections
- hero typography still under active tuning

## Recommended Hero Direction

Best middle-ground direction based on the experiments:

- use `Oswald` for the hero
- keep the hero very large
- avoid the thick `Impact` stack for the main wordmark
- use slightly negative tracking, but not so much that letters collide

Suggested target:

```css
font-family: Oswald, Impact, sans-serif;
font-size: clamp(8rem, 34vw, 28rem);
font-weight: 700;
letter-spacing: -0.045em;
line-height: 0.9;
```

This keeps the hero:

- loud enough
- clean
- tall
- not touching

## Files Most Relevant Going Forward

- `app/page.tsx`
- `app/globals.css`
- `components/ui/hand-writing-text.tsx`

