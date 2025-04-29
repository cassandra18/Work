import { motion } from "framer-motion";
import CTA from "../components/cta";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AdmissionCriteria() {
  return (
    <div className="min-h-screen px-3 py-12 md:px-16 bg-gradient-to-b from-green-white/70 via-green-50/60 to-green-100/80 poppins-regular">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
            📝 Admission Criteria
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
            Find out who is eligible to join Light Junior Academy and the documents required for a successful application.
          </p>
        </motion.div>

        {/* Admission Levels */}
        <div className="space-y-10 mb-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="bg-green-50 p-6 rounded-xl md:shadow shadow-xl"
          >
            <h2 className="md:text-2xl font-semibold text-green-800 mb-2">
              📘 Pre-Primary (PP1 & PP2)
            </h2>
            <p className="text-gray-700">
              Children aged 4–5 years are eligible for admission to PP1 and PP2. Basic language development and readiness to learn are considered.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-green-50 p-6 rounded-xl md:shadow shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              📗 Lower Primary (Grade 1–3)
            </h2>
            <p className="text-gray-700">
              Admission to Grades 1–3 requires evidence of successful completion of the previous level, age appropriateness, and readiness for formal schooling.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-50 p-6 rounded-xl md:shadow shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              🎓 Junior Secondary (Grade 7–9)
            </h2>
            <p className="text-gray-700">
              Students must have successfully completed Grade 6 and received placement through KPSEA or equivalent assessments.
            </p>
          </motion.div>

          {/* Required Documents */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-yellow-50 p-6 rounded-xl border border-green-100 md:shadow shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              🗂️ Required Documents
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              <li>Copy of birth certificate</li>
              <li>Recent passport-size photos (2)</li>
              <li>Previous school report card (if applicable)</li>
              <li>Copy of parent/guardian ID</li>
              <li>Completed admission form</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <CTA/>
    </div>
  );
}
