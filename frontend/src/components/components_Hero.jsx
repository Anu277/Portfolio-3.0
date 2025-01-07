import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

import anu from '../assets/anu.jpg';
const Hero = () => {
  return (
    <motion.section
      id="about"
      className=" realative pt-40 z-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-4  rounded-lg shadow-sm shadow-gray-600 bg-opacity-10 backdrop-blur-sm bg-neutral-300  z-20">
        <div className="flex flex-col md:flex-row items-center z-10">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-12"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={anu}
              alt="Landscape"
              className="filter mix-blend-difference m-auto h-auto max-h-96 rounded-full  brightness-100 backdrop-hue-rotate-180"
            />

          </motion.div>

          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-gray-200 font-serif">Anurag Bheemani</h1>
            <p className="text-xl md:text-2xl mb-6 text-pink-600">ML Developer | MERN Full-Stack Developer</p>
            <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed">
              I specialize in building intelligent systems with machine learning and scalable, dynamic web applications using the MERN stack. Passionate about solving real-world problems with AI and modern web technologies.
            </p>


            <div className="flex flex-wrap space-x-6">
              <a href="https://github.com/anu277" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 p-2 rounded-md bg-rose-500">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/anurag-bheemani" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 p-2 rounded-md bg-rose-500">
                <FaLinkedin size={30} />
              </a>
              <a href="https://drive.google.com/file/d/1WPd5X2LNLmyp3tuU115kFpTZIT-_0AdP/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-900 flex flex-row items-center p-2 rounded-md bg-rose-500">
                <FaFileAlt size={30} />
                <p className='text-xl mx-2'>Resume</p>
              </a>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
