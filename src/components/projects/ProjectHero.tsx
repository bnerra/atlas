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
    <section className='py-20 md:py-28'>

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

      <div className='mt-10'>
        <Button href='/projects'>
          Back to Projects
        </Button>
      </div>

    </section>
  )
}
