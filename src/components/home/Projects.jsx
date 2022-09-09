import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../Card';

function Projects({ projects }) {
  return (
    <>
      <div className='flex justify-between items-end'>
        <h2 className='text-3xl font-semibold text-gray-200'>Projects</h2>
        <a href='' className='text-cyan-600 hover:scale-110'>
          view all
        </a>
      </div>
      <Swiper
        className='p-0 md:p-5'
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        style={{
          '--swiper-pagination-color': '#0891b2',
          '--swiper-pagination-bullet-inactive-color': '#fff',
          '--swiper-pagination-bullet-inactive-opacity': '.7',
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.frontmatter.title} className='p-1'>
            <Card data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Projects;
