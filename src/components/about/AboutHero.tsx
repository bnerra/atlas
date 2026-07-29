import { AboutContent } from '@/data/about'

interface AboutHeroProps {
  content: AboutContent['hero']
}

export default function AboutHero({
  content
}: AboutHeroProps) {
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
        py-12
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        sm:px-10
        sm:py-16
      '
    >
      <div
        className='
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,var(--color-atlas-accent),transparent_35%)]
          opacity-10
        '
      />
      <div className='relative max-w-3xl'>
        <p
          className='
            mb-4
            text-sm
            uppercase
            tracking-[0.25em]
            text-atlas-muted
          '
        >
          Nickolas Berra
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

        <p className='mt-4 text-xl text-atlas-accent'>
          {content.subtitle}
        </p>

        <p className='mt-8 max-w-2xl leading-relaxed text-atlas-muted'>
          {content.introduction}
        </p>
      </div>
    </section>
  )
}
