import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const BoardingTransportPolicy: React.FC = () => {
    const policies = [
        { icon: '🏠', text: 'Boarding house rules ensure a safe and supportive environment for students.' },
        { icon: '🚌', text: 'Transport conduct rules promote safety during journeys to and from school.' },
        { icon: '⏰', text: 'Clear pick-up and drop-off routines ensure smooth transitions for all students.' }
    ];

    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Boarding or School Transport Policy">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                🏡 10. Boarding and School Transport Policy
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                Light Junior Academy ensures the <strong>safety</strong> and <strong>well-being</strong> of students in boarding and during their journeys with clear rules and routines for boarding house life and school transport.
            </motion.p>
            <ol className="space-y-3 text-gray-700 text-base md:text-lg">
                {policies.map((item, index) => (
                    <motion.li
                        key={index}
                        {...fadeIn(0.2 + index * 0.1)}
                        className="flex items-start gap-3"
                    >
                        <span className="font-bold text-green-800">{index + 1}.</span>
                        <span className="text-xl">{item.icon}</span>
                        <span className="flex-1">{item.text}</span>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
};

export default BoardingTransportPolicy;
