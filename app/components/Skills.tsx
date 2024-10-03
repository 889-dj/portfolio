"use client";
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', experience: '3 Years' },
  { name: 'Reactjs', experience: '2 Years' },
    { name: 'Nextjs', experience: '2 Years' },
    { name: 'Nestjs', experience: '2 Years' },
    { name: 'Python', experience: '2 Years' },
    { name: 'Django', experience: '2 Years' },
    { name: 'Java', experience: '2 Years' },
    { name: 'AWS', experience: '2 Years' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl mb-8">Skills</h2>
        <div className="grid grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card p-4 flex flex-col items-center border rounded-lg shadow-md cursor-pointer" // Minimal padding and styled
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              {/* Experience hidden initially */}
              <motion.p 
                className="mt-2 text-gray-500 translate-y-4 opacity-0" // Hidden initially
                initial={{ opacity: 0, translateY: 20 }}
                whileHover={{ translateY: 0, opacity: 1 }} // Slide in effect on hover
                transition={{ duration: 0.5 }}
              >
                {skill.experience}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
