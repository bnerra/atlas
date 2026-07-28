import ProjectCard from '@/components/projects/ProjectCard'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <Container>
      <Section
        eyebrow='Projects'
        title={`Things I've Built`}
        description='A collection of applications, experiments, and ideas brought to life.'
      >
        <div className='
          grid
          gap-6
          md:grid-cols-2
        '>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </Section>
    </Container>
  )
}
