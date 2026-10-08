import { MasonryGallery } from '@/components/gallery/masonry-gallery'
import { galleryProjects } from '@/data/gallery-projects'

export default function GalleryPage() {
  return (
    <MasonryGallery
      title="Our Environmental Journey"
      description="Explore the projects we have supported and the restoration work happening across communities."
      projects={galleryProjects}
    />
  )
}
