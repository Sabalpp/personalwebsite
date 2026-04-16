# UI/UX Agent Brief

Use this as the working brief for a separate Claude agent that will lead the UI/UX direction for this project.

## Mission

You are now the lead UI/UX agent for `personalwebsite`.

Your job is to take the current site and improve the visual direction, typography, layout polish, and first-screen impact without drifting away from the core taste reference.

This is not a generic portfolio site. It should feel memorable, minimal, and intentional.

## Repo Context

Project root:

- `/tmp/personalwebsite`

Core files:

- `app/page.tsx`
- `app/globals.css`
- `components/ui/hand-writing-text.tsx`
- `WORKLOG.md`

Tech stack:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn-compatible structure

## Current State

The current site has:

- a dark hero section
- a large `SABAL` wordmark
- an `ABOUT` section
- a `CONNECT` section
- footer credit to Abu

The site is deployed through Vercel and the repo is already pushed to GitHub.

## Important Context

This project went through several experiments:

- static HTML/CSS MVP
- avatar/character concept
- handwritten title effect
- Unicorn Studio hero background
- multiple hero font and spacing passes

Most of those were removed because they diluted the main look.

## Design Direction

The strongest reference so far is the minimal Abu-style hero:

- very large centered wordmark
- dark field
- minimal clutter
- strong typography
- not overly decorative

The user likes:

- bold
- loud
- memorable
- clean

The user does not like:

- extra clutter in the hero
- gimmicks that ruin the clean look
- letters touching too much
- overcomplicated UI ideas

## Typography Guidance

The main tension has been:

- thick and loud vs
- too thick and touching

The current/ongoing font problem:

- `Impact`-style stacks feel loud but can get too heavy
- condensed system stacks can feel better but vary by machine
- `Oswald` gave one of the cleaner outcomes

Your job is to solve this visually, not just technically.

## Rules

1. Do not turn this into a generic startup landing page.
2. Do not add random gradients, cards, or effects unless they clearly improve the composition.
3. Preserve the dark, minimal, high-contrast direction.
4. Prioritize the first screen.
5. If you change typography, do it deliberately and explain why.
6. Keep the hero visually dominant.
7. Avoid feature creep.

## Priority Order

1. Lock the hero typography and spacing
2. Improve the first-screen composition
3. Refine spacing and rhythm of `ABOUT` and `CONNECT`
4. Make the page feel more premium without adding clutter

## Specific Questions To Solve

1. What is the best display font choice for `SABAL`?
2. How large should the hero be so it feels commanding but not broken?
3. What tracking/line-height produces "loud but not touching"?
4. Should the nav stay visible in the first screen, or should it be visually quieter?
5. How should the lower sections inherit the same taste level as the hero?

## Constraints

- Do not reintroduce Unicorn Studio
- Do not rely on external branded embeds
- Do not add a backend
- Keep the site lightweight
- Keep the page structure simple

## Recommended Working Files

- `app/page.tsx`
- `app/globals.css`

## Read Before Making Changes

Read:

- `WORKLOG.md`
- `work/personal-website.md` in the notes vault if available outside the repo

## Copy-Paste Prompt For Another Claude Agent

```text
You are the lead UI/UX agent for this project.

Repo root: /tmp/personalwebsite

Your responsibility is to take over the visual direction of the site. Focus on hero typography, first-screen composition, spacing, and overall taste level.

Current stack:
- Next.js
- TypeScript
- Tailwind CSS

Key files:
- app/page.tsx
- app/globals.css
- WORKLOG.md

What the site should feel like:
- minimal
- bold
- memorable
- Abu-inspired in clarity, but not a copy

What to avoid:
- generic portfolio vibes
- clutter
- gimmicks
- letters touching too much
- overdesigned hero effects

Your first task:
1. inspect the current hero
2. propose the best typography direction for SABAL
3. implement a cleaner, stronger first screen
4. keep the rest of the page coherent with that choice

Work directly in the repo and explain your visual decisions in concrete terms.
```
