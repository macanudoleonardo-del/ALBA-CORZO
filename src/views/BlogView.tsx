import Section from "@/components/Section";
import { tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";

export default function BlogView({ locale }: { locale: Locale }) {
  return (
    <Section
      eyebrow={tr(DICT.navBlog, locale)}
      title={tr(DICT.blogTitle, locale)}
      lead={tr(DICT.blogLead, locale)}
    >
      <p className="text-muted">{tr(DICT.emptyBlog, locale)}</p>
    </Section>
  );
}
