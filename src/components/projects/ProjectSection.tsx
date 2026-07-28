import { ReactNode } from 'react'

interface ProjectSectionProps {
  id: string
  title: string
  children: ReactNode
}

export default function ProjectSection({
  id,
  title,
  children
}: ProjectSectionProps) {
  return (
    <section id={id} className='scroll-mt-32 py-12 md:py-16'>

      <h2 className='
        text-3xl
        font-semibold
        tracking-tight
      '>
        {title}
      </h2>

      <div className='
        mt-6
        max-w-3xl
        text-lg
        leading-relaxed
        text-atlas-muted
      '>
        {children}
      </div>

    </section>
  )
}
