import type { GalleryProject } from '@/components/gallery/masonry-gallery'

const fallbackImage = '/assets/gallery/fallback.svg'
const galleryImage = (collection: string, filename: string) =>
  `/assets/gallery/${collection}/${filename}`

export const galleryProjects: GalleryProject[] = [
  {
    id: 'tree-plantation-drive',
    title: 'Tree Plantation Drive',
    summary: 'Saplings planted across community land and public spaces.',
    coverImage: galleryImage('tree-plantation-drive', '20260925_45958PMByGPSMapCamera.jpg'),
    images: [
      galleryImage('tree-plantation-drive', '20260925_45958PMByGPSMapCamera.jpg'),
      galleryImage('tree-plantation-drive', '20260925_50023PMByGPSMapCamera.jpg'),
    ],
  },
  {
    id: 'forest-restoration',
    title: 'Forest Restoration',
    summary: 'Native species restoration in degraded regeneration zones.',
    coverImage: galleryImage('community-awareness', '20260925_45959PMByGPSMapCamera.jpg'),
    images: [
      galleryImage('community-awareness', '20260925_45959PMByGPSMapCamera.jpg'),
      galleryImage('community-awareness', '20260925_50022PMByGPSMapCamera.jpg'),
    ],
  },
  {
    id: 'community-awareness',
    title: 'Community Awareness',
    summary: 'Hands-on learning sessions and neighborhood outreach.',
    coverImage: galleryImage('soil-water-care', '20260925_50023PMByGPSMapCamera.jpg'),
    images: [
      galleryImage('soil-water-care', '20260925_50023PMByGPSMapCamera.jpg'),
      galleryImage('soil-water-care', '20260925_50023PMByGPSMapCamera(1).jpg'),
    ],
  },
  {
    id: 'soil-water-care',
    title: 'Soil and Water Care',
    summary: 'Monitoring the health of land and local water resources.',
    coverImage: galleryImage('volunteers-at-work', '20260925_45958PMByGPSMapCamera.jpg'),
    images: [
      galleryImage('volunteers-at-work', '20260925_45958PMByGPSMapCamera.jpg'),
      galleryImage('volunteers-at-work', '20260925_50022PMByGPSMapCamera.jpg'),
    ],
  },
  {
    id: 'volunteers-at-work',
    title: 'Volunteers at Work',
    summary: 'Local volunteers planting, caring, and monitoring growth.',
    coverImage: fallbackImage,
    images: [fallbackImage],
  },
  {
    id: 'wildlife-habitat',
    title: 'Wildlife Habitat',
    summary: 'Creating sustainable habitat corridors for native species.',
    coverImage: fallbackImage,
    images: [fallbackImage],
  },
]