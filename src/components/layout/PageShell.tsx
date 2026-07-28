import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({
  children
}: PageShellProps) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
    // <div className='min-h-screen flex flex-col'>
    //   <Header />

    //   <main className='flex-1'>
    //     {children}
    //   </main>

    //   <Footer />
    // </div>
  )
}