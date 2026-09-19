import Shell from "@/components/Shell";
import TalksView from "@/views/TalksView";
import { buildMetadata } from "@/lib/seo";
import { PAGE_SEO } from "@/content/pages";
import { tr } from "@/lib/i18n";
import { JsonLd, pageSchemas } from "@/lib/schema";

const LOCALE = "es" as const;
const KEY = "talks" as const;
const PATH = "/conferencias";

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
          crumbs: [{"name": "Inicio", "path": "/"}, {"name": "Conferencias", "path": "/conferencias"}],
        })}
      />
      <TalksView locale={LOCALE} />
    </Shell>
  );
}
