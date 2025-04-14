import React from 'react';
import { motion } from 'framer-motion';
import { GiNotebook } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Introduction: React.FC = () => {
  return (
    <div className='md:mt-16 max-w-7xl mx-auto flex justify-between  poppins-light px-4 py-5 md:py-1 md:px-6 bg-gray-50'>
      <div className='flex flex-col-reverse md:flex-row gap-10 xl:gap-24 items-center'>

        {/* Motto card */}
        <motion.div
          className='relative bg-white shadow-2xl rounded-2xl overflow-hidden max-w-sm w-full'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-[#0c834e1e] to-[#14583b20]'></div>

          <div className='relative z-10 '>
            <img
              src='/images/school-image.jpeg'
              alt='school'
              className='rounded-md shadow-md mb-4'
            />
            <h2 className='text-2xl font-bold text-[#0C834E] mb-1 p-2'>Our Motto:</h2>
            <h3 className='text-lg font-semibold mb-2 p-2'>
              Nurturing Bright Minds, Shaping the Future!
            </h3>
            <p className='text-gray-700 mb-4 p-2'>
              We foster a love for learning in every child, supporting their growth intellectually, socially, and emotionally.
            </p>
            <div className='flex justify-center mb-2'>
              <Link to="/contact">
                <button className='mt-2 px-5 py-3 bg-[#0C834E] hover:bg-[#09633c] text-white font-semibold rounded-lg shadow-md transition'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Introduction content */}
        <motion.div
          className='flex flex-col gap-6 md:max-w-xl'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-[#0C834E]">Welcome to CBC Kericho Primary School</h2>
          <p className='text-gray-700 leading-relaxed text-[17px]'>
            CBC Kericho Primary School is a leading institution providing high-quality education under the Competency-Based Curriculum (CBC). Located in a serene environment, we are dedicated to nurturing young minds for a brighter tomorrow.
            <br /><br />
            Education here goes beyond textbooks — we focus on hands-on learning, critical thinking, and real-life application. Learners are empowered to thrive, with supportive teachers guiding them every step of the way.
          </p>

          <Link to='/about' className='text-[#0C834E] hover:text-blue-600 font-semibold'>
            READ MORE...
          </Link>

          {/* Application CTA */}
          <motion.div
            className='relative flex justify-between items-center rounded-xl overflow-hidden p-4 md:p-6 bg-cover bg-center shadow-lg'
            style={{ backgroundImage: `url('/images/students.jpeg')` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className='absolute inset-0 bg-black opacity-40'></div>
            <h2 className='relative z-10 text-white text-xl md:text-2xl font-bold animate-pulse'>
              Ready to join us?
            </h2>
            <Link
              to='/application'
              className='relative z-10 flex items-center gap-2 bg-white text-[#0C834E] hover:bg-[#0C834E] hover:text-white font-semibold py-2 px-4 rounded-md transition'
            >
              <GiNotebook className='text-xl' /> How to Apply
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
