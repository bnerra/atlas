import ProjectSection from './ProjectSection'

interface SolutionSectionProps {
  solution: string
}

export default function SolutionSection({
  solution,
}: SolutionSectionProps) {
  return (
    <ProjectSection id='approach' title='The Approach'>
      {solution}
    </ProjectSection>
  )
}
