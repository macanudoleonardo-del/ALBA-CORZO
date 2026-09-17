import { SITE, SAME_AS } from "./site";
import { ROUTES, tr, type Locale, type RouteKey } from "./i18n";
import { DICT } from "@/content/dictionary";
import { TALKS_FAQ } from "@/content/faq";

const base = (locale: Locale) => (locale === "es" ? SITE.url : `${SITE.url}/${locale}`);

const NAV_LABELS = {
  home: DICT.navHome,
  about: DICT.navAbout,
  talks: DICT.navTalks,
  press: DICT.navPress,
  blog: DICT.navBlog,
  challenge: DICT.navChallenge,
  contact: DICT.navContact,
} as const;

/**
 * Person schema. `sameAs` only ever contains profiles we can prove.
 * Blueprint Phase 6 expands this (interactionStatistic, award, memberOf)
 * ONLY once those facts are verified.
 */
export function personSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.formalName,
    givenName: "Alba",
    familyName: "Corzo",
    url: base(locale),
    jobTitle: tr(SITE.title, locale),
    knowsLanguage: ["es", "en"],
    sameAs: SAME_AS,
    mainEntityOfPage: { "@id": `${SITE.url}/#website` },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.formalName,
    url: base(locale),
    inLanguage: locale,
    publisher: { "@id": `${SITE.url}/#person` },
  };
}

export function webPageSchema(locale: Locale, name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${base(locale)}${path}`,
    inLanguage: locale,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#person` },
  };
}

export function breadcrumbSchema(locale: Locale, trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${base(locale)}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function siteNavigationSchema(locale: Locale) {
  const keys: RouteKey[] = ["home", "about", "talks", "press", "blog", "contact"];
  const items = keys.map((key) => ({
    name: tr(NAV_LABELS[key], locale),
    path: ROUTES[key][locale],
  }));

  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: items.map((i) => i.name),
    url: items.map((i) => `${base(locale)}${i.path === "/" ? "" : i.path}`),
  };
}

/** Renders one or more JSON-LD blocks. */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

/**
 * Assembles the full JSON-LD set for a page: the site-wide graph plus
 * whatever structured data that particular route earns (e.g. FAQPage on
 * the talks page, which is what wins the FAQ rich result).
 */
export function pageSchemas({
  locale,
  key,
  title,
  path,
  description,
  crumbs,
}: {
  locale: Locale;
  key: RouteKey;
  title: string;
  path: string;
  description: string;
  crumbs: { name: string; path: string }[];
}) {
  const graph: object[] = [
    personSchema(locale),
    websiteSchema(locale),
    siteNavigationSchema(locale),
    webPageSchema(locale, title, path, description),
    breadcrumbSchema(locale, crumbs),
  ];

  if (key === "talks") {
    graph.push(
      faqSchema(TALKS_FAQ.map((item) => ({ q: tr(item.q, locale), a: tr(item.a, locale) }))),
    );
  }

  return graph;
}
