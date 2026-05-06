"use client";

import { ReactNode } from "react";

/**
 * OrbitingCircles — children orbit around a central point.
 * Inspired by Magic UI's OrbitingCircles.
 */
export default function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 80,
  showPath = true
}: {
  className?: string;
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  showPath?: boolean;
}) {
  return (
    <>
      {showPath && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-current"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="3 3"
            strokeOpacity={0.15}
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay
          } as React.CSSProperties
        }
        className={`absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full [animation-delay:calc(var(--delay)*1000ms)] ${
          reverse ? "[animation-direction:reverse]" : ""
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
}
