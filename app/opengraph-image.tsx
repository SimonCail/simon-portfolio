import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Simon Caillieret — Étudiant Développeur, alternance Sept 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Fonts are bundled locally as TTF (Satori doesn't support woff2).
  const [inter400, inter600, serif400] = await Promise.all([
    fetch(new URL("./_fonts/inter-400.ttf", import.meta.url)).then((r) =>
      r.arrayBuffer()
    ),
    fetch(new URL("./_fonts/inter-600.ttf", import.meta.url)).then((r) =>
      r.arrayBuffer()
    ),
    fetch(new URL("./_fonts/instrument-serif-400.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer()
    )
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#08080a",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(251, 146, 60, 0.35) 0px, transparent 60%), radial-gradient(circle at 80% 80%, rgba(244, 114, 182, 0.25) 0px, transparent 60%)",
          fontFamily: "Inter"
        }}
      >
        {/* Top: status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 24px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 999,
            alignSelf: "flex-start"
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#34d399"
            }}
          />
          <span
            style={{
              fontSize: 22,
              color: "#d6d3d1",
              fontWeight: 500
            }}
          >
            Disponible · Alternance Sept 2026
          </span>
        </div>

        {/* Middle: name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              fontSize: 26,
              color: "#a8a29e",
              fontWeight: 500
            }}
          >
            Bonjour, je suis
          </span>
          <div
            style={{
              fontSize: 150,
              fontFamily: "Instrument Serif",
              color: "#fafaf9",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              display: "flex"
            }}
          >
            <span>Simon&nbsp;</span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #fed7aa 0%, #fb923c 50%, #f472b6 100%)",
                backgroundClip: "text",
                color: "transparent",
                fontStyle: "italic"
              }}
            >
              Caillieret
            </span>
          </div>
          <span
            style={{
              fontSize: 32,
              color: "#d6d3d1",
              marginTop: 16,
              fontWeight: 400
            }}
          >
            Étudiant en BUT Informatique · Recherche d&apos;alternance dev
          </span>
        </div>

        {/* Bottom: meta + SC. logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <span
            style={{
              fontSize: 22,
              color: "#78716c",
              fontWeight: 500
            }}
          >
            simoncaillieret.vercel.app · Souchez · France
          </span>
          <div
            style={{
              fontSize: 64,
              color: "#fafaf9",
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              display: "flex"
            }}
          >
            SC<span style={{ color: "#fb923c", fontStyle: "normal" }}>.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
        { name: "Inter", data: inter600, weight: 600, style: "normal" },
        {
          name: "Instrument Serif",
          data: serif400,
          weight: 400,
          style: "normal"
        }
      ]
    }
  );
}
