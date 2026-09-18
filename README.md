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

## Using AWS S3 assets

The project already includes an asset helper in `src/lib/assets.ts`:

```ts
import { assetUrl } from '@/lib/assets'

const image = assetUrl('nature-delight/tree-plantation-drive.jpg')
```

Set the environment variable before running the app:

```bash
NEXT_PUBLIC_ASSETS_URL=https://your-s3-bucket-url
```

This will generate URLs like:

```bash
https://your-s3-bucket-url/nature-delight/tree-plantation-drive.jpg
```

## Gallery page

The project gallery page is located at:

- `app/gallery/page.tsx`

You can update the `projects` array there to add or remove gallery entries.

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

