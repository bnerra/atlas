import Badge from '@/components/ui/Badge'
import type { TechnologyGroup } from '@/data/resume'


interface TechnologyGroupsProps {
  groups: TechnologyGroup[]
}

export default function TechnologyGroups({
  groups
}: TechnologyGroupsProps) {

  return (
    <section className='space-y-8'>
      <div>
        <p
          className='
            text-sm
            uppercase
            tracking-[0.25em]
            text-atlas-muted
          '
        >
          Technical Landscape
        </p>
        <h2
          className='
            mt-2
            text-3xl
            font-semibold
            tracking-tight
            text-atlas-foreground
          '
        >
          Tools and technologies I use to build
        </h2>
      </div>
      <div
        className='
          grid
          gap-6
          sm:grid-cols-2
        '
      >
        {
          groups.map((group) => (
            <TechnologyCard
              key={group.title}
              group={group}
            />
          ))
        }
      </div>
    </section>
  )
}

function TechnologyCard({
  group
}: {
  group: TechnologyGroup
}) {

  return (
    <article
      className='
        rounded-3xl
        border
        border-white/10
        bg-atlas-surface
        p-6
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
      '
    >
      <h3
        className='
          text-lg
          font-semibold
          text-atlas-foreground
        '
      >
        {group.title}
      </h3>
      <div
        className='
          mt-4
          flex
          flex-wrap
          gap-2
        '
      >
        {
          group.technologies.map((technology) => (
            <Badge key={technology}>
              {technology}
            </Badge>
            // <span
            //   key={technology}
            //   className='
            //     rounded-full
            //     border
            //     border-white/10
            //     px-3
            //     py-1
            //     text-sm
            //     text-atlas-muted
            //   '
            // >
            //   {technology}
            // </span>
          ))
        }
      </div>
    </article>
  )
}
