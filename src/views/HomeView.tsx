import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { ROUTES, localePath, tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";
import { BIO_SHORT, PILLARS } from "@/content/bio";

export default function HomeView({ locale }: { locale: Locale }) {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              {tr(SITE.title, locale)}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] md:text-7xl">
              {SITE.formalName}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {tr(BIO_SHORT, locale)}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={localePath(ROUTES.contact[locale], locale)}
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {tr(DICT.heroCta, locale)}
              </Link>
              <Link
                href={localePath(ROUTES.about[locale], locale)}
                className="rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent"
              >
                {tr(DICT.heroCtaSecondary, locale)}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH — the three pillars */}
      <Section
        eyebrow={tr(DICT.approachTitle, locale)}
        title={tr(DICT.approachLead, locale)}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title.es} delay={i * 0.08}>
              <article className="h-full rounded-xl border border-border bg-surface p-7">
                <h3 className="font-serif text-xl">{tr(pillar.title, locale)}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{tr(pillar.body, locale)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/*
        Stats, testimonials, press and books stay OFF until the underlying
        facts are verified. See SITE.sections in src/lib/site.ts.
      */}

      {/* CONTACT CTA */}
      <Section className="border-t border-border/60">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-10 md:p-14">
            <h2 className="font-serif text-3xl md:text-4xl">{tr(DICT.contactTitle, locale)}</h2>
            <p className="mt-4 max-w-xl text-muted">{tr(DICT.contactLead, locale)}</p>
            <Link
              href={localePath(ROUTES.contact[locale], locale)}
              className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {tr(DICT.heroCta, locale)}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
