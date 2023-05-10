'use client'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <section id='contact' className='px-0 md:px-4 lg:px-8 w-full'>
      <h1 className='text-center text-3xl md:text-4xl font-bold'>Contact</h1>
      <div className='mt-8 flex flex-col-reverse lg:flex-row gap-4 lg:gap-8'>
        <form className='w-full bg-zinc-900 p-8' onSubmit={onSubmit}>
          <div className='flex flex-col md:flex-row gap-2 lg:gap-4'>
            <input
              type='text'
              placeholder='Name'
              className='w-full bg-zinc-900 text-gray-300 border-b border-gray-300 outline-none px-2 py-1 focus:border-cyan-500 focus:ring-0'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full bg-zinc-900 text-gray-300 border-b border-gray-300 outline-none px-2 py-1 focus:border-cyan-500 focus:ring-0'
            />
          </div>
          <textarea
            cols={30}
            rows={3}
            placeholder='Message'
            className='w-full bg-zinc-900 text-gray-300 border-b border-gray-300 outline-none px-2 py-1 focus:border-cyan-500 focus:ring-0 mt-4 resize-none'
          />
          <div className='relative float-right'>
            <div className='relative mt-4'>
              <div className='bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 w-44 h-8 md:w-52 md:h-10'></div>
              <button
                type='submit'
                className='w-44 h-8 md:w-52 md:h-10 bg-white text-gray-900 font-mono text-sm md:text-base flex items-center justify-center absolute right-1 lg:right-2 bottom-1 lg:bottom-2 hover:right-0 hover:bottom-0'
              >
                Send
              </button>
            </div>
          </div>
        </form>
        <div className='w-full lg:w-1/3'>
          <h3 className='text-xl font-bold hidden lg:block mb-4'>
            Contact Info
          </h3>
          <div className='flex flex-col mb-2 items-center lg:items-start gap-4'>
            <div>
              <div className='flex items-center gap-2'>
                <PhoneIcon className='w-6 h-6' />
                <span>+62 852-2198-9686</span>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-2 hover:text-cyan-500'>
                <EnvelopeIcon className='w-6 h-6' />
                <a href='mailto:aliffaizar21@gmail.com'>
                  aliffaizar21@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
