import React from 'react';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Accordion from '../components/Accordion';
import Successstroy from '../components/Successstroy';
import Bestoption from '../components/Bestoption';
import Header from '../components/Header';
import State from '../components/State';
import Shortvideo from '../components/Shortvideo';

const Home: React.FC = () => {
    return (
        <div className='flex  flex-col lg:gap-[120px]   gap-[0px]'>
            <Header />
            <span className='md:w-[1440px] w-full opacity-20 mx-auto h-[1px] bg-[#effe] mt-[120px]'></span>
            <Shortvideo />
            <State />
            <Bestoption />
            <Successstroy />
            <Accordion />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Home;