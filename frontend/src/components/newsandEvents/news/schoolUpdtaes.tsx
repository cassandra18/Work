import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Megaphone, Users, Building2 } from 'lucide-react';

const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 },
});




const SchoolUpdates: React.FC = () => {
    return (
        <section id='updates' className="bg-gradient-to-b from-white to-green-100 py-16 px-6">
            <div className='max-w-7xl mx-auto'>
            {/* Section Title */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-12"
                {...fadeInUp(0.1)}
            >
                <Megaphone className="inline-block mr-2 text-yellow-500" size={40} />School Updates
            </motion.h2>

            {/* Teacher's Corner: Speech Bubbles */}
            <motion.div className="mb-16" {...fadeInUp(0.2)}>
                <h3 className="text-2xl md:text-3xl font-semibold text-green-700 flex items-center gap-2 mb-6">
                    <Lightbulb className="text-yellow-400" /> Teacher's Corner
                </h3>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6">
                    <div className="bg-green-100 p-6 rounded-xl relative max-w-md md:w-1/2 before:content-[''] before:absolute before:-bottom-3 before:left-10 before:border-8 before:border-t-green-100 before:border-t-[8px] before:border-transparent before:border-b-0">
                        <p className="text-green-900 kanit-light-italic">"Encourage curiosity in every lesson—let students ask, explore, and challenge ideas."</p>
                        <p className="text-sm text-green-700 mt-2">– Mr. David, Science Dept.</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl relative max-w-md md:w-1/2 before:content-[''] before:absolute before:-bottom-3 before:left-10 before:border-8 before:border-t-green-100 before:border-t-[8px] before:border-transparent before:border-b-0">
                        <p className="text-green-900 kanit-light-italic">"Parents, celebrate small wins at home—it boosts your child's learning confidence!"</p>
                        <p className="text-sm text-green-700 mt-2">– Mr. Peter, English Dept.</p>
                    </div>
                </div>
            </motion.div>

            {/* New Staff Announcements: Timeline */}
            <motion.div className="mb-16" {...fadeInUp(0.3)}>
                <h3 className="text-2xl md:text-3xl font-semibold text-green-700 flex items-center gap-2 mb-6">
                    <Users className="text-yellow-400" /> New Staff Announcements
                </h3>
                <div className="border-l-4 border-green-600 pl-6 space-y-8">
                    <div className="relative">
                        <div className="absolute -left-5 top-1 w-4 h-4 bg-green-600 rounded-full" />
                        <p><span className="font-bold text-green-800">Ms. Nyambura</span> joined the Math Department. She brings 10+ years of teaching experience and a passion for making math magical!</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-5 top-1 w-4 h-4 bg-green-600 rounded-full" />
                        <p><span className="font-bold text-green-800">Mr. Otieno</span> is our new Art & Design teacher, known for innovative use of recycled materials in student projects.</p>
                    </div>
                </div>
            </motion.div>

            {/* Messages to Parents/Students: Banner Style */}
            <motion.div className="mb-16 bg-yellow-100 p-8 rounded-2xl text-center shadow-md max-w-4xl mx-auto" {...fadeInUp(0.4)}>
                
                <p className="text-lg text-yellow-800 font-semibold">📣 Parents & Students!</p>
                <p className="text-yellow-700 max-w-2xl mx-auto mt-2">
                    We are proud of your progress! Remember to check the new digital timetable updates and submit portfolios weekly.
                </p>
            </motion.div>

            {/* Infrastructure Updates: Carousel-like Scroll */}
            <motion.div className="mb-4" {...fadeInUp(0.5)}>
                <h3 className="text-2xl md:text-3xl font-semibold text-green-700 flex items-center gap-2 mb-6">
                    <Building2 className="text-yellow-400" /> Infrastructure Updates
                </h3>

                <div className="overflow-x-auto scrollbar-thin overflow-y-hidden snap-x snap-mandatory flex gap-6 pb-4">
                    {[
                        {
                            title: 'New Science Lab',
                            img: "/images/lab.jpeg",
                            description: 'A state-of-the-art lab with solar-powered microscopes and digital sensors.'
                        },
                        {
                            title: 'Digital Library Wing',
                            img: "/images/library.jpeg",
                            description: 'Now open! Access thousands of eBooks and tablets for every class.'
                        },
                        {
                            title: 'New Multi-Purpose Hall',
                            img: '/images/hall.jpeg',
                            description: 'Hosting our school drama festival and weekly debate club meetings.'
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="min-w-[280px] max-w-sm bg-green-50 rounded-xl shadow-md overflow-hidden"
                            {...fadeInUp(0.6 + i * 0.1)}
                        >
                            <img src={item.img} alt={item.title} className="w-full h-40 object-cover" loading="lazy"/>
                            <div className="p-4">
                                <h4 className="font-semibold text-green-800">{item.title}</h4>
                                <p className="text-sm text-green-700">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>



            </div>
        </section>
    );
};

export default SchoolUpdates;
