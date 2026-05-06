"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Image with a shimmering skeleton placeholder while loading.
 */
export default function ImageWithSkeleton({
  src,
  alt,
  sizes,
  className = "",
  unoptimized = false
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  unoptimized?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] bg-gradient-to-r from-black/10 via-white/10 to-black/10 bg-[length:200%_100%] animate-skeleton"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        unoptimized={unoptimized}
        onLoad={() => setLoaded(true)}
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      />
    </>
  );
}
