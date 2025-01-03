import React from 'react';
import { motion } from 'framer-motion';
import anu from '../assets/anu.png';
const Hero = () => {
  return (
    <motion.section
      id="about"
      className="pt-40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-4  rounded-lg shadow-sm shadow-gray-600 backdrop-blur-sm bg-neutral-700 bg-opacity-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-12"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={anu}
              alt="Landscape"
              className="filter grayscale m-auto h-auto max-h-96 rounded-lg  brightness-75"
            />

          </motion.div>
          
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-gray-200 font-serif">Anurag Bheemani</h1>
            <p className="text-xl md:text-2xl mb-6 text-pink-600">ML Developer | MERN Full-Stack Developer</p>
            <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed">
              I specialize in building intelligent systems with machine learning and scalable, dynamic web applications using the MERN stack. Passionate about solving real-world problems with AI and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
