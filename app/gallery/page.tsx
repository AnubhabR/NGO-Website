import { MasonryGallery, type GalleryProject } from '@/components/gallery/masonry-gallery'
import { assetUrl } from '@/lib/assets'

const projects: GalleryProject[] = [
  {
    id: 'tree-plantation-drive',
    title: 'Tree Plantation Drive',
    summary: 'Saplings planted across community land and public spaces.',
    coverImage: assetUrl('nature-delight/tree-plantation-drive.jpg'),
    images: [
      assetUrl('nature-delight/tree-plantation-drive.jpg'),
      assetUrl('nature-delight/forest-restoration.jpg'),
      assetUrl('nature-delight/volunteers-at-work.jpg'),
      assetUrl('nature-delight/community-awareness.jpg'),
      assetUrl('nature-delight/soil-water-care.jpg'),
      assetUrl('nature-delight/wildlife-habitat.jpg'),
    ],
  },
  {
    id: 'forest-restoration',
    title: 'Forest Restoration',
    summary: 'Native species restoration in degraded regeneration zones.',
    coverImage: assetUrl('nature-delight/forest-restoration.jpg'),
    images: [
      assetUrl('nature-delight/forest-restoration.jpg'),
      assetUrl('nature-delight/soil-water-care.jpg'),
      assetUrl('nature-delight/wildlife-habitat.jpg'),
      assetUrl('nature-delight/tree-plantation-drive.jpg'),
    ],
  },
  {
    id: 'community-awareness',
    title: 'Community Awareness',
    summary: 'Hands-on learning sessions and neighborhood outreach.',
    coverImage: assetUrl('nature-delight/community-awareness.jpg'),
    images: [
      assetUrl('nature-delight/community-awareness.jpg'),
      assetUrl('nature-delight/volunteers-at-work.jpg'),
      assetUrl('nature-delight/tree-plantation-drive.jpg'),
      assetUrl('nature-delight/forest-restoration.jpg'),
    ],
  },
  {
    id: 'soil-water-care',
    title: 'Soil and Water Care',
    summary: 'Monitoring the health of land and local water resources.',
    coverImage: assetUrl('nature-delight/soil-water-care.jpg'),
    images: [
      assetUrl('nature-delight/soil-water-care.jpg'),
      assetUrl('nature-delight/wildlife-habitat.jpg'),
      assetUrl('nature-delight/forest-restoration.jpg'),
    ],
  },
  {
    id: 'volunteers-at-work',
    title: 'Volunteers at Work',
    summary: 'Local volunteers planting, caring, and monitoring growth.',
    coverImage: assetUrl('nature-delight/volunteers-at-work.jpg'),
    images: [
      assetUrl('nature-delight/volunteers-at-work.jpg'),
      assetUrl('nature-delight/tree-plantation-drive.jpg'),
      assetUrl('nature-delight/community-awareness.jpg'),
    ],
  },
  {
    id: 'wildlife-habitat',
    title: 'Wildlife Habitat',
    summary: 'Creating sustainable habitat corridors for native species.',
    coverImage: assetUrl('nature-delight/wildlife-habitat.jpg'),
    images: [
      assetUrl('nature-delight/wildlife-habitat.jpg'),
      assetUrl('nature-delight/forest-restoration.jpg'),
      assetUrl('nature-delight/soil-water-care.jpg'),
      assetUrl('nature-delight/volunteers-at-work.jpg'),
    ],
  },
]

export default function GalleryPage() {
  return (
    <MasonryGallery
      title="Our Environmental Journey"
      description="Explore the projects we have supported and the restoration work happening across communities."
      projects={projects}
    />
  )
}
