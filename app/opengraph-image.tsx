import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Simon Caillieret — Étudiant Développeur, alternance Sept 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weights: number[], text?: string) {
  const familyParam = family.replace(/ /g, "+");
  const url = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@${weights.join(
    ";"
  )}${text ? `&text=${encodeURIComponent(text)}` : ""}`;
  const css = await (
    await fetch(url, {
      headers: {
        // Use a modern UA so Google returns woff2 → ImageResponse needs ttf,
        // but Google's css2 with no UA gives a TTF source URL.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
      }
    })
  ).text();

  // Pull every font-face block (one per weight)
  const blocks = css.split("@font-face").slice(1);
  return Promise.all(
    blocks.map(async (block, i) => {
      const match = block.match(/src: url\((https:[^)]+)\)/);
      if (!match) return null;
      const data = await (await fetch(match[1])).arrayBuffer();
      return { data, weight: weights[i] ?? weights[0] };
    })
  ).then((results) => results.filter((r): r is { data: ArrayBuffer; weight: number } => r !== null));
}

export default async function OpengraphImage() {
  const [interFonts, serifFonts] = await Promise.all([
    loadGoogleFont("Inter", [400, 600, 700]),
    loadGoogleFont("Instrument Serif", [400])
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
            padding: "10px 22px",
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
              fontWeight: 500,
              letterSpacing: 0.5
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
        ...interFonts.map((f) => ({
          name: "Inter",
          data: f.data,
          weight: f.weight as 400 | 600 | 700,
          style: "normal" as const
        })),
        ...serifFonts.map((f) => ({
          name: "Instrument Serif",
          data: f.data,
          weight: f.weight as 400,
          style: "normal" as const
        }))
      ]
    }
  );
}
