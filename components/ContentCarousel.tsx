'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Course from './Course';
import Image from 'next/image';
import arrow from '../public/images/ComprasIcons/arrow.svg';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useRef } from 'react';

interface ContentCarouselProps {
  courses: { title: string; curr_module: string; image: string, link: string }[];
}

export default function ContentCarousel({ courses }: ContentCarouselProps) {
  const { theme } = useTheme();
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      document.querySelector(".custom-prev-2")?.addEventListener("click", () => swiperInstance.slidePrev());
      document.querySelector(".custom-next-2")?.addEventListener("click", () => swiperInstance.slideNext());
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center mt-10 mb-4 mx-4 md3:mx-8 md2:mx-16">
        <h2 className={`text-base ${theme === "dark" ? "text-[#D9D9D9]" : "text-[#6C6C6C]"}`}>CONTEÚDO DO CURSO</h2>

        <div className='right-4 md:right-8 space-x-2 md:space-x-4 grid grid-cols-2'>
          <button className="col-span-1 custom-prev-2">
            <Image src={arrow} alt="Scroll left" className='rotate-180 w-5 h-5' />
          </button>
          <button className="col-span-1 custom-next-2">
            <Image src={arrow} alt="Scroll right" className='w-5 h-5' />
          </button>
        </div>

      </div>

      <div className="container mx-auto ml-4 md3:ml-8 md2:ml-16">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={false}
          className="w-full"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} className="flex justify-center max-w-[240px]">
              <Course
                title={course.title}
                curr_module={course.curr_module}
                image={course.image}
                content="course"
                link={course.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}
