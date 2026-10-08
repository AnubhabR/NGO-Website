import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { galleryProjects } from '@/data/gallery-projects'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const s3 = new S3Client({})
export async function GET(_request: Request, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params
  if (!galleryProjects.some((project) => project.id === collection)) {
    return Response.json({ error: 'Gallery collection not found.' }, { status: 404 })
  }

  const bucket = process.env.AWS_GALLERY_BUCKET
  if (!bucket) return Response.json({ error: 'Gallery storage is not configured.' }, { status: 503 })

  try {
    const result = await s3.send(
      new GetObjectCommand({ Bucket: bucket, Key: `gallery-manifests/${collection}.json` }),
    )
    const manifest = JSON.parse((await result.Body?.transformToString()) ?? '') as { keys?: unknown }
    if (!Array.isArray(manifest.keys) || !manifest.keys.every((key) => typeof key === 'string')) {
      return Response.json({ error: 'Gallery manifest is invalid.' }, { status: 503 })
    }

    const images = await Promise.all(
      manifest.keys.map((key) =>
        getSignedUrl(s3, new GetObjectCommand({ Bucket: bucket, Key: key }), { expiresIn: 3600 }),
      ),
    )

    return Response.json(
      { images },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } },
    )
  } catch {
    return Response.json({ error: 'Gallery storage is unavailable.' }, { status: 503 })
  }
}