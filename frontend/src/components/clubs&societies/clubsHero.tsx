import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Sparkles } from "lucide-react";

const heroImages = [
  "/images/students-coding1.jpg",
  "/images/drama-reharsal.jpg",
  "/images/robot-building.jpg",
  "/images/art-club.jpg",
  ,
];

export default function ClubsHeader() {
  return (
    <div className="relative w-full h-auto md:h-[60vh] overflow-hidden shadow-2xl">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        className="absolute inset-0 z-0"
      >
        {heroImages.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-[60vh]">
              <img
                src={src}
                alt={`Club highlight ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Overlay Content */}
      <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl text-green-"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex justify-start mb-2"
          >
            <Sparkles className="text-yellow-500 w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
          <h1 className="text-2xl md:text-5xl font-bold md:mb-4 mb-2">
            Clubs & Societies
          </h1>
          <p className="text-sm md:text-lg mb-4">
            Join a vibrant community of students and explore your passions
            through our diverse range of clubs and societies.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
