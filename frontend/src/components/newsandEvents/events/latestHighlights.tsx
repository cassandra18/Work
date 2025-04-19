import React from "react";
import { motion } from "framer-motion";


type Highlight = {
  emoji: string;
  date: string;
  title: string;
  description: string;
  media?: {
    type: "video" | "gallery" | "🎬interview";
    label: string;
    url?: string;
  }[];
};

const highlights: Highlight[] = [
  {
    emoji: "🧠",
    date: "APRIL 15, 2025",
    title: "CLASS 6 CBC PROJECT FAIR",
    description: `"Inventing for the future!" — Photos + Short Video`,
    media: [
      { type: "gallery", label: " 🖼️ View Photos", url: "#" },
      { type: "video", label: "🎬  Watch Recap", url: "#" },
    ],
  },
  {
    emoji: "🧹",
    date: "MARCH 30, 2025",
    title: "CLEAN-UP DAY",
    description:
      "Environmental Club led a successful Kericho town cleanup. – Staff Quotes – Gallery Link",
    media: [
      { type: "gallery", label: "🖼️ View Gallery", url: "#" },
    ],
  },
  {
    emoji: "🐝",
    date: "MARCH 14, 2025",
    title: "INTERCLASS SPELLING BEE",
    description: `Winner: Grade 4B’s Abigail Too 🎉 — Video Replay Available`,
    media: [
      { type: "video", label: "🎬  Watch Recap", url: "#" },
    ],
  },
];

const LatestHighlights: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-20" id="higlights">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-10 md:mb-20">
        📸 Latest Highlights
      </h2>

      <div className="border-l-4 border-green-500 pl-3 space-y-10">
        {highlights.map((item, index) => (
          <motion.div 
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative">
            <div className="absolute -left-[9px] top-1 w-9 h-9 text-center text-2xl bg-gray-400 rounded-full">{item.emoji}</div>

            <p className="text-sm text-gray-500 font-medium mb-1 pl-9"> {item.date}</p>
            <h3 className="md:text-xl text-lg font-bold text-green-700 pl-9">{item.title}</h3>
            <p className="text-gray-700 mt-2 pl-9 text-[15px]">{item.description}</p>

            {item.media && (
              <div className="flex flex-wrap gap-3 mt-2">
                {item.media.map((mediaItem, i) => (
                  <a
                    key={i}
                    href={mediaItem.url || "#"}
                    className="mt-6 px-6 py-2 bg-green-400 hover:bg-yellow-300 text-green-900 font-semibold rounded-full transition duration-300 shadow-lg"
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
    </div>
  );
};

export default LatestHighlights;
