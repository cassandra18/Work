import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tilt from 'react-parallax-tilt';
import HeroBanner from './herobanner';
import FilterTabs from './filterTabs';
import PrincipalMessage from './principalMessage';
import CTA from '../cta';


const leaders = [
    // Overal Leadership
  {
    name: 'Mr. John Kiprono',
    title: 'Principal',
    image: '/images/principle.jpeg',
    bio: 'Mr. Kiprono holds a Master’s Degree in Educational Leadership and has over 15 years of experience in guiding students and teachers toward excellence.',
    quote: '“Empowering learners, shaping the future.”',
    email: 'john.kiprono@cbckericho.ac.ke'
  },
  {
    name: 'Mrs. Grace Cherono',
    title: 'Deputy Principal',
    image: '/images/deputy.jpeg',
    bio: 'With a strong background in curriculum development, Mrs. Cherono supports academic innovation and student mentorship.',
    quote: '“Discipline and compassion create great leaders.”',
    email: 'grace.cherono@cbckericho.ac.ke'
  },
  {
    name: 'Mr. Elijah Bett',
    title: 'Head Teacher – Primary ',
    image: '/images/primary-head.jpeg',
    bio: 'Mr. Bett ensures a nurturing and engaging environment for our primary students while upholding CBC values.',
    quote: '“A strong foundation builds confident learners.”',
    email: 'elijah.bett@cbckericho.ac.ke'
  },
  {
    name: 'Ms. Ruth Tanui',
    title: 'Head Teacher – Junior Secondary ',
    image: '/images/junior-head.jpeg',
    bio: 'Ms. Tanui champions academic excellence and creativity for junior secondary learners.',
    quote: '“Each learner is a promise of a better tomorrow.”',
    email: 'ruth.tanui@cbckericho.ac.ke'
  },
];

const hods = [
    // Heads of Departments
    {
        name: 'Mr. Peter Njiru',
        title: 'Head of Languages Department',
        department: 'Languages',
        image: '/images/languages-head.jpeg',
        bio: 'Mr. Njiru is dedicated to enhancing language proficiency in both English and Kiswahili, fostering strong communication skills in students.',
        quote: '“Language is the key to unlocking the world.”',
        email: 'peter.njiru@cbckericho.ac.ke'
      },
      {
        name: 'Ms. Jane Mwaura',
        title: 'Head of Mathematics Department',
        department: 'Mathematics',
        image: '/images/maths-head.jpeg',
        bio: 'Ms. Mwaura brings a passion for problem-solving and critical thinking, leading the math department with innovative, hands-on teaching methods.',
        quote: '“Math is not just about numbers, it’s about thinking critically.”',
        email: 'jane.mwaura@cbckericho.ac.ke'
      },
      {
        name: 'Mr. David Langat',
        title: 'Head of Science Department',
        department: 'Science & Tech',
        image: '/images/science-head1.jpeg',
        bio: 'Mr. Langat leads our science faculty, promoting inquiry-based learning aligned with CBC goals. He focuses on biology, chemistry, physics, and ICT.',
        quote: '“Let students explore, question, and grow.”',
        email: 'david.langat@cbckericho.ac.ke'
      },
      {
        name: 'Ms. Rachel Kiptui',
        title: 'Head of Creative Arts & P.E. Department',
        department: 'Creative Arts & PE',
        image: '/images/creative-head.jpeg',
        bio: 'Ms. Kiptui combines her love for the arts with physical education to nurture students’ creativity and teamwork in music, drama, and sports.',
        quote: '“Creativity is the bridge between imagination and reality.”',
        email: 'rachel.kiptui@cbckericho.ac.ke'
      },
      {
        name: 'Mr. Mohammed Salim',
        title: 'Head of Social Studies & CRE/IRE Department',
        department: 'Social Studies & CRE/IRE',
        image: '/images/sst-head.jpeg',
        bio: 'Mr. Chepchirchir ensures students gain a deep understanding of history, geography, and religious studies, emphasizing moral growth and global awareness.',
        quote: '“Understanding the past is the key to shaping the future.”',
        email: 'john.chepchirchir@cbckericho.ac.ke'
      },
      {
        name: 'Ms. Emily Rotich',
        title: 'Head of Home Science / Life Skills Department',
        department: 'Home Science / Life Skills',
        image: '/images/home-science-head.jpeg',
        bio: 'Ms. Rotich teaches practical life skills, equipping students with essential knowledge in cooking, sewing, and financial management.',
        quote: '“Practical skills are the foundation of independent living.”',
        email: 'emily.rotich@cbckericho.ac.ke'
      },
      {
        name: 'Mr. Oscar Ouma',
        title: 'Head of ICT & Digital Literacy Department',
        department: 'ICT & Digital Literacy',
        image: '/images/ict-head.jpeg',
        bio: 'Mr. Ouma is dedicated to advancing digital literacy, teaching students the essential skills of coding, technology, and digital citizenship.',
        quote: '“Digital skills are essential for the future.”',
        email: 'oscar.ouma@cbckericho.ac.ke'
      }
]

