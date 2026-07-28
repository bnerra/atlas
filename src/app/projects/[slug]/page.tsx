import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import ProjectHero from '@/components/projects/ProjectHero'
import ProblemSection from "@/components/projects/ProblemSection"
import SolutionSection from "@/components/projects/SolutionSection"
import LessonsSection from "@/components/projects/LessonsSection"
import { projects } from '@/data/projects'

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    notFound()
  }

  return (
    <Container>
      <ProjectHero project={project} />
      <ProblemSection problem={project.problem} />
      <SolutionSection solution={project.solution} />
      <LessonsSection lessons={project.lessons} />
    </Container>
  )
}
