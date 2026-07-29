import { AboutTimelineItem } from '@/data/about'

interface StoryTimelineProps {
  items: AboutTimelineItem[]
}

function TimelineNode({
  item
}: {
  item: AboutTimelineItem
}) {
  return (
    <article
      className='
        relative
        rounded-2xl
        border
        border-white/10
        bg-atlas-surface
        p-6
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
        transition
        duration-300
        hover:-translate-y-1
      '
    >

      {/* waypoint marker */}

      <div
        className='
          absolute
          left-[-2.15rem]
          top-8
          h-4
          w-4
          rounded-full
          border
          border-atlas-accent
          bg-atlas-background
          shadow-[0_0_18px_var(--color-atlas-accent)]
        '
      />

      <h3 className='text-xl font-medium text-atlas-foreground'>
        {item.title}
      </h3>

      <p className='mt-3 leading-relaxed text-atlas-muted'>
        {item.description}
      </p>
    </article>
  )
}

export default function StoryTimeline({
  items
}: StoryTimelineProps) {
  return (
    <section className='relative space-y-8'>
      <div>
        <p
          className='
            text-sm
            uppercase
            tracking-[0.25em]
            text-atlas-muted
          '
        >
          The Journey
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
          Waypoints that shaped the path
        </h2>
      </div>

      <div className='relative space-y-8 pl-8'>

        {/* Navigation line */}

        <div
          className='
            absolute
            left-2
            top-2
            h-[calc(100%-1rem)]
            w-px
            bg-white/10
          '
        />
        {
          items.map((item) => (
            <TimelineNode
              key={item.title}
              item={item}
            />
          ))
        }
      </div>
    </section>
  )
}
