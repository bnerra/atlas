import Container from '@/components/ui/Container'

export default function Header() {
  return (
    <header
      className='
        sticky
        top-0
        z-50
        border-b
        border-[var(--atlas-border)]
        bg-[rgba(11,18,32,0.75)]
        backdrop-blur-md
      '
    >
      <Container>
        <div className='flex h-20 items-center justify-between'>
          <div className='text-xl font-semibold tracking-tight'>
            Atlas
          </div>

          <nav className='hidden gap-8 text-sm text-[var(--atlas-text-muted)]'>
            <a href='/'>
              Home
            </a>
            <a href='/projects'>
              Projects
            </a>
            <a href='/about'>
              About
            </a>
            <a href='/resume'>
              Resume
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
