import { Popover } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
  return (
    <Popover as='nav' className='block md:hidden'>
      <Popover.Button className='outline-none'>
        <FaBars className='w-6 h-6' />
      </Popover.Button>
      <Popover.Panel className='absolute top-0 right-0 left-0 bottom-0'>
        <div className='bg-gray-800 p-3'>
          <div className='flex justify-between items-center p-3'>
            <a className='text-3xl text-cyan-600 font-bold font-exo' href='/'>
              <h1>Alif Faizar</h1>
            </a>
            <Popover.Button>
              <FaTimes className='w-6 h-6' />
            </Popover.Button>
          </div>
          <div className='flex flex-col font-medium text-lg p-3 space-y-1'>
            <a
              className='px-3 hover:bg-gray-900 hover:text-gray-200 rounded'
              href='/'
            >
              Home
            </a>
            <a
              className='px-3 hover:bg-gray-900 hover:text-gray-200 rounded'
              href='/projects'
            >
              Projects
            </a>
            <a
              className='px-3 hover:bg-gray-900 hover:text-gray-200 rounded'
              href='/blog'
            >
              Blog
            </a>
            <a
              className='px-3 hover:bg-gray-900 hover:text-gray-200 rounded'
              href='/about'
            >
              About Me
            </a>
            <a
              className='text-center hover:font-semibold py-1 bg-cyan-600 text-gray-200 hover:text-cyan-600 hover:bg-transparent hover:outline-cyan-600 rounded hover:outline'
              href='/#contact'
            >
              Contact
            </a>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default MobileNav;
