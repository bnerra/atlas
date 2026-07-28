import Link from 'next/link'
import Container from '@/components/ui/Container'
import { SocialLink, socials } from '@/data/socials'

export default function Footer() {
  return (
    <footer className='mt-32 border-t border-atlas-border'>
      <Container>
        {/* <div className='py-8 text-sm text-atlas-muted flex justify-between'> */}
        <div className='flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between'>
          <div>

            <p className='text-lg font-semibold'>
              ATLAS
            </p>

            <p className='mt-2 max-w-md text-sm leading-relaxed text-atlas-muted'>
              A collection of projects, ideas, lessons and engineering decisions.
            </p>

          </div>

          <div className='flex gap-6'>
            {socials.map((item: SocialLink) => (
              <Link
                key={item.href}
                href={item.href}
                className='
                  text-sm
                  text-atlas-muted
                  transition-colors
                  hover:text-atlas-foreground
                '
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
