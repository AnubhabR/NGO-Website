'use client'

import Image from 'next/image'
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

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">Gallery</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">{title}</h1>
        {description ? <p className="mt-4 text-lg text-muted-foreground">{description}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="group overflow-hidden rounded-[26px] border border-border bg-card text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            aria-label={`View project ${project.title}`}
          >
            <div className="overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-primary">Project</div>
                <h2 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h2>
                {project.summary ? <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p> : null}
              </div>

              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ArrowUpRight className="size-4" />
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
              <div className="text-[10px] uppercase tracking-[0.24em] text-primary">Project gallery</div>
              <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">{selectedProject.title}</h3>
            </div>

            <div className="max-h-[78vh] overflow-y-auto p-4 md:p-6">
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {selectedProject.images.map((image, index) => (
                  <div key={`${selectedProject.id}-${index}`} className="mb-4 break-inside-avoid overflow-hidden rounded-[20px] border border-border bg-muted">
                    <Image
                      src={image}
                      alt={`${selectedProject.title} photo ${index + 1}`}
                      width={1200}
                      height={index % 3 === 0 ? 1000 : index % 3 === 1 ? 760 : 900}
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
