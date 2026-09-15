export const ASSETS_URL = import.meta.env.VITE_ASSETS_URL

export function assetUrl(path: string) {
  return `${ASSETS_URL}/${path.replace(/^\//, "")}`
}
