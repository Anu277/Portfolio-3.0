import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();
  const goToWork = () => {
    navigate('/working-on'); // Navigate to the Working On page
  }
  const goToProjects = () => {
    navigate('/#projects'); // Navigate to the Working On page
  }
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10 px-15 border-t border-zinc-700">
      <div className="container mx-auhref px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={goToWork}
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Working On
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Connect</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/anu277"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-pink-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/anurag-bheemani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-pink-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:anuragbheemani.27@gmail.com"
                className="text-zinc-300 hover:text-pink-500 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Get in Touch</h3>
            <p className="text-sm">Anurag Bheemani</p>
            <p className="text-sm">+91-9390940626</p>
            <p className="text-sm">anuragbheemani.27@gmail.com</p>
            <p className="text-sm mt-2">Karimnagar, Telangana, India</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center border-t border-zinc-800 pt-6">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Anurag Bheemani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;