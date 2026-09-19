import { Inter, Fraunces } from "next/font/google";
import type { Locale } from "@/lib/i18n";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

/**
 * The document shell. Each locale has its own root layout (via a route group)
 * so that <html lang> is genuinely correct per language — Next allows only
 * one <html> per layout, and a single root layout would have forced every
 * language to inherit lang="es".
 */
export default function RootHtml({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
