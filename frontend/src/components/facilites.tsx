import React from "react";
import {
  FaBook,
  FaUserGraduate,
  FaFutbol,
  FaChalkboardTeacher,
  FaSchool,
  FaTrophy,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  const handleImageClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
    setActiveIndex(index);
    }
  }

  return (
    <>
    <div
      style={{ backgroundImage: `url('/images/facilities2.jpeg')` }}
      className="poppins-regular relative bg-cover bg-center flex flex-col justify-center items-center text-white mt-10 "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0C834E] opacity-50 backdrop-blur-md"></div>
      {/* Facilities Section - Bulletin Board Style */}
      <div className="container mx-auto mt-10 z-10">
        <div className="rounded-lg p-6 shadow-xl">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9dffd3] mb-6 relative">
            <span className="poppins-bold relative z-10 drop-shadow-md">
              FACILITIES WE OFFER
            </span>

            {/* Animated underline */}
            <motion.div
              className="absolute left-1/2 bottom-[-10px] h-1 bg-[#9dffd3] rounded-md"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </h2>
          <p className="text-center text-md md:text-lg  text-[#fff6f6]  my-4 mx-auto max-w-lg">
            Our school provides a well-rounded learning environment with modern
            facilities, ensuring students excel academically and grow
            holistically through sports, mentorship, and digital learning.
          </p>

          {/* Grid for medium and large screens */}
          <motion.div className="hidden md:grid md:grid-cols-2 gap-6"
          >
            {facilities.map((facility, index) => {
              return (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start p-6 border-l-4 border-[#23c87e] bg-white shadow-md rounded-xl transition-all duration-300 hover:bg-[#e8f5e9] hover:scale-105"
                  initial={{ opacity: 0, y: 20}}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
                >
                  <motion.div className="text-4xl text-[#0C834E]">
                    {facility.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{facility.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Small Device Layout */}
          <div className="flex items-center md:hidden w-full slider-facilities">
            {facilities.map((facility, index) => (
              <div 
              key={index}
              className={`slider-div ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleImageClick(index)}
              >
                <div className="icon-container text-xs text-[#0C834E]">{facility.icon}</div>
                <h3 className="title text-sm font-bold text-gray-800 mt-2">
                  {facility.title}
                </h3>
                <p className="description text-gray-600 mt-1">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Facilities;
