import dynamic from 'next/dynamic'

import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'

export default function Home() {
  return (
    <main className='min-h-full pb-28 md:pb-16 flex flex-col items-center justify-center w-full'>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
