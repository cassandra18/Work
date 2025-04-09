import React from 'react';
import HeroSection from '../components/hero';
import Introduction from '../components/introduction';
import Facilities from '../components/facilites';
import PricipleSection from '../components/principleSection';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <Introduction/>
            <Facilities/>
            <PricipleSection/>
        </div>
    )
}

export default HomePage;