import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const AttendancePolicy: React.FC = () => {
    const policies = [
        { icon: '🕗', text: 'Learners must arrive at school before 7:30 a.m.' },
        { icon: '🏫', text: 'Attendance is taken daily and monitored closely.' },
        { icon: '📝', text: 'Absences must be reported by a parent/guardian with a valid reason.' },
        { icon: '🩺', text: 'In case of illness, a medical note should be provided upon return.' },
        { icon: '📉', text: 'Excessive absenteeism may affect learner participation and progress.' },
        { icon: '🕰️', text: 'Latecomers must report to the office before proceeding to class.' }
    ];

    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Attendance Policy">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
                📆 2. Attendance Policy
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                At Light Junior Academy, regular attendance is essential for academic progress and holistic development. Learners are expected to attend all classes, activities, and assessments <strong>punctually</strong> and <strong>consistently</strong>.
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

export default AttendancePolicy;
