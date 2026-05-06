"use client";

import { ReactNode } from "react";

/**
 * Endless horizontal marquee for logos / chips.
 */
export default function LogoMarquee({
  children,
  speed = 40,
  reverse = false
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
}) {
  const animation = reverse ? "marquee-reverse" : "marquee";
  return (
    <div className="relative flex w-full overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-10 sm:gap-14 ${animation}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-10 sm:gap-14 ${animation}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
