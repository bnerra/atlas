'use client';
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Project } from '@/types/project'

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
        <Button
          href='https://info-ticker-ui.nberra90.workers.dev/'
          target='_blank'
        >
          Live Demo
        </Button> 
        <Button
          href='https://github.com/bnerra/info-ticker-api'
          target='_blank'
        >
          View Source
        </Button> 
      </div>
    </section>
  )
}
