// import React from 'react';
// import { motion } from 'framer-motion';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Telecom Churn Prediction',
//       description: 'Built machine learning model to predict customer churn, utilizing logistic regression, decision trees, and KNN. Achieved 89% accuracy by preparing data, applying hyperparameter tuning, and assessing performance with a confusion matrix and classification report.',
//       link: 'https://github.com/Anu277/Machine-Learning/tree/main/Telecom-Customer-Churn-Prediction',
//       skills: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
//     },
//     {
//       title: 'GLOOMDEV-Official Site',
//       description: 'Collaborated on the development of GloomDev\'s official website using React.js, Particle.js, AOS Library, and Tailwind CSS, improving user engagement and optimizing performance. Achieved a 35% reduction in website loading time.',
//       link: 'https://www.gloom-dev.com/',
//       skills: ['React.js', 'TailwindCSS', 'Node.js'],
//     },
//     {
//       title: 'HOLO DOCS-Academic Resources Site',
//       description: 'Developed a platform to store academic documents and PDFs, featuring links to courses and tech stacks. Centralized resources to support academic and professional development.',
//       link: 'https://holodocs.netlify.app/',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//     },
//     {
//       title: 'AAKRITI-College Festival Site',
//       description: 'Crafted a responsive website for the Aakriti college festival using React.js, Three.js, AOS Library, and Tailwind CSS. Reduced Three.js animation loading time, ensuring a seamless experience across devices.',
//       link: 'https://www.aakriti.club/',
//       skills: ['React.js', 'Javascript', 'Three.js', 'TailwindCSS', 'HTML', 'CSS'],
//     },
//     {
//       title: 'SEASON NOW-Weather App',
//       description: 'Designed and implemented a weather app that customizes themes based on real-time weather data. Integrated a weather API to provide accurate and up-to-date forecasts for user-specified locations, improving user experience and engagement.',
//       link: 'https://www.season-now.netlify.app/',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//     },
//   ];

//   return (
//     <motion.section
//       id="projects"
//       className="py-20 bg-white bg-opacity-5 shadow-sm shadow-gray-100 backdrop-blur-sm  border-orange-700 rounded-lg"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-200">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className=" shadow-gray-800 p-6 rounded-lg shadow-md border border-gray-700 backdrop-blur-lg"
//               whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
//             >
//               <h3 className="text-2xl font-bold mb-2 text-rose-500">{project.title}</h3>
//               <p className="mb-4 text-gray-400">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.skills.map((skill, skillIndex) => (
//                   <span key={skillIndex} className="bg-yellow-100 text-orange-800 px-2 py-1 rounded text-sm">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-yellow-500 hover:text-yellow-700 font-semibold"
//               >
//                 View Project
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;

import { motion } from "framer-motion"
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import img7 from '../assets/images/7.png'
import img8 from '../assets/images/8.png'

const Projects = () => {
  const projects = [
    {
      title: "Face Sorter App-Photo Organizer",
      description:
        "Built a face recognition app that automatically organizes images into folders based on detected individuals. Developed the frontend in React Native (Expo) and the backend in FastAPI, deployed on Google Cloud for scalability.",
      link: "https://face-sorter.netlify.app/",
      skills: ["React Native", "Expo", "FastAPI", "MongoDB", "Google Cloud", "Face Recognition"],
      image: img8,
    },
    {
      title: "Hand Sign Recognition",
      description:
        "Built a real-time hand sign recognition system using MediaPipe for hand tracking and Random Forest for classification. Extracted hand landmarks as features, achieving high accuracy in gesture recognition.",
      link: "https://github.com/Anu277/Hand-sign-recognition-ml",
      skills: ["Random Forest", "Numpy", "MediaPipe", "OpenCV"],
      image: img7,
    },
    {
      title: "Music Recommendation System",
      description:
        "Developed an interactive music recommendation system using Python, Streamlit, and Spotify API. The app recommends songs based on similarity scores and dynamically fetches album posters using the Spotify API.",
      link: "https://music-recommendation-sys.streamlit.app/",
      skills: ["Python", "Scikit-learn", "Numpy", "Pandas", "Streamlit", "Spotify API"],
      image: img6,
    },
    {
      title: "Telecom Churn Prediction",
      description:
        "Built machine learning model to predict customer churn, utilizing logistic regression, decision trees, and KNN. Achieved 89% accuracy by preparing data, applying hyperparameter tuning, and assessing performance.",
      link: "https://github.com/Anu277/Machine-Learning/tree/main/Telecom-Customer-Churn-Prediction",
      skills: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      image: img5,
    },
    {
      title: "GLOOMDEV-Official Site",
      description:
        "Collaborated on the development of GloomDev's official website using React.js, Particle.js, AOS Library, and Tailwind CSS, improving user engagement and optimizing performance. Achieved a 35% reduction in website loading time.",
      link: "https://www.gloom-dev.com/",
      skills: ["React.js", "Particle.js", "AOS Library", "TailwindCSS"],
      image: img4,
    },
    {
      title: "AAKRITI-College Festival Site",
      description:
        "Crafted a responsive website for the Aakriti college festival using React.js, Three.js, AOS Library, and Tailwind CSS. Reduced Three.js animation loading time by 26%, ensuring a seamless experience across devices.",
      link: "https://www.aakriti.club/",
      skills: ["React.js", "Javascript", "Three.js", "TailwindCSS", "HTML", "CSS"],
      image: img3,
    },
    {
      title: "HOLO DOCS-Academic Resources Site",
      description:
        "Developed a platform to store academic documents and PDFs, featuring links to courses and tech stacks. Centralized resources to support academic and professional development.",
      link: "https://holodocs.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript"],
      image: img2,
    },
    {
      title: "SEASON NOW-Weather App",
      description:
        "Designed and implemented a weather app that customizes themes based on real-time weather data. Integrated a weather API to provide accurate and up-to-date forecasts for user-specified locations, improving user experience and engagement.",
      link: "https://season-now.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript", "Weather API"],
      image: img1,
    },
  ]

  return (
    <motion.section
      id="projects"
      className="py-20 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 rounded-lg shadow-lg border border-slate-900 flex flex-col"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-rose-400">{project.title}</h3>
              <p className="mb-4 text-gray-300 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects

