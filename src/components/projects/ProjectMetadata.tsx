import { ProjectMetadata as ProjectMetadataType } from '@/types/project'

interface ProjectMetadataProps {
  metadata: ProjectMetadataType[]
}

export default function ProjectMetadata({
  metadata
}: ProjectMetadataProps) {
  return (
    <section className='pb-16'>

      <div className='
          grid
          gap-4
          rounded-atlas-lg
          border
          border-atlas-border
          bg-atlas-surface-raised
          p-6
          sm:grid-cols-2
          lg:grid-cols-3
        '
      >
        {metadata.map((item) => (
          <div key={item.label}>

            <p className='text-sm uppercase tracking-wide text-atlas-muted'>
              {item.label}
            </p>

            <p className='mt-1 font-medium'>
              {item.value}
            </p>

          </div>
        ))}
      </div>
    </section>
  )
}
