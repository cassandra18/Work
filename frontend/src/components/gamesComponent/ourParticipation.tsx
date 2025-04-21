import { motion } from "framer-motion";

const eventHighlights = [
  {
    title: "Kericho County Athletics (2024)",
    emoji: "🏅",
    description: "U12 boys reached county finals – 3rd place overall.",
    image: "/images/athletics-medal.jpeg",
    direction: "left",
    media: [
      { type: "gallery", label: " 🖼️ View Photos", url: "#" },
      { type: "video", label: "🎬  Watch Recap", url: "#" },
    ],
  },
  {
    title: "Zonal Football Tournament (2023)",
    emoji: "⚽",
    description: "U13 girls team won semifinals, placed 2nd in finals.",
    image: "/images/football-team.jpeg",
    direction: "right",
    media: [
      { type: "gallery", label: " 🖼️ View Photos", url: "#" },
      { type: "video", label: "🎬  Watch Recap", url: "#" },
    ],
  },
  {
    title: "CBC Regional Sports Festival (2022)",
    emoji: "🏐",
    description: "Mixed volleyball team reached quarterfinals.",
    image: "/images/volleyball-action.jpeg",
    direction: "left",
    media: [
      { type: "gallery", label: " 🖼️ View Photos", url: "#" },
      { type: "video", label: "🎬  Watch Recap", url: "#" },
    ],
  },
];

const fadeIn = (delay = 0, direction: "left" | "right" = "left") => {
  const x = direction === "left" ? -50 : 50;
  return {
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay, duration: 0.6 },
    viewport: { once: true, amount: 0.3 },
  };
};

const EventParticipation = () => {
  return (
    <section className="md:py-16 bg-green-50 scroll-mt-24">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-green-800 mb-12 text-center"
        {...fadeIn(0.1)}
      >
        🌍 Our Participation in Events
      </motion.h2>

      <div className="hidden md:block">
        <div className="md:relative max-w-6xl mx-auto px-4">
          {/* Timeline line for large devices*/}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 z-0"></div>

          {eventHighlights.map((event, index) => {
            const isLeft = event.direction === "left";
            return (
              <motion.div
                key={index}
                className={`relative mb-20 flex flex-col lg:flex-row items-center gap-8 z-10 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                {...fadeIn(
                  0.2 + index * 0.1,
                  event.direction as "left" | "right"
                )}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 border-4 border-white rounded-full z-20 shadow-md"></div>

                {/* Text */}
                <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-green-100">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{event.description}</p>
                  {event.media && (
                    <div className="flex flex-nowrap gap-3 mt-2">
                      {event.media.map((mediaItem, i) => (
                        <a
                          key={i}
                          href={mediaItem.url || "#"}
                          className="mt-2 px-2 py-2 bg-green-400 hover:bg-yellow-300 text-green-900 font-semibold rounded-full transition duration-300 shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {mediaItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-96 max-w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Timeline for small devices */}
      <div className="border-l-4 border-green-500 pl-3 space-y-10 md:hidden rounded-lg shadow-md py-2 ml-2">
        {eventHighlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[9px] top-1 w-9 h-9 text-center text-2xl bg-gray-200 rounded-full">
              {item.emoji}
            </div>
            <h3 className="md:text-xl text-lg font-bold text-green-700 pl-9">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2 pl-9 text-[15px]">
              {item.description}
            </p>

            {item.media && (
              <div className="flex flex-nowrap gap-3 mt-2">
                {item.media.map((mediaItem, i) => (
                  <a
                    key={i}
                    href={mediaItem.url || "#"}
                    className="mt-2 px-2 py-2 bg-green-400 hover:bg-yellow-300 text-green-900 font-semibold rounded-full transition duration-300 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mediaItem.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventParticipation;
