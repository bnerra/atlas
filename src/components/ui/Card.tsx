import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({
  children,
  className = ''
}: CardProps) {
  return (
    <section
      className={`
        relative
        overflow-hidden
        rounded-atlas-lg
        border
        border-atlas-border
        bg-atlas-surface
        p-6
        shadow-atlas
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-atlas-hover
        ${className}
      `}
    >
      {children}
    </section>
  )
}
