# CLAUDE.md — alba-corzo

## ⚠️ This project is independent — never mix it with another

The owner runs several unrelated businesses. **This repo is only Dra. Alba
Corzo / albacorzo.com.**

- Nothing from `drleonardovergara` (Dr. Leonardo Vergara / Amor Consciente /
  saludmetabolico.com) belongs here, and nothing from here belongs there — no
  copy, no assets, no branch names, no cross-links. Same for Glass Experts
  Atlanta and Emma's Play World.
- Work in one repo per session.
- Tooling may travel between repos; **brand and content never do.**

## ⚠️ Truthfulness comes first — she is a real physician

A physician's authority is trust. **Never fabricate** credentials, stats,
follower counts, awards, media coverage, patient outcomes or testimonials.

- Unknown facts stay as bracketed placeholders `[ ]`.
- Unverified sections stay hidden behind `SITE.sections` flags in
  `src/lib/site.ts`.
- **Read `VERIFY.md` before writing any user-facing copy.**
- Health copy stays non-curative and evidence-aligned. Every page carries the
  "general health education, not medical advice" note.

## What this is

The digital-authority site for **Dra. Alba Corzo**, built to the *Digital
Authority Blueprint* (Spencer Hoffmann, v1.0). Live domain:
**albacorzo.com**. Phase 1 (premium site) is done; Phases 2–7 are pending.

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion ·
Supabase (leads) · Resend (Phase 2) · Vercel.

Six locales: **es** (root) · **en** · **pt** · **fr** · **it** · **zh**.
`tr(text, locale)` resolves localized strings, falling back es → en.

## Key files

- `src/lib/site.ts` — single source of truth (name, title, contact, socials, section flags)
- `src/lib/i18n.ts` — locales, `tr()`, per-locale route slugs
- `src/lib/seo.ts` — metadata, canonicals, hreflang for all six locales
- `src/lib/schema.tsx` — Schema.org JSON-LD (`pageSchemas()` assembles per route)
- `src/content/` — `dictionary.ts`, `bio.ts`, `faq.ts`, `pages.ts` (all six languages)
- `src/views/` — one view per page, shared across every locale
- `src/app/` — 36 generated routes (6 pages × 6 locales)
- `supabase/schema.sql` — the `leads` table

## Commands

```bash
npm run dev            # local dev
npm run build          # production build — run before committing
PORT=3200 npm start    # serve the production build
npx eslint src         # lint
npx tsc --noEmit       # typecheck
```

## Conventions

All user-facing copy lives in `src/content/*` as `LocalizedText` — **add all
six languages** when editing. Adding a page means adding it to `ROUTES`
(`src/lib/i18n.ts`) and `PAGE_SEO` (`src/content/pages.ts`), then creating the
route in all six locale trees.
