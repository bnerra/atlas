import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export default function Badge({
  children
}: BadgeProps) {
  return (
    <span
      className='
        inline-flex
        items-center
        rounded-full
        border
        border-atlas-border
        bg-atlas-surface-raised
        px-3
        py-1
        text-sm
        text-atlas-muted
      '
    >
      {children}
    </span>
  )
}
