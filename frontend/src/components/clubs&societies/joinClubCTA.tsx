import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-b from-white to-green-100 py-12 px-6 md:px-16 text-center rounded-lg shadow-md">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-6">
          Ready to Take the Leap? 🚀
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Join a club today or start your own! Get involved, explore your passions, and make new friends.
        </p>
        <a
          href="YOUR_FORM_LINK_HERE" // Replace with your Google Form link or internal form
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-600 text-white text-lg px-8 py-4 rounded-xl hover:bg-green-700 transition duration-300 transform hover:scale-105">
            Join a Club Today!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
