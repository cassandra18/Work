import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 }
});

const PolicyAcknowledgement: React.FC = () => {
    return (
        <section className="p-5 max-w-4xl mx-auto mt-10" aria-label="Policy Acknowledgement Section">
            <motion.h2
                className="text-3xl md:text-4xl text-center font-bold mb-4 text-green-800"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                ✅ Policy Acknowledgement
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="mb-6 text-gray-800 leading-relaxed md:text-lg text-center">
                Thank you for reviewing the policies at Light Junior Academy. To ensure understanding and commitment, we kindly ask all parents and students to acknowledge these policies. Please download the full policies document and sign the acknowledgment form below.
            </motion.p>
            <motion.div
                {...fadeIn(0.2)}
                className="flex justify-center gap-8 mt-4 text-lg"
            >
                <a
                    href="/documents/CBC_KERICHO_SCHOOL_POLICIES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-800 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-all"
                >
                    Download Policies PDF and Sign 
                </a>
            </motion.div>
        </section>
    );
};

export default PolicyAcknowledgement;
