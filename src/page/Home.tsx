import React from 'react';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Accordion from '../components/Accordion';
import Successstroy from '../components/Successstroy';
import Bestoption from '../components/Bestoption';

const Home: React.FC = () => {
    return (
        <div className='flex flex-col gap-[120px] mt-20 '>
            <Bestoption />
            <Successstroy />
            <Accordion />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Home;