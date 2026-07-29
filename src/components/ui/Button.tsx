import Link from 'next/link'
import {ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  target?: string
}

export default function Button({
  href,
  children,
  target
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel='noopener noreferrer'
      className='
        group
        inline-flex
        items-center
        gap-2
        rounded-atlas-md
        bg-atlas-accent
        px-6
        py-3
        font-medium
        text-atlas-background
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-atlas-hover
        focus:outline-none
        focus:ring-2
        focus:ring-atlas-accent
        focus:ring-offset-2
        focus:ring-offset-atlas-background
      '
    >
      {children}

      {/* <span
        aria-hidden
        className='
          transition-transform
          duration-300
          group-hover:translate-x-1
        '
      >
        →
      </span> */}
    </Link>
  )
}
