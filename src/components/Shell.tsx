import Header from "./Header";
import Footer from "./Footer";
import type { Locale, RouteKey } from "@/lib/i18n";

export default function Shell({
  locale,
  routeKey,
  children,
}: {
  locale: Locale;
  routeKey: RouteKey;
  children: React.ReactNode;
}) {
  // <html lang> is set per locale by that locale's root layout, so there is
  // nothing to correct here any more.
  return (
    <>
      <Header locale={locale} routeKey={routeKey} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
