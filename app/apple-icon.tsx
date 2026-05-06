import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #fb923c 0%, #f472b6 50%, #a855f7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 110,
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: "-0.04em",
          borderRadius: "22%"
        }}
      >
        SC
      </div>
    ),
    size
  );
}
