import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CTA from "../cta";

const testimonials = [
  {
    quote:
      "The smart classrooms and science labs gave me the perfect space to learn and explore. It made school exciting every day!",
    name: "Joyce M., Class of 2010",
    emoji: "🏫",
  },
  {
    quote:
      "Access to the ICT labs helped me discover my passion for coding. Now I’m pursuing computer science in college!",
    name: "Brian O., Class of 2018",
    emoji: "💻",
  },
  {
    quote:
      "The library and student lounge became my favorite spots. Whether studying or relaxing, there was always a place for me.",
    name: "Lydia A., Class of 2015",
    emoji: "📚",
  },
  {
    quote:
      "Our sports grounds and art rooms gave me a chance to shine beyond the classroom. School life here was unforgettable.",
    name: "Kevin N., Class of 2012",
    emoji: "🎨",
  },
];

export default function FacilitiesExtras() {
  return (
    <section className="mt-16  text-gray-800">
      {/* Section Header */}
      <div className="text-center px-4 md:px-0">
        <h2 className="text-2xl md:text-5xl font-bold text-green-800 mb-4">
        🛡️  Accessibility, Sustainability & Student Voices
        </h2>
        <p className="max-w-3xl mx-auto md:text-lg text-gray-700">
          Our facilities are built with care, ensuring every student feels safe,
          included, and inspired. Here’s how we’re making that a reality — through
          accessibility, sustainable practices, and the voices of those who use them.
        </p>
      </div>

      {/* Accessibility and Sustainability */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {/* Accessibility and Safety */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8"
        >
          <h3 className="text-2xl">♿🛡️</h3>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Accessibility & Safety
          </h3>
          <p className="mb-2 text-sm md:text-base">
            <strong>Accessible Facilities:</strong> Our campus includes ramps,
            wide hallways, and designated areas to ensure inclusivity for
            students with disabilities.
          </p>
          <p className="text-sm md:text-base">
            <strong>Safety Measures:</strong> We prioritize safety with clear
            emergency exits, on-site security personnel, CCTV monitoring, and
            regular drills for staff and students.
          </p>
        </motion.div>

        {/* Sustainability Initiatives */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8"
        >
          <h3 className="text-2xl">🌱☀️</h3>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Sustainability Initiatives
          </h3>
          <p className="mb-2 text-sm md:text-base">
            <strong>Eco-Friendly Practices:</strong> We follow recycling
            programs, use LED lighting, and employ water conservation techniques
            throughout the school.
          </p>
          <p className="text-sm md:text-base">
            <strong>Green Spaces:</strong> Students enjoy outdoor learning
            areas, a school garden, and shaded play zones. Solar panels help us
            reduce our carbon footprint.
          </p>
        </motion.div>
      </div>

      {/* Testimonials and Contact Section */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-6 py-8 md:py-16 px-4 md:px-6 poppins-regular bg-gradient-to-b to-[#9dffd37b] from-white">
        {/* Student Testimonials */}
        <div className="md:max-w-1/2 ">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center lg:text-left">
            Student Testimonials 💬
          </h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="md:max-w-2xl max-w-sm mx-auto mb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-green-100 border-l-4 border-green-400 md:p-6 p-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
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

        {/* Conclusion & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Conclusion & Contact 📞🏫
          </h3>
          <div className="text-sm md:text-base">
          <p className="mb-2 ">
            Our facilities are designed to support every aspect of a student's
            development — from learning and safety to wellness and inspiration.
          </p>
          <p>
            <strong>For more details, contact:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:facilities@schoolname.com"
                className="text-green-700 underline"
              >
                facilities@schoolname.com
              </a>
            </li>
            <li>📞 Phone: +254 712 345678</li>
            <li>🏢 Office of Student Affairs, Main Building</li>
          </ul>
          </div>
          
        </motion.div>
        
      </div>
      <div className="bg-[#9dffd37b] py-6">
      <CTA />
      </div>

    </section>
  );
}
