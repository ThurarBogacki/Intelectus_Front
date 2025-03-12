"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTheme } from "../context/ThemeContext";

interface CarouselProps {
    children: React.ReactNode | React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const slides = Array.isArray(children) ? children : [children];
    const { theme } = useTheme();

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            grabCursor={true}
            className={`w-full h-[400px] min-w-[300px] bg-[#0c729d] rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'bg-opacity-20 ' : 'bg-opacity-100 text-[#FFF]'}`}
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
