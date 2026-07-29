import { aboutContent } from '@/data/about'
import AboutHero from '@/components/about/AboutHero'
import StoryTimeline from '@/components/about/StoryTimeline'
import PhilosophyGrid from '@/components/about/PhilosophyGrid'
import BeyondCode from '@/components/about/BeyondCode'

export default function AboutPage() {
  return (
    <main
      className='
        mx-auto
        w-full
        max-w-6xl
        space-y-14
        px-6
        py-12
        sm:px-8
        lg:px-6
      '
    >
      <AboutHero content={aboutContent.hero} />
      <StoryTimeline items={aboutContent.timeline} />
      <PhilosophyGrid items={aboutContent.philosophy} />
      <BeyondCode items={aboutContent.influences} />
    </main>
  )
}
