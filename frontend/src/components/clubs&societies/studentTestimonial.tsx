import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Achieng, Class 7",
    quote: "Joining the journalism club helped me find my voice.",
    image: "/images/achieng.jpeg",
  },
  {
    name: "Brian, Class 8",
    quote: "The tech club taught me how to code my first website!",
    image: "/images/brian.jpeg",
  },
  {
    name: "Joy, Class 6",
    quote: "Art club gave me confidence and new friends.",
    image: "/images/joy.jpeg",
  },
];

export default function StudentTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-10">
        🧍🧍‍♀️ Student Testimonials
      </h2>

      <div className="relative max-w-sm mx-auto h-auto mb-10">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-green-50 p-4 rounded-lg shadow-md text-center h-full flex flex-col justify-center items-center"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-4 border-green-300 shadow-lg">
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm md:text-base text-gray-700 italic mb-3 relative">
        <span className="before:content-['“'] before:text-xl before:text-green-400 before:align-top before:mr-1" />
        {testimonials[index].quote}
        <span className="after:content-['”'] after:text-xl after:text-green-400 after:align-bottom after:ml-1" />
      </p>
      <span className="text-green-700 font-semibold text-sm">
        – {testimonials[index].name}
      </span>
    </motion.div>
  </AnimatePresence>
</div>

    </section>
  );
}
