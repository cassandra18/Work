import { motion } from "framer-motion";




const sports = [
  {
    name: "Athletics",
    icon: "🏃‍♂️",
    description: "Track and field events for all age groups.",
    trainingDays: "Mon & Wed",
    coach: "Coach Kiprono",
  },
  {
    name: "Football",
    icon: "⚽",
    description: "Boys' and girls' football teams with inter-school matches.",
    trainingDays: "Tue & Thu",
    coach: "Mr. Mutai",
  },
  {
    name: "Volleyball",
    icon: "🏐",
    description: "Boys' and girls' volleyball practice and tournaments.",
    trainingDays: "Mon & Fri",
    coach: "Miss Chebet",
  },
  {
    name: "Basketball",
    icon: "🏀",
    description: "Learn dribbling, shooting and teamwork in our court.",
    trainingDays: "Wed & Fri",
    coach: "Mr. Onyango",
  },
  {
    name: "Badminton",
    icon: "🏸",
    description: "Indoor badminton sessions for all levels.",
    trainingDays: "Thu & Sat",
    coach: "Miss Akinyi",
  },
  {
    name: "Taekwondo",
    icon: "🥋",
    description: "Discipline and strength through martial arts.",
    trainingDays: "Sat",
    coach: "Sensei Kim",
  },
  {
    name: "Table Tennis",
    icon: "🏓",
    description: "Fast-paced matches and fun for all.",
    trainingDays: "Wed & Sat",
    coach: "Mr. Langat",
  },
];

export default function SportsWeOffer() {
  return (
    <section className="py-16 px-3 max-w-7xl mx-auto bg-gradient-to-br to-green-100 from-green-50 mb-20 rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-green-800">🏀 Sports We Offer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
          Our students have access to a variety of exciting sports to help them grow in teamwork, discipline, and fun.
        </p>
      </motion.div>

{/* Grid for large devices */}
      <div className="hidden md:grid gap-8 grid-cols-3">
        {sports.map((sport, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-green-100"
          >
            <div className="text-4xl mb-4">{sport.icon}</div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">{sport.name}</h3>
            <p className="text-gray-700 mb-3">{sport.description}</p>
            <p className="text-sm text-gray-600">🗓️ <strong>Training:</strong> {sport.trainingDays}</p>
            <p className="text-sm text-gray-600">👨‍🏫 <strong>Coach:</strong> {sport.coach}</p>
          </motion.div>
        ))}
      </div>

      {/* Overflow flex for small devices */}
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin snap-x snap-mandatory md:hidden">
        {sports.map((sport, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="max-w-[90vw] snap-start bg-green-50 shadow-md rounded-2xl p-4 flex-shrink-0"
          >
            <div className="text-xl font-semibold text-green-800 mb-2">{sport.icon} {sport.name}</div>
            <p className="text-gray-700 mb-3">{sport.description}</p>
            <p className="text-sm text-gray-600">🗓️ <strong>Training:</strong> {sport.trainingDays}</p>
            <p className="text-sm text-gray-600">👨‍🏫 <strong>Coach:</strong> {sport.coach}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
