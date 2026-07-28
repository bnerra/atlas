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
        bg-[rgba(11,18,32,0.75)]
        backdrop-blur-md
      '
    >
      <Container>
        <div className='flex h-20 items-center justify-between'>
          <div className='text-xl font-semibold tracking-tight'>
            Atlas
          </div>

          <nav className='hidden gap-8 text-sm text-(--atlas-text-muted)'>
            {navigation.map((item: NavigationItem) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}

          </nav>
        </div>
      </Container>
    </header>
  )
}
