'use client'
import { Popover } from '@headlessui/react'
import {
  BriefcaseIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../Icons'

export default function MobileNav({
  scrollTo,
}: {
  scrollTo: (id: string) => void
}) {
  return (
    <>
      <Popover
        as='div'
        className='fixed bottom-0 w-full bg-zinc-800 block md:hidden text-gray-300'
      >
        {({ open }) => (
          <>
            <Popover.Overlay className='fixed inset-0 bg-black/60 -z-10' />
            <Popover.Panel className='bg-zinc-900/50 pb-4'>
              <Popover.Button className=' w-full flex items-center justify-center pt-4'>
                <ChevronDownIcon className='w-8 h-8' />
              </Popover.Button>
              <div className='px-8 py-4'>
                <div className='grid grid-cols-5 gap-4'>
                  <button
                    onClick={() => scrollTo('home')}
                    className='flex aspect-square rounded-md flex-col items-center justify-center w-full bg-zinc-800'
                  >
                    <HomeIcon className='w-8 h-8 group-hover:scale-125' />
                  </button>
                  <button
                    onClick={() => scrollTo('about')}
                    className='flex aspect-square rounded-md flex-col items-center justify-center w-full bg-zinc-800'
                  >
                    <UserIcon className='w-8 h-8 group-hover:scale-125' />
                  </button>
                  <button
                    onClick={() => scrollTo('portfolio')}
                    className='flex aspect-square rounded-md flex-col items-center justify-center w-full bg-zinc-800'
                  >
                    <BriefcaseIcon className='w-8 h-8 group-hover:scale-125' />
                  </button>
                  <button
                    onClick={() => scrollTo('contact')}
                    className='flex aspect-square rounded-md flex-col items-center justify-center w-full bg-zinc-800'
                  >
                    <EnvelopeIcon className='w-8 h-8 group-hover:scale-125' />
                  </button>
                  <a
                    href='https://github.com/aliffaizar'
                    target='_blank'
                    className='flex aspect-square rounded-md flex-col items-center justify-center w-full bg-zinc-800'
                  >
                    <span className='h-8 w-8'>
                      <GithubIcon />
                    </span>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/aliffaizar/'
                    target='_blank'
                    className='flex aspect-square rounded-md flex-col items-center justify-center w-full bg-zinc-800'
                  >
                    <span className='h-8 w-8'>
                      <LinkedInIcon />
                    </span>
                  </a>
                  <a
                    href='https://twitter.com/alif_faizar'
                    target='_blank'
                    className='flex aspect-square rounded-md flex-col items-center justify-center w-full bg-zinc-800'
                  >
                    <span className='h-8 w-8'>
                      <TwitterIcon />
                    </span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
            {!open && (
              <div className='flex bg-zinc-900/50 items-center w-full'>
                <button
                  onClick={() => scrollTo('home')}
                  className='flex h-20 items-center justify-center w-full flex-col border-r border-zinc-800'
                >
                  <HomeIcon className='w-8 h-8 group-hover:scale-125' />
                  <span>home</span>
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className='flex h-20 items-center justify-center w-full flex-col border-r border-zinc-800'
                >
                  <UserIcon className='w-8 h-8 group-hover:scale-125' />
                  <span>about</span>
                </button>
                <button
                  onClick={() => scrollTo('portfolio')}
                  className='flex h-20 items-center justify-center w-full flex-col border-r border-zinc-800'
                >
                  <BriefcaseIcon className='w-8 h-8 group-hover:scale-125' />
                  <span>portfolio</span>
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className='flex h-20 items-center justify-center w-full flex-col border-r border-zinc-800'
                >
                  <EnvelopeIcon className='w-8 h-8 group-hover:scale-125' />
                  <span>contact</span>
                </button>

                <Popover.Button
                  as='div'
                  className='flex h-20 items-center justify-center w-full cursor-pointer'
                >
                  <EllipsisHorizontalIcon className='w-8 h-8 group-hover:scale-125' />
                </Popover.Button>
              </div>
            )}
          </>
        )}
      </Popover>
      <div className='fixed bottom-0 w-full bg-zinc-800 block md:hidden text-gray-300'></div>
    </>
  )
}
