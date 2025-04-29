import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PrincipalMessage from '../components/admission/principalMessage';
import CTA from "../components/cta";

const features = [
    {
      title: "🌟 Why Choose Light Junior Academy?",
      description:
        "We offer CBC-focused learning, experienced teachers, and a nurturing environment that supports every child's growth.",
    },
    {
      title: "📝 Admission Criteria",
      description:
        "Learn what is needed to join our school at different levels, from pre-primary to junior secondary.",
      link: "/admission/criteria",
    },
    {
      title: "📅 Key Dates & Fees",
      description:
        "Get up-to-date information on academic term dates, tuition fees, and payment methods.",
      link: "/admission/dates-fees",
    },
    {
      title: "📬 How to Apply",
      description:
        "Follow a simple step-by-step guide on how to enroll your child at Light Junior Academy.",
      link: "/admission/how-to-apply",
    },
  ];
  

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AdmissionOverview() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-16 poppins-regular">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
        🚀  Admissions at Light Junior Academy
        </h1>

    
        <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
          Discover how to become part of a vibrant, student-centered learning community from pre-primary to junior secondary.
        </p>


        {/* Principal's message */}
      <div className='w-full '>
      <PrincipalMessage/>
      </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 pt-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 mb-4">{feature.description}</p>
            {feature.link && (
              <Link
                to={feature.link}
                className="inline-block mt-2 text-green-600 font-medium hover:underline"
              >
                Learn more →
              </Link>
            )}
          </motion.div>
        ))}

        <CTA/>
      </div>
    </div>
  );
}
