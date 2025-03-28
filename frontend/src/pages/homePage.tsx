import React from 'react';
import HeroSection from '../components/hero';
import Introduction from '../components/introduction';
import Facilities from '../components/facilites';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <Introduction/>
            <Facilities/>
        </div>
    )
}

export default HomePage;