import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Define a type for the facility data
type FacilityData = {
  title: string;
  description: string;
  specialFeatures: string;
  image: string;
  galleryLink: string;
};

// Define the keys of the `facilitiesData` object to ensure proper typing
type Facilities = "classrooms" | "sports" | "library" | "ictLabs" | "cafeteria" | "studentLounge" | "wellness";

// Define the facilitiesData object with the specific type for each key
const facilitiesData: Record<Facilities, FacilityData> = {
  classrooms: {
    title: "Classrooms 🏫",
    description:
      "Our classrooms are well-equipped with modern technology like smartboards, projectors, and sufficient seating for optimal learning.",
    specialFeatures:
      "We also have specialized spaces such as science labs, computer labs, and art studios to enhance our students' learning experiences.",
    image: "/images/classroom.jpg",
    galleryLink: "/gallery#classrooms",
  },
  sports: {
    title: "Sports Facilities ⚽",
    description:
      "Our sports facilities include football fields, basketball courts, and an athletics track, providing students with ample space for physical activities.",
    specialFeatures:
      "We also offer equipment for various sports like football, basketball, and athletics.",
    image: "/images/sports.jpg",
    galleryLink: "/gallery#sports",
  },
  library: {
    title: "Library 📚",
    description:
      "The library is a quiet space with vast resources including books, e-books, and study areas, perfect for reading and academic work.",
    specialFeatures:
      "We have a modern online catalog system, collaborative spaces for group studies, and access to digital resources.",
    image: "/images/library.jpg",
    galleryLink: "/gallery#library",
  },
  ictLabs: {
    title: "ICT and Computer Labs 💻",
    description:
      "Our ICT and computer labs are equipped with desktop computers, tablets, and cutting-edge software to support tech-focused learning.",
    specialFeatures:
      "We offer coding labs and dedicated spaces for students passionate about technology and software development.",
    image: "/images/ict-lab.jpg",
    galleryLink: "/gallery#ict-labs",
  },
  cafeteria: {
    title: "Cafeteria 🍽️",
    description:
      "Our cafeteria offers a variety of healthy and nutritious meal options in a spacious and comfortable environment.",
    specialFeatures:
      "We emphasize healthy eating with balanced meals, snacks, and options catering to different dietary preferences.",
    image: "/images/cafeteria.jpg",
    galleryLink: "/gallery#cafeteria",
  },
  studentLounge: {
    title: "Student Lounge & Recreation Areas 🎮",
    description:
      "Our student lounges are designed for relaxation, with comfortable seating, games, and TV for unwinding after classes.",
    specialFeatures:
      "We also have spaces for arts & crafts, board games, and a social environment for students to interact.",
    image: "/images/student-lounge.jpg",
    galleryLink: "/gallery#student-lounge",
  },
  wellness: {
    title: "Health & Wellness Facilities 🧘‍♀️",
    description:
      "We provide essential health services, including a nurse’s office, counseling services, and fitness programs to support our students' well-being.",
    specialFeatures:
      "We also offer mental health resources, wellness programs, and regular health check-ups to ensure students are healthy.",
    image: "/images/health-wellness.jpg",
    galleryLink: "/gallery#health-wellness",
  },
};

export default function KeyFacilities() {
  const [activeTab, setActiveTab] = useState<Facilities>("classrooms");

  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-r from-green-100 to-green-50">
      <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6 text-center">
        Key Facilities & Amenities
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-8">
        {Object.keys(facilitiesData).map((facilityKey) => (
          <motion.button
            key={facilityKey}
            className={`px-2 py-2 text-base font-semibold rounded-full transition-all duration-300 
              ${activeTab === facilityKey 
                ? "bg-green-800 text-white" 
                : "bg-green-300 text-green-800"} 
              hover:bg-green-700 hover:text-white`}
            onClick={() => setActiveTab(facilityKey as Facilities)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {facilitiesData[facilityKey as Facilities].title}
          </motion.button>
        ))}
      </div>

      {/* Smooth Transition Between Tabs */}
      <AnimatePresence>
        <motion.div
          key={activeTab} // Key prop to trigger the reanimation when activeTab changes
          className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.h3
              className="text-2xl font-bold text-green-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {facilitiesData[activeTab].title}
            </motion.h3>

            <motion.img
              src={facilitiesData[activeTab].image}
              alt={facilitiesData[activeTab].title}
              className="w-full h-auto rounded-2xl mb-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />

            <p className="text-lg text-gray-700 mb-4 text-center">
              {facilitiesData[activeTab].description}
            </p>
            <p className="text-lg text-gray-700 mb-4 text-center">
              <strong>Special Features:</strong> {facilitiesData[activeTab].specialFeatures}
            </p>

            {/* Wrap Link with motion for animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={facilitiesData[activeTab].galleryLink}
                className="text-green-700 font-semibold underline hover:text-green-900"
              >
                Explore our gallery
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
