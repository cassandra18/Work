import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CTA from "./cta";

const milestones = [
  {
    year: "1998",
    title: "School Founded",
    emoji: "🏫",
    description: "Started with just 2 classrooms and a big dream. A small group of dedicated teachers laid the foundation for a nurturing and excellence-driven academic environment. Despite humble beginnings, the vision for holistic education was clear from the start.",
    image: "/images/est.jpeg",
  },
  {
    year: "2005",
    title: "First KCPE Top Scorer",
    emoji: "🏆",
    description: "A proud year as one of our students scored in the top 1% nationally in KCPE. This milestone highlighted our commitment to academic excellence and inspired future generations to aim even higher.",
    image: "/images/celebration.jpeg",
  },
  {
    year: "2012",
    title: "New Science Wing",
    emoji: "🔬",
    description: "We expanded with the construction of a fully equipped science wing featuring state-of-the-art laboratories for Biology, Chemistry, and Physics. This investment encouraged innovation, hands-on learning, and curiosity among students.",
    image: "/images/lab.jpeg",
  },
  {
    year: "2020",
    title: "Digital Learning",
    emoji: "💻",
    description: "In response to the evolving world, we launched our digital learning program complete with tablets, smartboards, and interactive lessons. This marked a new era of blended education, making learning more accessible and engaging for all students.",
    image: "/images/digital.jpeg"
  },
  
];

const facts = [
  { emoji: "🎓", count: 5000, label: "Alumni Worldwide" },
  { emoji: "🤝", count: 20, label: "Active Clubs" },
  { emoji: "📚", count: 15, label: "Subjects Offered" },
  { emoji: "🗣️", count: 4, label: "Languages Spoken" },
  { emoji: "🎉", count: 30, label: "Events Hosted" },
];

// Testimonial data
const testimonials = [
  {
    quote:
      "The teachers here really care. I wouldn’t be where I am today without their support.",
    name: "Joyce M., Class of 2010",
    emoji: "💬",
  },
  {
    quote:
      "Our science fair project made it to nationals! This school sparks curiosity.",
    name: "Brian O., Class of 2018",
    emoji: "🔬",
  },
  {
    quote: "The friendships and clubs shaped me more than I ever imagined.",
    name: "Lydia A., Class of 2015",
    emoji: "🤝",
  },
  {
    quote:
      "Learning here was fun. I still remember the drama club performances!",
    name: "Kevin N., Class of 2012",
    emoji: "🎭",
  },
];

const OurHistory: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div className="  poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center my-7 md:my-12 text-green-800 ">
        🧭 Our School Journey
      </h2>

      {/*Animated timeline  */}
      <div className="max-w-7xl mx-auto relative border-l-4 border-green-500 pl-6 rounded-lg shadow-lg p-6">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-4 top-1.5 w-9 h-9 text-center text-2xl bg-gray-400 rounded-full shadow-md">
              {milestone.emoji}
            </div>
            <h3 className="md:text-xl text-lg font-bold text-green-700 pl-9">
              {milestone.year} - {milestone.title}
            </h3>
            <p className="text-gray-700 mt-2 pl-6 text-[15px]">
              {milestone.description}
            </p>

            {/*Modal preview of the image  */}
            {selectedImage && (
              <div className="fixed inset-0 bg-gradient-to-br from-[#9dffd3] to-white bg-opacity-70 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-2 right-2 text-white text-2xl"
                  >
                    &times;
                  </button>
                  <img
                    src={selectedImage}
                    alt="Enlarged"
                    className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-56 h-48 rounded-lg overflow-hidden mt-4 shadow-lg  cursor-pointer"
              onClick={() => setSelectedImage(milestone.image)}
            >
              <img
                src={milestone.image}
                alt={milestone.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Fun facts section */}
      <div className="bg-gradient-to-b from-green-100 to-white-50 mt-20 py-8 md:py-16 px-4 md:px-6 poppins-regular">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-green-900 mb-12 drop-shadow-md">
          🌟 Fun Facts About Our School
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareColor="#e0f7fa"
            >
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-300 flex flex-col items-center text-center"
              >
                <div className="text-5xl mb-4">{fact.emoji}</div>
                <h4 className="text-3xl font-bold text-green-800 mb-1">
                  <CountUp
                    start={0}
                    end={fact.count}
                    duration={5}
                    separator=","
                  />
                  +
                </h4>
                <p className="text-gray-600 text-lg">{fact.label}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Testimonials / Quote Carousel */}
      <div className=" flex flex-col md:flex-row items-center justify-evenly gap-6 py-8 md:py-16 px-4 md:px-6 poppins-regular bg-gradient-to-b to-[#9dffd37b] from-white"
      >
        <div>
        <h3 className="text-2xl md:text-4xl font-bold text-center text-green-800 mb-12 drop-shadow-sm">
          🎤 Voices of Our School
        </h3>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="max-w-2xl mx-auto mb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{testimonial.emoji}</div>
                <p className="kanit-regular-italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-green-800 font-semibold text-right">
                  — {testimonial.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      {/* Call to Action */}
      <CTA/>
      </div>

    </div>
  );
};

export default OurHistory;
