import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";
import { TALKS_FAQ } from "@/content/faq";

export default function TalksView({ locale }: { locale: Locale }) {
  return (
    <Section eyebrow={tr(DICT.navTalks, locale)} title={tr(DICT.talksTitle, locale)}>
      {!SITE.sections.talks && (
        <p className="mb-14 text-muted">{tr(DICT.comingSoon, locale)}</p>
      )}

      <div className="max-w-3xl divide-y divide-border border-y border-border">
        {TALKS_FAQ.map((item, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="py-7">
              <h3 className="font-serif text-lg">{tr(item.q, locale)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tr(item.a, locale)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
