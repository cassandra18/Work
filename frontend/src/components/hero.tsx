import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Swiper as SwiperClass } from 'swiper';

const slides = [
    { id: 1, image: '/images/cbc-kericho.jpg', title: 'CBC-KERICHO', description: 'We are a school that is committed to providing quality education to our students', link: '/about/profile' },
    { id: 2, image: '/images/students.jpg', title: 'Vision, Mission and Values', description: 'Our vision is to provide quality education to our students', link: '/about/vision' },
    { id: 3, image: '/images/students-with-instruments.jpg', title: 'Clubs and Societies', description: 'We have a variety of clubs and societies that students can join', link: '/clubs' },
    { id: 4, image: '/images/teacher.jpg', title: 'Our Policies', description: 'Our policies are designed to ensure that our students get the best education', link: '/about/policies' }
];

const HeroSection: React.FC = () => {
    // ✅ Use state to track active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative poppins-regular">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop={true}
                speed={1000}
                onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.realIndex)} // ✅ Update active index
                className="w-full h-96 md:h-150"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
                        {/* Transparent Black Overlay */}
                        <div className="absolute inset-0 bg-black" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-20 lg:pl-48 text-white">
                            {/* ✅ Only animate the active slide */}
                            {index === activeIndex && (
                                <>
                                    <motion.h1 
                                        className="text-3xl md:text-4xl lg:text-5xl poppins-bold text-[#009f58]"
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }} 
                                        transition={{ duration: 0.8 }}
                                    >
                                        {slide.title}
                                    </motion.h1>

                                    <motion.p 
                                        className="text-base md:text-lg px-4 py-2 rounded-md mt-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }} 
                                        transition={{ duration: 1, delay: 0.3 }}
                                    >
                                        {slide.description}
                                    </motion.p>

                                    <motion.a 
                                        href={slide.link}
                                        className="mt-6 px-6 py-3 bg-[#0C834E] hover:bg-[#09633c] text-white rounded-full font-semibold transition-all"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }} 
                                        transition={{ duration: 1.2, ease: "easeInOut",  delay: 0.3 }}
                                    >
                                        Learn More
                                    </motion.a>
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;
