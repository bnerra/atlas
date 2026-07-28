import ProjectSection from './ProjectSection'

interface SolutionSectionProps {
  solution: string
}

export default function SolutionSection({
  solution,
}: SolutionSectionProps) {
  return (
    <ProjectSection title='The Approach'>
      {solution}
    </ProjectSection>
  )
}