const support = [
    // Support and wellness
    {
        name: 'Ms. Grace Akoth',
        title: 'School Counselor',
        role: 'Counseling and Mental Health Support',
        image: '/images/counselor.jpeg',
        bio: 'Ms. Akoth provides emotional and psychological support to students, helping them navigate challenges in school and personal life. She promotes mental well-being and resilience.',
        quote: '“A healthy mind is as important as a healthy body.”',
        email: 'grace.akoth@cbckericho.ac.ke'
      },
      {
        name: 'Nurse Susan Chebet',
        title: 'School Nurse',
        role: 'Health and First Aid Support',
        image: '/images/nurse.jpeg',
        bio: 'Nurse Chebet ensures the health and well-being of all students, offering first aid, health checks, and guidance on proper hygiene practices.',
        quote: '“Prevention is better than cure, and health is wealth.”',
        email: 'susan.chebet@cbckericho.ac.ke'
      },
      {
        name: 'Mr. John Kiptui',
        title: 'Sports Coach & Wellness Officer',
        role: 'Physical Fitness and Wellness Support',
        image: '/images/coach.jpeg',
        bio: 'Mr. Kiptui promotes physical fitness through various sports activities, ensuring students engage in exercise to maintain both physical health and mental wellness.',
        quote: '“A healthy body fosters a healthy mind.”',
        email: 'john.kiptui@cbckericho.ac.ke'
      },
      {
        name: 'Ms. Alice Njeri',
        title: 'Special Needs Education Coordinator',
        role: 'Support for Students with Special Needs',
        image: '/images/needs.jpeg',
        bio: 'Ms. Njeri works with students with learning disabilities or other special needs, ensuring that they receive personalized support and a conducive learning environment.',
        quote: '“Every child deserves a chance to shine.”',
        email: 'alice.njeri@cbckericho.ac.ke'
      },
      {
        name: 'Mr. Samuel Kiplagat',
        title: 'Student Affairs Officer',
        role: 'Behavior and Discipline Support',
        image: '/images/student-affairs.jpeg',
        bio: 'Mr. Kiplagat ensures students adhere to the school’s behavioral guidelines while also providing mentorship and guidance to maintain a positive and respectful school culture.',
        quote: '“Respect and responsibility are the pillars of a thriving community.”',
        email: 'samuel.kiplagat@cbckericho.ac.ke'
      },
      {
        name: 'Ms. Maryline Cheruiyot',
        title: 'Parent-Teacher Liaison Officer',
        role: 'Communication and Engagement Between Parents and School',
        image: '/images/parent-liaison.jpeg',
        bio: 'Ms. Cheruiyot acts as a bridge between parents and the school, ensuring effective communication and involvement of parents in their child’s academic and personal growth.',
        quote: '“Strong partnerships lead to student success.”',
        email: 'maryline.cheruiyot@cbckericho.ac.ke'
      }
]

