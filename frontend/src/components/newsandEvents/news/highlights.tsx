import React from 'react';
import { motion } from 'framer-motion';

const timelineHighlights = [
    {
        title: '🧑‍🍳 Junior Chef Challenge',
        description: 'Grade 5 students wowed us during their CBC cooking assessment, judged by a guest chef from Nairobi!',
        image: '/images/chef.jpeg',
        direction: 'left'
    },
    {
        title: '🎨 Art Club Wall Murals',
        description: 'Our bare walls got a CBC-themed upgrade with inspiring student-designed murals. Come take a tour!',
        image: '/images/art-murals.jpeg',
        direction: 'right'
    },
    {
        title: '💻 Mini Tech Expo',
        description: 'Our Robotics & Coding students showcased smart AI projects including chatbots and motion sensors!',
        image: '/images/tech-expo.png',
        direction: 'left'
    },
    {
        title: '🎤 Student Parliament Inauguration',
        description: 'A vibrant democratic process led to the election of our 2025 student leaders. Leadership in action!',
        image: '/images/student-parliament.jpeg',
        direction: 'right'
    },
    {
        title: '📸 Launch of Photo Journalism Club',
        description: 'Students now capture weekly happenings across campus. Look out for their bulletin board updates!',
        image: '/images/photo-journalism.jpeg',
        direction: 'left'
    },
    {
        title: '📚 Digital Library Now Open',
        description: 'Students can now access over 2,000 e-books and research journals on our new digital library platform!',
        image: '/images/library.jpeg',
        direction: 'right'
    }
];

const fadeIn = (delay = 0, direction: 'left' | 'right' = 'left') => {
    const xValue = direction === 'left' ? -50 : 50;
    return {
        initial: { opacity: 0, x: xValue },
        whileInView: { opacity: 1, x: 0 },
        transition: { delay, duration: 0.6, ease: 'easeOut' },
        viewport: { once: true, amount: 0.3 }
    };
};
const Highlights: React.FC = () => {
    return (

  <section id="highlights" className="py-16 bg-gradient-to-br from-green-100 to-white scroll-mt-24">
    
  <motion.h2
      className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center"
      {...fadeIn(0.1)}
  >
      🌟 Latest Highlights
  </motion.h2>

  <div className="relative max-w-6xl mx-auto px-4">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 z-0"></div>

      {/* Highlights */}
      {timelineHighlights.map((highlight, index) => {
          const isLeft = highlight.direction === 'left';
          return (
              <motion.div
                  key={index}
                  className={`relative mb-20 flex flex-col lg:flex-row items-center gap-8 z-10 ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  {...fadeIn(0.2 + index * 0.1, highlight.direction as 'left' | 'right')}
              >
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 border-4 border-white rounded-full z-20 shadow-md"></div>

                  {/* Text Section */}
                  <div className="lg:w-1/2 bg-yellow-50 p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold text-green-800 mb-2">{highlight.title}</h3>
                      <p>{highlight.description}</p>
                  </div>

                  {/* Image Section */}
                  <div className="lg:w-1/2">
                      <img
                          src={highlight.image}
                          alt={highlight.title}
                          className="w-96 h-auto rounded-xl shadow-md"
                      />
                  </div>
              </motion.div>
          );
      })}
  </div>
</section>
    )
}

export default Highlights;