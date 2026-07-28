import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectShowcaseProps {
  project: Project
}

export default function ProjectShowcase({
  project
}: ProjectShowcaseProps) {
  const image = project.images?.[0]

  return (
    <section className='pb-16'>
      <div
        className='
          overflow-hidden
          rounded-atlas-lg
          border
          border-atlas-border
          bg-atlas-surface-raised
          shadow-atlas
        '
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1400}
            height={900}
            className='h-auto w-full object-cover'
          />
        ) : (
          <div className='flex aspect-video items-center justify-center text-atlas-muted'>
            Dashboard Preview
          </div>
        )}
      </div>
    </section>
  )
}
