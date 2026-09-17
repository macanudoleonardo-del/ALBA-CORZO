"use client";

import Link from "next/link";
import { useState } from "react";
import { LOCALES, LOCALE_NAMES, ROUTES, localePath, type Locale, type RouteKey } from "@/lib/i18n";

/** Switches language while staying on the equivalent page. */
export default function LocaleSwitcher({
  locale,
  routeKey,
}: {
  locale: Locale;
  routeKey: RouteKey;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        {LOCALE_NAMES[locale]}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-8 z-50 min-w-[9rem] overflow-hidden rounded-lg border border-border bg-surface-2 py-1 shadow-xl"
        >
          {LOCALES.filter((l) => l !== locale).map((l) => (
            <li key={l}>
              <Link
                href={localePath(ROUTES[routeKey][l], l)}
                hrefLang={l}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {LOCALE_NAMES[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
