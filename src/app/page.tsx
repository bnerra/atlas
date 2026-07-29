import CurrentBearing from '@/components/home/CurrentBearing'
import Explore from '@/components/home/Explore'
import Hero from '@/components/home/Hero'
import HeroPortrait from '@/components/home/HeroPortrait'
import Waypoints from '@/components/home/Waypoints'
import Container from '@/components/ui/Container'

export default function Home() {
  return (
    <>
      <Container>
        <section
          className='
            grid
            gap-2
            items-center
            md:grid-cols-[minmax(0,1fr)_280px]
            lg:grid-cols-[minmax(0,1fr)_320px]
            xl:grid-cols-[minmax(0,1fr)_360px]
          '
        >
          <Hero />
          <HeroPortrait />
        </section>
      </Container>
      <Explore />
      <CurrentBearing />
      <Waypoints />
    </>
  )
}
