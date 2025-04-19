import React from 'react';
import NewsHero from '../components/newsandEvents/news/newsHero';
import FilterTabs from '../components/newsandEvents/news/filterTabs';
import SchoolAchievements from '../components/newsandEvents/news/schoolAchievements';
import CBCurriculumUpdates from '../components/newsandEvents/news/cbcCurriculumUpdates';
import StudentSpotlight from '../components/newsandEvents/news/studentSpotlight'
import SchoolUpdates from '../components/newsandEvents/news/schoolUpdtaes';
import Highlights from '../components/newsandEvents/news/highlights';

const AboutNews: React.FC = () => {
    return (
        <div className='poppins-regular '>
            <NewsHero/>
            <FilterTabs/>
            <div className='mt-12 px-6 md:px-16 rounded-xl shadow-md max-w-7xl mx-auto bg-gradient-to-br to-green-50 from-white mb-7'>
            <SchoolAchievements/>
            <CBCurriculumUpdates/>
            </div>
            <StudentSpotlight/>
            <SchoolUpdates/>
            <Highlights/>
        </div>
    );
}

export default AboutNews;