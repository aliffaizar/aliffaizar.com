import Typewriter from '../components/TypeWriter'

export default function Hero() {
  return (
    <section
      id='home'
      className='h-[calc(100vh-2rem)] flex flex-col items-center justify-center w-full'
    >
      <div className='flex flex-col items-center justify-center gap-3 w-full md:max-w-2xl lg:max-w-4xl'>
        <div className='flex items-center flex-col gap-2 md:gap-4'>
          <h1 className='text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500'>
            Alif Faizar
          </h1>
          <Typewriter
            withIcon
            iconSize='3rem'
            text='Frontend Developer'
            className='text-white  p-2 text-4xl md:text-5xl lg:text-7xl w-full'
          />
          <span className='w-full h-1 rounded bg-gradient-to-r from-rose-400 via-sky-500 to-cyan-500'></span>
        </div>
        <p className='text-lg text-center md:text-xl'>
          my expertise lies in web development and I have a strong understanding
          of both front-end and back-end technologies. I have a deep interest in
          technology and it drives me to constantly seeking opportunities to
          expand my knowledge and improve my skills.
        </p>
        <div className='relative mt-4'>
          <div className='bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 w-64 h-12'></div>
          <a
            href=''
            className='w-64 h-12 bg-white text-gray-900 font-mono text-xl flex items-center justify-center absolute right-2 bottom-2 hover:right-0 hover:bottom-0'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
