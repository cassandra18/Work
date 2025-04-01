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
    <div style={{ backgroundImage: `url('/images/facilities2.jpeg')` }}
    className="relative bg-cover bg-center flex flex-col justify-center items-center text-white ">
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#0C834E] opacity-50 backdrop-blur-md"></div>
      {/* Facilities Section - Bulletin Board Style */}
      <div className="container mx-auto px-6 mt-10 z-10">
        <div className="rounded-lg p-6 shadow-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9dffd3] mb-6 relative">
            <span className="relative z-10 drop-shadow-md">FACILITIES WE OFFER</span>

            {/* Animated underline */}
            <motion.div
              className="absolute left-1/2 bottom-[-10px] h-1 bg-[#9dffd3] rounded-md"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  className="flex gap-4 items-start p-4 border-l-4 border-[#23c87e] bg-white shadow-md rounded-md transition hover:bg-[#e8f5e9]"
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                >
                  <motion.div
                    className="text-4xl text-[#0C834E]"
                    animate={isInView ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {facility.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{facility.title}</h3>
                    <p className="text-gray-600 mt-1">{facility.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
