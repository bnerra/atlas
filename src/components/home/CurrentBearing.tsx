import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { BearingGroup, currentBearing } from '@/data/currentBearing'


export default function CurrentBearing() {
  return (
    <Container>
      <Section
        eyebrow='Right Now'
        title='Current Bearing'
        description="A snapshot of what I'm actively building, learning and exploring."
      >
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>

          {currentBearing.map((group: BearingGroup) => (
            <Card key={group.title}>
              
              <h3 className='text-xl font-semibold'>
                {group.title}
              </h3>

              <ul className='mt-6 space-y-3'>
                {group.items.map((item: string) => (
                  <li
                    key={item}
                    className='text-atlas-muted'
                  >
                    • {item}
                  </li>
                ))}
              </ul>

            </Card>
          ))}

        </div>
      </Section>
    </Container>
  )
}
