import { getAllPosts } from '@/utils/api'
import { formatDate } from '@/utils/formatDate'

export default function Blogs() {
  const posts = getAllPosts('blogs')
  return (
    <>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>Blog</h1>
      </div>
      <div className='mx-auto mt-12 grid gap-5 lg:max-w-none md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <div
            key={post.title}
            className='flex flex-col overflow-hidden rounded-lg shadow-lg'
          >
            <div className='flex-shrink-0'>
              <img
                className='h-48 w-full object-cover'
                src={post.image}
                alt={post.title}
              />
            </div>
            <div className='flex flex-1 flex-col justify-between bg-zinc-900 p-6'>
              <div className='flex-1'>
                <div className='flex items-center gap-2'>
                  <time className='text-sm' dateTime={formatDate(post.date)}>
                    {formatDate(post.date)}
                  </time>
                  <p className='text-sm font-medium flex gap-2 text-cyan-600'>
                    {post.tags.map((tag) => (
                      <span
                        className='bg-cyan-300 px-2 py-0.5 rounded'
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
                <a href={`/blogs/${post.slug}`} className='mt-2 block'>
                  <p className='text-xl font-semibold'>{post.title}</p>
                  <p className='mt-3 text-base text-zinc-400 line-clamp-3'>
                    {post.excerpt}
                  </p>
                </a>
              </div>
              <div className='flex mt-4 space-x-1 text-sm text-gray-500'></div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
