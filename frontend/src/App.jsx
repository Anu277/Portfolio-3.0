import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Header from './components/components_Header';
import About from './components/components_About';
import Skills from './components/components_Skills';
import Experience from './components/components_Experience';
import Projects from './components/components_Projects';
import Education from './components/components_Education';
import Contact from './components/components_Contact';
import { Link } from 'react-scroll';
import Hero from './components/components_Hero';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#00FFFF" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#00FFFF", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: true },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab"},
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          className="text-7xl font-bold text-orange-600"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="m-auto text-gray-200 min-h-screen bg-zinc-900">
      <Header />
      <main className="container mx-auto px-4 relative">
        <Particles
          className="absolute"
          init={particlesInit}
          options={particlesOptions}
        />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <ToastContainer />
      </main>
      <footer className="bg-neutral-900 py-6 mt-16 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
          <div className="flex space-x-6 text-7xl">
            <a href="https://github.com/Anu277" target="_blank" className="cursor-pointer text-gray-400 hover:text-orange-600 transition-colors">
              <FaGithub className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/anurag-bheemani/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-gray-400 hover:text-orange-600 transition-colors">
              <FaLinkedin className="text-4xl" />
            </a>
            <a href="mailto:anub0709@gmail.com" className="cursor-pointer text-gray-400 hover:text-rose-600 transition-colors">
              <FaEnvelope className="text-4xl" />
            </a>
            <a href="tel:+919390940626" className="cursor-pointer text-gray-400 hover:text-rose-600 transition-colors">
              <FaPhone className="text-4xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
