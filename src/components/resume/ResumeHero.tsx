import type { ResumeHero as ResumeHeroContent } from '@/data/resume'


interface ResumeHeroProps {
  content: ResumeHeroContent
}

export default function ResumeHero({
  content
}: ResumeHeroProps) {

  return (
    <section
      className='
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-atlas-surface
        px-6
        py-8
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        sm:px-10
        sm:py-10
      '
    >
      <div
        className='
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,var(--color-atlas-accent),transparent_35%)]
          opacity-10
        '
      />
      <div className='relative  max-w-3xl'>
        <p
          className='
            mb-4
            text-sm
            uppercase
            tracking-[0.25em]
            text-atlas-muted
          '
        >
          Professional Overview
        </p>

        <h1
          className='
            text-4xl
            font-semibold
            tracking-tight
            text-atlas-foreground
            sm:text-5xl
          '
        >
          {content.title}
        </h1>

        <p
          className='
            mt-6
            max-w-2xl
            text-xl
            leading-relaxed
            text-atlas-muted
          '
        >
          {content.description}
        </p>
      </div>
    </section>
  )
}
