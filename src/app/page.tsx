import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Container>
        <div className='py-20 space-y-8'>
          <h1 className='text-5xl font-bold'>
            Atlas
          </h1>
          <Card>
            <h2 className='text-2xl font-semibold'>
              Design System Test
            </h2>
            <p>
              If this card feels intentional, the foundation is working.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  )
}
