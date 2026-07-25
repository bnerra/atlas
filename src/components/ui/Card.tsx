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
        rounded-[var(--atlas-radius-lg)]
        border
        border-[var(--atlas-border)]
        bg-[var(--atlas-surface)]
        p-6
        shadow-[var(--atlas-shadow)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[var(--atlas-shadow-hover)]
        ${className}
      `}
    >
      {children}
    </section>
  )
}
