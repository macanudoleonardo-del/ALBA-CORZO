import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { tr, type Locale } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";

export default function ContactView({ locale }: { locale: Locale }) {
  const socials = Object.entries(SITE.socials).filter(([, url]) => url);

  return (
    <Section
      eyebrow={tr(DICT.navContact, locale)}
      title={tr(DICT.contactTitle, locale)}
      lead={tr(DICT.contactLead, locale)}
    >
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm locale={locale} />

        <aside className="space-y-8 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wider text-accent">Email</p>
            <p className="mt-2 text-muted">{SITE.contact.email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-accent">WhatsApp</p>
            <p className="mt-2 text-muted">{SITE.contact.whatsapp}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-accent">
              {locale === "es" ? "Redes" : "Social"}
            </p>
            <div className="mt-2 flex flex-col gap-2">
              {socials.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="capitalize text-muted transition-colors hover:text-accent"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
