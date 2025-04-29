import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const AntiBullyingPolicy: React.FC = () => {
    const policies = [
        { icon: '❌', text: 'We have a strict anti-bullying policy that promotes a safe and respectful environment for all students.' },
        { icon: '📢', text: 'Students and staff are encouraged to report any incidents of bullying to a teacher or school authority.' },
        { icon: '⚖️', text: 'Disciplinary actions for bullying may include counseling, warnings, or suspension, depending on the severity.' },
        { icon: '🔼', text: 'Serious cases of bullying may be escalated to higher authorities, including the school board or external professionals.' }
    ];

    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Anti-Bullying & Discipline Policy">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                🤝 4. Anti-Bullying & Discipline Policy
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                At Light Junior Academy, we are committed to providing a <strong>safe, respectful, and inclusive environment</strong> for all students. Our <strong>Anti-Bullying & Discipline Policy</strong> ensures that any form of <strong>bullying</strong> is immediately addressed and that students understand the <strong>consequences of their actions</strong>.
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

export default AntiBullyingPolicy;
