"use client";

import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import { SITE } from "@/lib/site";
import { ROUTES, localePath, tr, type Locale, type RouteKey } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";

const NAV: { key: RouteKey; label: keyof typeof DICT }[] = [
  { key: "about", label: "navAbout" },
  { key: "talks", label: "navTalks" },
  { key: "press", label: "navPress" },
  { key: "challenge", label: "navChallenge" },
  { key: "blog", label: "navBlog" },
];

export default function Header({ locale, routeKey }: { locale: Locale; routeKey: RouteKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={localePath("/", locale)} className="font-serif text-lg tracking-wide">
          {SITE.formalName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={localePath(ROUTES[item.key][locale], locale)}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {tr(DICT[item.label], locale)}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} routeKey={routeKey} />
          <Link
            href={localePath(ROUTES.contact[locale], locale)}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {tr(DICT.navContact, locale)}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="md:hidden"
        >
          <span className="block h-px w-6 bg-foreground" />
          <span className="mt-1.5 block h-px w-6 bg-foreground" />
          <span className="mt-1.5 block h-px w-6 bg-foreground" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-6 py-4 md:hidden">
          {[...NAV, { key: "contact" as RouteKey, label: "navContact" as keyof typeof DICT }].map(
            (item) => (
              <Link
                key={item.key}
                href={localePath(ROUTES[item.key][locale], locale)}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted"
              >
                {tr(DICT[item.label], locale)}
              </Link>
            ),
          )}
          <div className="border-t border-border/60 pt-4">
            <LocaleSwitcher locale={locale} routeKey={routeKey} />
          </div>
        </nav>
      )}
    </header>
  );
}
