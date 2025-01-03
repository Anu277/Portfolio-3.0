import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logow.png'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-900 shadow-md' : 'text-white backdrop-blur-sm bg-white bg-opacity-10'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="about" smooth={true} duration={500} className="text-7xl font-bold text-rose-4600 cursor-pointer font-serif">
            <img src={logo} alt="Logo" className=" h-20 object-cover" />
          </Link>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-orange-600 cursor-pointer text-sm uppercase tracking-wider font-semibold"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block py-2 px-4 text-gray-600 hover:text-orange-600 cursor-pointer text-sm uppercase tracking-wider font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;

