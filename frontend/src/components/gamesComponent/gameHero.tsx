
import { motion } from "framer-motion";
import { Trophy, Users, Medal } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const heroImages = [
  "/images/football.png",
  "/images/athletics.png",
  "/images/volleyball.png",
  "/images/athletics1.png",,
];

export default function GamesPageHeader() {
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
                  loading="lazy"
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
              <Trophy className="text-yellow-500 w-8 h-8 md:w-10 md:h-10 animate-bounce" />
              <h1 className="text-2xl md:text-5xl font-bold md:mb-4 mb-2">
                Games & Sports
              </h1>
              <p className="md:text-lg md:mb-6 mb-2 text-gray-200">
                Celebrating teamwork, talent, and triumphs in and out of the classroom.
                <p>Explore:</p>
              </p>
              <ul className="md:text-base text-sm space-y-1 md:space-y-3 text-[#9dffd3] font-semibold">
                <li className="flex items-center gap-2">
                  <Medal className="text-yellow-400 w-5 h-5" /> Sports Offered
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="text-yellow-400 w-5 h-5" /> Competitions & Achievements
                </li>
                <li className="flex items-center gap-2">
                  <Users className="text-yellow-400 w-5 h-5" /> House & Class Challenges
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      );
}
