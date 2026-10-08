# Nature Delight Foundation Website

A Next.js website for Nature Delight Foundation with a responsive landing page and a reusable project gallery.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Tailark-inspired component styling

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser:

```bash
http://localhost:3000
```

## Gallery usage

The gallery is built as a reusable component in:

- `src/components/gallery/masonry-gallery.tsx`

Use it like this:

```tsx
import { MasonryGallery, type GalleryProject } from '@/components/gallery/masonry-gallery'

const projects: GalleryProject[] = [
  {
    id: 'tree-plantation-drive',
    title: 'Tree Plantation Drive',
    summary: 'Saplings planted across community land.',
    coverImage: 'https://your-s3-bucket.amazonaws.com/folder/cover.jpg',
    images: [
      'https://your-s3-bucket.amazonaws.com/folder/cover.jpg',
      'https://your-s3-bucket.amazonaws.com/folder/photo-2.jpg',
      'https://your-s3-bucket.amazonaws.com/folder/photo-3.jpg',
    ],
  },
]

export default function Page() {
  return (
    <MasonryGallery
      title="Our Environmental Journey"
      description="Explore our project highlights."
      projects={projects}
    />
  )
}
```

## Folder-based gallery

Each collection has a matching folder in S3, for example:

```text
s3://your-gallery-bucket/galleries/tree-plantation-drive/photo-01.jpg
```

An S3 `ObjectCreated` event runs the gallery refresh Lambda for the uploaded file's collection only. It rebuilds that collection's manifest under `gallery-manifests/`; the gallery API reads the manifest and returns short-lived signed URLs for its private images when the collection opens.

Set these server-side environment variables:

```text
AWS_GALLERY_BUCKET=your-gallery-bucket
```

Deploy the upload-triggered Lambda and its bucket notification with `template.yaml` using AWS SAM (`npm run build:gallery-lambda`, then `sam deploy --guided`). The SAM `GalleryPrefix` parameter defaults to `galleries`. Set the output bucket name as `AWS_GALLERY_BUCKET` on the OpenNext app Lambda, and grant that role `s3:GetObject` on `galleries/*` and `gallery-manifests/*`; signed image URLs expire after one hour. The refresh Lambda's role is restricted to listing the configured gallery prefix and writing `gallery-manifests/*`; the SAM template provisions the private bucket and permissions. Do not put AWS credentials in `NEXT_PUBLIC_*` variables; Lambdas should use their execution roles.

### Local fallback images

Fallback assets live in `public/assets/gallery/`. Each collection has its own folder. Add fallback images there, then set that collection's `coverImage` and `images` paths in `src/data/gallery-projects.ts`. The shared `fallback.svg` is used until collection-specific images are added. The gallery keeps these local images when S3 is unconfigured or unavailable.

Collection metadata and display titles are maintained in `src/data/gallery-projects.ts`.

### Hero image fallback

Place the local hero fallback at `public/forest-hero.svg` (served by the app as `/forest-hero.svg`). The homepage uses this file when `NEXT_PUBLIC_ASSETS_URL` is not configured. If you use a different filename or format, update the `heroImage` fallback path in `src/components/hero-section-1.tsx` to match.

## AWS Lambda build

The app uses OpenNext for AWS deployment. Build the Lambda artifacts with:

```bash
npm run build:lambda
```

This generates `.open-next/` for deployment through your AWS infrastructure (for example, CDK or SST). Run the build in Linux, WSL, or Linux CI; OpenNext's bundle step uses symlinks and may fail on Windows without symlink privileges.

## Gallery page

The gallery page is located at `app/gallery/page.tsx`; its project collections are supplied by `src/data/gallery-projects.ts`.

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

