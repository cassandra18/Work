import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Star } from 'lucide-react';

const fadeIn = (delay = 0, direction: 'left' | 'right' = 'left') => {
    const xValue = direction === 'left' ? -50 : 50;
    return {
        initial: { opacity: 0, x: xValue },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay, duration: 0.6, ease: 'easeOut' },
        viewport: { once: true, amount: 0.3 }
    };
};

const students = [
    {
        name: 'Leila A.',
        role: 'Junior Coder & App Developer',
        image: '/images/head-girl-primary.jpeg',
        description: 'Leila created an app that helps her classmates manage homework and reminders, showcasing leadership in tech at just 13.'
    },
    {
        name: 'Brian M.',
        role: 'Music Prodigy',
        image: '/images/dhead-boy-secondary.jpeg',
        description: 'Brian composed his first symphony and performed it at the school’s arts showcase. He also mentors younger students in piano.'
    },
    {
        name: 'Faith K.',
        role: 'Eco-Club Leader',
        image: '/images/head-girl-secondary.jpeg',
        description: 'Faith led a tree planting initiative, resulting in 200 new trees on campus. She inspires her peers with her love for the planet.'
    }
];

const StudentSpotlight: React.FC = () => {
    return (
        <section id='spotlight' className="py-12 bg-green-50 text-center">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-green-800 mb-10 flex justify-center items-center gap-2"
                {...fadeIn(0.1)}
            >
                <Star className="text-yellow-500" size={32} />
                Student Spotlight
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                {students.map((student, index) => (
                    <Tilt key={student.name} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg overflow-hidden text-left"
                            {...fadeIn(0.2 + index * 0.1, index % 2 === 0 ? 'left' : 'right')}
                        >
                            <img
                                src={student.image}
                                alt={student.name}
                                className="w-full h-48 object-cover rounded-b-lg"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-green-800">{student.name}</h3>
                                <p className="text-sm text-green-600 mb-2 italic">{student.role}</p>
                                <p className="text-gray-700 text-sm">{student.description}</p>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default StudentSpotlight;
