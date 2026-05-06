"use client";

import { motion } from "framer-motion";

/**
 * Lamp — overhead light cone that lights up the area below.
 * Inspired by Aceternity UI's Lamp Effect.
 */
export default function Lamp({
  className = "",
  color = "rgba(251, 146, 60, 0.55)"
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 ${className}`}
      aria-hidden
    >
      {/* Light cone (ellipse radial gradient) */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="origin-top relative -mt-2 w-[800px] h-[700px]"
        style={{
          background: `radial-gradient(ellipse 45% 70% at 50% 0%, ${color}, transparent 75%)`
        }}
      />

      {/* The lamp tube — horizontal glowing bar */}
      <motion.div
        initial={{ width: "6rem", opacity: 0 }}
        animate={{ width: "22rem", opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px]"
        style={{
          background: `linear-gradient(to right, transparent, ${color
            .replace("0.55", "1")
            .replace("0.35", "1")}, transparent)`,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}, 0 0 80px ${color}`
        }}
      />

      {/* Bright spot at the source */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full blur-2xl"
        style={{ background: color }}
      />
    </div>
  );
}
