/** Shared surface classes. Hairline rules, no offset shadows. */
export const studioCard =
  "rounded-sm border border-ink/15 bg-studio-card text-ink";

export const studioCardInteractive =
  "rounded-sm border border-ink/15 bg-studio-card text-ink transition-colors duration-200 hover:border-ink/40";

/** Index kept so call sites stay stable. Tiles no longer take a bright fill. */
export function tileBackground(_index: number): string {
  return "bg-studio-card";
}
