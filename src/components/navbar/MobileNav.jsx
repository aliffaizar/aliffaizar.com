import { Popover } from '@headlessui/react';
import MenuIcon from '../../components/icons/MenuIcon';
import XIcon from '../../components/icons/XIcon';

const MobileNav = () => {
  return (
    <Popover as='nav' className='block md:hidden'>
      <Popover.Button className='outline-none font-bold'>
        <MenuIcon />
      </Popover.Button>
      <Popover.Panel className='absolute top-0 right-0 left-0 bottom-0'>
        <div className='bg-gray-800 p-3'>
          <div className='flex justify-between items-center p-3'>
            <a className='text-3xl text-cyan-600 font-bold font-exo' href='/'>
              <h1>Alif Faizar</h1>
            </a>
            <Popover.Button className='p-1 bg-gray-900/30 rounded'>
              <XIcon />
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
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default MobileNav;
