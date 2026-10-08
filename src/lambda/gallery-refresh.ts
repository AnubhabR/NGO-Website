import { ListObjectsV2Command, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

interface GalleryS3Event {
  Records?: Array<{
    s3?: {
      bucket?: { name?: string }
      object?: { key?: string }
    }
  }>
}

const s3 = new S3Client({})
const imageExtension = /\.(avif|gif|jpe?g|png|webp)$/i

export async function handler(event: GalleryS3Event) {
  const galleryPrefix = (process.env.GALLERY_PREFIX ?? 'galleries').replace(/^\/+|\/+$/g, '')
  const bucket = event.Records?.[0]?.s3?.bucket?.name
  if (!bucket) return

  const collections = new Set<string>()
  for (const record of event.Records ?? []) {
    const encodedKey = record.s3?.object?.key
    if (!encodedKey) continue

    const key = decodeURIComponent(encodedKey.replace(/\+/g, ' '))
    const prefix = galleryPrefix ? `${galleryPrefix}/` : ''
    if (!key.startsWith(prefix)) continue

    const relativeKey = key.slice(prefix.length)
    const [collection, ...imagePath] = relativeKey.split('/')
    if (
      collection &&
      imagePath.length > 0 &&
      imageExtension.test(key) &&
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(collection)
    ) {
      collections.add(collection)
    }
  }

  for (const collection of collections) {
    const prefix = `${galleryPrefix ? `${galleryPrefix}/` : ''}${collection}/`
    const keys: string[] = []
    let continuationToken: string | undefined

    do {
      const result = await s3.send(
        new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix, ContinuationToken: continuationToken }),
      )
      for (const object of result.Contents ?? []) {
        if (object.Key && imageExtension.test(object.Key)) keys.push(object.Key)
      }
      continuationToken = result.IsTruncated ? result.NextContinuationToken : undefined
    } while (continuationToken)

    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: `gallery-manifests/${collection}.json`,
        Body: JSON.stringify({ keys: keys.sort() }),
        ContentType: 'application/json',
        CacheControl: 'no-store, max-age=0',
      }),
    )
  }
}