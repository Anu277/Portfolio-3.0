import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Telecom Churn Prediction',
      description: 'Built machine learning model to predict customer churn, utilizing logistic regression, decision trees, and KNN. Achieved 89% accuracy by preparing data, applying hyperparameter tuning, and assessing performance with a confusion matrix and classification report.',
      link: 'https://github.com/Anu277/Machine-Learning/tree/main/Telecom-Customer-Churn-Prediction',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    },
    {
      title: 'GLOOMDEV-Official Site',
      description: 'Collaborated on the development of GloomDev\'s official website using React.js, Particle.js, AOS Library, and Tailwind CSS, improving user engagement and optimizing performance. Achieved a 35% reduction in website loading time.',
      link: 'https://www.gloom-dev.com/',
      skills: ['React.js', 'TailwindCSS', 'Node.js'],
    },
    {
      title: 'HOLO DOCS-Academic Resources Site',
      description: 'Developed a platform to store academic documents and PDFs, featuring links to courses and tech stacks. Centralized resources to support academic and professional development.',
      link: 'https://holodocs.netlify.app/',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'AAKRITI-College Festival Site',
      description: 'Crafted a responsive website for the Aakriti college festival using React.js, Three.js, AOS Library, and Tailwind CSS. Reduced Three.js animation loading time, ensuring a seamless experience across devices.',
      link: 'https://www.aakriti.club/',
      skills: ['React.js', 'Javascript', 'Three.js', 'TailwindCSS', 'HTML', 'CSS'],
    },
    {
      title: 'SEASON NOW-Weather App',
      description: 'Designed and implemented a weather app that customizes themes based on real-time weather data. Integrated a weather API to provide accurate and up-to-date forecasts for user-specified locations, improving user experience and engagement.',
      link: 'https://www.season-now.netlify.app/',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white bg-opacity-5 shadow-sm shadow-gray-100 backdrop-blur-sm  border-orange-700 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-200">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className=" shadow-gray-800 p-6 rounded-lg shadow-md border border-gray-700 backdrop-blur-lg"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            >
              <h3 className="text-2xl font-bold mb-2 text-rose-500">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-yellow-100 text-orange-800 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-700 font-semibold"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

