
interface ProfessionalSnapshotProps {
  content: string
}

export default function ProfessionalSnapshot({
  content
}: ProfessionalSnapshotProps) {

  return (
    <section
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
          max-w-3xl
        '
      >
        <p
          className='
            text-sm
            uppercase
            tracking-[0.25em]
            text-atlas-muted
          '
        >
          Professional Snapshot
        </p>
        <p
          className='
            mt-5
            text-lg
            leading-relaxed
            text-atlas-foreground
          '
        >
          {content}
        </p>
      </div>
    </section>
  )
}
