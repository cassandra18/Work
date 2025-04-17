import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const DigitalUsagePolicy: React.FC = () => {
    const policies = [
        { icon: '💻', text: 'Students should use digital devices responsibly, only for educational purposes.' },
        { icon: '📱', text: 'Personal devices should be kept on silent and only used during designated times.' },
        { icon: '🛡️', text: 'Cyberbullying, inappropriate content, or online harassment will not be tolerated.' },
        { icon: '🔒', text: 'Students must respect the privacy and security of others while using school technology.' }
    ];

    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Technology & Digital Usage Policy">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                💻 6. Technology & Digital Usage Policy
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                At CBC Kericho, we recognize the importance of technology in the educational process. Our policy ensures that <strong>digital tools</strong> are used in a <strong>safe and respectful manner</strong>, promoting learning while safeguarding students from potential <strong>online risks</strong>.
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

export default DigitalUsagePolicy;
