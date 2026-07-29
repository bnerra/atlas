interface EducationCardProps {
  degree: string
  school: string
}

export default function EducationCard({
  degree,
  school
}: EducationCardProps) {

  return (
    <section
      className='space-y-8'>
      <div>
        <p
          className='
            text-sm
            uppercase
            tracking-[0.25em]
            text-atlas-muted
          '
        >
          Education
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
          Academic Foundation
        </h2>
      </div>
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
              {degree}
            </h3>
            <p
              className='
                mt-3
                text-atlas-accent
              '
            >
              {school}
            </p>
          </div>
          <p
            className='
              text-sm
              text-atlas-muted
            '
          >
            2009 - 2014
          </p>
        </div>
      </article>
    </section>
  )
}
