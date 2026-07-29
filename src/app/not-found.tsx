import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className='
        flex
        min-h-[70vh]
        items-center
        justify-center
        px-6
        py-20
      '
    >
      <div
        className='
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-(--atlas-surface)
          p-10
          shadow-[0_24px_80px_rgba(0,0,0,0.28)]
        '
      >
        {/* Ambient glow */}
        <div
          className='
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,var(--color-atlas-accent),transparent_35%)]
            opacity-10
          '
        />

        <div className='relative text-center'>
          {/* Waypoint */}
          <div
            className='
              mx-auto
              mb-6
              h-3
              w-3
              rounded-full
              bg-atlas-accent
              shadow-[0_0_18px_var(--color-atlas-accent)]
            '
          />

          <p
            className='
              text-sm
              uppercase
              tracking-[0.25em]
              text-(--atlas-text-muted)
            '
          >
            404
          </p>

          <h1
            className='
              mt-4
              text-4xl
              font-semibold
              tracking-tight
              text-(--atlas-text)
              sm:text-5xl
            '
          >
            Waypoint not found
          </h1>

          <p
            className='
              mx-auto
              mt-6
              max-w-xl
              leading-relaxed
              text-(--atlas-text-muted)
            '
          >
            Looks like you have wandered beyond the edge of the map.
          </p>

          <div className='mt-10'>
            <Link
              href='/'
              className='
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-(--atlas-accent)
                bg-(--atlas-accent)
                px-6
                py-3
                font-medium
                text-(--atlas-background)
                transition
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_30px_var(--color-atlas-accent)]
              '
            >
              Return to Atlas
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div
            className='
              mx-auto
              mt-16
              mb-6
              h-px
              w-20
              bg-white/10
            '
          />
          <p
            className='
              text-sm
              italic
              tracking-wide
              text-(--atlas-text-muted)
              opacity-75
            '
          >
            Not all those who wander are lost.
          </p>
        </div>
      </div>
    </main>
  )
}
