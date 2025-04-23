import { motion } from "framer-motion";

const clubs = [
  {
    name: "Tech Club",
    tagline: "Innovate, Code, Create",
    meeting: "Fridays, 3–4 PM",
    leader: "Mr. Kiprono",
    achievement: "Built a school attendance app",
    image: "/images/students-coding.jpg",
  },
  {
    name: "Drama Society",
    tagline: "Express, Perform, Inspire",
    meeting: "Wednesdays, 2–3 PM",
    leader: "Ms. Chelangat",
    achievement: "Won county drama festival",
    image: "/images/drama-reharsal.jpg",
  },
  {
    name: "Science Club",
    tagline: "Explore, Experiment, Excel",
    meeting: "Mondays, 4–5 PM",
    leader: "Mr. Langat",
    achievement: "Created a water filtration model",
    image: "/images/robot-building.jpg",
  },
  {
    name: "Art & Culture Club",
    tagline: "Create, Connect, Celebrate",
    meeting: "Thursdays, 3–4 PM",
    leader: "Mrs. Njeri",
    achievement: "Painted the school mural",
    image: "/images/art-club.jpg",
  },
  {
    name: "Environment & Wildlife Club",
    tagline: "Protect Nature, Promote Sustainability",
    meeting: "Tuesdays, 4–5 PM",
    leader: "Mr. Mutai",
    achievement: "Planted 200 trees around the school",
    image: "/images/environment-club.jpeg",
  },
  {
    name: "Journalism Club",
    tagline: "Find Your Voice, Tell the Story",
    meeting: "Thursdays, 3:30 – 4:30 PM",
    leader: "Ms. Njeri",
    achievement: "Published the school's first digital newsletter: *The Green Gazette*",
    image: "/images/journalism-club.jpg", 
  }
];

export default function ClubAndSocieties() {
  return (
    <section className="px-4 py-10 md:py-20 bg-gradient-to-b from-green-100 to-green-50">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-green-800">
        🎯 Club Spotlights
      </h2>
      <p className="text-center md:text-lg text-gray-600 max-w-xl mx-auto mb-8">
        Discover the amazing clubs and societies at our school! From tech and
        art to wildlife conservation, there’s something for everyone to explore,
        learn, and lead.
      </p>

      {/* Horizontal scroll for small devices */}
      <div className="flex md:hidden scrollbar-thin overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth pb-4 ">
        {clubs.map((club, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex-shrink-0 snap-start w-80 bg-white shadow-xl rounded-2xl overflow-hidden"
          >
            <img
              src={club.image}
              alt={club.name}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">
                {club.name}
              </h3>
              <p className=" italic">{club.tagline}</p>
              <p className="text-sm">
                <strong>🕒 Meets:</strong> {club.meeting}
              </p>
              <p className="text-sm">
                <strong>👤 Leader:</strong> {club.leader}
              </p>
              {club.achievement && (
                <p className="text-xs text-green-600">
                  <strong>🏆 Project:</strong> {club.achievement}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid layout for larger devices */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden flex"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={club.image}
              alt={club.name}
              loading="lazy"
              className="w-1/2 h-full object-cover"
            />
            <div className="p-4 w-1/2 flex flex-col justify-between gap-2">
              <h3 className="text-xl font-semibold text-green-700">
                {club.name}
              </h3>
              <p className=" italic">{club.tagline}</p>
              <p className="">
                <strong>🕒 Meets:</strong> {club.meeting}
              </p>
              <p className="">
                <strong>👤 Leader:</strong> {club.leader}
              </p>
              {club.achievement && (
                <p className="text-sm text-green-600">
                  <strong>🏆 Project:</strong> {club.achievement}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
