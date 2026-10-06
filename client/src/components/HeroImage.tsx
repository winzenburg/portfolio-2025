import type { CSSProperties } from "react";
import { heroSpec } from "@/lib/hero-art";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  /**
   * Slot width the browser should use when picking a srcset candidate.
   * Full-bleed heroes use 100vw. Cards should name their column width
   * so a phone does not download the 2880px file.
   */
  sizes?: string;
  /** Home hero only. Every other hero stays lazy. */
  priority?: boolean;
}

/**
 * A hero `<img>` with the 1456w and full-size sources, plus the focal point
 * for that file. Unknown sources render as a normal lazy image.
 */
export default function HeroImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: HeroImageProps) {
  const spec = heroSpec(src);
  const style: CSSProperties | undefined = spec
    ? { objectPosition: spec.focus }
    : undefined;

  return (
    <img
      src={spec?.src ?? src}
      srcSet={spec?.srcSet}
      sizes={spec ? sizes : undefined}
      alt={alt}
      width={spec?.width}
      height={spec?.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      style={style}
      className={className}
    />
  );
}
