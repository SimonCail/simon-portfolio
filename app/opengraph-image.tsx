import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Simon Caillieret — Étudiant Développeur, alternance Sept 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          fontFamily: "serif"
        }}
      >
        {/* Top: status badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
              color: "#a8a29e",
              fontFamily: "monospace",
              letterSpacing: "0.05em"
            }}
          >
            Disponible · Alternance Sept 2026
          </span>
        </div>

        {/* Middle: name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              fontSize: 28,
              color: "#a8a29e",
              fontFamily: "monospace"
            }}
          >
            Bonjour, je suis
          </span>
          <span
            style={{
              fontSize: 140,
              fontWeight: 400,
              color: "#fafaf9",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              display: "flex"
            }}
          >
            Simon{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #fed7aa 0%, #fb923c 50%, #f472b6 100%)",
                backgroundClip: "text",
                color: "transparent",
                fontStyle: "italic",
                marginLeft: 24
              }}
            >
              Caillieret
            </span>
          </span>
          <span
            style={{
              fontSize: 32,
              color: "#d6d3d1",
              marginTop: 12
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
              fontFamily: "monospace"
            }}
          >
            simoncaillieret · Souchez · France
          </span>
          <span
            style={{
              fontSize: 56,
              color: "#fafaf9",
              fontStyle: "italic"
            }}
          >
            SC<span style={{ color: "#fb923c", fontStyle: "normal" }}>.</span>
          </span>
        </div>
      </div>
    ),
    size
  );
}
