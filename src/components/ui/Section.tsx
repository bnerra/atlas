import { ReactNode } from 'react'

interface SectionProps {
  eyebrow?: string
  title: string
  description: string
  children: ReactNode
}

export default function Section({
  eyebrow,
  title,
  description,
  children
}: SectionProps) {
  return (
    <section className='py-20 md:py-28'>
      <div className='mb-12'>

        {eyebrow && (
          <p className='mb-3 text-sm uppercase tracking-[0.25em] text-atlas-accent'>
            {eyebrow}
          </p>
        )}

        <h2 className='text-4xl font-semibold tracking-tight'>
          {title}
        </h2>

        {description && (
          <p className='mt-4 max-w-2xl text-lg text-atlas-muted leading-relaxed'>
            {description}
          </p>
        )}

      </div>

      {children}
    </section>
  )
}
