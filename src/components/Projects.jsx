import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Face Sorter App-Photo Organizer',
    description:
      'Built a face recognition app that sorts images into folders by who’s in them. Frontend’s React Native (Expo), backend’s FastAPI, scaled on Google Cloud.',
    link: 'https://face-sorter.netlify.app/',
    skills: ['React Native', 'Expo', 'FastAPI', 'MongoDB', 'Google Cloud', 'Face Recognition'],
    image: img8,
  },
  {
    title: 'Hand Sign Recognition',
    description:
      'Real-time hand sign detection with MediaPipe for tracking and Random Forest for classifying. Nailed gesture accuracy with landmark features.',
    link: 'https://github.com/Anu277/Hand-sign-recognition-ml',
    skills: ['Random Forest', 'Numpy', 'MediaPipe', 'OpenCV'],
    image: img7,
  },
  {
    title: 'Music Recommendation System',
    description:
      'Interactive music recs with Python, Streamlit, and Spotify API. Scores similarity, grabs album art—pure vibes.',
    link: 'https://music-recommendation-sys.streamlit.app/',
    skills: ['Python', 'Scikit-learn', 'Numpy', 'Pandas', 'Streamlit', 'Spotify API'],
    image: img6,
  },
  {
    title: 'Telecom Churn Prediction',
    description:
      'ML model to predict churn—logistic regression, decision trees, KNN. Tuned it to 89% accuracy. Data prep was the real grind.',
    link: 'https://github.com/Anu277/Machine-Learning/tree/main/Telecom-Customer-Churn-Prediction',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    image: img5,
  },
  {
    title: 'GLOOMDEV-Official Site',
    description:
      'Teamed up for GloomDev’s site—React.js, Particle.js, AOS, Tailwind. Slashed load time by 35%. Engagement’s up.',
    link: 'https://www.gloom-dev.com/',
    skills: ['React.js', 'Particle.js', 'AOS Library', 'TailwindCSS'],
    image: img4,
  },
  {
    title: 'AAKRITI-College Festival Site',
    description:
      'Responsive fest site with React.js, Three.js, AOS, Tailwind. Cut animation lag by 26%—smooth as hell.',
    link: 'https://www.aakriti.club/',
    skills: ['React.js', 'Javascript', 'Three.js', 'TailwindCSS', 'HTML', 'CSS'],
    image: img3,
  },
  {
    title: 'HOLO DOCS-Academic Resources Site',
    description:
      'Platform for academic docs and PDFs—course links, tech stacks. Centralized brain fuel.',
    link: 'https://holodocs.netlify.app/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: img2,
  },
  {
    title: 'SEASON NOW-Weather App',
    description:
      'Weather app with real-time themes via API. Forecasts that hit, UX that sticks.',
    link: 'https://season-now.netlify.app/',
    skills: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image: img1,
  },
];

const Projects = () => {
  const projectRefs = useRef([]);
  const navigate = useNavigate();

  const goToWork = () => {
    navigate('/working-on');
  };

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });



    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-extrabold text-pink-500 uppercase tracking-tight drop-shadow-lg text-center mb-10"
        >
          Projects
        </motion.h2>

        {/* <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={goToWork}
          className="mt-6 cursor-pointer flex items-center gap-2 bg-gradient-to-r from-pink-500 to-teal-400 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 mx-auto block"
        >
          <FaExternalLinkAlt className="text-sm" />
          <span className="uppercase tracking-wider text-sm font-semibold">
            Currently Working On
          </span>
        </motion.button> */}

        <div className="w-full py-12 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-zinc-800/80 backdrop-blur-md border-x-4 border-teal-400 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-teal-400 uppercase tracking-wide mb-6">
                Ongoing Project
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                I’m diving deep into <strong className="text-teal-300">AI Subs for VLC</strong>—a game-changing tool that adds real-time, AI-generated subtitles to videos in VLC Media Player. This project boosts accessibility by transcribing speech on the fly, all without touching VLC’s core engine. With <strong className="text-teal-300">60% progress</strong>, it’s shaping up to be a smooth, innovative addition for video enthusiasts!
              </p>
              <Link
                to="/working-on"
                // onClick={goToWork}
                className="inline-flex cursor-pointer items-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors duration-300"
              >
                Explore Details <FaExternalLinkAlt className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`p-6 bg-zinc-800 border-l-4 ${index % 2 === 0 ? 'border-pink-500' : 'border-teal-400'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3
                className={`text-2xl font-semibold mt-4 uppercase tracking-wide ${index % 2 === 0 ? 'text-pink-500' : 'text-teal-400'
                  }`}
              >
                {project.title}
              </h3>
              <p className="mt-2 text-zinc-300">{project.description}</p>
              <p className="mt-3 text-sm text-zinc-400">
                {project.skills.join(' • ')}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center transition-colors ${index % 2 === 0
                    ? 'text-pink-500 hover:text-pink-300'
                    : 'text-teal-400 hover:text-teal-200'
                  }`}
              >
                Check It Out <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;