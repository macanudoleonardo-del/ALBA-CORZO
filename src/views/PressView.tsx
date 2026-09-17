import Section from "@/components/Section";
import { SITE } from "@/lib/site";
import { tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";

export default function PressView({ locale }: { locale: Locale }) {
  return (
    <Section eyebrow={tr(DICT.navPress, locale)} title={tr(DICT.pressTitle, locale)}>
      {/* Only real, published coverage goes here — never placeholder logos. */}
      {!SITE.sections.press && <p className="text-muted">{tr(DICT.comingSoon, locale)}</p>}
    </Section>
  );
}
