import type { CareerHighlight } from '@/data/resume'

interface CareerHighlightsProps {
  items: CareerHighlight[]
}

export default function CareerHighlights({
  items
}: CareerHighlightsProps) {

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
          Career Highlights
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
          Key points along the journey
        </h2>
      </div>
      <div
        className='
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        '
      >
        {
          items.map((item) => (
            <HighlightCard
              key={item.title}
              item={item}
            />
          ))
        }
      </div>
    </section>
  )
}

function HighlightCard({
  item
}: {
  item: CareerHighlight
}) {

  return (
    <article
      className='
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
      <h3
        className='
          text-2xl
          font-semibold
          text-atlas-accent
        '
      >
        {item.title}
      </h3>
      <p
        className='
          mt-3
          text-sm
          leading-relaxed
          text-atlas-muted
        '
      >
        {item.description}
      </p>
    </article>
  )
}
