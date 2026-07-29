import { aboutContent } from '@/data/about'
import AboutHero from '@/components/about/AboutHero'
import StoryTimeline from '@/components/about/StoryTimeline'
import PhilosophyGrid from '@/components/about/PhilosophyGrid'
import BeyondCode from '@/components/about/BeyondCode'

export default function AboutPage() {
  return (
    <>
    <main className='space-y-16'>
      <AboutHero content={aboutContent.hero} />
      <StoryTimeline items={aboutContent.timeline} />
      <PhilosophyGrid items={aboutContent.philosophy} />
      <BeyondCode items={aboutContent.influences} />
    </main>
    {/* <section
  className="
    mt-24
    pb-12
    text-center
  "
>
  <div
    className="
      mx-auto
      mb-5
      h-1.5
      w-1.5
      rounded-full
      bg-(--atlas-accent)
      opacity-60
    "
  />

  <p
    className="
      text-sm
      italic
      tracking-wide
      text-(--atlas-text-muted)
      opacity-80
    "
  >
    The journey continues.
    <br />
    Learning is living.
  </p>
</section> */}
    </>
  )
}
