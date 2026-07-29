import Link from 'next/link'
import type { ResumeAction } from '@/data/resume'

interface ResumeActionsProps {
  actions: ResumeAction[]
}

export default function ResumeActions({
  actions
}: ResumeActionsProps) {
  return (
    <section
      className='
        flex
        flex-col
        gap-6
        rounded-3xl
        border
        border-white/10
        bg-atlas-surface
        p-6
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:p-8
      '
    >
      <div>
        <p
          className='
            text-sm
            uppercase
            tracking-[0.25em]
            text-atlas-muted
          '
        >
          Resume Document
        </p>
        <h2
          className='
            mt-2
            text-2xl
            font-semibold
            text-atlas-foreground
          '
        >
          Continue exploring my experience
        </h2>
        <p
          className='
            mt-3
            max-w-md
            text-atlas-muted
          '
        >
          View a detailed summary of my professional experience,
          technical skills, and project history.
        </p>
      </div>
      <div
        className='
          flex
          flex-col
          gap-3
          sm:flex-row
        '
      >
        {
          actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              className='
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-atlas-accent
                px-5
                py-3
                font-medium
                text-atlas-accent
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-atlas-accent
                hover:text-atlas-background
              '
            >
              {action.label}
              <span
                aria-hidden
                className='ml-2'
              >
                →
              </span>
            </Link>
          ))
        }
      </div>
    </section>
  )
}
