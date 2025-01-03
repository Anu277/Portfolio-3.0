import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 backdrop-blur-sm bg-slate-200 bg-opacity-10 p-6 rounded-lg shadow-sm shadow-gray-200  border-rose-600">
        
        <div className="space-y-8">
          <motion.div
            className=""
            whileHover={{ scale:1.0 }}
          ><h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-200">Experience</h2>
            <h3 className="text-2xl font-bold mb-2 text-orange-400">Full Stack Web Developer | Intern</h3>
            <p className="text-xl mb-2 text-gray-300">GLOOMDEV</p>
            <p className="text-gray-400 mb-4">17 Jul, 2024 - 16 Dec, 2024</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Developed the gloom-dev.com site within the first month of the internship.</li>
              <li>Built a chatbot in React for interactive user assistance on the GloomDev site with Gemini.</li>
              <li>Created two additional frontend projects using React.</li>
              <li>Created a full stack project on E-commerce site.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

