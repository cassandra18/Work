import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const steps = [
  {
    title: "1. Visit the School or Website",
    description:
      "Learn more about Light Junior Academy by visiting us or browsing our website.",
    icon: "🏫",
  },
  {
    title: "2. Pick or Download Application Form",
    description: "Collect the form physically or download it below.",
    icon: "📝",
  },
  {
    title: "3. Fill in the Form",
    description:
      "Complete all required fields carefully and attach necessary documents.",
    icon: "✍️",
  },
  {
    title: "4. Submit Your Application",
    description: (
      <>
        Drop it off at the school office or email it to{" "}
        <strong>admissions@lightjunior.ac.ke</strong>.
      </>
    ),
    icon: "📨",
  },
  {
    title: "5. Wait for Feedback",
    description:
      "Our team will review and get in touch for next steps like interviews or placement.",
    icon: "📞",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HowToApply() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-16 bg-green-50 poppins-regular">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          📬 How to Apply
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
          Follow these simple steps to join Light Junior Academy and become part of a
          nurturing learning environment.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-3 md:p-6 rounded-2xl shadow hover:shadow-md transition-shadow border-l-4 border-green-400"
          >
            <div className="text-xl md:text-3xl md:mb-4 mb-2">{step.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center mt-12 space-y-4">
        <a
          href="/documents/CBC_Kericho_Admission_Form_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition"
        >
          <FileDown size={18} /> Download Application Form
        </a>
        <br />
      </div>
      <div className="w-fit mx-auto border border-green-600 text-gray-500 py-3 px-6 rounded-4xl space-y-2">
        <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
          <span className="text-green-700">Contact Admissions Office at:</span>
        </div>
        <p className="font-semibold ">
          <a href="tel:+254700000000">📞 +254 700 000 000</a>
        </p>
        <p className="font-semibold">
          <a href="mailto:admissions@lightjunior.co.ke">
            📧 admissions@lightjunior.co.ke
          </a>
        </p>
      </div>
    </div>
  );
}
