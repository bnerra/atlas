import Link from 'next/link'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { exploreItems } from '@/data/explore'

export default function Explore() {
  return (
    <Container>
      <Section
        eyebrow='Navigation'
        title='Explore'
        description='Discover the projects, experiences, and ideas that make up my journey.'
      >
        <div className='grid gap-6 md:grid-cols-2'>
          {exploreItems.map((item) => {
            const content = (
              <Card className={item.href ? 'group' : 'opacity-75'}>
                <div className='flex items-start justify-between'>

                  <h3
                    className={`
                      text-2xl
                      font-semibold
                      transition-colors
                      ${item.href ? 'group-hover:text-atlas-accent' : ''}
                    `}
                  >
                    {item.label}
                  </h3>

                  {item.href ? (
                    <span
                      className='
                        text-xl
                        text-atlas-muted
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      '
                    >
                      →
                    </span>
                  ) : (
                    <span
                      className='
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-atlas-muted
                      '
                    >
                      Coming Soon
                    </span>
                  )}

                </div>

                <p className='mt-6 leading-relaxed text-atlas-muted'>
                  {item.description}
                </p>
              </Card>
            )

            return item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className='group'
              >
                {content}
              </Link>
            ) : (
              <div key={item.label}>
                {content}
              </div>
            )
          })}
        </div>
      </Section>
    </Container>
  )
}
