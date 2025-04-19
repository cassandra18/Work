import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Event = {
  title: string;
  date: string; // ISO format
  time: string;
  location: string;
  emoji: string;
};

const events: Event[] = [
  {
    title: "Sports Day",
    date: "2025-04-24",
    time: "09:00",
    location: "Field",
    emoji: "🏃",
  },
  {
    title: "Music Festival",
    date: "2025-05-02",
    time: "10:00",
    location: "Hall",
    emoji: "🎶",
  },
  {
    title: "CBC Expo",
    date: "2025-05-15",
    time: "08:00",
    location: "Classes",
    emoji: "🧠",
  },
  {
    title: "Tree Planting",
    date: "2025-06-01",
    time: "07:00",
    location: "School Grounds",
    emoji: "🌱",
  },
];

const getCountdown = (eventDate: string) => {
  const timeLeft = new Date(eventDate).getTime() - new Date().getTime();
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  return days > 0 ? `${days} day(s) left` : "Today!";
};

const UpcomingEvents: React.FC = () => {
  const [countdowns, setCountdowns] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCountdowns = events.map((event) =>
        getCountdown(`${event.date}T${event.time}`)
      );
      setCountdowns(updatedCountdowns);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 py-8 mt-15 max-w-7xl mx-auto rounded-2xl shadow-2xl " >
      <h2 id="upcomingEvents" className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-10 ">
        🟢 Upcoming Events
      </h2>

      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin snap-x snap-mandatory">
        {events.map((event, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="min-w-[250px] snap-start bg-green-50 shadow-md rounded-2xl p-4 flex-shrink-0"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {event.emoji} {event.title}
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              <strong>Date:</strong> {new Date(event.date).toDateString()}
            </p>
            <p className="text-sm md:text-base text-gray-700">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="text-sm md:text-base text-gray-700">
              <strong>Location:</strong> {event.location}
            </p>

            <div className="text-xs md:text-sm mt-2 text-green-600 font-bold">
              ⏳ {countdowns[index] || "Loading..."}
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
