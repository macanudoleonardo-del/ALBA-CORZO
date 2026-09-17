import Link from "next/link";
import { SITE } from "@/lib/site";
import { ROUTES, localePath, tr, type Locale, type RouteKey } from "@/lib/i18n";
import { DICT } from "@/content/dictionary";

const NAV: { key: RouteKey; label: keyof typeof DICT }[] = [
  { key: "about", label: "navAbout" },
  { key: "talks", label: "navTalks" },
  { key: "press", label: "navPress" },
  { key: "blog", label: "navBlog" },
  { key: "challenge", label: "navChallenge" },
  { key: "contact", label: "navContact" },
];

export default function Footer({ locale }: { locale: Locale }) {
  const socials = Object.entries(SITE.socials).filter(([, url]) => url);

  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg">{SITE.formalName}</p>
            <p className="mt-2 text-sm text-muted">{tr(SITE.title, locale)}</p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            {NAV.map(({ key, label }) => (
              <Link
                key={key}
                href={localePath(ROUTES[key][locale], locale)}
                className="text-muted transition-colors hover:text-foreground"
              >
                {tr(DICT[label], locale)}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            {socials.map(([name, url]) => (
              <a
                key={name}
                href={url}
                rel="me noopener noreferrer"
                target="_blank"
                className="capitalize text-muted transition-colors hover:text-accent"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Medical disclaimer — required on every page of a physician's site. */}
        <div className="mt-14 rounded-lg border border-border bg-surface-2 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            {tr(DICT.medicalNoteTitle, locale)}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{tr(DICT.medicalNote, locale)}</p>
        </div>

        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} {SITE.formalName}. {tr(DICT.rights, locale)}
        </p>
      </div>
    </footer>
  );
}
