import React from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import Tilt from "react-parallax-tilt";

const fadeIn = (delay = 0, direction: 'left' | 'right' = 'left') => {
    const xValue = direction === 'left' ? -50 : 50;
    return {
        initial: { opacity: 0, x: xValue },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay, duration: 0.6, ease: 'easeOut' },
        viewport: { once: true, amount: 0.3 }
    };
};

const CBCurriculumUpdates: React.FC = () => {
    return (
        <section id='cbc' className="py-12 text-center  ">
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-green-800 mb-6 border-b border-green-800 pb-2"
                {...fadeIn(0.1)}
            >
                <Book className="inline-block mr-2 text-yellow-500" size={32} />
                CBC Curriculum Updates
            </motion.h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {/* New Subjects Section */}
                <Tilt 
                glareEnable={true}
                glareColor="lightgreen"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={900}
                className="w-full">
                <motion.div
                    className="bg-green-50 p-6 rounded-2xl shadow-md"
                    {...fadeIn(0.2, 'left')}
                >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">📚 New Subjects Introduced</h3>
                    <p>We've introduced a new focus on coding and digital literacy, integrating technology into our CBC curriculum to prepare students for the future.</p>
                </motion.div>
                </Tilt>


                {/* Teaching Methodology Section */}
                <Tilt
                glareEnable={true}
                glareColor="lightgreen"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={900}
                className="w-full">
                <motion.div
                    className="bg-green-50 p-6 rounded-2xl shadow-md"
                    {...fadeIn(0.3, 'right')}
                >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">💡 Teaching Methodology Changes</h3>
                    <p>Our teaching methodologies have evolved to include more project-based learning and interactive group activities, promoting student engagement and critical thinking.</p>
                </motion.div>
</Tilt>
                {/* Notable Student Projects Section */}

                <Tilt 
                glareEnable={true}
                glareColor="lightgreen"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={900}
                className="w-full">
                <motion.div
                    className="bg-green-50 p-6 rounded-2xl shadow-md"
                    {...fadeIn(0.4, 'left')}
                >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">🏆 Notable Student Projects/Portfolios</h3>
                    <p>Our students showcased incredible innovation at the Regional Science Fair with projects ranging from renewable energy solutions to artificial intelligence-powered systems.</p>
                </motion.div>
</Tilt>
                {/* Additional Section: Student Spotlights */}
                <Tilt
                glareEnable={true}
                glareColor="lightgreen"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={900}
                className="w-full">
                <motion.div
                    className="bg-green-50 p-6 rounded-2xl shadow-md"
                    {...fadeIn(0.5, 'right')}
                >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">🌟 Student Spotlight</h3>
                    <p>Meet Sarah, a Grade 8 student, who created a revolutionary app to support students with learning disabilities, earning recognition from educational experts.</p>
                </motion.div>
</Tilt>

                {/* Additional Section: Teacher's Corner */}
                <Tilt
                glareEnable={true}
                glareColor="lightgreen"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={900}
                className="w-full">
                <motion.div
                    className="bg-green-50 p-6 rounded-2xl shadow-md"
                    {...fadeIn(0.6, 'left')}
                >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">📝 Teacher's Corner</h3>
                    <p>Our teachers are incorporating more blended learning approaches, using online tools alongside traditional teaching methods for a more dynamic classroom experience.</p>
                </motion.div>
                </Tilt>

                <Tilt
                glareEnable={true}
                glareColor="lightgreen"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={900}
                className="w-full">

                {/* Additional Section: Infrastructure Updates */}
                <motion.div
                    className="bg-green-50 p-6 rounded-2xl shadow-md"
                    {...fadeIn(0.7, 'right')}
                >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">🏫 Infrastructure Updates</h3>
                    <p>We've expanded our digital classrooms and upgraded the Wi-Fi infrastructure to ensure seamless learning for our students both in-school and online.</p>
                </motion.div>
                </Tilt>
            </div>
        </section>
    );
};

export default CBCurriculumUpdates;
