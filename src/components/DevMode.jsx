import LoadIcon from './icons/LoadIcon';

const DevMode = () => {
  return (
    <div className='w-full bg-gray-800'>
      <div className='container mx-auto flex items-center justify-center py-2'>
        <p className='flex items-center'>
          <span className='text-cyan-600 motion-safe:animate-spin'>
            <LoadIcon />
          </span>
          <span className='ml-3'>under construction</span>
        </p>
      </div>
    </div>
  );
};

export default DevMode;
