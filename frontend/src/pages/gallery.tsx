import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = [
  "All",
  "School Life",
  "Co-curricular",
  "Sports",
  "Events",
  "Projects",
  "Facilities",
  "Staff",
];

const galleryItems = [
  { src: "/images/digital.jpeg", category: "School Life", alt: "Classroom Learning" },
  { src: "/images/students-with-instruments.jpg", category: "Co-curricular", alt: "Music Club" },
  { src: "/images/athletics.png", category: "Sports", alt: "Football Match" },
  { src: "/images/balletdance.jpeg", category: "Events", alt: "Graduation Day" },
  { src: "/images/robot-building.jpg", category: "Projects", alt: "Student Innovation" },
  { src: "/images/library.jpeg", category: "Facilities", alt: "Library Facilities" },
  { src: "/images/headteacher.jpeg", category: "Staff", alt: "Teachers Team" },
  { src: "/videos/cbc-kericho.mp4", category: "School Life", alt: "Light Junior Academy", isVideo: true },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<{ src: string, isVideo?: boolean } | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto poppins-regular">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-green-700 mb-8">📸 School Gallery</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedMedia({ src: item.src, isVideo: item.isVideo })}
          >
            {item.isVideo ? (
              <video
                src={item.src}
                className="rounded-lg shadow-md w-full h-40 object-cover"
                muted
                autoPlay
                loop
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl w-full mx-4">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-3 right-3 bg-white text-green-700 p-2 rounded-full shadow"
              >
                <X size={20} />
              </button>
              {selectedMedia.isVideo ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt="Full View"
                  loading="lazy"
                  className="w-full rounded-lg"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
