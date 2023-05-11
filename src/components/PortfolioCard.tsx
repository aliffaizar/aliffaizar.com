import { IProject } from '@/sections/Portfolio'

export default function PortfolioCard(project: IProject) {
  return (
    <>
      <a
        href={project.githubUrl}
        target='_blank'
        key={project.name}
        className='bg-zinc-900 pb-4 rounded-b-lg'
      >
        <div className='space-y-4'>
          <div className='aspect-w-3 aspect-h-2'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='rounded-t-lg object-cover shadow-lg'
              src='/images/placeholder.jpg'
              alt={project.name}
            />
          </div>

          <div className='space-y-2 px-4'>
            <div className='space-y-1 text-lg font-medium leading-6 text-center'>
              <h3>{project.name}</h3>
            </div>
            <div className='flex-wrap justify-center items-center gap-2 flex'>
              {project.tech.map((tech) => (
                <span key={tech} className='text-sm font-medium text-gray-400'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
