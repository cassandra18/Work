import React from 'react';
import { motion } from 'framer-motion';
import { GiNotebook } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Introduction: React.FC = () => {
    return (
        <div className='mt-10 max-w-7xl mx-auto flex justify-center poppins-light'>
            <div className='flex flex-col-reverse md:flex-row  mx-6 gap-4 md:gap-10 xl:gap-32 items-center md:items-start'>
                {/* Motto section */} 
                <div className='relative flex flex-col rounded-lg shadow-2xl p-1 max-w-sm mb-7  '>
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-[#14583a88] opacity-20 rounded-lg' ></div>
                    <div className='relative'>
                    <img src='/images/school-image.jpeg' alt='school-image' className='mb-4'/>
                    <h2 className='text-2xl font-bold text-[#0C834E] '>Our Motto:</h2>
                    <h1 className='text-lg font-bold py-2'>Nurturing Bright Minds, Shaping the Future!</h1>
                    <p className='text-md '>Our school is dedicated to fostering a love for learning in every child, helping them grow intellectually, socially, and emotionally.</p>
                    
                    <div className='flex justify-center'>
                        <button className='mt-6 px-4 py-3 border border-[#0C834E] bg-blue-400 hover:bg-blue-700 text-white rounded-lg font-semibold'>Contact Us</button>
                    </div>
                    </div>
                    
                </div>

                {/* Introduction to school About */}
                <div className='md:max-w-1/2 flex flex-col gap-4'>
                    <p className=''>CBC Kericho Primary School is a leading institution dedicated to providing high-quality education under the Competency-Based Curriculum (CBC). Located in a serene environment that fosters both academic and personal growth, the school is committed to nurturing young minds and shaping a brighter future for every learner. With a strong foundation in academic excellence, moral integrity, and holistic development, CBC Kericho Primary School ensures that students receive a well-rounded education that prepares them for future success.

                    At CBC Kericho Primary School, education goes beyond textbooks. The school embraces a learner-centered approach where students are encouraged to think critically, solve problems, and apply knowledge to real-life situations. This hands-on method of teaching ensures that learners do not merely memorize facts but develop practical skills that will benefit them throughout their lives. Teachers play a crucial role in this process by guiding and mentoring students, ensuring they understand and apply what they learn in meaningful ways.
                    </p>
                    
                   <Link 
                    to='/about' 
                    className='relative text-[#0C834E]  hover:text-blue-700'>
                    READ MORE...
                    </Link>
                    {/* Application Section */}
                    <div className='relative flex justify-center items-center  rounded-lg mx-auto w-fit p-1  md:p-8 bg-cover bg-center'
                    style={{backgroundImage: `url('/images/students.jpeg')`}}>

                        {/* Overlay */}
                        <div className='absolute inset-0 bg-[#0C834E] opacity-50 rounded-lg'></div>

                        {/* Content */}
                        <motion.h2 className='mr-5 md:text-2xl pl-2 md:pl-1 text-white font-bold whitespace-nowrap min-w-[max-content] '
                            animate={{ scale: [1, 1.2, 1.2, 1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >Ready to join us?
                        </motion.h2>
                        <Link to='application' className='flex flex-row gap-2 justify-center gap-x-2 whitespace-nowrap min-w-[max-content] items-center border z-1 border-white hover:border-green-500 text-white md:text-lg font-bold p-1 rounded-sm ml-4'><GiNotebook className='font-semibold' /> How to Apply</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Introduction;