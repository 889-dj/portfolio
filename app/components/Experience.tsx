"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

type Experience = {
  company: string;
  employmentType: string;
  duration: string;
  description: string;
  category: string; // 'Internship' or 'Volunteering'
};

const experiences: Experience[] = [
  {
    company: 'Company 1',
    employmentType: 'Internship',
    duration: 'June 2022 - August 2022',
    description: 'Worked on frontend development and improved user experience by 15%.',
    category: 'Internship',
  },
  {
    company: 'Company 2',
    employmentType: 'Volunteering',
    duration: 'January 2021 - May 2021',
    description: 'Helped organize community outreach events and managed project workflows.',
    category: 'Volunteering',
  },
  // Add more experiences as needed
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const categorizedExperiences = experiences.reduce((acc, experience) => {
    const category = experience.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(experience);
    return acc;
  }, {} as { [key: string]: Experience[] });

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

      {/* Categorized Timeline */}
      {Object.keys(categorizedExperiences).map((category, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{category}</h3>
          <div className="space-y-8">
            {categorizedExperiences[category].map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedExperience(experience)}
              >
                <h4 className="text-xl font-semibold">{experience.company}</h4>
                <p className="text-gray-600">{experience.employmentType}</p>
                <p className="text-gray-500">{experience.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Popup Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setSelectedExperience(null)}
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">{selectedExperience.company}</h3>
            <p className="text-gray-600">{selectedExperience.employmentType}</p>
            <p className="text-gray-500">{selectedExperience.duration}</p>
            <p className="mt-4">{selectedExperience.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
