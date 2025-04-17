import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' }
});

const CodeOfConduct: React.FC = () => {

    const rules = [
        { icon: '🤝', text: 'Show respect to teachers, classmates, and school staff at all times.' },
        { icon: '🧑‍🏫', text: 'Follow instructions and participate actively in class.' },
        { icon: '🧹', text: 'Keep the school environment clean and litter-free.' },
        { icon: '💬', text: 'Use polite and appropriate language.' },
        { icon: '📱', text: 'Use technology responsibly and only with permission.' },
        { icon: '🕊️', text: 'Resolve conflicts peacefully and report problems to a teacher or prefect.' },
        { icon: '👕', text: 'Wear the correct school uniform with pride.' }
    ];


    return (
        <section className="p-5 max-w-4xl mx-auto" aria-label="Code of Conduct">
            <motion.h2
                className="text-3xl md:text-4xl text-center poppins-bold mb-6 text-green-800 border-y-2 border-green-800 py-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
               📏 1. Code of Conduct
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-4 text-gray-800 leading-relaxed md:text-lg">
                Our Code of Conduct outlines the values and behaviors expected of all learners, staff, and visitors at CBC Kericho. It is rooted in <strong>respect</strong>, <strong>responsibility</strong>, and <strong>community</strong>—key pillars of the Competency-Based Curriculum.
            </motion.p>
            <ol className="space-y-3 list-decimal list-inside">
                {rules.map((rule, index) => (
                    <motion.li
                        key={index}
                        {...fadeIn(0.2 + index * 0.1)}
                        className="flex items-start gap-3 text-gray-700 text-base md:text-lg"
                    >
                        <span className="font-bold text-green-800">{index + 1}.</span>
                        <span className="text-xl">{rule.icon}</span>
                        <span className='flex-1'>{rule.text}</span>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}

export default CodeOfConduct;