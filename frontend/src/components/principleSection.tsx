import React from 'react';
import { motion } from 'framer-motion';


const PricipleSection: React.FC = () => {
    return (
        <div className='poppins-regular '>
            <div className=' bg-cover bg-center relative p-4 md:p-10 ' style={{ backgroundImage: 'url(/images/school-image.jpeg)'}}>

            {/* overlay */}
                <div className='bg-[#1f2925]  opacity-70 inset-0 absolute'></div>

            {/* Content area */}
                <motion.div
                initial={{ opacity:0, y:30 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration: 1 }}
                className='border border-green-800 mx-2 md:mx-10 mt-10 rounded-md relative z-10 flex flex-col lg:flex-row items-center gap-4'>
                    
                    {/* Desktop Title (absolute & hidden on small screens) */}
                    <h3 className='hidden lg:block absolute bg-[#0C834E] px-2 py-1 top-2 left-1/3 transform -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl poppins-bold text-[#9dffd3] z-10 whitespace-nowrap'>
                        EMBODIMENT OF HOPE
                    </h3>

                    <img src='/images/principle.jpeg' alt='principle-image' className='w-full sm:w-2/3 '></img>

                    {/* Mobile Title (inline & only visible on small screens) */}
                    <h2 className='block lg:hidden bg-[#0C834E] px-2 py-1 text-3xl text-center text-[#9dffd3] poppins-bold max-w-[max-content] '>
                        EMBODIMENT OF HOPE
                    </h2>
                    <p className="md:text-lg text-gray-200 leading-relaxed px-2 ">
                    <span className='font-semibold'>Mr. John Kiprono</span> is the dedicated principal of CBC Kericho Primary and Junior Secondary School. 
                    With a strong passion for education and over 15 years of leadership experience, he is committed 
                    to nurturing holistic learners through the CBC curriculum. Known for his firm yet approachable 
                    leadership style, Mr. Kiprono fosters a supportive learning environment where students, teachers, 
                    and parents work together to achieve academic excellence and character development.
                    </p>

                </motion.div>
            </div>
            <div className="hidden md:blockh-20" 
            style={{background: "linear-gradient(to bottom, white 0%, #9dffd3 40%, #016624 100%)",
      }}></div>
        </div>
    )
}
export default PricipleSection;