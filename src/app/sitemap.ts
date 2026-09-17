import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { LOCALES, ROUTES, localePath, type RouteKey } from "@/lib/i18n";

/** Every URL in every locale, each carrying its full hreflang alternate set. */
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(ROUTES) as RouteKey[];
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    keys.map((key) => ({
      url: `${SITE.url}${localePath(ROUTES[key][locale], locale)}`,
      lastModified,
      changeFrequency: (key === "blog" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: key === "home" ? 1 : key === "about" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${SITE.url}${localePath(ROUTES[key][l], l)}`]),
        ),
      },
    })),
  );
}
