import Container from '@/components/ui/Container'

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      <Container>
        <div className='py-24 md:py-32 lg:py-40'>

          <p className='mb-6 text-sm uppercase tracking-[0.25em] text-atlas-accent'>
            Welcome to Atlas
          </p>

          <h1 className='max-w-4xl text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-8xl'>
            Nickolas Berra
          </h1>

          <p className='mt-8 max-w-2xl text-xl leading-relaxed text-atlas-muted'>
            Software Engineer building thoughtful, scalable applications through curiosity, problem solving and continuous growth.
          </p>
          
        </div>
      </Container>
    </section>
  )
}
