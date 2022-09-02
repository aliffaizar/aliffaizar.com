import { ImSpinner6 } from 'react-icons/im';

const DevMode = () => {
  return (
    <div className='w-full bg-gray-800'>
      <div className='container mx-auto flex items-center justify-center py-2'>
        <p className='flex items-center'>
          <ImSpinner6 className='w-5 h-5 text-cyan-600 motion-safe:animate-spin' />
          <span className='ml-3'>under construction</span>
        </p>
      </div>
    </div>
  );
};

export default DevMode;
