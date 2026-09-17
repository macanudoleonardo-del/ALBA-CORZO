import type { Metadata } from "next";
import { SITE } from "./site";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  ROUTES,
  localePath,
  type Locale,
  type RouteKey,
} from "./i18n";

type Args = {
  key: RouteKey;
  title: string;
  description: string;
  locale: Locale;
  image?: string;
};

/**
 * Page metadata with a unique title/description, canonical URL,
 * hreflang alternates for all six locales, Open Graph and Twitter Cards.
 */
export function buildMetadata({
  key,
  title,
  description,
  locale,
  image = "/og-default.png",
}: Args): Metadata {
  const canonical = `${SITE.url}${localePath(ROUTES[key][locale], locale)}`;

  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[LOCALE_TAGS[l]] = `${SITE.url}${localePath(ROUTES[key][l], l)}`;
  }
  languages["x-default"] =
    `${SITE.url}${localePath(ROUTES[key][DEFAULT_LOCALE], DEFAULT_LOCALE)}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: SITE.formalName,
      title,
      description,
      url: canonical,
      locale: LOCALE_TAGS[locale].replace("-", "_"),
      images: [{ url: image, width: 1200, height: 630, alt: SITE.formalName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}
