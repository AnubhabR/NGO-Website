import { assetUrl } from "@/lib/assets";

export interface ShowcaseImage {
  url: string;
  alt: string;
};

export const images = Array.from(
  { length: 5 },
  (_, i) => assetUrl(`showcase-image/${i + 1}`)
)
