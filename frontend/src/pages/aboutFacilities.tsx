import FacilitiesExtras from "../components/facilities&amenities/facilitiesExtras";
import FacilitiesIntroduction from "../components/facilities&amenities/facilitiesHero";
import KeyFacilities from "../components/facilities&amenities/keyFacilities";

export default function AboutFacilities() {
    return (
        <div className="poppins-regular">
            <FacilitiesIntroduction />
            <KeyFacilities />
            <FacilitiesExtras />
            
        </div>
    )
}