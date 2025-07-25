
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavigationButtons from './NavigationButtons';

export default function CardSlider() {
    return (
        <div className="w-full mt-8 relative flex items-center justify-center flex-col gap-3 px-4 min-[450px]:px-0">
            <div className="w-full relative">
                <NavigationButtons mode="prev" />

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    pagination={{ 
                        clickable: true,
                        el: '.pagination'
                     }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="w-full h-[330px] bg-red-300"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[330px] bg-red-300"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[330px] bg-red-300"></div>
                    </SwiperSlide>
                </Swiper>

                <NavigationButtons mode="next" />
            </div>
            {/* pagination */}
            <div className="w-full flex items-center justify-center pagination mt-1"></div>
        </div>
    )
}