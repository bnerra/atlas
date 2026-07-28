import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className='group'
    >
      <Card>
        <div className='flex items-start justify-between'>

          <h3 className='
            text-2xl
            font-semibold
            transition-colors
            group-hover:text-atlas-accent
          '>
            {project.title}
          </h3>

          <span
            className='
              text-xl
              text-atlas-muted
              transition-transform
              group-hover:translate-x-1
            '
          >
            →
          </span>

        </div>

        <p className='
          mt-5
          leading-relaxed
          text-atlas-muted
        '>
          {project.summary}
        </p>

        <div className='
          mt-6
          flex
          flex-wrap
          gap-2
        '>
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
