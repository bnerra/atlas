import ProjectSection from './ProjectSection'
import { ChallengeNode } from '@/types/project'

interface ChallengeSectionProps {
  challenges: ChallengeNode[]
}

export default function ChallengeSection({
  challenges
}: ChallengeSectionProps) {
  return (
    <ProjectSection id='challenges' title='Challenges'>
      <div className='space-y-6'>
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className='
              rounded-atlas-md
              border
              border-atlas-border
              bg-atlas-surface-raised
              p-6
            '
          >
            <h3 className='text-xl font-semibold'>
              {challenge.title}
            </h3>
            <p className='mt-3 text-atlas-muted'>
              {challenge.description}
            </p>
          </div>
        ))}
      </div>
    </ProjectSection>
  )
}
