import ProjectSection from './ProjectSection'

interface IdeaSectionProps {
  idea: string
}

export default function IdeaSection({
  idea
}: IdeaSectionProps) {
  return (
    <ProjectSection title='The Idea'>
      <p>{idea}</p>
    </ProjectSection>
  )
}
