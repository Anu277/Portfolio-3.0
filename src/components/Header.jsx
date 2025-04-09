import { Link, useNavigate } from "react-router-dom";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons
import { Link2Icon } from "lucide-react";

const Header = ({ }) => {
  const navigate = useNavigate();

  const goToWork = () => {
    navigate("/working-on"); // ✅ navigate to About page
  };
  const goToHome = () => {
    navigate("/"); // ✅ navigate to Home page
  };
  const goToAbout = () => {
    navigate("/#about"); // ✅ navigate to About page
  };
  const goToProjects = () => {
    navigate("/#projects"); // ✅ navigate to Projects page
  };
  const goToContact = () => {
    navigate("/#contact"); // ✅ navigate to Contact page
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`fixed z-30 top-0 left-0 right-0 h-auto max-w-3xl md:max-w-14 bg-[#00000091] bg-opacity-10 md:backdrop-blur-sm p-6 md:p-4  md:shadow-md `}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex justify-center text-center items-center"
      >
        
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none bg-transparent fixed left-0 p-4 "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex md:flex-col-reverse justify-around min-h-dvh ">
          <a href="#about" className=" hover:text-pink-500 transition-colors -rotate-90" onClick={goToAbout}>
            About
          </a>
          <a href="#projects" className=" hover:text-pink-500 transition-colors -rotate-90" onClick={goToProjects}>
            Projects
          </a>
          <Link
            to="/working-on"
            // onClick={goToWork} // Assuming goToWork navigates to /working-on
            className="-rotate-90 inline-block"
          >
            <span className="text-shine animate-shine-text">{`<Working>`}</span>
          </Link>
          <a href="#contact" className=" hover:text-pink-500 transition-colors -rotate-90" onClick={goToContact}>
            Contact
          </a>
        </nav>

        {/* Mobile Menu - Animated */}
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden absolute top-16 left-0 w-full  bg-zinc-800 overflow-hidden"
        >
          <div className="flex flex-col items-center space-y-4 py-4 h-dvh w-full">
            <a
              href="#about"
              className=" hover:text-pink-500 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className=" hover:text-pink-500 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <Link
              to="/working-on"
              className=" hover:text-pink-500 transition-colors"
              onClick={toggleMenu}
            >
              Working On
            </Link>
            <a
              href="#contact"
              className=" hover:text-pink-500 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default Header;