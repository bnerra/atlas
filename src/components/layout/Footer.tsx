import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className='border-t border-atlas-border'>
      <Container>
        <div className='py-8 text-sm text-atlas-muted flex justify-between'>
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
