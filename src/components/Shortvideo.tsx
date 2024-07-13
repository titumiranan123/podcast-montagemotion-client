import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
import img from '../assets/shorts.png';

const Shortvideo: React.FC = () => {
    return (
        <div className='flex justify-between max-w-[1240px] gap-[110px] overflow-hidden mx-auto'>
            <div className=' w-1/2 flex justify-start flex-col'>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] poppins font-bold text-[64px] W-[409px]  text-left leading-[64px] '>OUR RECENT PROJECT</h1>
                <p className='opensans mt-[34px] font-[600] text-[20px] text-[#D9D9D9] md:w-[505px] leading-[25.6px]'>Montage motion is the reliable digital solutions provider to grow your business 3x faster. We provide services on Video Editing and special service on Podcast.</p>
                <button className='py-4 mt-[82px] px-6 border bg-[#FFFFFF] rounded-[16px] flex justify-center items-center opensans font-[700] text-[20px] text-[#03070D]  w-[280px] shadow'>Get YOur Shorts Edited</button>
            </div>
            <div className='w-1/2'>
                <div className='w-[400px] relative'>
                    <SwiperComponent
                        direction="vertical"
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={{ // Customize navigation buttons
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }}
                        pagination={{ clickable: true }}
                        mousewheel={{ forceToAxis: true }}
                        modules={[Navigation, Mousewheel]}
                        style={{ width: '487px', height: '680.23px' }}
                    >
                        <SwiperSlide>
                            <img className='w-[387px]' src={img} alt="Slide 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content"><img src={img} alt="Slide 2" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-content"><img src={img} alt="Slide 3" /></div>  </SwiperSlide>
                    </SwiperComponent>
                    <div className="swiper-button-prev-custom absolute top-[45%] left-0 transform -translate-y-1/2 z-10">
                        <FaArrowLeft />
                    </div>
                    <div className="swiper-button-next-custom absolute top-[55%] right-0 transform -translate-y-1/2 z-10">
                        <FaArrowRight />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shortvideo;
