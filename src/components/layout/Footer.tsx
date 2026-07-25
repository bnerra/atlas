import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className='border-t border-[var(--atlas-border)]'>
      <Container>
        <div className='py-8 text-sm text-[var(--atlas-text-muted)] flex justify-between'>
          <span>
            © {new Date().getFullYear()} Atlas
          </span>
          <span>
            Built with Next.js
          </span>
        </div>
      </Container>
    </footer>
  )
}
