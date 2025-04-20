import React from 'react';
import GamesHero from '../components/gamesComponent/gameHero';
import SportsWeOffer from '../components/gamesComponent/sportsOffered';


const AboutGames: React.FC = () => {
    return (
        <div className='poppins-regular '>
            <GamesHero/>
            <div className='background-gradient-to-br from-green-100 to-white'>
            <SportsWeOffer/>
            </div>
        </div>
    )
}

export default AboutGames;