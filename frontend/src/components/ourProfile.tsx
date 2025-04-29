import React from "react";
import { motion } from "framer-motion";
import CTA from "./cta";


const OurProfile: React.FC = () => {
  return (
    <div className="poppins-regular">
      <div
        className=" relative  text-white h-96"
        style={{
          backgroundImage: `url('/images/students2.jpeg')`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="inset-0 absolute bg-black opacity-60"></div>

        {/* Animated content */}
        <motion.div
          className=" relative flex flex-col justify-center items-center px-4 animate-fade-in  h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-2xl leading-snug max-w-3xl drop-shadow-lg poppins-bold">
            "Education is the most powerful weapon which you can use to change
            the world."
          </p>
          <span className="poppins-extrabold text-xl text-[#9dffd3] tracking-wide">
            – Nelson Mandela
          </span>
        </motion.div>
      </div>

      {/* Heading */}
      <section className=" bg-gradient-to-b from-[#9dffd37b] to-white md:py-20 px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold text-center text-[#0C834E] pt-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Light Junior Academy School
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12 text-[16px] md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Where learning is fun, creative, hands-on, and filled with heart. We
          nurture well-rounded learners who are prepared for life — not just
          exams.
        </motion.p>

        {/* Paragraph Sections with Emojis and Zig-Zag Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-[16px] md:text-lg"
          >
            <span className="text-2xl mr-2">🌱</span>
            <span className="font-semibold text-md text-[#0C834E]">
              A Nurturing Environment:
            </span>
            Our school is located in the serene hills of Kericho, surrounded by
            nature, where learners thrive in a safe and supportive atmosphere.
            This environment fosters growth in both academic and personal
            aspects, allowing students to develop self-confidence and a love for
            learning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center text-[16px] md:text-lg"
          >
            <span className="text-2xl mr-2">🧠</span>
            <span className="font-semibold text-[#0C834E]">
              Competency-Based Learning:
            </span>
            Our CBC system emphasizes practical application over rote
            memorization. Students learn through hands-on activities, projects,
            and critical thinking. We prepare them to not only excel
            academically but also solve real-world problems, encouraging
            creativity and innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-[16px] md:text-lg"
          >
            <span className="text-2xl mr-2">🤝</span>
            <span className="font-semibold text-[#0C834E]">
              A Vibrant Community:
            </span>
            We believe in the power of community. Our students, teachers, and
            parents are all part of a larger family that works together to
            foster a culture of collaboration, support, and mutual respect. We
            celebrate individual strengths and ensure everyone’s voice is heard.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center text-[16px] md:text-lg"
          >
            <span className="text-2xl mr-2">🎨</span>
            <span className="font-semibold text-[#0C834E]">
              Creativity & Expression:
            </span>
            Creativity is at the heart of education at Light Junior Academy. Students are
            encouraged to explore their artistic talents through music, drama,
            arts, and sports. These experiences help nurture their
            self-expression and foster emotional intelligence, which is as
            important as academic learning.
          </motion.p>
        </div>
      </section>

      {/* Directors word */}
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-white to-gray-300 shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4 text-[#0C834E]">
          A Word From Our Director
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-center text-gray-700 border-t-2 border-[#0C834E] pt-4">
          <img
            src="/images/director.jpeg"
            alt="director image"
            loading="lazy"
            className="h-32 w-32 md:w-48 md:h-48 rounded-full mb-4"
          />
          <p className="text-md md:text-lg leading-relaxed">
            Welcome to our vibrant and forward-thinking CBC Primary and Junior
            Secondary School here in the heart of Kericho. At our school, we
            believe in nurturing every child's potential through a holistic and
            learner-centered approach that aligns with the Competency Based
            Curriculum.
            <br />
            <br />
            Our mission is to empower learners with the knowledge, skills, and
            values they need to thrive in the 21st century. We foster
            creativity, critical thinking, collaboration, and strong moral
            values in a supportive and inclusive environment.
            <br />
            <br />
            With a team of dedicated, professionally trained teachers and a
            focus on individualized attention, we ensure that no child is left
            behind. Our modern facilities, digital learning tools, and active
            co-curricular programs help develop well-rounded learners who are
            not only academically strong but also socially and emotionally
            intelligent.
            <br />
            <br />
            I warmly invite parents and guardians to become part of this amazing
            journey. Join us as we build the future—one learner at a time.
            <br />
            <br />
            <span className="font-semibold">
              – Director, Light Junior Academy School
            </span>
          </p>
        </div>
      </div>

      <section
        className="mt-10 p-10 md:py-20 px-4"
      >
        <div className="max-w-5xl mx-auto">
          {/* Inspirational Quote */}
          <motion.blockquote
            className="md:mt-16 md:text-xl kanit-regular-italic text-center text-gray-700 border-l-4 border-[#0C834E] pl-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            “At Light Junior Academy School, we don’t just prepare learners for the
            future — we help them create it.”
          </motion.blockquote>
        </div>
      </section>

<div className="flex flex-col md:flex-row items-center justify-evenly bg-gradient-to-br from-white to-[#9dffd379] md:pb-6 pb-10">
      {/* School tuor video */}
      <div className="w-full md:w-1/2 p-4 md:p-6 md:py-16 poppins-regular">
        <h2 className="text-3xl font-bold mb-4 text-[#0C834E] text-center">🎥 School Tour Video</h2>
        <div className="mx-auto max-w-[600px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <video
            className="w-full h-auto rounded-lg"
            controls
            autoPlay={false}
            poster="/images/video-thumbnail.png"
          >
            <source src="/videos/cbc-kericho.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div>
        <CTA/>
      </div>
</div>

    </div>
  );
};

export default OurProfile;
