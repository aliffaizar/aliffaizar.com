import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-700 space-y-3 p-5'>
      <div className='flex md:flex-row flex-col w-full items-center justify-center space-x-5 space-y-1'>
        <p>created with ❤️ by Alif Faizar</p>
        <a
          href='https://buymeacoffee.com/aliffaizar'
          className='hover:text-gray-200 hover:scale-110'
          target='_blank'
        >
          ☕buy me a coffee
        </a>
      </div>
      <div className='flex w-full items-center justify-center space-x-5'>
        <a
          href='https://github.com/aliffaizar'
          className='hover:text-gray-200 hover:scale-110'
          target='_blank'
        >
          <FaGithub className='w-6 h-6' />
        </a>
        <a
          href='https://github.com/aliffaizar'
          className='hover:text-gray-200 hover:scale-110'
          target='_blank'
        >
          <FaTwitter className='w-6 h-6' />
        </a>
        <a
          href='"mailto:hello@aliffaizar.com'
          className='hover:text-gray-200 hover:scale-110'
          target='_blank'
        >
          <FaEnvelope className='w-6 h-6' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
