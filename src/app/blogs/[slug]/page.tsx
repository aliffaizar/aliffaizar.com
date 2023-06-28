import { ContentTemplate } from '@/components/ContentTemplate'
import { getSinglePost } from '@/utils/api'

export default function Blog({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const post = getSinglePost(slug, 'blogs')

  return (
    <>
      <div className='relative'>
        <img
          src={post.image}
          alt={post.title}
          className='mt-4 md:mt-8 h-72 lg:h-96 w-full object-cover'
        />
        <div className='absolute inset-0 z-0 bg-black/30'></div>
        <h1 className='absolute inset-x-8 z-10 bottom-8 text-white text-3xl font-bold tracking-tight sm:text-4xl'>
          {post.title}
        </h1>
      </div>
      <ContentTemplate content={post.content} />
    </>
  )
}
