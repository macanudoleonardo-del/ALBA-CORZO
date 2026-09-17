# VERIFY — facts that must be confirmed before launch

Alba Corzo is a real physician. Nothing on this site may claim anything she
has not confirmed. Every item below is currently a **placeholder** in the code
and must be replaced with her own approved wording, or deleted.

## Blocking (site cannot launch with these unresolved)

| Item | Where | Status |
|---|---|---|
| Exact credential wording (degree, university, year) | `src/lib/site.ts` → `credential` | ❌ placeholder |
| Short bio (2 sentences) | `src/content/bio.ts` → `BIO_SHORT` | ❌ placeholder |
| Long bio (3 paragraphs) | `src/content/bio.ts` → `BIO_LONG` | ❌ placeholder |
| Positioning tagline | `src/lib/site.ts` → `tagline` | ❌ placeholder |
| Public contact email | `src/lib/site.ts` → `contact.email` | ❌ placeholder |
| Assistant email + WhatsApp (Phase 2) | `src/lib/site.ts` → `contact` | ❌ placeholder |
| City / country | `src/lib/site.ts` → `location` | ❌ placeholder |
| Professional photos | `public/` | ❌ not in repo |
| OG share image (1200×630) | `public/og-default.png` | ❌ not in repo |

## Confirmed (sourced from her own public profiles)

| Item | Source |
|---|---|
| Name: Alba Corzo | her own profiles |
| "Médica Health Coach" | her public Facebook page |
| Instagram `@albacorzo.md` | live profile |
| Facebook `/Dra.AlbaCorzo` | live profile |
| Domain `albacorzo.com` | owner-supplied |

## Unverified leads — do NOT publish until she confirms

- Bucaramanga, Santander (Colombia) and a Miami Beach FL listing both appear
  in third-party directories. Unconfirmed.
- "Médica Cirujana" appears in a third-party directory. Confirm her exact title.

## Positioning flag

Her current public messaging includes the claim that we can *"reverse any
disease without medications or invasive treatments."*

That sentence is **deliberately absent** from this site. Reasons:

1. Google classifies health as YMYL and demotes unsupported curative claims.
2. The AI engines targeted in Phase 6 avoid citing sources that make them.
3. For a licensed physician it carries real regulatory exposure.

The copy here leads with her clinical credential and a careful,
non-curative framing instead. Changing this is her call — but it should be a
deliberate decision, not an accident.

## Sections switched off until real content exists

`SITE.sections` in `src/lib/site.ts` gates these. Each stays `false` until the
underlying facts are real and verified:

- `stats` — needs countable, checkable numbers
- `testimonials` — needs consented, attributable testimonials
- `press` — needs real published article URLs
- `books` — needs real publications
- `talks` — needs real past or upcoming events
