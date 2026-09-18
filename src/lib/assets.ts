export const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL ?? ""

// basically gives: ASSETS_URL/path
export function assetUrl(path: string) {
  return `${ASSETS_URL}/${path.replace(/^\//, "")}`.replace(/([^:]\/)\/{2,}/g, "$1/")
}
