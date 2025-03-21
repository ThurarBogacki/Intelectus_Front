'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MarketplaceItem from './Marketplace-item';
import Image from 'next/image';
import arrow from '../public/images/arrow.svg';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useRef } from 'react';

interface MarketplaceCarouselProps {
  content: { type: string, title: string, accessLink: string, detailLink: string, image: string }[];
}

export default function MarketplaceCarousel({ content }: MarketplaceCarouselProps) {
  const { theme } = useTheme();

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      document.querySelector(".custom-prev")?.addEventListener("click", () => swiperInstance.slidePrev());
      document.querySelector(".custom-next")?.addEventListener("click", () => swiperInstance.slideNext());
    }
  }, []);

  return (
    <div className="relative overflow-x-hidden mx-4 md3:mx-8 md2:mx-16">
      <div className="flex justify-between items-center mt-10 mb-4">

        <h2 className={`text-base ${theme === "dark" ? "text-[#D9D9D9]" : "text-[#6C6C6C]"}`}>Produtos bem avaliados</h2>

        <div className='right-4 md:right-8 space-x-2 md:space-x-4 grid grid-cols-2'>
          <button className="col-span-1 custom-prev">
            <Image src={arrow} alt="Scroll left" className='rotate-180 w-5 h-5' />
          </button>
          <button className="col-span-1 custom-next">
            <Image src={arrow} alt="Scroll right" className='w-5 h-5' />
          </button>
        </div>

      </div>
    
      <div className="container">
        <Swiper
        ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={"auto"}
          navigation={false}
          className="w-full"
          loop={true}
        >
          {content.map((content, index) => (
            <SwiperSlide key={index} className="justify-center max-w-[280px]">
              <MarketplaceItem
                type={content.type}
                title={content.title}
                accessLink={content.accessLink}
                detailLink={content.detailLink}
                image={content.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </div>
  );
}
