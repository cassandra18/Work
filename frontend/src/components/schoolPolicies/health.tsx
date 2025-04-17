import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const HealthSafetyPolicy: React.FC = () => {
    const policies = [
        { icon: '🩺', text: 'The school prioritizes student health and has protocols in place for medical emergencies.' },
        { icon: '🚑', text: 'Students must report any illness or injury immediately to a teacher or school nurse.' },
        { icon: '💧', text: 'Clean drinking water and proper sanitation facilities are available to all students.' },
        { icon: '🛑', text: 'Safety drills for fire, earthquake, and other emergencies are conducted regularly.' }
    ];

    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Health & Safety Policy">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                🏥 5. Health & Safety Policy
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                CBC Kericho takes the health and safety of its students very seriously. We ensure a <strong>safe and secure environment</strong> where students can thrive, with clear guidelines for <strong>emergency situations</strong> and <strong>medical assistance</strong>.
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

export default HealthSafetyPolicy;