const studentLeaders = [
    {
      name: 'John Kiprono Jr.',
      title: 'Head Boy (Primary)',
      role: 'Leadership & Student Representation',
      image: '/images/head-boy-primary.jpeg',
      bio: 'John leads the primary school student body, representing their interests and ensuring the students’ voices are heard in meetings with staff and administration.',
      quote: '“A good leader leads by example, not by force.”',
      email: 'john.kiprono.jr@cbckericho.ac.ke'
    },
    {
      name: 'Grace Mwai',
      title: 'Head Girl (Primary)',
      role: 'Leadership & Student Representation',
      image: '/images/head-girl-primary.jpeg',
      bio: 'Grace serves as the primary school head girl, supporting the head boy in guiding the students while promoting school values such as respect and responsibility.',
      quote: '“Leadership is about inspiring others to dream more, learn more, and become more.”',
      email: 'grace.mwai@cbckericho.ac.ke'
    },
    {
      name: 'David Kiplimo',
      title: 'Deputy Head Boy (Primary)',
      role: 'Student Leadership Support',
      image: '/images/dhead-boy-primary.jpeg',
      bio: 'David supports the head boy in day-to-day leadership activities, assisting with organizing events and helping maintain discipline.',
      quote: '“Success is not the key to happiness; happiness is the key to success.”',
      email: 'david.kiplimo@cbckericho.ac.ke'
    },
    {
      name: 'Mercy Chepkemoi',
      title: 'Deputy Head Girl (Primary)',
      role: 'Student Leadership Support',
      image: '/images/dhead-girl-primary.jpeg',
      bio: 'Mercy works closely with the head girl, ensuring the primary school students’ needs are met and organizing student welfare activities.',
      quote: '“The best way to predict the future is to create it.”',
      email: 'mercy.chepkemoi@cbckericho.ac.ke'
    },
    {
      name: 'Samuel Nyaberi',
      title: 'Head Boy (Junior Secondary)',
      role: 'Leadership & Student Representation',
      image: '/images/head-boy-secondary.jpeg',
      bio: 'Samuel leads the junior secondary school student body, upholding school traditions, creating a positive school culture, and representing students in school meetings.',
      quote: '“A leader is one who knows the way, goes the way, and shows the way.”',
      email: 'samuel.nyaberi@cbckericho.ac.ke'
    },
    {
      name: 'Wanjiru Njiru',
      title: 'Head Girl (Junior Secondary)',
      role: 'Leadership & Student Representation',
      image: '/images/head-girl-secondary.jpeg',
      bio: 'Wanjiru serves as the head girl for junior secondary, empowering students and leading various initiatives that foster school unity and positive behavior.',
      quote: '“Leadership is not about being in charge. It’s about taking care of those in your charge.”',
      email: 'wanjiru.njiru@cbckericho.ac.ke'
    },
    {
      name: 'Peter Langat',
      title: 'Deputy Head Boy (Junior Secondary)',
      role: 'Student Leadership Support',
      image: '/images/dhead-boy-secondary.jpeg',
      bio: 'Peter assists the head boy with his duties, overseeing student activities, and ensuring that secondary students adhere to school regulations.',
      quote: '“The function of leadership is to produce more leaders, not more followers.”',
      email: 'peter.langat@cbckericho.ac.ke'
    },
    {
      name: 'Nancy Chege',
      title: 'Deputy Head Girl (Junior Secondary)',
      role: 'Student Leadership Support',
      image: '/images/dhead-girl-secondary.jpeg',
      bio: 'Nancy supports the head girl and plays an active role in student welfare, discipline, and organizing student-led activities.',
      quote: '“Leadership is not about being the best. It’s about making everyone else better.”',
      email: 'nancy.chege@cbckericho.ac.ke'
    }
  ];
  


