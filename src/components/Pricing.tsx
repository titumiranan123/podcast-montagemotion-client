import React from 'react';
import img from '../assets/iconright.png'
const Pricing: React.FC = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <div>
                <h1 className='text-[56px] bold text-center'>Pricing Plans</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='hover:bg-[#25AAE1] bg-[#0E141E] md:w-[386px] w-[98%] group h-[714px] transition-colors duration-200 ps-[36px] rounded-[24px]'>
                    <div className='  flex justify-center items-center'>
                        <p className='bg-[#25AAE1] hover: w-[162px] h-[48px] flex justify-center items-center rounded-br-[8px] rounded-bl-[8px] group-hover:bg-[#0E141E] text-white normal text-[20px]'>Basic</p>
                    </div>
                    <div>
                        <h1 className='bold text-[48px]   text-white text-center mt-9  leading-[60px]'>$40</h1>
                        <p className='text-white normal text-center leading-[25.6px] ms-4 -mt-2 text-[20px]'>15 Minutes</p>
                    </div>
                    <div className='mt-[44px] flex flex-col gap-[14px] '>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>4 Day Delivery</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>2 Day Revisions</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Up to 15 minutes of footage provided</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Up to 15 minutes running time</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Color Grading</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Sound design & mixing</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Motion Graphics</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Thumbnail</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center mt-[44px] mb-[56px]'>
                        <button className='bg-[#25AAE1] py-4 px-6 group-hover:bg-[#0E141E] text-white rounded-[16px] normal'> Get Started</button>
                    </div>

                </div>
                {/* second  */}
                <div className='hover:bg-[#25AAE1] bg-[#0E141E] md:w-[386px] w-[98%] group h-[714px] transition-colors duration-200 ps-[36px] rounded-[24px]'>
                    <div className='  flex justify-center items-center'>
                        <p className='bg-[#25AAE1] hover: w-[162px] h-[48px] flex justify-center items-center rounded-br-[8px] rounded-bl-[8px] group-hover:bg-[#0E141E] text-white normal text-[20px]'>Standard</p>
                    </div>
                    <div>
                        <h1 className='bold text-[48px]   text-white text-center mt-9  leading-[60px]'>$100</h1>
                        <p className='text-white normal text-center leading-[25.6px] ms-4 -mt-2 text-[20px]'>15 Minutes</p>
                    </div>
                    <div className='mt-[44px] flex flex-col gap-[14px] '>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>5 Day Delivery</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>3 Day Revisions</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Up to 45 minutes of footage provided</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Up to 45 minutes running time</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Color Grading</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Sound design & mixing</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Motion Graphics</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Thumbnail</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center mt-[44px] mb-[56px]'>
                        <button className='bg-[#25AAE1] py-4 px-6 group-hover:bg-[#0E141E] text-white rounded-[16px] normal'> Get Started</button>
                    </div>

                </div>
                {/* third  */}
                <div className='hover:bg-[#25AAE1] bg-[#0E141E] md:w-[386px] w-[98%] group h-[714px] transition-colors duration-200 ps-[36px] rounded-[24px]'>
                    <div className='  flex justify-center items-center'>
                        <p className='bg-[#25AAE1] hover: w-[162px] h-[48px] flex justify-center items-center rounded-br-[8px] rounded-bl-[8px] group-hover:bg-[#0E141E] text-white normal text-[20px]'>Premium</p>
                    </div>
                    <div>
                        <h1 className='bold text-[48px]   text-white text-center mt-9  leading-[60px]'>$130</h1>
                        <p className='text-white normal text-center leading-[25.6px] ms-4 -mt-2 text-[20px]'>15 Minutes</p>
                    </div>
                    <div className='mt-[44px] flex flex-col gap-[14px] '>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>6 Day Delivery</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>3 Day Revisions</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Up to 60 minutes of footage provided</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Up to 60 minutes running time</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Color Grading</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Sound design & mixing</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Motion Graphics</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-6 h-6' src={img} alt="im" />
                            <p className='text-white regular leading-[25.6px] text-[20px]'>Thumbnail</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center mt-[44px] mb-[56px]'>
                        <button className='bg-[#25AAE1] py-4 px-6 group-hover:bg-[#0E141E] text-white rounded-[16px] normal'> Get Started</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Pricing;