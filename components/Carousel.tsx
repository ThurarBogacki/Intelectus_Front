"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CarouselProps {
    children: React.ReactNode | React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const slides = Array.isArray(children) ? children : [children];

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            grabCursor={true}
            className="w-full h-[400px] min-w-[300px] bg-[#0C729D29] bg-opacity-20 rounded-2xl flex items-center justify-center"
        >
            {slides.map((child, index) => (
                <SwiperSlide 
                    key={index} 
                    className="flex items-center justify-center h-full w-full"
                >
                    <div className="flex items-center justify-center w-full h-full">
                        {child}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
