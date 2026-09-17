import Shell from "@/components/Shell";
import ContactView from "@/views/ContactView";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO } from "@/content/pages";
import { tr } from "@/lib/i18n";
import { JsonLd, pageSchemas } from "@/lib/schema";

const LOCALE = "es" as const;
const KEY = "contact" as const;
const PATH = "/contacto";

const TITLE = tr(PAGE_SEO[KEY].title, LOCALE);
const DESCRIPTION = tr(PAGE_SEO[KEY].description, LOCALE);

export const metadata = buildMetadata({
  key: KEY,
  title: TITLE,
  description: DESCRIPTION,
  locale: LOCALE,
});

export default function Page() {
  return (
    <Shell locale={LOCALE} routeKey={KEY}>
      <JsonLd
        data={pageSchemas({
          locale: LOCALE,
          key: KEY,
          title: TITLE,
          path: PATH,
          description: DESCRIPTION,
          crumbs: [{"name": "Inicio", "path": "/"}, {"name": "Contacto", "path": "/contacto"}],
        })}
      />
      <ContactView locale={LOCALE} />
    </Shell>
  );
}
