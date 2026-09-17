import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "Dra. Alba Corzo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card, generated at build time so there is no binary asset to
 * maintain. Applies to every route in the app, in all six locales.
 * Deliberately types-only: no claims, no numbers, nothing to verify.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0d12",
          // Satori supports gradients but not filter: blur().
          backgroundImage:
            "radial-gradient(900px 620px at 78% -12%, rgba(201,162,39,0.22), rgba(11,13,18,0) 62%)",
          padding: "88px 96px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#c9a227",
            }}
          >
            Médica Health Coach
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 104,
              color: "#eceef3",
              lineHeight: 1.05,
            }}
          >
            {SITE.formalName}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 64, height: 3, background: "#c9a227" }} />
          <div style={{ display: "flex", fontSize: 30, color: "#9aa3b2" }}>{SITE.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
