import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero.webp'; // update the path as needed
import resume from '../assets/resume.pdf'; // update the path as needed
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
const Hero = () => {
  return (
<div
  className=" h-screen w-full  "
>
      
      {/* Background Image using <img> */}
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0  bg-opacity-100 z-10" />

      {/* Foreground Content */}
      <div className="relative pt-50 z-20 min-h-dvh flex flex-col items-center justify-center text-center px-4 bg-black/30"
      style={{
        backgroundImage: `linear-gradient(to bottom, #00000000, #00000000, #00000000, #0d100d)`
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl lg:text-9xl font-bold text-white drop-shadow-lg"
      >
        Anurag Bheemani
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-2xl lg:text-4xl mt-4 font-extrabold text-white drop-shadow-md"
      >
        ML Developer | MERN Full-Stack Developer
      </motion.p>

      <p className="text-lg mt-2 max-w-md mx-auto text-white leading-relaxed">
        I specialize in building intelligent systems with machine learning and scalable, dynamic web applications using the MERN stack.
      </p>

      <a
        href={resume}
        className="mt-6 inline-block bg-pink-500 px-6 py-2 rounded-full text-white hover:bg-pink-600 transition-colors"
      >
        Resume
      </a>

      {/* Social Media Links */}
      <div className="mt-6 flex space-x-6">
        <a
          href="https://www.linkedin.com/in/anurag-bheemani" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-teal-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/anu277" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-teal-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/anu_b_27" // Replace with your Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-teal-400 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>
        
      </div>
    </div>
    </div>
  );
};

export default Hero;
