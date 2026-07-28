import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { waypoints } from '@/data/waypoints'

export default function Waypoints() {
  return (
    <Container>
      <Section
        eyebrow='Journey'
        title='Waypoints'
        description='The moments and experiences that have shaped my path.'
      >
        <div className='relative'>
          <div className='
            absolute
            left-3
            top-0
            h-full
            w-px
            bg-atlas-border
          ' />
          <div className='space-y-10'>
            {waypoints.map((waypoint) => (
              <div
                key={waypoint.title}
                className='relative pl-10'
              >
                <div className='
                  absolute
                  left-0
                  top-2
                  h-6
                  w-6
                  rounded-full
                  border
                  border-atlas-accent
                  bg-atlas-background
                ' />

                <h3 className='
                  text-2xl
                  font-semibold
                '>
                  {waypoint.title}
                </h3>

                <p className='
                  mt-3
                  max-w-2xl
                  leading-relaxed
                  text-atlas-muted
                '>
                  {waypoint.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  )
}
