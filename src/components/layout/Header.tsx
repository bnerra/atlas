import Container from '@/components/ui/Container'
import { navigation, NavigationItem } from '@/data/navigation'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className='
        sticky
        top-0
        z-50
        border-b
        border-atlas-border
        bg-atlas-background/80
        backdrop-blur-md
      '
    >
      <Container>
        <div className='flex h-18 items-center justify-between'>

          <Link
            href='/'
            className='text-lg font-semibold tracking-[0.2em]'
          >
            <span className='tracking-[0.35em] uppercase'>
              ATLAS
            </span>
          </Link>

          <nav>
            <ul className='flex items-center gap-8'>
              {navigation.map((item: NavigationItem) => (
                <li key={item.href}>
                  <Link
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
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </Container>
    </header>
  )
}
