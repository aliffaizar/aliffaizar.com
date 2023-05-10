import Marquee from 'react-marquease';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <div className=''>
      <Marquee speed={2}>
        <div className='w-full flex flex-nowrap gap-4 mr-4'>
          {SKILLS.map((skill) => (
            <div key={skill.name} className='aspect-square w-20 h-20'>
              <img
                src={`/icons/${skill.logo}`}
                alt={skill.name}
                className='w-20 h-20'
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
