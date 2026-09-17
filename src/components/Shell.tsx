import Header from "./Header";
import Footer from "./Footer";
import { DEFAULT_LOCALE, type Locale, type RouteKey } from "@/lib/i18n";

export default function Shell({
  locale,
  routeKey,
  children,
}: {
  locale: Locale;
  routeKey: RouteKey;
  children: React.ReactNode;
}) {
  // The root <html> is Spanish; every other tree declares its own language here.
  const lang = locale === DEFAULT_LOCALE ? undefined : locale;

  return (
    <div lang={lang}>
      <Header locale={locale} routeKey={routeKey} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
