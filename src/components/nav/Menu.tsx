import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../Icons';
import MobileNav from './MobileNav';

export default function Menu() {
  return (
    <>
      <div className='sticky w-20 bg-zinc-900 shadow h-screen top-0 hidden md:flex flex-col lg:py-4 xl:py-8 justify-between text-gray-300'>
        <div className='w-full'>
          <a
            href='#home'
            className='h-20 flex items-center group justify-center shadow-sm shadow-zinc-800 hover:text-cyan-500 flex-col'
          >
            <HomeIcon className='w-8 h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>Home</span>
          </a>

          <a
            href='/#about'
            className='h-20 flex items-center group justify-center shadow-sm shadow-zinc-800 hover:text-cyan-500 flex-col'
          >
            <UserIcon className='w-8 h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>About</span>
          </a>
          <a
            href='#portfolio'
            className='h-20 flex items-center group justify-center shadow-sm shadow-zinc-800 hover:text-cyan-500 flex-col'
          >
            <BriefcaseIcon className='w-8 h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>portfolio</span>
          </a>
          <a
            href='/#contact'
            className='h-20 flex items-center group justify-center shadow-sm shadow-zinc-800 hover:text-cyan-500 flex-col'
          >
            <EnvelopeIcon className='w-8 h-8 group-hover:scale-110' />
            <span className='text-xs group-hover:scale-110'>Contact</span>
          </a>
        </div>
        <div>
          <a
            href='https://github.com/aliffaizar'
            target='_blank'
            className='h-20 flex items-center group justify-center bg-cyan-950 hover:text-cyan-400 flex-col'
          >
            <span className='w-8 h-8 group-hover:scale-125'>
              <GithubIcon />
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/aliffaizar/'
            target='_blank'
            className='h-20 flex items-center group justify-center bg-cyan-950 hover:text-cyan-400 flex-col'
          >
            <span className='w-8 h-8 group-hover:scale-125'>
              <LinkedInIcon />
            </span>
          </a>
          <a
            href='https://twitter.com/alif_faizar'
            target='_blank'
            className='h-20 flex items-center group justify-center bg-cyan-950 hover:text-cyan-400 flex-col'
          >
            <span className='w-8 h-8 group-hover:scale-125'>
              <TwitterIcon />
            </span>
          </a>
        </div>
      </div>
      <MobileNav />
    </>
  );
}
