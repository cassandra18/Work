import React from 'react';
import Introduction from '../components/schoolPolicies/introduction';
import CodeOfConduct from '../components/schoolPolicies/conduct';
import AttendancePolicy from '../components/schoolPolicies/attendace';
import AcademicPolicy from '../components/schoolPolicies/academic';
import AntiBullyingPolicy from '../components/schoolPolicies/antibullying';
import HealthSafetyPolicy from '../components/schoolPolicies/health';
import DigitalUsagePolicy from '../components/schoolPolicies/digitalUsage';
import ExtracurricularPolicy from '../components/schoolPolicies/extracurricular';
import InclusiveEducationPolicy from '../components/schoolPolicies/inclusiveEducation';
import ParentalInvolvementPolicy from '../components/schoolPolicies/parentalInvolvement';
import BoardingTransportPolicy from '../components/schoolPolicies/boradingandTransport';
import PolicyAcknowledgement from '../components/schoolPolicies/policyAcknowledgement';
import CTA from '../components/cta';

const AboutPolicies: React.FC = () => {
    return (
        <div className='max-w-7xl mx-auto shadow-lg rounded-lg my-10 poppins-regular pb-10'>
            <Introduction/>
            <CodeOfConduct/>
            <AttendancePolicy/>
            <AcademicPolicy/>
            <AntiBullyingPolicy/>
            <HealthSafetyPolicy/>
            <DigitalUsagePolicy/>
            <ExtracurricularPolicy/>
            <InclusiveEducationPolicy/>
            <ParentalInvolvementPolicy/>
            <BoardingTransportPolicy/>
            <PolicyAcknowledgement/>
            <CTA/>
        </div>
    )
}

export default AboutPolicies;