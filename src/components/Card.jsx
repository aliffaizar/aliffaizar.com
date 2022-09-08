export default function Card({ data }) {
  return (
    <div className='bg-gray-800 rounded p-3 lg:p-5 relative hover:scale-0 md:hover:scale-105'>
      <div className='aspect-h-3 aspect-w-4'>
        <img
          src='/placeholder-hero.jpg'
          className='object-cover object-center'
        />
      </div>
      <a href=''>
        <div className='absolute inset-x-3 lg:inset-x-5 p-3 lg:p-5 bg-black/50 bottom-3 lg:bottom-5'>
          <h2 className='text-xl text-center font-semibold text-gray-200'>
            {data.frontmatter.title}
          </h2>
        </div>
      </a>
    </div>
  );
}
