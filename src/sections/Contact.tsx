'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string
const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      if (!form?.current) return
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form?.current, USER_ID)
      form.current.reset()
      setIsSent(true)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }
  return (
    <section id='contact' className='px-0 md:px-4 lg:px-8 w-full'>
      <h1 className='text-center text-3xl md:text-4xl font-bold'>Contact</h1>
      <div className='mt-8 flex flex-col-reverse lg:flex-row gap-4 lg:gap-8'>
        <form ref={form} className='w-full bg-zinc-900 p-8' onSubmit={onSubmit}>
          <h3 className='text-xl font-bold text-center'>Send me a message</h3>
          {isSent && (
            <p className='text-center text-cyan-600'>
              Your message has been sent. I will reply as soon as possible.
            </p>
          )}
          {isError && (
            <p className='text-center text-red-600'>
              Something went wrong. Please try again later.
            </p>
          )}
          <div className='flex flex-col md:flex-row gap-2 lg:gap-4'>
            <input
              type='text'
              placeholder='Name'
              name='user_name'
              required
              className='w-full bg-zinc-900 text-gray-300 border-b border-gray-300 outline-none px-2 py-1 focus:border-cyan-500 focus:ring-0'
            />
            <input
              type='email'
              placeholder='Email'
              name='user_email'
              required
              className='w-full bg-zinc-900 text-gray-300 border-b border-gray-300 outline-none px-2 py-1 focus:border-cyan-500 focus:ring-0'
            />
          </div>
          <textarea
            cols={30}
            rows={3}
            placeholder='Message'
            name='message'
            required
            className='w-full bg-zinc-900 text-gray-300 border-b border-gray-300 outline-none px-2 py-1 focus:border-cyan-500 focus:ring-0 mt-4 resize-none'
          />
          <div className='relative float-right'>
            {!isLoading && (
              <div className='relative mt-4'>
                <div className='bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 w-44 h-8 md:w-52 md:h-10'></div>
                <button
                  type='submit'
                  disabled={isSent}
                  className='w-44 h-8 md:w-52 md:h-10 bg-white text-gray-900 font-mono text-sm md:text-base flex items-center justify-center absolute right-1 lg:right-2 bottom-1 lg:bottom-2 hover:right-0 hover:bottom-0'
                >
                  Send
                </button>
              </div>
            )}
            {isLoading && (
              <div className='relative mt-4'>
                <button
                  type='submit'
                  disabled
                  className='w-44 h-8 md:w-52 md:h-10 bg-white text-gray-900 font-mono text-sm md:text-base flex items-center justify-center '
                >
                  Sending...
                </button>
              </div>
            )}
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
