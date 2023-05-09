import Marquee from 'react-fast-marquee';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <Marquee loop={0} pauseOnHover className='py-6 z-0'>
      <div className='flex flex-row gap-6 mr-6'>
        {SKILLS.map((skill) => (
          <div key={skill.name}>
            <img
              src={`/icons/${skill.logo}`}
              alt={skill.name}
              className='w-16 h-16 md:w-20 md:h-20'
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
}
