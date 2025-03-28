import React from 'react';
import HeroSection from '../components/hero';
import Introduction from '../components/introduction';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <Introduction/>
        </div>
    )
}

export default HomePage;