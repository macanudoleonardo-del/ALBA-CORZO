import Shell from "@/components/Shell";
import PressView from "@/views/PressView";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO } from "@/content/pages";
import { tr } from "@/lib/i18n";
import { JsonLd, pageSchemas } from "@/lib/schema";

const LOCALE = "fr" as const;
const KEY = "press" as const;
const PATH = "/presse";

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
          crumbs: [{"name": "Accueil", "path": "/"}, {"name": "Presse", "path": "/presse"}],
        })}
      />
      <PressView locale={LOCALE} />
    </Shell>
  );
}
