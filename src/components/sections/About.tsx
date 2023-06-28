'use client'
import dynamic from 'next/dynamic'
import { Prism } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import SkillsSkeleton from '@/components/SkillsSkeleton'
import { ABOUT } from '@/constants'

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <SkillsSkeleton />,
  ssr: false,
})

export default function About() {
  return (
    <section id='about' className='px-0 md:px-4 py-8 lg:px-8 w-full'>
      <h1 className='text-center text-3xl md:text-4xl font-bold'>About Me</h1>
      <div className='mt-8'>
        <Prism
          language='javascript'
          showLineNumbers
          wrapLongLines
          showInlineLineNumbers
          style={nightOwl}
        >
          {ABOUT}
        </Prism>
      </div>
      <Skills />
    </section>
  )
}
