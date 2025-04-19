import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const fadeIn = (delay = 0, direction: 'left' | 'right' = 'left') => {
    const xValue = direction === 'left' ? -50 : 50;
    return {
        initial: { opacity: 0, x: xValue },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay, duration: 0.6, ease: 'easeOut' },
        viewport: { once: true, amount: 0.3 }
    };
};

const SchoolAchievements: React.FC = () => {
    return (
        <section id='achievements' className="py-12 text-center ">
            <h2
                className="text-3xl md:text-5xl font-bold text-green-800 mb-6 border-b-2 border-green-800 pb-2"
                {...fadeIn(0.1)}
            >
                <Trophy className="inline-block mr-2 text-yellow-500" size={32} />
                School Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {/* Card 1 */}
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <motion.div
                        className="bg-green-50 p-6 rounded-2xl shadow-md"
                        {...fadeIn(0.2, 'left')}
                    >
                        <h3 className="text-xl font-semibold text-green-800 mb-2">🏆 Regional Science Fair Champions</h3>
                        <p>Our Grade 7 students won first place for their innovation in environmental technology.</p>
                    </motion.div>
                </Tilt>

                {/* Card 2 */}
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <motion.div
                        className="bg-green-50 p-6 rounded-2xl shadow-md"
                        {...fadeIn(0.3, 'right')}
                    >
                        <h3 className="text-xl font-semibold text-green-800 mb-2">🎓 100% Pass Rate in Grade 6 Exams</h3>
                        <p>All our students passed with distinction in the 2024 CBC exams. Hats off to the teachers!</p>
                    </motion.div>
                </Tilt>

                {/* Card 3 */}
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <motion.div
                        className="bg-green-50 p-6 rounded-2xl shadow-md"
                        {...fadeIn(0.4, 'left')}
                    >
                        <h3 className="text-xl font-semibold text-green-800 mb-2">🎭 Drama Festival Recognition</h3>
                        <p>Our Drama Club earned praise for their creative play on social responsibility and unity.</p>
                    </motion.div>
                </Tilt>

                {/* Card 4 */}
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <motion.div
                        className="bg-green-50 p-6 rounded-2xl shadow-md"
                        {...fadeIn(0.5, 'right')}
                    >
                        <h3 className="text-xl font-semibold text-green-800 mb-2">🌱 Environmental Club Heroes</h3>
                        <p>Over 300 trees planted in the Green School Campaign—led by our Eco Ambassadors!</p>
                    </motion.div>
                </Tilt>
            </div>
        </section>
    );
};

export default SchoolAchievements;
