import type { ExperienceItem } from '@/data/resume'

interface ExperienceOverviewProps {
  items: ExperienceItem[]
}

export default function ExperienceOverview({
  items
}: ExperienceOverviewProps) {

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
          Professional Experience
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
          Where I have built and contributed
        </h2>
      </div>
      <div className='space-y-6'>
        {
          items.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.timeframe}`}
              experience={experience}
            />
          ))
        }
      </div>
    </section>
  )
}

function ExperienceCard({
  experience
}: {
  experience: ExperienceItem
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
        sm:p-8
      '
    >
      <div
        className='
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-start
          sm:justify-between
        '
      >
        <div>
          <h3
            className='
              text-xl
              font-semibold
              text-atlas-foreground
            '
          >
            {experience.company}
          </h3>
          <p
            className='
              mt-1
              text-atlas-accent
            '
          >
            {experience.role}
          </p>
        </div>
        <p
          className='
            text-sm
            text-atlas-muted
          '
        >
          {experience.timeframe}
        </p>
      </div>
      <p
        className='
          mt-5
          max-w-3xl
          leading-relaxed
          text-atlas-muted
        '
      >
        {experience.summary}
      </p>
    </article>
  )
}
