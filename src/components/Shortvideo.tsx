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
        <div className='flex lg:flex-nowrap flex-wrap justify-between max-w-[1240px] gap-[110px] overflow-hidden mx-auto px-4'>
            <div className=' lg:w-1/2 w-full flex justify-start flex-col'>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#25AAE1] poppins font-bold md:text-[64px]   text-left md:leading-[64px] leading-[32px] text-[30px] w-full  '>OUR RECENT PROJECT</h1>
                <p className='opensans mt-[20px] md:mt-[34px] font-[600] md:text-[20px] text-[#D9D9D9] md:w-[505px] md:leading-[25.6px] leading-[16px] text-[14px]'>Montage motion is the reliable digital solutions provider to grow your business 3x faster. We provide services on Video Editing and special service on Podcast.</p>
                <button className='py-4 mt-[40px] md:mt-[82px] px-6 border bg-[#FFFFFF] rounded-[16px] flex justify-center items-center opensans font-[700] text-[20px] text-[#03070D]  w-[280px] shadow'>Get Your Shorts Edited</button>
            </div>
            <div className='lg:w-1/2 w-full '>
                <div className='md:w-[400px] mx-auto w-full relative'>
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
                    <div className="swiper-button-prev-custom absolute top-[45%] left-0 transform  -translate-y-1/2 z-10">
                        <FaArrowLeft />
                    </div>
                    <div className="swiper-button-next-custom absolute top-[55%] -right-2 transform -translate-y-1/2 z-10">
                        <FaArrowRight />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shortvideo;
