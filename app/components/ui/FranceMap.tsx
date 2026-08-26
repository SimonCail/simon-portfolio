"use client";

import { motion } from "framer-motion";

/**
 * FranceMap - contour de la France metropolitaine, Corse comprise.
 *
 * Le trace est genere depuis les donnees GeoJSON officielles
 * (gregoiredavid/france-geojson, derive de l'IGN), simplifie par
 * Douglas-Peucker a 620 points pour le continent et 90 pour la Corse,
 * puis projete en equirectangulaire corrige en longitude (facteur cos(46.7 deg),
 * la latitude moyenne du pays) pour que les proportions soient justes.
 *
 * Les villes sont projetees avec EXACTEMENT la meme fonction que le contour :
 * leur position est donc geographiquement correcte par construction, et non
 * ajustee a l'oeil.
 *
 * Le budget de points est genereux a dessein : a 240 points, Douglas-Peucker
 * ecrasait toute la cote Calais-Dunkerque en UN segment de 6.7 unites, ce qui
 * donnait une coupe horizontale nette en haut de la carte. A 620 points, le
 * plus long segment du nord retombe a 2.65 unites et le littoral se lit.
 */

const VIEW = { w: 100.0, h: 98.75 };

// La projection cale le trace pile sur [0,100] x [0,98.75] : la pointe nord
// (Dunkerque, 51.09N) et la pointe sud de la Corse tombent donc EXACTEMENT sur
// le bord du viewBox, ou elles se faisaient couper net. On respire autour.
// Plus de marge en haut : c'est la que vivent le halo, les deux points et
// l'etiquette "Lille", tous au-dessus du trace.
const PAD = { top: 6, side: 4, bottom: 4 };
const VIEWBOX = [
  -PAD.side,
  -PAD.top,
  VIEW.w + PAD.side * 2,
  VIEW.h + PAD.top + PAD.bottom
].join(" ");

