/** Shared surface classes for Illustrated Studio cards and tiles. */
export const studioCard =
  "rounded-3xl border-2 border-ink bg-studio-card text-ink";

export const studioCardInteractive =
  "studio-lift rounded-3xl border-2 border-ink bg-studio-card text-ink";

export const TILE_BACKGROUNDS = [
  "bg-blush",
  "bg-aqua",
  "bg-sun",
  "bg-cream",
  "bg-apricot",
] as const;

export function tileBackground(index: number): (typeof TILE_BACKGROUNDS)[number] {
  const tone = TILE_BACKGROUNDS[index % TILE_BACKGROUNDS.length];
  return tone ?? "bg-cream";
}
