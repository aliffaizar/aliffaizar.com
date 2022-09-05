import GithubIcon from '../components/icons/GithubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import MailIcon from '../components/icons/MailIcon';

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-700 space-y-3 p-5'>
      <div className='flex md:flex-row flex-col w-full items-center justify-center space-x-5 space-y-1'>
        <p className='text-center'>created with ❤️ by Alif Faizar</p>
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
          <GithubIcon />
        </a>
        <a
          href='https://github.com/aliffaizar'
          className='hover:text-gray-200 hover:scale-110'
          target='_blank'
        >
          <TwitterIcon />
        </a>
        <a
          href='"mailto:hello@aliffaizar.com'
          className='hover:text-gray-200 hover:scale-110'
          target='_blank'
        >
          <MailIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
