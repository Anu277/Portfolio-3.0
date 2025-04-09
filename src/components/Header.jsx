import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollOptions = {
    spy: true,
    smooth: true,
    offset: -50,
    duration: 500,
  };

  const renderLink = (label, to) => {
    return isHomePage ? (
      <ScrollLink to={to} {...scrollOptions} className="cursor-pointer hover:text-pink-500 transition-colors -rotate-90">
        {label}
      </ScrollLink>
    ) : (
      <RouterLink to={`/#${to}`} className="-rotate-90 inline-block hover:text-pink-500 transition-colors">
        {label}
      </RouterLink>
    );
  };

  return (
    <div className="fixed z-30 top-0 left-0 right-0 h-auto max-w-3xl md:max-w-14 bg-[#00000091] bg-opacity-10 md:backdrop-blur-sm p-6 md:p-4 md:shadow-md">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex justify-center text-center items-center"
      >
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none bg-transparent fixed left-0 p-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-col-reverse justify-around min-h-dvh">
          {renderLink("Home", "")}
          {renderLink("About", "about")}
          {renderLink("Projects", "projects")}
          <RouterLink to="/working-on" className="-rotate-90 inline-block">
            <span className="text-shine animate-shine-text">{`<Working>`}</span>
          </RouterLink>
          {renderLink("Contact", "contact")}
        </nav>

        {/* Mobile Menu */}
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden absolute top-16 left-0 w-full bg-zinc-800 overflow-hidden"
        >
          <div className="flex flex-col items-center space-y-4 py-4 h-dvh w-full">
            {renderLink("About", "about")}
            {renderLink("Projects", "projects")}
            <RouterLink to="/working-on" onClick={toggleMenu} className="hover:text-pink-500 transition-colors">
              Working On
            </RouterLink>
            {renderLink("Contact", "contact")}
          </div>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default Header;
