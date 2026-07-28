import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import ProjectHero from '@/components/projects/ProjectHero'
import ProblemSection from "@/components/projects/ProblemSection"
import SolutionSection from "@/components/projects/SolutionSection"
import LessonsSection from "@/components/projects/LessonsSection"
import { projects } from '@/data/projects'
import ArchitectureSection from '@/components/projects/ArchitectureSection'
import ChallengeSection from '@/components/projects/ChallengeSection'
import ProjectShowcase from '@/components/projects/ProjectShowcase'
import ProjectMetadata from '@/components/projects/ProjectMetadata'
import IdeaSection from '@/components/projects/IdeaSection'

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <Container>
      <ProjectHero project={project} />
      <ProjectShowcase project={project} />
      {project.metadata && (
        <ProjectMetadata metadata={project.metadata} />
      )}
      {project.idea && (
        <IdeaSection idea={project.idea} />
      )}
      <ProblemSection problem={project.problem} />
      <SolutionSection solution={project.solution} />
      {project.architecture && (
        <ArchitectureSection architecture={project.architecture} />
      )}
      {project.challenges && (
        <ChallengeSection challenges={project.challenges} />
      )}
      <LessonsSection lessons={project.lessons} />
    </Container>
  )
}
