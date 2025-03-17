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
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="flex justify-between items-center mt-10 mb-4">
        <h2 className={`text-base ${theme === "dark" ? "text-[#D9D9D9]" : "text-[#6C6C6C]"}`}>CONTEÚDO DO CURSO</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Slider */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
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

        <div className="absolute top-0 right-0 flex space-x-2 p-2 z-10">
          <button className="custom-prev-2">
            <Image src={arrow} alt="Scroll left" className="rotate-180 w-6 h-6" />
          </button>
          <button className="custom-next-2">
            <Image src={arrow} alt="Scroll right" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
