import { PhotoIcon } from '@heroicons/react/24/solid'

export default function Portfolio() {
  return (
    <section id='portfolio' className='px-0 md:px-4 py-8 lg:px-8 w-full'>
      <h1 className='text-center text-3xl md:text-4xl font-bold'>Portfolio</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8'>
        <div className='bg-zinc-900 flex gap-3'>
          <div className='h-full aspect-square'>
            <PhotoIcon className='w-48 h-48' />
          </div>
          <div className='w-full py-8'>
            <div className='flex flex-wrap items-center gap-2 mb-4'>
              <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                react
              </span>
              <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                next
              </span>
              <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                next
              </span>
              <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                next
              </span>
            </div>
            <h3 className='text-xl md:2xl font-bold'>
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
        </div>
        <div className='bg-zinc-900 flex gap-3'>
          <div className='h-full aspect-square'>
            <PhotoIcon className='w-48 h-48' />
          </div>
          <div>
            <div className='w-full py-8'>
              <div className='flex flex-wrap items-center gap-2 mb-4'>
                <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                  react
                </span>
                <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                  next
                </span>
                <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                  next
                </span>
                <span className='text-cyan-500 bg-cyan-500/20 px-4 py-1 text-center text-sm'>
                  next
                </span>
              </div>
              <h3 className='text-xl md:2xl font-bold'>
                Lorem ipsum dolor sit amet.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
