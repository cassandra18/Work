import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import {
  Lightbulb,
  Users,
  Globe,
  Star,
  HeartHandshake,
  ShieldCheck,
  BookOpenCheck,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
});

const OurVision: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const futureRef = useRef(null);
  const isFutureInView = useInView(futureRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: <BookOpenCheck className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Lifelong Learning",
      desc: "We spark a passion for learning that lasts a lifetime.",
    },
    {
      icon: (
        <HeartHandshake className="mx-auto mb-2 text-green-600" size={32} />
      ),
      title: "Respect & Compassion",
      desc: "We treat others with kindness, empathy, and dignity.",
    },
    {
      icon: <ShieldCheck className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Integrity",
      desc: "We act with honesty, responsibility, and strong moral principles.",
    },
    {
      icon: <Users className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Teamwork",
      desc: "We believe in unity, collaboration, and shared success.",
    },
    {
      icon: <Globe className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Global Awareness",
      desc: "We prepare our learners for a connected and changing world.",
    },
    {
      icon: <Star className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Excellence",
      desc: "We aim high and encourage every learner to do their best.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-white pt-10">
      <div className="relative bg-gradient-to-br from-green-50 to-white py-12 px-6 md:px-16 rounded-xl shadow-md max-w-6xl mx-auto font-sans poppins-regular ">
        {/* Vision */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-6 text-center text-green-800 tracking-tight"
          {...fadeIn()}
        >
          🌿 Our Vision
        </motion.h1>

        <motion.p
          className="md:text-xl text-center mb-10 text-green-700"
          {...fadeIn(0.1)}
        >
          <strong>CBC Kericho Primary School & Junior Secondary</strong>
        </motion.p>

        <motion.p
          className="md:text-lg mb-6 text-gray-700 leading-relaxed"
          {...fadeIn(0.2)}
        >
          At <strong>CBC Kericho</strong>, we dream of a school where learning
          is fun, meaningful, and future-ready. A place where learners shine in
          their own unique ways, guided by caring mentors, and powered by
          curiosity and creativity.
        </motion.p>

        <motion.p
          className="md:text-lg mb-10 text-gray-700 leading-relaxed"
          {...fadeIn(0.3)}
        >
          We strive to be a <strong>center of excellence</strong> in
          Competency-Based Education — building the skills, values, and
          attitudes our learners need to succeed in school and beyond!
        </motion.p>

        {/* Future Goals */}
        <div ref={futureRef} className="mb-14">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 text-green-700 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isFutureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="text-yellow-500 " size={28} />
            What We See for Our Future:
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🌟",
                title: "Learners who lead:",
                desc: "Confident, creative problem-solvers with values and vision.",
              },
              {
                icon: "👩🏽‍🏫",
                title: "Teachers who inspire:",
                desc: "Passionate mentors who bring out the best in every learner.",
              },
              {
                icon: "🌍",
                title: "A future-driven school:",
                desc: "Embracing tech, sustainability, and innovation.",
              },
              {
                icon: "🏫",
                title: "A strong foundation:",
                desc: "Deeply rooted in community, pride, and global awareness.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow rounded-xl p-4 border-l-4 border-green-400"
                initial={{ opacity: 0, x: -50 }}
                animate={isFutureInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {item.icon} <strong>{item.title}</strong> {item.desc}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <motion.div className="mb-14" {...fadeIn(0.5)}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-800 text-center">
            🎯 Our Mission
          </h2>
          <p className="md:text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            To nurture confident, creative, and competent learners through a
            dynamic Competency-Based Curriculum — guided by values, driven by
            curiosity, and empowered to shape a better tomorrow.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mb-10"
          ref={ref}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          variants={fadeIn(0.6)}
        >
          <h2 className=" text-3xl md:text-5xl font-bold mb-6 text-green-800 text-center">
            💚 Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-green-800">
            {values.map((value, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareColor="lightgreen"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={900}
                className="w-full"
              >
                <motion.div
                  className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {value.icon}
                  <h4 className="text-xl font-semibold mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
        {/* Closing Quote */}
        <motion.blockquote
          className="kanit-regular-italic text-center md:text-xl text-gray-500 mt-14 border-t pt-6 border-green-200"
          {...fadeIn(0.7)}
        >
          “At CBC Kericho, we don’t just teach for exams – we prepare young
          minds for life.”
        </motion.blockquote>
      </div>
    </div>
  );
};

export default OurVision;
