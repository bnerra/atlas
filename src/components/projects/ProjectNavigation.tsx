'use client';
import Link from 'next/link'
import { projectSections } from '@/data/projectSections'

export default function ProjectNavigation() {
  return (
    <aside className='hidden xl:block sticky top-32 self-start'>
      <nav>

        <p className='mb-6 text-xs uppercase tracking-[0.25em] text-atlas-muted'>
          On this page
        </p>

        <ul className='space-y-3'>
          {projectSections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className='text-sm text-atlas-muted transition-colors hover:text-atlas-accent'
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>

      </nav>
    </aside>
  )
}
