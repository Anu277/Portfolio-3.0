import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: 'Jawaharlal Nehru Technological University, Hyderabad',
      degree: 'B.Tech. - Computer Science & Engineering',
      year: '2021 - 2025',
      details: 'CGPA: 6.77 / 10',
    },
    {
      institution: 'Narayana Junior College, Adibatla',
      degree: '12th',
      year: '2021',
      details: 'TSBIE | Percentage: 95.80 / 100',
    },
    {
      institution: 'Trinity Model Secondary School, Peddapalle',
      degree: '10th',
      year: '2019',
      details: 'BSET | CGPA: 9.70 / 10',
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-20 my-40 text-white backdrop-blur-sm bg-white bg-opacity-5 p-6 rounded-lg shadow-sm shadow-gray-600 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center ">
          Education
        </h2>
        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 group bg-"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="absolute -top-3 -right-3 bg-gradient-to-tr from-pink-600 to-orange-500 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-gray-900 font-bold text-lg group-hover:scale-110">
                {index + 1}
              </div>
              <h3 className="text-3xl font-bold mb-3 text-rose-400 group-hover:text-orange-400 transition-colors duration-300">
                {edu.institution}
              </h3>
              <p className="text-xl mb-2 text-gray-300 group-hover:text-pink-300">{edu.degree}</p>
              <p className="text-lg mb-2 text-gray-400 group-hover:text-orange-300">{edu.year}</p>
              <p className="text-gray-500 group-hover:text-white">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
