import dynamic from 'next/dynamic'

import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Hero from '@/sections/Hero'
import Portfolio from '@/sections/Portfolio'

export default function Home() {
  return (
    <main className='min-h-full flex flex-col items-center justify-center w-full'>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
