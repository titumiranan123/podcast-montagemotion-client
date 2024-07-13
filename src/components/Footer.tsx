import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='max-w-[1240px]  mx-auto mt-10 rounded-md '>
            <div className='bg-[#0E141E] px-[72px] flex justify-between items-center py-5  lg:w-[1200px] lg:h-[244px]'>
                <div>
                    <h1 className='bold text-[48px] leading-[48px] text-white'>Have a podcast to edit ?</h1>
                    <p className='normal text-[20px] leading-[25.6px] text-white'>We minimize your workload by editing your podcast for yourself so <br className='lg:block hidden' /> that you can focus on your other works .</p>
                </div>
                <div>
                    <button className='bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] normal'>Get Started</button>
                </div>
            </div>
            <div className='normal text-white flex justify-center items-center text-[20px] leading-[25.6px] mt-[120px]'>
                <p>&copy;  2024 Motion Montage. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;