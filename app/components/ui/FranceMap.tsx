"use client";

import { motion } from "framer-motion";

/**
 * FranceMap — minimalist SVG outline of mainland France.
 * Path imported from flekschas/simple-world-map (CC BY-SA 3.0, Al MacDonald).
 * Viewbox is the path's bounding box; the SVG is then scaled by CSS.
 */

// Official France mainland path from simple-world-map (world coords)
const FRANCE_PATH =
  "M412.973 393.588l-1.91.467-3.82 4.158-1.15.078-1.53-1.08-.992.233-.76 2.386-5.585.154.156 1.236 3.82 2.543 4.436 3.543-.077 4.236-2.37 4.157 5.127 2.463 5.204.154 1.607-1.85 3.286.078.916.848 3.284-.233 1.686-2.162-2.145-2.54-.155-1.617.458-1.77-1.07-1.54-1.834.536-.232-1.383 4.054-4.47v-2.696l-2.348-.767-1.432-.987-6.623-4.175z";

// Bounding box of FR path (computed from path traversal)
// X: 397→424, Y: 393→418
const VIEW = { x: 393, y: 390, w: 35, h: 32 };

// Souchez position in the SAME source coords.
// Real GPS: 50.392°N, 2.741°E (Pas-de-Calais).
// Mapping to the simplified France path bounds (x ∈ [397, 424], y ∈ [393.6, 418.3]):
//   lon spread ≈ 12.5° (-4.5°E Brest → 8°E frontière allemande)
//     → Souchez at 58% from west → x ≈ 397 + 0.58 * 27 = 412.7
//   lat spread ≈ 9° (51°N → 42°N)
//     → Souchez at 6.7% from north → y ≈ 393.6 + 0.067 * 24.7 = 395.25
// Slight tweak so the marker sits clearly inside the (very simplified) top
// edge rather than on it.
const SOUCHEZ = { x: 412.5, y: 395.8 };

export default function FranceMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[380px] mx-auto ${className}`}>
      <svg
        viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
        className="w-full h-auto"
        fill="none"
      >
        <defs>
          <radialGradient id="france-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#fb923c" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="france-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--border) / 0.06)" />
            <stop offset="100%" stopColor="rgb(var(--border) / 0.02)" />
          </linearGradient>
        </defs>

        {/* Aura around Souchez */}
        <circle
          cx={SOUCHEZ.x}
          cy={SOUCHEZ.y}
          r="6"
          fill="url(#france-glow)"
        />

        {/* France mainland outline */}
        <motion.path
          d={FRANCE_PATH}
          fill="url(#france-fill)"
          stroke="currentColor"
          strokeWidth="0.18"
          strokeOpacity="0.35"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Souchez pulse rings */}
        <circle
          cx={SOUCHEZ.x}
          cy={SOUCHEZ.y}
          r="0.4"
          fill="#fb923c"
          fillOpacity="0.4"
        >
          <animate
            attributeName="r"
            from="0.4"
            to="1.6"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="0.7"
            to="0"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Souchez marker */}
        <circle cx={SOUCHEZ.x} cy={SOUCHEZ.y} r="0.5" fill="#fb923c">
          <animate
            attributeName="r"
            values="0.45;0.55;0.45"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={SOUCHEZ.x} cy={SOUCHEZ.y} r="0.18" fill="white" />

        {/* Souchez label with leader line */}
        <line
          x1={SOUCHEZ.x + 0.6}
          y1={SOUCHEZ.y}
          x2={SOUCHEZ.x + 2.5}
          y2={SOUCHEZ.y}
          stroke="#fb923c"
          strokeWidth="0.08"
          strokeOpacity="0.6"
        />
        <text
          x={SOUCHEZ.x + 2.7}
          y={SOUCHEZ.y + 0.4}
          fontFamily="JetBrains Mono, monospace"
          fontSize="1.1"
          fontWeight="600"
          fill="currentColor"
          opacity="0.9"
        >
          Souchez
        </text>
      </svg>
    </div>
  );
}
