import { motion } from "framer-motion";

const houseCompetitions = [
  { event: "Sack Race 🏁", winner: "Emerald House", color: "bg-green-300" },
  {
    event: "Obstacle Course 🧗",
    winner: "Jade House",
    color: "bg-emerald-500",
  },
  { event: "Football ⚽", winner: "Lime House", color: "bg-lime-400" },
  { event: "Volleyball 🏐", winner: "Mint House", color: "bg-teal-300" },
  { event: "Tug of War 💪", winner: "Emerald House", color: "bg-green-300" },
  { event: "Track Events 🏃‍♀️", winner: "Jade House", color: "bg-emerald-500" },
];

const classCompetitions = [
  "Puzzle Relay 🧩",
  "Math Races ➕",
  "Mini Football League ⚽",
  "Quiz Challenges 📚",
];

const mvpStudents = [
  {
    name: "Brian Kipkoech",
    sport: "Football",
    quote: "Scored 10 goals this term!",
    photo: "/images/dhead-boy-primary.jpeg",
  },
  {
    name: "Faith Chebet",
    sport: "Volleyball",
    quote: "MVP with 20 spikes!",
    photo: "/images/head-girl-secondary.jpeg",
  },
];

const topHousePoints = [
  { house: "Emerald", points: 120 },
  { house: "Jade", points: 105 },
  { house: "Lime", points: 98 },
  { house: "Mint", points: 90 },
];

const studentAchievements = [
  {
    title: "Most Improved Player",
    student: "John Mutai",
    stat: "Improved sprint time by 3.2s",
    photo: "/images/head-boy-secondary.jpeg",
  },
  {
    title: "Sports Captain of the Month",
    student: "Mary Wanjiku",
    stat: "Led 4 practice sessions and 2 wins",
    photo: "/images/head-girl-primary.jpeg",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
  viewport: { once: true },
});

export default function InternalTournaments() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
      
      <div className="max-w-7xl mx-auto mb-12">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-green-800 mb-10 text-center"
        {...fadeIn(0.1)}
      >
        🏆 Internal School Tournaments
      </motion.h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg ">
        Our school comes alive each term with exciting inter-house and
        inter-class tournaments.
      </p>

      <div className="mb-16 ">
        <h3 className="text-3xl font-bold text-green-700 mb-1 flex items-center gap-2">
          🏠 House Competitions
        </h3>
        <p className="text-gray-600 mb-6 text-base md:text-lg italic">
          Exciting inter-house competitions held every term!
        </p>

        <div className="flex flex-wrap gap-6 justify-start">
          {houseCompetitions.map((item, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.2 + index * 0.1)}
              className={`relative w-[280px] rounded-2xl shadow-xl p-6 ${item.color} border-4 border-white`}
            >
              <h4 className="text-green-900 text-xl font-bold mb-2">
                {item.event}
              </h4>
              <p className="text-green-900 text-sm mb-1">
                <span className="font-semibold">🏅 Winner:</span> {item.winner}
              </p>
              <div className="mt-3 text-green-800 text-xs italic">
                House showdown fun!
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-bold text-green-700 mb-1">
          📚 Class Competitions
        </h3>
        <p className="text-gray-600 mb-6 text-base md:text-lg  italic">
          Engaging termly challenges to boost class spirit and brainpower!
        </p>

        <div className="flex flex-wrap gap-4">
          {classCompetitions.map((event, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.2 + index * 0.1)}
              className="bg-yellow-100 border border-green-200 text-green-900 font-semibold px-5 py-3 rounded-full shadow-md text-sm hover:scale-105 transition-transform duration-200 cursor-default"
            >
              {event}
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      {/* Leadership board */}

      <div className="bg-gradient-to-br from-green-100 to-white p-4 rounded-lg md:py-16  ">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-green-800 mb-10 text-center "
          {...fadeIn(0.3)}
        >
          🧑‍🎓 Student Leaderboard & Achievements
        </motion.h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Celebrating outstanding student achievements in sports, leadership,
          and personal growth. From MVPs to sports captains, meet the stars
          making CBC Kericho shine!
        </p>

        <div className="my-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mvpStudents.map((student, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.2 + index * 0.1)}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-green-200"
                />
                <div>
                  <h4 className="text-xl font-bold text-green-700">
                    🎖️ {student.name}
                  </h4>
                  <p className="text-green-600">{student.sport} MVP</p>
                  <p className="text-sm text-gray-600 italic">
                    "{student.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-12 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            🥇 Top House Points
          </h3>
          <div className="bg-black text-white rounded-xl p-6 shadow-lg">
            {topHousePoints.map((house, index) => (
              <motion.div
                key={index}
                {...fadeIn(0.2 + index * 0.1)}
                className="flex justify-between py-1 border-b border-green-800 last:border-0"
              >
                <span>{house.house} House</span>
                <span>{house.points} pts</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className=" grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {studentAchievements.map((achieve, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.2 + index * 0.1)}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={achieve.photo}
                  alt={achieve.student}
                  className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow-md"
                />
                <div>
                  <h4 className="text-xl font-bold text-green-800">
                    {achieve.title}
                  </h4>
                  <p className="text-green-700">{achieve.student}</p>
                  <p className="text-sm text-gray-600 italic">{achieve.stat}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
