import ProjectSection from './ProjectSection'
import { ArchitectureNode } from '@/types/project'

interface ArchitectureSectionProps {
  architecture: ArchitectureNode[]
}

export default function ArchitectureSection({
  architecture
}: ArchitectureSectionProps) {
  return (
    <ProjectSection id='architecture' title='Architecture'>
      <div>
        {architecture.map((node, index) => (
          <div key={node.name}>
            <div
              className='
                rounded-atlas-md
                border
                border-atlas-border
                bg-atlas-surface-raised
                p-5
              '
            >
              <h3 className='
                text-lg
                font-semibold
                text-atlas-foreground
              '>
                {node.name}
              </h3>

              {node.description && (
                <p className='
                  mt-2
                  text-sm
                  text-atlas-muted
                '>
                  {node.description}
                </p>
              )}
            </div>

            {index < architecture.length - 1 && (
              <div className='
                py-3
                text-center
                text-atlas-accent
              '>
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </ProjectSection>
  )
}
