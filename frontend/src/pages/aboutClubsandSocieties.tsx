import ClubsHeader from '../components/clubs&societies/clubsHero';
import ClubAndSocieties from '../components/clubs&societies/clubs&societies';
import WhyJoinClub from '../components/clubs&societies/whyJoinClub';
import StudentTestimonials from '../components/clubs&societies/studentTestimonial';
import CallToAction from '../components/clubs&societies/joinClubCTA';

export default function AboutClubsAndSocieties() {
    return (
        <div className='poppins-regular'>
        <ClubsHeader/>
        <ClubAndSocieties/>
        <WhyJoinClub/>
        <StudentTestimonials/>
        <CallToAction/>
        </div>
    )
};

