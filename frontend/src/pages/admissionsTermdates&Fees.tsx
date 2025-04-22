import { motion } from "framer-motion";
import { Download } from "lucide-react"; // optional icon for download
import CTA from "../components/cta";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function KeyDatesFees() {
  return (
    <div className="min-h-screen px-4 py-12 md:px-16 bg-gradient-to-b from-green-white/60 via-green-50/60 to-green-100/70 poppins-regular">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
            📅 Key Dates & Fees
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay informed on term calendars, school fees, and important payment details for CBC Kericho.
          </p>
        </motion.div>

        {/* Term Dates Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="bg-green-50 p-6 rounded-xl shadow-xl mb-10"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            🗓️ Term Dates
          </h2>

          {/* You can replace this with an actual calendar component later */}
          <div className="text-gray-700 space-y-2 text-sm md:text-base">
            <p><strong>Term 1:</strong> January 8 – April 5</p>
            <p><strong>Term 2:</strong> May 6 – August 2</p>
            <p><strong>Term 3:</strong> September 2 – November 22</p>
          </div>

          <div className="mt-4">
            <a
              href="/documents/CBC_Kericho_Term_Dates_2025.pdf"
              download
              className="inline-flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition"
            >
              <Download size={18} />
              Download Full Term Calendar (PDF)
            </a>
          </div>
        </motion.div>

        {/* Fees Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-yellow-50 p-6 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            💳 Fee Payment Details
          </h2>

          <div className="text-gray-700 space-y-4 text-sm md:text-base">
            <div>
              <h3 className="font-medium text-green-700 mb-1">💰 Tuition Fees</h3>
              <p>Fees vary by grade level. Please contact the school office for exact figures based on your child's class.</p>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-1">🏦 Bank Information</h3>
              <p><strong>Bank Name:</strong> ABC Bank, Kericho Branch</p>
              <p><strong>Account Name:</strong> CBC Kericho Primary</p>
              <p><strong>Account Number:</strong> 012345678901</p>
              <p><strong>Paybill Number (M-Pesa):</strong> 123456</p>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-1">⏰ Payment Deadlines</h3>
              <ul className="list-disc list-inside ml-2">
                <li>Term 1 fees: Due by January 5</li>
                <li>Term 2 fees: Due by May 3</li>
                <li>Term 3 fees: Due by August 30</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-green-700 mb-1">📋 Policies</h3>
              <p>Late payments may incur penalties. For special payment arrangements, kindly contact the bursar or administration office directly at:</p>
                <p className="font-semibold py-3">📞 +254 700 000 000</p>
                <p className="font-semibold">📧 bursar@cbckericho.co.ke</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="mt-16">
        <CTA />
      </div>
    </div>
  );
}
