# albacorzo.com

Digital-authority site for **Dra. Alba Corzo**, built to the *Digital Authority
Blueprint* (Spencer Hoffmann v1.0).

Next.js 15 · TypeScript · Tailwind CSS 4 · Framer Motion · Supabase · Vercel.

## Status

**Phase 1 (Premium website) — complete.**

- 36 routes: 6 pages × 6 locales (es · en · pt · fr · it · zh)
- Spanish at the root, the other five path-prefixed, natural slugs per language
- Schema.org JSON-LD: Person, WebSite, WebPage, BreadcrumbList,
  SiteNavigationElement, FAQPage
- Unique meta title + description per page *per language*
- hreflang across all six locales plus `x-default`
- Open Graph + Twitter Cards
- `robots.txt` explicitly allowing 15 AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, …)
- Dynamic `sitemap.xml` with per-URL language alternates
- First-visit language detection that never redirects crawlers or deep links
- Contact form → Supabase `leads` table
- Medical disclaimer on every page

Phases 2–7 (Resend + WhatsApp, IndexNow, authority platforms, Digital PR,
AI optimization, maintenance) are not started.

## ⚠️ Before launch

**Read `VERIFY.md`.** Every fact about Alba Corzo is currently a placeholder.
Nothing is invented — and nothing should be published until she confirms it.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase credentials
npm run dev
```

Create the leads table by running `supabase/schema.sql` in the Supabase SQL
editor.

## Deploy

Vercel, auto-deploying from this repository. Set `SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` as environment variables (the service role key is
server-side only — never prefix it with `NEXT_PUBLIC_`).
