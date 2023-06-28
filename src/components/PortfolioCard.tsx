import { IProject } from '@/components/sections/Portfolio'

export default function PortfolioCard(project: IProject) {
  return (
    <>
      <div key={project.name} className='bg-zinc-900 pb-4 rounded-b-lg'>
        <div className='space-y-4'>
          <div className='aspect-w-3 aspect-h-2'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='rounded-t-lg object-cover shadow-lg aspect-video'
              src={project.imageUrl}
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
            <div className='flex justify-center items-center gap-2'>
              <a
                className='bg-cyan-600 px-6 rounded py-1 text-sm text-zinc-300'
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                Visit
              </a>
              <a
                className='bg-cyan-600 px-6 rounded py-1 text-sm text-zinc-300'
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
