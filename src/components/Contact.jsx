import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import animationData from '../assets/animations/work.json'; // Replace with your JSON file path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Fill the damn fields! 🙆', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://portfolio-3-0-w9cj.onrender.com/send-email',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setLoading(false);

      if (response.status === 200) {
        toast.success('Message sent.', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Shit! . Try again.', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
      toast.error('Server’s drunk. Retry later.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  // Lottie Animation Options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section
      id="contact"
      className="md:py-20 bg-gradient-to-b from-black/970  to-zinc-900 text-white min-h-screen flex "
    >
      <div className="container mx-auto px-15 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold text-teal-400 uppercase tracking-tight drop-shadow-lg text-center "
        >
          Hit Me Up
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto text-center"
        >
          Got a project, question, or just wanna talk tech? Drop your details. I don’t bite—unless you’re a bug in my code.
        </motion.p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
          {/* Form - Left Side */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="w-full md:w-3/4 space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 border-l-4 border-teal-400 text-white placeholder-zinc-500 focus:outline-none focus:bg-zinc-700 transition-colors duration-300"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 border-l-4 border-teal-400 text-white placeholder-zinc-500 focus:outline-none focus:bg-zinc-700 transition-colors duration-300"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 border-l-4 border-teal-400 text-white placeholder-zinc-500 h-40 resize-none focus:outline-none focus:bg-zinc-700 transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-400 text-white font-bold px-6 py-3 rounded-none uppercase tracking-wide hover:bg-teal-600 transition-all duration-300 flex items-center justify-center w-full md:w-auto"
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin border-t-2 border-white rounded-full w-5 h-5 mr-2"></div>
              ) : (
                'Send It'
              )}
            </button>
          </motion.form>

          {/* Lottie Animation - Right Side, Visible at md */}
          
        </div>
      </div>
      <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            className="hidden md:block w-full md:w-1/2"
          >
            <Lottie options={defaultOptions} height={500} width={500} className=" shadow-amber-50 shadow-2xs" />
          </motion.div>
    </section>
  );
};

export default Contact;