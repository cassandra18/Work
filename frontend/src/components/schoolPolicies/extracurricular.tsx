import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const ExtracurricularPolicy: React.FC = () => {
    const policies = [
        { icon: '🎭', text: 'Students are encouraged to participate in extracurricular activities to develop new skills and interests.' },
        { icon: '⚽', text: 'Sports, music, drama, and clubs are available to all students, with a focus on team-building and personal growth.' },
        { icon: '🏅', text: 'Active participation may also contribute to overall academic performance.' },
        { icon: '💡', text: 'Students should balance extracurricular activities with their academic responsibilities.' }
    ];

    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Extracurricular Activities Policy">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                🎨 7. Extracurricular Activities Policy
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                At Light Junior Academy, we believe in a well-rounded education where <strong>extracurricular activities</strong> play a vital role in student development. These activities, including <strong>sports, music, drama, and clubs</strong>, allow students to explore their talents and interests. Active participation also contributes to <strong>personal growth, team-building, and academic performance</strong>. However, it is important for students to maintain a balance between their <strong>extracurricular pursuits</strong> and <strong>academic responsibilities</strong>.
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

export default ExtracurricularPolicy;
