"use client"

import { motion } from "framer-motion"
import { FaCode, FaDatabase, FaTools, FaBrain, FaLaptopCode } from "react-icons/fa"
import {
  FaPython,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaAws,
  FaGit,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiStreamlit,
  SiFastapi,
  SiGooglecloud,
  SiMysql,
  SiMongodb,
  SiScikitlearn,
  SiPandas,
  SiNumpy
} from "react-icons/si"

import { VscGraph, VscGraphScatter, VscVscode   } from "react-icons/vsc";

const skills = [
  {
    category: "Languages",
    icon: <FaCode className="text-teal-400 text-3xl" />,
    items: [
      { name: "Python", icon: <FaPython className="text-blue-400 text-2xl md:text-3xl" /> },
      { name: "Java", icon: <FaJava className="text-red-400  text-2xl md:text-3xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400  text-2xl md:text-3xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-400  text-2xl md:text-3xl" /> },
    ],
  },
  {
    category: "Libraries/Frameworks",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    items: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400  text-2xl md:text-3xl" /> },
      { name: "React.js", icon: <FaReact className="text-blue-500 text-2xl md:text-3xl" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-red-400 text-2xl md:text-3xl" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl md:text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-2xl md:text-3xl" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500 text-2xl md:text-3xl" /> },
    ],
  },
  {
    category: "Machine Learning/Deep Learning",
    icon: <FaBrain className="text-purple-400 text-3xl" />,
    items: [
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-500 text-2xl md:text-3xl" /> },
      { name: "Pandas", icon: <SiPandas className="text-blue-400 text-2xl md:text-3xl" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-500 text-2xl md:text-3xl" /> },
      { name: "Seaborn", icon: <VscGraphScatter  className="text-teal-400 text-2xl md:text-3xl" /> },
      { name: "Matplotlib", icon: <VscGraph className="text-purple-500 text-2xl md:text-3xl" /> },
    ],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-yellow-400 text-3xl" />,
    items: [
      { name: "Git", icon: <FaGit className="text-orange-500  text-2xl md:text-3xl " /> },
      { name: "VS Code", icon: <VscVscode  className="text-blue-500 text-2xl md:text-3xl" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400 text-2xl md:text-3xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-400 text-2xl md:text-3xl" /> },
      { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400 text-2xl md:text-3xl" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400 text-2xl md:text-3xl" /> },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-red-400 text-3xl" />,
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500 text-2xl md:text-3xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl md:text-3xl" /> },
    ],
  },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const skillItemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  }

  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-transparent via-zinc-800 to-zinc-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,200,200,0.1),transparent_40%)]"></div>
      <div className="container mx-auto text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg">
            SKILLS
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map(({ category, icon, items }) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="pt-6 rounded-xl backdrop-blur-sm bg-zinc-800/80 border border-zinc-700/50 shadow-xl hover:shadow-teal-500/10 transition-all duration-300 group"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex p-1 mx-4 rounded-2xl bg-zinc-700 items-center justify-center gap-3 mb-6"
              >
                <div className="p-3 rounded-full bg-zinc-800/50 group-hover:bg-zinc-700 transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="lg:text-lg xl:text-2xl  font-bold">{category}</h3>
              </motion.div>

              <div className="space-y-3 px-3 pt-10 text-zinc-300 flex  flex-wrap items-center justify-center gap-8 ">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    variants={skillItemVariants}
                    className="flex items-center p-3 gap-3 group-hover:text-white transition-colors duration-300"
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                    
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

