import { PhilosophyItem } from '@/data/about'

interface PhilosophyGridProps {
  items: PhilosophyItem[]
}

export default function PhilosophyGrid({
  items
}: PhilosophyGridProps) {

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
          Engineering Philosophy
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
          How I approach building
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-3'>
        {
          items.map((item) => (
            <PhilosophyCard
              key={item.title}
              item={item}
            />
          ))
        }
      </div>
    </section>
  )
}

function PhilosophyCard({
  item
}: {
  item: PhilosophyItem
}) {

  return (
    <article
      className='
        group
        rounded-2xl
        border
        border-white/10
        bg-atlas-surface
        p-6
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
        transition
        duration-300
        hover:-translate-y-1
        hover:border-atlas-accent
      '
    >
      <h3
        className='
          text-xl
          font-medium
          text-atlas-foreground
        '
      >
        {item.title}
      </h3>

      <p
        className='
          mt-4
          leading-relaxed
          text-atlas-muted
        '
      >
        {item.description}
      </p>
    </article>
  )
}
