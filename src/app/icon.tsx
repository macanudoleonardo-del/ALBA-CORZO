import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: an "AC" monogram in the brand accent. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d12",
          color: "#c9a227",
          fontSize: 30,
          letterSpacing: -1,
        }}
      >
        AC
      </div>
    ),
    size,
  );
}
