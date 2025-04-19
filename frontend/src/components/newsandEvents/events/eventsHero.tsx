import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const EventsHero: React.FC = () => {
    return (
        <div className="relative h-[28rem] overflow-hidden" id='UpcomingEvents'>
            {/* Background Image with gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/images/news-events.png')`,
                }}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4"
                {...fadeIn(0.2)}
            >
                <div className="flex items-center gap-3 mb-4">
                    <CalendarDays className="text-yellow-400 animate-bounce" size={32} />
                </div>

                <motion.h1
                    className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-2"
                    {...fadeIn(0.3)}
                >
                    Events & Highlights
                </motion.h1>

                <motion.p
                    className="max-w-xl text-lg md:text-xl text-white/90 drop-shadow-md"
                    {...fadeIn(0.4)}
                >
                    "Growing through every moment, one event at a time"
                </motion.p>

                <motion.button
                    onClick={() => window.scrollTo({ top: document.getElementById('highlights')?.offsetTop, behavior: 'smooth' })}
                    className="mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold rounded-full transition duration-300 shadow-lg"
                    {...fadeIn(0.5)}
                >
                    View Latest Highlights
                </motion.button>
            </motion.div>

            {/* Scrolling Headlines (optional fancy effect) */}
            <div className="absolute bottom-0 w-full bg-green-900/80 py-2 overflow-hidden">
                <motion.div
                    className="whitespace-nowrap text-sm md:text-base font-semibold text-yellow-300 animate-marquee"
                    initial={{ x: '100%' }}
                    animate={{ x: '-100%' }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                >
                    🗞️ Student Film Festival this Saturday • 🧪 New Digital Science Lab Opens • 🏆 Grade 6 Debate Finals Winners • 🎨 Art Exhibition Opens Monday • 📣 New Staff Introduction Ceremony Next Week •
                </motion.div>
            </div>
        </div>
    );
};

export default EventsHero;
