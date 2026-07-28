import ProjectSection from './ProjectSection'

interface ProblemSectionProps {
  problem: string
}

export default function ProblemSection({
  problem,
}: ProblemSectionProps) {
  return (
    <ProjectSection id='problem' title='The Problem'>
      {problem}
    </ProjectSection>
  )
}