const FRANCE_PATH =
  "M83.08 36.43L82.05 36.52L82.19 36.92L81.76 37.13L81.33 37.96L82.28 37.75L82.57 38.14L81.76 38.62L81.86 39.06L80.10 40.71L80.21 41.02L78.22 42.26L78.44 42.65L78.21 43.44L78.36 43.83L75.98 45.83L76.30 46.15L75.65 47.47L76.39 47.97L75.92 48.80L76.07 49.14L75.03 49.51L75.17 49.83L74.90 50.35L76.15 50.26L77.26 49.41L77.36 49.09L76.86 48.87L77.33 47.97L77.92 48.24L78.78 47.58L80.82 47.69L80.58 48.13L81.23 48.85L80.75 50.29L81.47 50.43L81.31 51.21L81.74 51.05L82.49 52.48L81.76 53.25L80.91 53.36L80.84 54.49L81.58 55.23L82.18 55.35L82.17 56.73L83.47 57.76L82.95 58.53L83.13 59.25L82.73 59.69L81.93 59.74L81.42 60.46L80.56 60.23L79.57 60.80L79.90 61.65L80.40 61.71L80.44 62.81L82.34 63.65L82.17 63.99L82.71 65.09L81.92 65.12L81.95 65.71L81.15 66.64L81.81 67.64L81.43 67.73L81.39 68.34L82.23 69.62L83.47 69.96L84.67 70.83L86.94 70.24L86.82 70.68L87.15 71.39L86.79 71.72L86.72 72.28L86.14 72.54L86.09 73.03L85.64 73.31L85.86 74.20L84.52 74.94L84.48 75.32L84.36 74.99L83.65 75.59L83.27 75.53L83.12 76.64L82.84 76.37L82.43 76.74L81.92 76.66L81.64 77.59L81.17 77.99L80.40 77.92L80.20 78.64L79.27 79.35L80.07 79.46L79.71 80.46L79.12 80.25L77.88 80.70L77.74 81.29L76.61 80.99L76.24 81.90L75.84 81.81L76.12 81.68L76.00 81.32L75.36 81.37L74.65 80.91L74.37 81.10L74.84 81.48L74.01 81.67L73.76 81.47L73.87 81.00L73.08 80.71L73.02 80.34L72.45 80.54L71.97 79.99L70.62 80.01L70.84 79.18L70.43 78.51L68.59 78.87L68.03 77.85L67.50 78.06L67.27 77.56L67.38 78.00L67.02 77.86L67.35 78.20L67.05 78.35L67.66 78.31L67.23 78.79L65.86 78.65L65.18 78.37L65.40 78.00L65.14 77.63L62.55 77.42L62.13 77.15L62.12 76.61L61.32 76.56L58.79 78.27L57.86 79.41L57.15 79.23L56.31 79.71L55.05 81.26L54.60 82.58L54.48 85.17L54.67 86.80L55.29 87.09L55.19 87.37L55.52 87.90L54.91 88.01L54.59 87.51L53.94 87.43L52.03 88.21L52.05 88.85L51.05 88.94L49.13 87.87L47.45 88.80L46.90 87.72L45.46 87.32L45.49 86.75L45.85 86.49L45.43 86.33L45.50 86.06L43.81 85.69L43.42 86.20L42.86 85.02L41.53 85.13L40.92 84.32L39.86 84.31L38.34 83.57L38.00 83.81L37.90 84.37L38.06 85.32L36.35 85.31L35.92 84.97L35.46 85.49L34.63 84.84L33.29 85.37L32.66 85.01L32.29 84.22L31.22 83.70L30.66 84.21L29.89 83.92L29.46 84.40L28.31 83.22L28.16 82.49L26.83 82.64L25.45 82.09L24.29 81.47L24.56 80.96L24.04 81.21L23.98 81.88L23.37 81.70L23.14 81.29L23.78 80.24L23.73 79.54L22.71 79.17L22.20 79.61L22.09 79.06L21.36 79.16L20.95 78.32L21.77 78.23L22.23 77.79L23.33 75.61L24.31 70.28L24.64 66.45L25.11 65.30L26.42 65.42L25.27 64.13L24.61 65.59L25.35 57.01L25.81 56.14L26.52 55.95L24.98 54.77L25.08 55.01L24.85 54.99L24.79 54.68L24.75 53.91L25.51 53.70L25.25 53.16L25.65 53.12L25.93 52.56L25.75 52.26L25.99 52.20L25.59 51.66L26.00 51.75L26.05 51.35L25.44 50.61L25.55 50.41L24.75 50.09L25.67 49.04L25.64 48.73L25.03 48.49L25.00 48.99L24.38 48.40L24.39 48.76L24.05 48.21L23.19 48.22L22.85 47.59L20.78 46.68L20.47 45.50L18.48 43.37L18.39 42.66L19.61 41.24L18.75 40.37L17.75 40.19L18.31 39.85L18.29 38.81L17.40 39.17L16.86 38.70L16.47 38.91L15.67 38.58L15.97 38.20L15.59 37.72L16.47 37.31L16.04 36.99L15.98 36.53L16.54 36.50L15.75 36.17L15.07 36.41L15.58 35.93L15.26 36.14L15.22 35.77L15.11 36.14L14.80 36.02L15.15 36.20L14.77 36.54L13.79 36.59L13.10 35.87L14.36 36.04L14.67 35.06L14.51 34.95L14.45 35.54L13.94 34.98L14.02 35.23L13.46 35.22L13.27 35.70L12.95 35.59L12.66 34.84L12.72 35.56L13.02 35.88L12.34 35.52L12.37 35.77L11.84 35.81L11.62 35.46L11.60 36.23L11.94 36.76L11.58 36.71L11.40 36.20L11.53 35.65L11.04 35.00L11.47 34.26L11.79 34.24L11.44 34.23L11.57 33.94L11.11 33.97L11.35 34.38L11.00 34.47L11.01 34.98L10.00 34.56L10.57 34.52L9.96 34.32L10.57 33.47L10.11 34.00L9.80 33.12L10.03 34.10L9.37 34.47L8.82 33.76L8.73 32.77L8.76 33.79L7.76 33.64L7.47 33.38L8.04 33.12L7.40 33.37L7.27 32.93L7.34 33.43L6.54 33.51L6.22 33.05L6.37 32.81L5.70 32.30L5.70 32.86L4.85 32.77L4.53 32.30L5.00 32.01L4.72 31.55L4.77 32.02L4.31 32.32L4.75 32.78L4.36 33.01L4.30 32.61L4.04 32.74L4.43 33.09L4.27 33.41L2.93 33.43L3.13 33.00L2.87 32.18L1.80 31.26L2.14 30.99L1.78 30.99L1.61 31.38L0.38 30.97L2.64 30.29L3.42 30.47L3.64 29.81L3.34 29.31L2.31 28.95L1.68 29.67L1.56 29.03L1.76 28.85L1.20 28.81L1.16 28.53L1.57 28.51L1.48 28.13L1.82 27.91L1.64 28.27L1.81 28.49L2.06 28.22L2.04 28.52L3.64 28.37L3.69 28.76L4.75 28.89L4.73 29.16L4.87 28.78L3.59 28.56L4.24 28.38L3.58 28.20L3.81 28.06L3.22 28.20L3.70 27.74L2.35 28.06L3.66 26.86L0.55 28.03L0.15 28.02L0.10 27.74L0.34 27.66L0.06 27.71L0.24 27.54L0.00 27.17L0.53 26.55L0.23 26.58L0.14 26.10L0.63 25.59L2.02 25.83L1.28 25.50L1.37 25.20L2.21 25.56L1.58 25.19L1.75 24.91L2.76 24.92L2.50 24.73L3.24 24.50L3.47 24.95L4.64 24.30L5.15 24.56L5.18 24.22L5.74 23.99L5.85 25.12L5.99 25.30L5.88 24.77L6.08 24.52L6.58 25.21L6.82 24.99L6.49 24.56L6.79 24.08L8.03 24.31L7.92 24.68L8.52 24.52L8.44 24.08L8.68 23.79L8.43 23.48L9.00 22.86L9.74 23.24L10.94 22.54L10.98 23.42L11.23 22.81L11.99 22.42L11.65 23.66L12.00 23.04L12.45 23.05L12.18 23.40L13.01 23.71L12.89 24.06L13.72 24.72L13.73 25.31L14.50 25.73L14.73 26.38L14.72 25.97L15.08 26.03L16.18 25.05L16.08 24.82L16.57 24.95L17.26 24.38L17.49 24.63L17.13 25.08L17.75 24.82L17.99 25.56L18.11 25.19L18.24 25.52L18.44 25.09L18.61 25.24L18.42 24.93L19.14 24.90L19.66 25.85L19.46 26.38L19.84 26.10L19.56 25.44L19.79 25.50L19.38 25.29L19.28 24.77L19.91 24.24L20.55 24.15L20.39 24.90L21.09 25.26L23.99 24.97L23.66 24.72L23.82 24.36L23.34 24.73L22.46 23.82L22.44 23.03L22.16 22.90L22.56 21.91L22.61 22.27L22.56 20.95L22.92 21.01L22.54 20.85L22.43 21.22L22.27 20.84L22.39 19.88L22.17 19.00L22.48 18.97L22.16 18.80L22.08 19.09L21.49 17.92L21.74 17.85L20.80 17.44L20.53 16.10L20.26 15.87L20.60 15.36L20.55 14.91L19.84 14.37L19.88 13.84L22.16 14.68L23.14 14.14L24.59 14.16L24.85 15.06L24.38 15.30L24.30 15.72L25.25 17.03L25.20 17.51L25.49 17.62L26.81 17.20L28.15 17.68L30.64 17.84L31.83 18.36L32.80 18.19L34.31 17.13L35.78 16.81L34.25 16.51L33.87 16.04L34.84 13.97L37.47 12.56L41.73 11.39L43.46 10.04L44.19 8.88L45.12 9.23L44.12 8.23L44.25 7.39L44.84 7.48L44.24 7.02L44.43 5.63L44.97 5.90L44.39 5.25L44.29 3.70L44.57 3.73L44.59 3.26L44.43 2.21L45.81 1.36L48.19 1.00L48.39 0.56L48.59 0.83L48.53 0.45L51.14 0.00L51.75 1.45L51.45 1.73L51.51 2.44L51.76 2.81L52.38 2.83L52.84 3.68L53.65 4.03L53.96 3.43L55.36 3.04L55.74 3.82L56.13 3.94L55.98 4.37L56.32 5.72L56.93 6.07L57.61 5.64L57.93 5.75L57.80 6.12L58.54 6.02L58.92 6.43L58.88 7.31L59.26 7.98L59.51 7.50L60.58 7.74L61.44 7.42L62.22 8.45L62.41 8.13L62.72 8.29L62.16 9.69L62.65 9.69L62.88 10.32L62.22 10.86L62.41 11.12L62.25 11.28L62.64 11.52L64.39 11.70L66.10 11.11L66.10 10.20L67.02 9.34L67.52 9.66L66.98 10.39L67.13 10.66L66.78 11.37L67.47 11.98L67.20 13.16L68.21 13.09L69.40 14.18L70.12 14.16L70.55 14.57L70.41 15.01L70.69 14.81L71.22 15.17L71.48 16.15L72.11 15.84L72.50 16.08L72.72 15.63L73.61 15.50L75.50 16.67L76.88 15.99L78.98 16.83L79.40 17.50L79.15 17.69L79.88 18.37L80.35 19.56L81.02 19.68L81.21 19.40L81.04 19.05L81.65 18.95L82.42 19.28L82.55 20.08L82.88 19.64L84.22 20.05L85.27 19.35L85.61 19.50L85.86 20.23L86.60 20.67L87.71 20.55L88.21 20.88L88.68 20.63L89.78 21.33L90.71 21.47L89.78 23.19L88.94 23.68L88.02 24.86L87.28 27.33L87.36 28.05L87.00 28.31L86.19 30.15L86.13 31.03L86.51 31.66L86.05 32.60L85.99 34.12L85.74 34.46L86.25 35.69L85.66 36.05L85.87 36.19L85.56 36.64L85.18 36.50L85.35 36.76L84.86 37.15L83.89 37.27L83.36 37.03L83.57 36.52L83.08 36.43Z";

