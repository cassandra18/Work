import React, { useRef } from "react";
import {
  FaBook,
  FaUserGraduate,
  FaFutbol,
  FaChalkboardTeacher,
  FaSchool,
  FaTrophy,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const facilities = [
  {
    icon: <FaFutbol />,
    title: "Extracurricular Activities",
    description:
      "We offer a variety of clubs and sports to enhance student learning beyond the classroom.",
  },
  {
    icon: <FaTrophy />,
    title: "KCPE Results",
    description:
      "Our students consistently perform excellently in national examinations, setting high academic standards.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Student Support System",
    description:
      "We provide mentorship, counseling, and career guidance to ensure student success.",
  },
  {
    icon: <FaBook />,
    title: "Library",
    description:
      "Our well-equipped library offers a vast collection of books, digital resources, and study spaces.",
  },
  {
    icon: <FaSchool />,
    title: "School Facilities",
    description:
      "State-of-the-art classrooms, science labs, and computer labs to enhance learning experiences.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Smart Learning",
    description:
      "Interactive digital learning platforms and technology-enhanced classrooms.",
  },
];

const Facilities: React.FC = () => {
  return (
    <div className="my-16">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url('/images/facilities2.jpeg')` }}
        className="relative bg-cover bg-center h-60 md:h-80 flex flex-col justify-center items-center text-white"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0C834E] opacity-50 backdrop-blur-md"></div>
        <motion.h1
          className="relative text-4xl md:text-5xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Facilities
        </motion.h1>
      </div>

      {/* Facilities Grid */}
      <div className="container mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="relative flex flex-col items-center p-6 bg-gradient-to-b from-white to-[#0c834e2d] shadow-lg rounded-2xl text-center transition"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Icon that animates when parent div is hovered */}
                <motion.div
                  className="md:text-5xl text-[#0C834E] mb-3"
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {facility.icon}
                </motion.div>
                <h2 className="text-xl font-bold text-gray-800">{facility.title}</h2>
                <p className="text-gray-600 mt-2">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
