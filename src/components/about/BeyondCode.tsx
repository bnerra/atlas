interface BeyondCodeProps {
  items: string[]
}

export default function BeyondCode({
  items
}: BeyondCodeProps) {
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
          Beyond the Code
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
          The experiences that continue to shape my perspective
        </h2>
      </div>
      <div
        className='
          grid
          gap-4
          sm:grid-cols-2
          lg:grid-cols-3
        '
      >
        {items.map((item) => (
          <article
            key={item}
            className='
              rounded-xl
              border
              border-white/10
              bg-atlas-surface
              px-5
              py-4
              transition
              duration-300
              hover:border-atlas-accent
              hover:-translate-y-1
            '
          >
            <div className='flex items-center gap-3'>
              <div
                className='
                  h-2
                  w-2
                  rounded-full
                  bg-atlas-accent
                  shadow-[0_0_10px_var(--color-atlas-accent)]
                '
              />
              <p className='text-atlas-foreground'>
                {item}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className='pt-20 text-center'>
        <div
          className='
            mx-auto
            mb-10
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
            text-atlas-muted
            opacity-80
          '
        >
          The journey continues.
          <br />
          Learning is living.
        </p>
      </div>
    </section>
  )
}
