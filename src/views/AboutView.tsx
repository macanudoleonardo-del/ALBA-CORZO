import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";
import { BIO_LONG } from "@/content/bio";

export default function AboutView({ locale }: { locale: Locale }) {
  return (
    <Section
      eyebrow={tr(SITE.title, locale)}
      title={tr(DICT.aboutTitle, locale)}
      lead={tr(SITE.credential, locale)}
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr]">
        <div className="max-w-2xl space-y-6">
          {BIO_LONG.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-lg leading-relaxed text-muted">{tr(paragraph, locale)}</p>
            </Reveal>
          ))}
        </div>

        {SITE.sections.portraits && (
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src={SITE.portraits.about}
                alt={SITE.formalName}
                width={900}
                height={1200}
                sizes="(max-width: 1024px) 80vw, 340px"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
