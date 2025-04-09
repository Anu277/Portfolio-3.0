import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10 px-15 border-t border-zinc-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Navigate</h3>
            <span className="sp flex gap-2">
              <span>
                <Link
                  to="/"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </span>
              |
              <span>
                <Link
                  to="/#about"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  About
                </Link>
              </span>
              |
              <span>
                <Link
                  to="/#projects"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Projects
                </Link>
              </span>
              |
              <span>
                <Link
                  to="/working-on"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Working
                </Link>
              </span>
              |
              <span>
                <Link
                  to="/contact"
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </span>
            </span>
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