const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const Administration: React.FC = () => {
  return (
    <div>
         <HeroBanner />
         <FilterTabs />
    <div className="p-6 md:p-12 min-h-screen poppins-regular max-w-7xl mx-auto">
   
      <h2 id='leadership' className="text-2xl md:text-4xl font-bold text-center text-green-800 mb-10 md:mb-20 border-b-2 pb-2">🌟 Meet Our Leadership</h2>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {leaders.map((leader, index) => (
            <div key={index} className="px-2">
              <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              >
              <motion.div
                className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={leader.image} alt={leader.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg " />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-green-900">{leader.name}</h3>
                  <p className="text-sm text-green-700 font-medium mb-2">{leader.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                  <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                    {leader.quote}
                  </blockquote>
                  <p className="text-sm text-gray-500">📧 {leader.email}</p>
                </div>
              </motion.div>
              </Tilt>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {leaders.map((leader, index) => (
         
          <Tilt
          key={index}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          >
         <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={leader.image} alt={leader.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-green-900">{leader.name}</h3>
              <p className="text-sm text-green-700 font-medium mb-2">{leader.title}</p>
              <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
              <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                {leader.quote}
              </blockquote>
              <p className="text-sm text-gray-500">📧 {leader.email}</p>
            </div>
          </motion.div>
          </Tilt>
        ))}
      </div>

{/* HODs */}
      <h2 id='hods' className="text-xl md:text-4xl font-bold text-center text-green-800 my-10 md:my-20 border-y-2 py-2">📚 Our Heads of Department</h2>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {hods.map((hods, index) => (
            <div key={index} className="px-2">
              <motion.div
                className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={hods.image} alt={hods.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg " />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-green-900">{hods.name}</h3>
                  <p className="text-sm text-green-700 font-medium mb-2">{hods.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{hods.bio}</p>
                  <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                    {hods.quote}
                  </blockquote>
                  <p className="text-sm text-gray-500">📧 {hods.email}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hods.map((hods, index) => (
              <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              >
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={hods.image} alt={hods.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-green-900">{hods.name}</h3>
              <p className="text-sm text-green-700 font-medium mb-2">{hods.title}</p>
              <p className="text-gray-600 text-sm mb-4">{hods.bio}</p>
              <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                {hods.quote}
              </blockquote>
              <p className="text-sm text-gray-500">📧 {hods.email}</p>
            </div>
          </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Support and wellness leaders */}
      <h2 id='support' className="text-xl md:text-4xl font-bold text-center text-green-800 my-10 md:my-20 border-y-2 py-2">🏥 Our Suppor and Wellness Team</h2>

      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {support.map((support, index) => (
            <div key={index} className="px-2">
              <motion.div
                className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={support.image} alt={support.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg " />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-green-900">{support.name}</h3>
                  <p className="text-sm text-green-700 font-medium mb-2">{support.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{support.bio}</p>
                  <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                    {support.quote}
                  </blockquote>
                  <p className="text-sm text-gray-500">📧 {support.email}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {support.map((support, index) => (
            <Tilt
            key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              >
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={support.image} alt={support.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-green-900">{support.name}</h3>
              <p className="text-sm text-green-700 font-medium mb-2">{support.title}</p>
              <p className="text-gray-600 text-sm mb-4">{support.bio}</p>
              <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                {support.quote}
              </blockquote>
              <p className="text-sm text-gray-500">📧 {support.email}</p>
            </div>
          </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Student Leaders */}
      <h2 id='students' className="text-xl md:text-4xl font-bold text-center text-green-800 my-10 md:my-20 border-y-2 py-2">🎯 Student Leaders</h2>

      <div className="block md:hidden">
        <Slider {...sliderSettings}>
          {studentLeaders.map((studentLeaders, index) => (
            <div key={index} className="px-2">
              <motion.div
                className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={studentLeaders.image} alt={studentLeaders.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg " />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-green-900">{studentLeaders.name}</h3>
                  <p className="text-sm text-green-700 font-medium mb-2">{studentLeaders.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{studentLeaders.bio}</p>
                  <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                    {studentLeaders.quote}
                  </blockquote>
                  <p className="text-sm text-gray-500">📧 {studentLeaders.email}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {studentLeaders.map((studentLeaders, index) => (
           <Tilt
           key={index}
             tiltMaxAngleX={10}
             tiltMaxAngleY={10}
             glareEnable={true}
             >  
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-green-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={studentLeaders.image} alt={studentLeaders.name} className="w-full h-60 object-cover shadow-lg rounded-b-lg" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-green-900">{studentLeaders.name}</h3>
              <p className="text-sm text-green-700 font-medium mb-2">{studentLeaders.title}</p>
              <p className="text-gray-600 text-sm mb-4">{studentLeaders.bio}</p>
              <blockquote className="kanit-regular-italic text-green-800 border-l-4 pl-4 border-green-400 mb-4">
                {studentLeaders.quote}
              </blockquote>
              <p className="text-sm text-gray-500">📧 {studentLeaders.email}</p>
            </div>
          </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
    <div className='border-t border-green-600 p-6 md:p-12 flex flex-col md:flex-row items-center gap-6 justify-evenly'>
      {/* Principal's message */}
      <div className='w-full md:w-1/2'>
      <PrincipalMessage/>
      </div>
    
    <CTA/>
    </div>

    </div>
  );
};

export default Administration;
