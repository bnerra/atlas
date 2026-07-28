import CurrentBearing from '@/components/home/CurrentBearing'
import Explore from '@/components/home/Explore'
import Hero from '@/components/home/Hero'
import Waypoints from '@/components/home/Waypoints'

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentBearing />
      <Explore />
      <Waypoints />
    </>
  )
}
