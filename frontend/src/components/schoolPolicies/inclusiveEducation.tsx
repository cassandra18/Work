import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const InclusiveEducationPolicy: React.FC = () => {
    const policies = [
        { icon: '🧑‍🏫', text: 'Learners with special needs are supported with individualized plans and resources.' },
        { icon: '⚖️', text: 'Gender equality is promoted through equal opportunities for all students.' },
        { icon: '🌍', text: 'Discrimination based on background, religion, tribe, or any other factor is strictly prohibited.' }
    ];

    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Inclusive Education & Equal Opportunity Policy">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                🧑‍🎓 8. Inclusive Education & Equal Opportunity Policy
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                At Light Junior Academy, we are committed to providing an inclusive educational experience that supports learners with special needs and promotes <strong>gender equality</strong> and <strong>non-discrimination</strong> based on any background or belief.
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

export default InclusiveEducationPolicy;
    