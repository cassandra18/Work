import React from 'react';
import { motion } from 'framer-motion';


const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' }
});

const Introduction: React.FC = () => {
    return (
        <header className='p-5 max-w-4xl mx-auto ' aria-label="Introduction to School Policies at Light Junior Academy">
            <motion.h1
                className="text-3xl md:text-5xl font-extrabold mb-6 text-center text-green-800 tracking-tight "
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
                >📘 Our School Policies
            </motion.h1>
            <motion.p {...fadeIn(0.1)} className='md:text-lg mb-6 text-gray-700 leading-relaxed'>At Light Junior Academy, our school policies are designed to foster a <strong>safe, respectful, and engaging </strong> learning environment for all learners, teachers, and parents.</motion.p>
            <motion.p {...fadeIn(0.2)} className='md:text-lg mb-6 text-gray-700 leading-relaxed'>
            These guidelines support the Competency-Based Curriculum (CBC) by promoting responsibility, inclusivity, and collaboration within our school community. We kindly encourage all stakeholders to familiarize themselves with these policies to ensure a smooth and supportive learning experience.
            </motion.p>
        
        </header>
    )
}

export default Introduction;