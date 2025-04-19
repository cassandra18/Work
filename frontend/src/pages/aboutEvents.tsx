import React from 'react';
import EventsHero from '../components/newsandEvents/events/eventsHero';
import FilterTabs from '../components/newsandEvents/events/filterTabs';
import UpcomingEvents from '../components/newsandEvents/events/upcomingEvents';
import LatestHighlights from '../components/newsandEvents/events/latestHighlights';
import MonthlySpotlight from '../components/newsandEvents/events/monthlySpotlight';

const AboutEvents: React.FC = () => {
    return (
        <div className='poppins-regular'>
        <EventsHero />
        <FilterTabs />
        <UpcomingEvents />
        <LatestHighlights />
        <MonthlySpotlight />
        </div>

    )
}

export default AboutEvents;