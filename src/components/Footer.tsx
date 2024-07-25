import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='max-w-[1240px] lg:px-0 px-4 mx-auto md:mt-32 mt-16 lg:mt-10'>
            <div className='bg-[#0E141E] rounded-[10px] px-5 lg:px-[72px] flex justify-between items-center py-5  lg:w-[1200px] md:h-[280px] lg:h-[244px] lg:flex-nowrap flex-wrap lg:gap-0 md:gap-9 gap-6'>
                <div>
                    <h1 className='bold text-[34px] leading-[36px] md:text-[48px] md:leading-[48px] text-white'>Have a podcast to edit ?</h1>
                    <p className='normal md:text-[20px] md:leading-[25.6px] text-[14px] leading-[16px] md:mt-0 mt-5 text-white'>We minimize your workload by editing your podcast for yourself so <br className='lg:block hidden' /> that you can focus on your other works .</p>
                </div>
                <div>
                    <button className='bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] normal'>Get Started</button>
                </div>
            </div>
            <div className='normal text-white flex justify-center items-center md:text-[20px]  leading-[25.6px] pb-6 lg:pb-4 text-[14px] mt-[120px]'>
                <p>&copy;  2024 Motion Montage. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;