const CORSE_PATH =
  "M98.91 93.76L98.79 95.92L98.06 96.42L98.67 96.48L98.00 97.11L98.11 97.57L97.61 98.27L97.91 98.28L97.64 98.75L96.78 98.50L96.96 98.00L96.59 97.97L96.66 97.63L96.40 97.84L95.55 97.51L95.25 97.16L95.00 97.20L95.08 96.93L94.59 96.73L94.73 96.66L94.53 96.47L94.67 96.06L95.22 95.91L95.50 95.46L94.59 95.38L94.54 94.95L94.07 95.15L93.73 94.96L94.21 94.62L94.09 94.35L94.51 94.24L94.60 94.04L94.37 93.90L94.63 93.84L94.57 93.51L94.73 93.38L94.38 93.00L93.36 93.39L93.48 92.99L93.26 92.69L93.76 92.56L93.74 92.20L94.34 91.81L94.02 91.18L93.73 91.30L93.03 90.84L93.27 90.61L93.05 90.58L93.21 90.51L93.19 90.23L92.90 89.92L93.96 89.60L93.74 89.25L93.33 89.19L93.51 88.95L93.42 88.77L93.02 88.95L92.92 88.59L93.37 88.40L93.36 88.09L93.71 88.09L93.65 87.83L93.87 87.57L93.66 87.51L93.77 87.11L94.16 86.99L94.08 86.47L94.58 86.67L94.73 86.20L95.62 85.77L96.21 85.81L96.97 84.89L97.65 84.85L98.11 85.47L98.29 85.33L98.51 84.77L98.26 83.86L98.48 83.53L98.34 83.21L98.62 82.93L98.47 82.24L99.03 82.05L99.33 82.30L99.54 84.14L99.21 85.48L99.82 86.76L100.00 90.33L99.94 91.27L99.01 92.72L98.91 93.76Z";

