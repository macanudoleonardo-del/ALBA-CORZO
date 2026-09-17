import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

const LOCALE_COOKIE = "locale";

/**
 * First-visit language detection. Only redirects the bare root "/" — deep
 * links are always honoured as typed, and a visitor's explicit choice
 * (stored in a cookie) always wins over the browser header.
 *
 * Crawlers are deliberately left alone so each locale indexes on its own URL.
 */
function detect(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && (LOCALES as readonly string[]).includes(cookie)) return cookie as Locale;

  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const tag = part.split(";")[0]?.trim().toLowerCase();
    if (!tag) continue;
    const primary = tag.split("-")[0];
    if ((LOCALES as readonly string[]).includes(primary)) return primary as Locale;
  }
  return DEFAULT_LOCALE;
}

const BOT = /bot|crawler|spider|crawling|gptbot|claudebot|perplexity|bingpreview|slurp/i;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  if (BOT.test(request.headers.get("user-agent") ?? "")) return NextResponse.next();

  const locale = detect(request);
  if (locale === DEFAULT_LOCALE) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
