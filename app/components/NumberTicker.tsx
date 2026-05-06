"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * NumberTicker — counts from 0 to `value` when scrolled into view.
 * Inspired by Magic UI's Number Ticker.
 */
export default function NumberTicker({
  value,
  className = "",
  decimals = 0
}: {
  value: number;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 90 });
  const inView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [motionValue, inView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = decimals
          ? latest.toFixed(decimals)
          : Math.round(latest).toLocaleString("fr-FR");
      }
    });
  }, [springValue, decimals]);

  return (
    <span
      ref={ref}
      className={`tabular-nums ${className}`}
    >
      0
    </span>
  );
}
