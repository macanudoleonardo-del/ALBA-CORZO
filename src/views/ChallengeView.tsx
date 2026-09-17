import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ROUTES, localePath, tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";
import {
  AXES,
  CHALLENGE_DAYS,
  CHALLENGE_LEAD,
  CHALLENGE_SAFETY,
  CHALLENGE_TITLE,
  type ChallengeDay,
} from "@/content/challenge";

const DAY_LABEL: Record<Locale, string> = {
  es: "Día", en: "Day", pt: "Dia", fr: "Jour", it: "Giorno", zh: "第",
};

function dayHeading(day: number, locale: Locale) {
  return locale === "zh" ? `第 ${day} 天` : `${DAY_LABEL[locale]} ${day}`;
}

export default function ChallengeView({ locale }: { locale: Locale }) {
  return (
    <Section
      eyebrow={tr(CHALLENGE_TITLE, locale)}
      title={tr(CHALLENGE_TITLE, locale)}
      lead={tr(CHALLENGE_LEAD, locale)}
    >
      {/* Safety note sits above the content, not buried below it. */}
      <div className="mb-14 rounded-lg border border-accent/30 bg-accent/5 p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {tr(DICT.medicalNoteTitle, locale)}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {tr(CHALLENGE_SAFETY, locale)}
        </p>
      </div>

      <div className="space-y-6">
        {CHALLENGE_DAYS.map((day, i) => (
          <Reveal key={day.day} delay={i * 0.05}>
            <article className="rounded-xl border border-border bg-surface p-7 md:p-9">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {dayHeading(day.day, locale)}
                </span>
                <h3 className="font-serif text-2xl">{tr(day.theme, locale)}</h3>
              </div>

              <dl className="mt-7 grid gap-6 sm:grid-cols-2">
                {AXES.map((axis) => (
                  <div key={axis.key}>
                    <dt className="text-xs uppercase tracking-wider text-accent/80">
                      {tr(axis.label, locale)}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">
                      {tr(day[axis.key as keyof ChallengeDay] as never, locale)}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 rounded-2xl border border-border bg-surface p-10">
          <h2 className="font-serif text-2xl">{tr(DICT.contactTitle, locale)}</h2>
          <p className="mt-3 max-w-xl text-sm text-muted">{tr(DICT.contactLead, locale)}</p>
          <Link
            href={localePath(ROUTES.contact[locale], locale)}
            className="mt-7 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {tr(DICT.heroCta, locale)}
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
