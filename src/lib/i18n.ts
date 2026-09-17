export const LOCALES = ["es", "en", "pt", "fr", "it", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

/** Spanish is the root locale; the other five are path-prefixed. */
export const DEFAULT_LOCALE: Locale = "es";

export type LocalizedText = Record<Locale, string>;

export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français",
  it: "Italiano",
  zh: "中文",
};

/** BCP-47 tags for hreflang and Open Graph. */
export const LOCALE_TAGS: Record<Locale, string> = {
  es: "es-ES",
  en: "en-US",
  pt: "pt-BR",
  fr: "fr-FR",
  it: "it-IT",
  zh: "zh-CN",
};

/** Resolve a localized string, falling back to Spanish then English. */
export function tr(text: LocalizedText | string, locale: Locale): string {
  if (typeof text === "string") return text;
  return text[locale] || text.es || text.en || "";
}

export function localePath(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return locale === DEFAULT_LOCALE ? clean || "/" : `/${locale}${clean}`;
}

/** Canonical slugs per locale, so every URL reads naturally in its language. */
export const ROUTES = {
  home: { es: "/", en: "/", pt: "/", fr: "/", it: "/", zh: "/" },
  about: {
    es: "/sobre-mi", en: "/about", pt: "/sobre-mim",
    fr: "/a-propos", it: "/chi-sono", zh: "/guanyu",
  },
  talks: {
    es: "/conferencias", en: "/talks", pt: "/palestras",
    fr: "/conferences", it: "/conferenze", zh: "/yanjiang",
  },
  press: {
    es: "/prensa", en: "/press", pt: "/imprensa",
    fr: "/presse", it: "/stampa", zh: "/meiti",
  },
  blog: { es: "/blog", en: "/blog", pt: "/blog", fr: "/blog", it: "/blog", zh: "/blog" },
  contact: {
    es: "/contacto", en: "/contact", pt: "/contato",
    fr: "/contact", it: "/contatti", zh: "/lianxi",
  },
  challenge: {
    es: "/reto", en: "/challenge", pt: "/desafio",
    fr: "/defi", it: "/sfida", zh: "/tiaozhan",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
