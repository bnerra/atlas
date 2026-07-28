import CurrentBearing from '@/components/home/CurrentBearing'
import Hero from '@/components/home/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentBearing />
    </>
    // <main className='min-h-screen'>
    //   <Container>
    //     <div className='py-20 space-y-8'>
    //       <h1 className='text-5xl font-bold'>
    //         Atlas
    //       </h1>
    //       <Card>
    //         <h2 className='text-2xl font-semibold'>
    //           The room is built.
    //         </h2>
    //         <p className='mt-4 text-atlas-text-muted'>
    //           Next stop: the journey begins.
    //         </p>
    //       </Card>
    //     </div>
    //   </Container>
    // </main>
  )
}
