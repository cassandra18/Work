import React from 'react';
import NewsAndEventsHero from '../components/newsandEvents/newsandEventsHero';
import FilterTabs from '../components/newsandEvents/filterTabs';
import SchoolAchievements from '../components/newsandEvents/News/schoolAchievements';
import CBCurriculumUpdates from '../components/newsandEvents/News/cbcCurriculumUpdates';
import StudentSpotlight from '../components/newsandEvents/News/studentSpotlight'
import SchoolUpdates from '../components/newsandEvents/News/schoolUpdtaes';
import Highlights from '../components/newsandEvents/News/highlights';

const AboutNewsandEvents: React.FC = () => {
    return (
        <div className='poppins-regular '>
            <NewsAndEventsHero/>
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

export default AboutNewsandEvents;