// Lille 3.0573E / 50.6292N et Lens 2.8322E / 50.4322N, passees dans la meme
// projection que le contour. Etiquettes tirees en sens opposes : les deux
// villes ne sont separees que de ~2.5 unites sur 100.
const CITIES = [
  {
    name: "Lille",
    x: 54.71,
    y: 4.67,
    leader: { x: 60.5, y: 2.4 },
    label: { x: 62, y: 3.3 },
    begin: "0s"
  },
  {
    name: "Lens",
    x: 53.14,
    y: 6.67,
    leader: { x: 60.5, y: 9.2 },
    label: { x: 62, y: 10.1 },
    begin: "1.2s"
  }
];

// Halo centre entre les deux villes.
const AURA = { x: 53.92, y: 5.67 };

export default function FranceMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[380px] mx-auto ${className}`}>
      <svg
        viewBox={VIEWBOX}
        className="w-full h-auto"
        fill="none"
      >
        <defs>
          <radialGradient id="france-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--accent-rgb))" stopOpacity="0.45" />
            <stop offset="60%" stopColor="rgb(var(--accent-rgb))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(var(--accent-rgb))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="france-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--border) / 0.06)" />
            <stop offset="100%" stopColor="rgb(var(--border) / 0.02)" />
          </linearGradient>
        </defs>

        {/* Halo commun aux deux villes */}
        <circle cx={AURA.x} cy={AURA.y} r="13" fill="url(#france-glow)" />

        {/* Continent */}
        <motion.path
          d={FRANCE_PATH}
          fill="url(#france-fill)"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.35"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Corse */}
        <motion.path
          d={CORSE_PATH}
          fill="url(#france-fill)"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.35"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {CITIES.map((city) => (
          <g key={city.name}>
            {/* Onde de pulsation */}
            <circle cx={city.x} cy={city.y} r="1" fill="rgb(var(--accent-rgb))" fillOpacity="0.4">
              <animate
                attributeName="r"
                from="1"
                to="3.7"
                dur="2.4s"
                begin={city.begin}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.7"
                to="0"
                dur="2.4s"
                begin={city.begin}
                repeatCount="indefinite"
              />
            </circle>

            {/* Point */}
            <circle cx={city.x} cy={city.y} r="1.2" fill="rgb(var(--accent-rgb))">
              <animate
                attributeName="r"
                values="1.1;1.4;1.1"
                dur="2s"
                begin={city.begin}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={city.x} cy={city.y} r="0.45" fill="white" />

            {/* Etiquette et ligne de rappel */}
            <line
              x1={city.x}
              y1={city.y}
              x2={city.leader.x}
              y2={city.leader.y}
              stroke="rgb(var(--accent-rgb))"
              strokeWidth="0.23"
              strokeOpacity="0.6"
            />
            <text
              x={city.label.x}
              y={city.label.y}
              fontFamily="JetBrains Mono, monospace"
              fontSize="3.1"
              fontWeight="600"
              fill="currentColor"
              opacity="0.9"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
