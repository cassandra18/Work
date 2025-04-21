import React from 'react';
import GamesHero from '../components/gamesComponent/gameHero';
import SportsWeOffer from '../components/gamesComponent/sportsOffered';
import OurParticipation from '../components/gamesComponent/ourParticipation';
import InternalTournaments from '../components/gamesComponent/internalTournaments';


const AboutGames: React.FC = () => {
    return (
        <div className='poppins-regular '>
            <GamesHero/>
            <div>
            <SportsWeOffer/>
            <OurParticipation/>
            <InternalTournaments/>
            </div>
        </div>
    )
}

export default AboutGames;