'use client';
import Badge from '@/components/ui/Badge'
import { Project } from '@/types/project'
import Link from 'next/link'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({
  project,
}: ProjectHeroProps) {

  return (
    <section className='py-14 md:py-18'>
      <p className='
        mb-4
        text-sm
        uppercase
        tracking-[0.25em]
        text-atlas-accent
      '>
        Featured Project
      </p>

      <h1 className='
        max-w-4xl
        text-5xl
        font-semibold
        tracking-tight
        md:text-7xl
      '>
        {project.title}
      </h1>

      <p className='
        mt-8
        max-w-3xl
        text-xl
        leading-relaxed
        text-atlas-muted
      '>
        {project.summary}
      </p>

      <div className='
        mt-8
        flex
        flex-wrap
        gap-3
      '>
        {project.technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>

      <div className='mt-10 flex flex-wrap gap-4'>
        {project.actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            target='_blank'
            className='
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-atlas-accent
              px-5
              py-3
              font-medium
              text-atlas-accent
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-atlas-accent
              hover:text-atlas-background
            '
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
