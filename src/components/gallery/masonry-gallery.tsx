'use client'

import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

export type GalleryProject = {
  id: string
  title: string
  summary?: string
  coverImage: string
  images: string[]
}

export function MasonryGallery({
  title,
  description,
  projects,
}: {
  title: string
  description?: string
  projects: GalleryProject[]
}) {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null)
  const [loadingCollection, setLoadingCollection] = useState<string | null>(null)

  async function openProject(project: GalleryProject) {
    setSelectedProject(project)
    setLoadingCollection(project.id)

    try {
      const response = await fetch(`/api/gallery/${encodeURIComponent(project.id)}`, { cache: 'no-store' })
      if (!response.ok) return

      const result = (await response.json()) as { images: string[] }
      if (result.images.length > 0) {
        setSelectedProject((current) =>
          current?.id === project.id ? { ...current, images: result.images } : current,
        )
      }
    } catch {
      // Keep the local fallback images when S3 cannot be reached.
    } finally {
      setLoadingCollection((current) => (current === project.id ? null : current))
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">Gallery</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-6xl">{title}</h1>
        {description ? <p className="mt-4 text-xl leading-8 text-muted-foreground">{description}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => void openProject(project)}
            className="group overflow-hidden rounded-[26px] border border-border bg-card text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            aria-label={`View project ${project.title}`}
          >
            <div className="overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Project</div>
                <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">{project.title}</h2>
                {project.summary ? <p className="mt-2 text-base leading-7 text-muted-foreground">{project.summary}</p> : null}
              </div>

              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-card shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
              aria-label="Close project gallery"
            >
              <X className="size-5" />
            </button>

            <div className="border-b border-border bg-card p-5 md:p-6">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Project gallery</div>
              <h3 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">{selectedProject.title}</h3>
              {loadingCollection === selectedProject.id ? (
                <p className="mt-2 text-base leading-7 text-muted-foreground">Loading latest photos...</p>
              ) : null}
            </div>

            <div className="max-h-[78vh] overflow-y-auto p-4 md:p-6">
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {selectedProject.images.map((image, index) => (
                  <div key={`${selectedProject.id}-${index}`} className="mb-4 break-inside-avoid overflow-hidden rounded-[20px] border border-border bg-muted">
                    <img
                      src={image}
                      alt={`${selectedProject.title} photo ${index + 1}`}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
