import Marquee from 'react-marquease'
import { SKILLS } from '../constants'

export default function Skills() {
  return (
    <div className='w-full mt-8 overflow-hidden'>
      <Marquee speed={2} key={1}>
        <div className='w-full flex flex-nowrap gap-1 md:gap-2 lg:gap-4 mr-1 md:mr-2 lg:mr-4 overflow-hidden'>
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className='aspect-square w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20'
            >
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/icons/${skill.logo}`}
                alt={skill.name}
                className='w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20'
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}
