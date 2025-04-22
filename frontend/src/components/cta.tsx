import { motion } from "framer-motion";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
import React from "react";

const CTA: React.FC = () => {
  return (
    <motion.div
      className="relative flex justify-between items-center rounded-xl overflow-hidden p-4 md:p-6 bg-cover bg-center shadow-lg h-24 md:h-32 poppins-regular max-w-xl mx-5 md:mx-auto "
      style={{ backgroundImage: `url('/images/students-coding1.jpg')` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h2 className="relative z-10 text-white text-xl md:text-2xl font-bold animate-pulse">
        Ready to join us?
      </h2>
      <Link
        to="/admission/apply"
        className="relative z-10 text-sm md:text-base md:text-md flex items-center gap-2 bg-white text-[#0C834E] hover:bg-[#0C834E] hover:text-white font-semibold py-2  mdpx-4 px-2 rounded-md transition whitespace-nowrap"
      >
        <GiNotebook className="text-xl" /> How to Apply
      </Link>
    </motion.div>
  );
};

export default CTA;
