import React from 'react'; 
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker,   } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow, SiScikitlearn, SiPandas, SiNumpy } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";


const Skills = () => {
  const mlSkills = [
    { name: 'Python', icon: <FaPython />, color: 'text-green-500' },
    { name: 'Tensorflow', icon: <SiTensorflow />, color: 'text-orange-500' },
    { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: 'text-orange-600' },
    { name: 'Pandas', icon: <SiPandas />, color: 'text-orange-600' },
    { name: 'NumPy', icon: <SiNumpy />, color: 'text-blue-600' },
  ];

  const webSkills = [
    { name: 'Javascript', icon: <IoLogoJavascript />, color: 'text-yellow-500' },
    { name: 'ReactJS', icon: <FaReact />, color: 'text-cyan-500' },
    { name: 'NodeJS', icon: <FaNodeJs />, color: 'text-green-600' },
    { name: 'MongoDB', icon: <FaDatabase />, color: 'text-green-700' },
    { name: 'MySQL', icon: <FaDatabase />, color: 'text-blue-700' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: 'text-sky-400' },
    { name: 'Git', icon:<FaGithub />, color: 'text-black' },
    { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 backdrop-blur-sm bg-slate-300 bg-opacity-10 shadow-sm  border-rose-600 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-200">Skills</h2>
        
        {/* Machine Learning Section */}
        <h3 className="text-xl text-gray-300 mb-6">Machine Learning</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {mlSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              transition={{ duration: 0.2 }}
            >
              <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
              <p className="text-lg text-gray-700 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Web Development Section */}
        <h3 className="text-xl text-gray-300 mb-6">Web Development</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {webSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              transition={{ duration: 0.2 }}
            >
              <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
              <p className="text-lg text-gray-700 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
