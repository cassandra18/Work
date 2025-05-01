import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import {
  BookOpenCheck,
  HeartHandshake,
  ShieldCheck,
  Globe,
  Star,
  Users,
  Flame,
  Lightbulb
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
      title: "Christ-Centered",
      desc: "We are committed to nurturing a Christ-centered environment.",
    },
    {
      icon: (
        <HeartHandshake className="mx-auto mb-2 text-green-600" size={32} />
      ),
      title: "Biblically-Rooted",
      desc: "We are committed to nurturing a biblically-rooted environment.",
    },
    {
      icon: <ShieldCheck className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Excellence Driven",
      desc: "We strive for excellence in all we do.",
    },
    {
      icon: <Globe className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Relationship-Focused",
      desc: "We value relationships with our learners, families, and community.",
    },
    {
      icon: <Star className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Servant Leadership-Mind",
      desc: "We lead with humility and a commitment to serve others.",
    },
    {
      icon: <Users className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Collaboratively-Supported",
      desc: "We believe in the power of collaboration and support.",
    },
    {
      icon: <Flame className="mx-auto mb-2 text-green-600" size={32} />,
      title: "Self motivated",
      desc: "We encourage self-motivation and personal growth.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-white pt-10 mb-10">
      <div className="relative bg-gradient-to-br from-green-50 to-white py-12 px-6 md:px-16 rounded-xl shadow-md max-w-6xl mx-auto font-sans poppins-regular ">
        {/* Vision */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-15 text-center text-green-800 tracking-tight"
          {...fadeIn()}
        >
          🌿 Our Vision
        </motion.h1>

        <motion.p
          className="md:text-lg mb-6 text-gray-700 leading-relaxed"
          {...fadeIn(0.2)}
        >
          At <strong>Light Junior Academy</strong>, we dream of a school where
          learning is fun, meaningful, and future-ready. A place where learners
          shine in their own unique ways, guided by caring mentors, and powered
          by curiosity and creativity.
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
            🎯 Mission Statement
          </h2>
          <p className="md:text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Light Junior Christian School exists as a non profit organization
            that serve Christ through provisions of quality education, training
            needy and orphan Children to be Christ like,creation of conducive
            environment for child development through charity and scholarships.
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

{/* Our believes */}
<motion.div
          className="m-10"
          ref={ref}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          variants={fadeIn(0.8)}
        >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-green-800 text-center"
          {...fadeIn(0.6)}
        >
          🌱 Our Believes
        </motion.h2>
        <motion.p
          className="md:text-lg text-gray-700  leading-relaxed"
          {...fadeIn(0.8)}
        >
          Light junior Christian School believes in what's stated in
          <strong> Apostle Creed </strong>,
          <motion.p
            className="mt-2 kanit-regular border-l-4 border-green-400 pl-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe in God, the Father almighty, creator of heaven and earth.
            <p className="pt-2" />
            We believe in Jesus Christ, his only Son, our Lord, who was
            conceived by the Holy Spirit and born of the virgin Mary. He
            suffered under Pontius Pilate, was crucified, died, and was buried.
            The third day he rose again from the dead. He ascended to heaven and
            is seated at the right hand of God the Father almighty. From there
            he will come to judge the living and the dead.
            <p className="pt-2" />
            We believe in the Holy Spirit, the holy Christian church, the
            communion of saints, the forgiveness of sins, the resurrection of
            the body, and the life everlasting.
          </motion.p>
        </motion.p>
        </motion.div>

        {/*Objectives  */}
        <motion.div
          className="m-10"
          ref={ref}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          variants={fadeIn(0.9)}
        >
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-green-800 text-center"
          {...fadeIn(0.9)}
        >
          📌 Our Objectives
        </motion.h2>
        <motion.p
          className="md:text-lg text-gray-700 leading-relaxed"
          {...fadeIn(0.9)}
        >Light junior Christian School, through  the love for the Lord Christ Jesus, has a deep desire and commitment to :

        <ul className="kanit-regular mt-5">
          <li>
          a)Teach pupils biblical truths that they can integrate into all knowledge<strong> (proverbs 22:6).</strong>
          </li>
          <li>
          b)Teach pupils the ability to coherently articulate those Godly truths <strong>(Due 6:6-7)</strong>
          </li>
          <li>
          c)Train pupils to measure all knowledge based on those biblical truths <strong>(John 17:17-19).</strong>
          </li>
          <li>
          d)Present a well-developed educational curriculum, provided by a dedicated Leadership , management and staff that is committed to achieving the particular needs within Karandili community and beyond.
          </li>
          <li>
          e) Create a safe, loving, and nurturing environment where pupils can experience success <strong>(Isaiah 54:13).</strong>
          </li>
          <li>
          f)Provide needy and orphan pupils with age-appropriate emergent activities, which encompass all areas of the student’s development <strong>(Psalm 78:1-4).</strong>
          </li>
          <li>
          g)Partner with  Churches,families  and friends by providing opportunities and resources to increase their knowledge of pupils development and parenting skills and attitude (<strong>Genesis 18:19).</strong>
          </li>
          <li>
          h) Supply clean water resource to the neighbors <strong>(Mark 12:31).</strong>
          </li>
          <li>
          I) Serve spiritual and material needs to the needy widows in the community through partnerships support <strong>(James 1:17).</strong>
          </li>
          <li>
          j) participate in peace and reconciliation among communities through children ministry from diverse cultures <strong>( Mathew 5:43-45).</strong>
          </li>
          <li>
          k)provide conducive boarding facilities for the needy and orphans.
          </li>
          <li>
          l) provide  means of transportation to distance learners for easy access to our school.
          </li>
          <li>
          m) provide medical and healthy care to the school and the community through partnerships.
          </li>
        </ul>
        </motion.p>
        </motion.div>
 

        {/* Closing Quote */}
        <motion.blockquote
          className="kanit-regular-italic text-center md:text-xl text-gray-500 mt-14 border-t pt-6 border-green-200"
          {...fadeIn(0.7)}
        >
          “At Light Junior Academy, we don’t just teach for exams – we prepare
          young minds for life.”
        </motion.blockquote>
      </div>
    </div>
  );
};

export default OurVision;
