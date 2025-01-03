import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); // State to track loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');
    // Basic validation
    if (formData.name === "" || !formData.email || !formData.message) {
      toast.error('All fields are required!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setLoading(true); // Set loading state to true when starting the send

    try {
      // Send form data to backend
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false); // Set loading to false after response

      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.error}`, {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      setLoading(false); // Set loading to false on error
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 backdrop-blur-sm bg-white bg-opacity-5 border-gray-600 rounded-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-200">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form name="contact" method="POST" netlify className="space-y-4 text-black">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border text-black border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors flex items-center justify-center"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <div className="animate-spin border-t-2 border-white rounded-full w-5 h-5 mr-2"></div> // Loading spinner
                ) : (
                  'Send Message'
                )}
                
              </button>
                <p className="text-gray-300 text-xs block">
                  It works actually, don't spam it!
                </p>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-2xl mr-4 text-sky-500" />
                <p className="text-gray-300">anub0709@gmail.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-2xl mr-4 text-sky-500" />
                <p className="text-gray-300">+91-9390940626</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl mr-4 text-sky-500" />
                <p className="text-gray-300">
                  Karimnagar, Telangana, India - 505498
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
