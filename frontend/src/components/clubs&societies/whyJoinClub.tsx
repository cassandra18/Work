import { motion } from "framer-motion";
import {
  Users,
  Repeat,
  BarChart3,
} from "lucide-react";

export default function WhyJoinClub() {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-6">
        🧠 Why Join a Club?
      </h2>
      <p className="text-center md:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Clubs offer more than just fun — they help you grow, connect, and make the most of your school life.
      </p>

      <div className="grid gap-8 md:grid-cols-3 text-center">
        {/* Benefit 1 - Teamwork & Confidence */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-2xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Teamwork & Confidence
          </h3>
          <p className="text-gray-600">
            Learn how to collaborate, speak up, and lead as part of a vibrant community.
          </p>
        </motion.div>

        {/* Benefit 2 - Club Switching Info */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-2xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Repeat className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Flexible Choices
          </h3>
          <p className="text-gray-600">
            Not the right fit? You can switch clubs every term — just inform your class teacher.
          </p>
        </motion.div>

        {/* Benefit 3 - Stats */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-2xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <BarChart3 className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Real Impact
          </h3>
          <p className="text-gray-600">
            <strong>90%</strong> of students join at least one club — and many go on to lead!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
