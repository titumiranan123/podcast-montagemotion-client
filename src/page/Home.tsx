import React from 'react';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Accordion from '../components/Accordion';

const Home: React.FC = () => {
    return (
        <div>
            <Accordion />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Home;