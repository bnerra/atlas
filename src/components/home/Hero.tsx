// import Container from '@/components/ui/Container'
import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      {/* <Container> */}
        <div className='py-14 md:py-32 lg:py-20'>
          <p className='mb-6 text-sm uppercase tracking-[0.25em] text-atlas-accent'>
            {profile.intro}
          </p>

          <h1 className='max-w-4xl text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-8xl'>
            {profile.name}
          </h1>

          <p className='mt-8 max-w-2xl text-xl leading-relaxed text-atlas-muted'>
            {profile.tagline}
          </p>
        </div>
      {/* </Container> */}
    </section>
  )
}
