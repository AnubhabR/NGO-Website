import { assetUrl } from "@/lib/assets";

export interface ShowcaseImage {
  url: string;
  alt: string;
};

// TODO: remove hardcoded `length`, probably pass length as env var
 
export const showcaseImages: ShowcaseImage[] = Array.from(
  { length: 5 },
  (_, i) => ({
    url: assetUrl(`showcase-images/${i + 1}.png`),
    alt: `Showcase image ${i + 1}`,
  }),
);
