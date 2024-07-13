import React from 'react';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Accordion from '../components/Accordion';
import Successstroy from '../components/Successstroy';
import Bestoption from '../components/Bestoption';
import Header from '../components/Header';
import State from '../components/State';

const Home: React.FC = () => {
    return (
        <div className='flex flex-col gap-[120px] mt-[36px] '>
            <Header />
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