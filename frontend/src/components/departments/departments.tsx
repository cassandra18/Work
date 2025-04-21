'use client';

import { motion } from 'framer-motion';

const departments = [
  {
    name: 'Languages',
    description:
      'This department focuses on enhancing literacy and communication through English and Kiswahili. It nurtures reading, writing, speaking, and listening skills vital for academic success and life beyond school.',
    subjects: ['English', 'Kiswahili', 'Foreign Languages (Optional)'],
    icon: '📚',
  },
  {
    name: 'Mathematics',
    description:
      'Mathematics lays the foundation for critical thinking, problem-solving, and logical reasoning. This department ensures learners develop numeracy skills across various strands like arithmetic, geometry, and algebra.',
    subjects: ['Numeracy', 'Measurement', 'Data Handling', 'Algebra'],
    icon: '➗',
  },
  {
    name: 'Science & Technology',
    description:
      'The Science & Tech department encourages inquiry-based learning. It introduces students to the natural and applied sciences, preparing them to explore the world around them with curiosity and care.',
    subjects: ['Biology', 'Chemistry', 'Physics', 'ICT'],
    icon: '🔬',
  },
  {
    name: 'Social Studies & CRE/IRE',
    description:
      'This department helps students understand their society, history, cultures, environment, and moral values. It includes civic education and spiritual development through Religious Education.',
    subjects: ['Geography', 'History', 'CRE/IRE/HRE'],
    icon: '🌍',
  },
  {
    name: 'Creative Arts & Physical Education',
    description:
      'Combining physical fitness with artistic expression, this department offers a vibrant learning experience through sports, music, visual arts, and drama.',
    subjects: ['Music', 'Art & Craft', 'Drama', 'PE'],
    icon: '🎨',
  },
  {
    name: 'Home Science & Life Skills',
    description:
      'Here, learners gain essential life skills like cooking, home management, and health education. This department prepares them to lead responsible and independent lives.',
    subjects: ['Home Science', 'Life Skills', 'Health Education'],
    icon: '🏡 ',
  },
  {
    name: 'ICT & Digital Literacy',
    description:
      'Focused on technology integration, this department equips students with foundational coding, online safety, and digital tools to enhance learning and future readiness.',
    subjects: ['Basic Coding', 'Digital Citizenship', 'Typing & Docs'],
    icon: '💻',
  },
];

export default function DepartmentsOverview() {
  return (
    <div className="py-10 px-4 md:px-10 bg-white text-gray-800">
      <div className='flex flex-col items-center mb-10'>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-green-800">📚 Academic Departments</h2>
      <p className="mb-10 md:text-lg text-gray-600 max-w-3xl ">
        Our academic structure is guided by the CBC curriculum, which emphasizes competency development across key learning areas. Each department plays a vital role in shaping a holistic, future-ready learner.
      </p>
      </div>


      {/* Horizontal Snap Scroll on Small Screens */}
      <div className="md:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-thin overflow-y-hidden">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className="max-w-[90vw] snap-start min-w-[85%] bg-white p-2 rounded-2xl shadow-md hover:shadow-lg transition flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-xl font-semibold text-green-700"> {dept.icon} {dept.name}</h3>
            </div>
            <p className="text-gray-800 mb-2 text-sm">{dept.description}</p>
            <p className="text-sm text-gray-600">
              <strong>Subjects:</strong> {dept.subjects.join(', ')}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Grid layout on medium+ screens */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-xl font-semibold text-green-700">{dept.icon} {dept.name}</h3>
            </div>
            <p className="text-gray-700 mb-2">{dept.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Subjects:</strong> {dept.subjects.join(', ')}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
