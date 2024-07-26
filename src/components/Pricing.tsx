import React from 'react';

import { LuCheckCircle2 } from "react-icons/lu";
const Pricing: React.FC = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4  lg:mt-0 md:mt-32 mt-16'>
            <div>
                <h1 className='text-[56px] bold text-center  text-white'>Pricing Plans</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[80px] lg:grid-cols-3 gap-5'>
                <div className='optioncard  bg-[#0E141E] md:w-[386px] w-[98%] group h-[714px] transition-colors duration-200  rounded-[24px] group'>
                    <div className='  flex justify-center items-center'>
                        <p className='bg-[#25AAE1] hover: w-[162px] h-[48px] flex justify-center items-center rounded-br-[8px] rounded-bl-[8px] group-hover:bg-[#0E141E] text-white normal text-[20px]'>Basic</p>
                    </div>
                    <div className='group-hover:text-[#03070D] text-white'>
                        <h1 className='bold text-[48px]    text-center mt-9  leading-[60px]'>$40</h1>
                        <p className=' normal text-center leading-[25.6px] ms-4 -mt-2 text-[20px]'>15 Minutes</p>
                    </div>
                    <div className='mt-[44px] ps-[36px]  flex flex-col gap-[14px] '>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />

                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>4 Day Delivery</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>2 Day Revisions</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>Up to 15 minutes of footage provided</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>Up to 15 minutes running time</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>Color Grading</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>Sound design & mixing</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>Motion Graphics</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px] group-hover:text-[#0E141E] text-white'>Thumbnail</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center mt-[44px] mb-[56px]'>
                        <button className='bg-[#25AAE1] py-4 px-6  group-hover:bg-[#0E141E] text-white  rounded-[16px] normal'> Get Started</button>
                    </div>

                </div>
                {/* second  */}
                <div className='optioncard  bg-[#0E141E] md:w-[386px] w-[98%] group h-[714px] transition-colors duration-200  rounded-[24px]'>
                    <div className='  flex justify-center items-center'>
                        <p className='bg-[#25AAE1] hover: w-[162px] h-[48px] flex justify-center items-center rounded-br-[8px] rounded-bl-[8px] group-hover:bg-[#0E141E]  text-white normal text-[20px]'>Standard</p>
                    </div>
                    <div className='group-hover:text-[#03070D] text-white'>
                        <h1 className='bold text-[48px]    text-center mt-9  leading-[60px]'>$100</h1>
                        <p className=' normal text-center leading-[25.6px] ms-4 -mt-2 text-[20px]'>15 Minutes</p>
                    </div>
                    <div className='mt-[44px] ps-[36px] flex flex-col gap-[14px] group-hover:text-[#03070D] text-white'>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>5 Day Delivery</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>3 Day Revisions</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Up to 45 minutes of footage provided</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Up to 45 minutes running time</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Color Grading</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Sound design & mixing</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Motion Graphics</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Thumbnail</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center mt-[44px]  '>
                        <button className='bg-[#25AAE1] py-4 px-6 group-hover:bg-[#0E141E]  rounded-[16px] normal  text-white mb-[56px]'> Get Started</button>
                    </div>

                </div>
                {/* third  */}
                <div className='optioncard  bg-[#0E141E] md:w-[386px] w-[98%] group h-[714px] transition-colors duration-200  rounded-[24px]'>
                    <div className='  flex justify-center items-center text-white'>
                        <p className='bg-[#25AAE1] hover: w-[162px] h-[48px] flex justify-center items-center rounded-br-[8px] rounded-bl-[8px] group-hover:bg-[#0E141E]  normal text-[20px]'>Premium</p>
                    </div>
                    <div className='group-hover:text-[#03070D] text-white '>
                        <h1 className='bold text-[48px]    text-center mt-9  leading-[60px]'>$130</h1>
                        <p className=' normal text-center leading-[25.6px] ms-4 -mt-2 text-[20px]'>15 Minutes</p>
                    </div>
                    <div className='mt-[44px] ps-[36px] flex flex-col gap-[14px] group-hover:text-[#03070D] text-white'>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>6 Day Delivery</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>3 Day Revisions</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Up to 60 minutes of footage provided</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Up to 60 minutes running time</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Color Grading</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Sound design & mixing</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Motion Graphics</p>
                        </div>
                        <div className='flex gap-2'>
                            <LuCheckCircle2 className='w-6 h-6  group-hover:text-[#0E141E] text-white' />
                            <p className=' regular leading-[25.6px] text-[20px]'>Thumbnail</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center mt-[44px] mb-[56px]'>
                        <button className='bg-[#25AAE1] py-4 px-6 group-hover:bg-[#0E141E]  rounded-[16px] normal text-white'> Get Started</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Pricing;