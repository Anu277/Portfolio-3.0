// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <motion.section
//       id="about"
//       className="py-20 md:py-32"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           <motion.div
//             className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-12"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src="/placeholder.svg?height=400&width=600"
//               alt="Landscape"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </motion.div>
//           <div className="w-full md:w-1/2 ">
//             <h1 className="text-4xl md:text-7xl font-bold mb-4 text-gray-200 font-serif">Anurag Bheemani</h1>
//             <p className="text-xl md:text-2xl mb-6 text-pink-600">Machine Learning Developer | Full Stack Web Developer</p>
//             <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed">
//               {/* I am a dedicated Data Scientist and Machine Learning Developer with expertise in building intelligent systems and connecting them to
//               scalable backend architectures. I specialize in developing data-driven models like Music Recommendation Systems and Telecom
//               Churn Prediction, utilizing tools such as Scikit-learn, Pandas, and Numpy to derive actionable insights. */}
//               ML Developer & MERN Full-Stack Developer.
//               I specialize in creating intelligent systems using machine learning and developing scalable, user-friendly web applications with the MERN stack
//             </p>
//             {/* <p className="text-base md:text-lg text-gray-400 leading-relaxed">
//               Skilled in integrating machine learning solutions with robust backends using MongoDB and Node.js, I ensure seamless
//               deployment in real-world applications. I am actively exploring and developing projects in Deep Learning, focusing on
//               creating innovative solutions with advanced neural networks.
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 md:py-32  text-white "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-4 rounded-lg shadow-sm shadow-gray-600 backdrop-blur-sm bg-neutral-200 bg-opacity-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-12"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Profile Picture"
              className="w-full h-auto rounded-full shadow-lg"
            />
          </motion.div> */}
          <div className="w-full  ">
            <h1 className="text-3xl text-center md:text-5xl font-bold mb-10 text-gray-200 ">About Me</h1>

            <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed">
              I am a passionate developer with a strong foundation in
              <span className='text-pink-600 font-semibold'> Machine Learning</span> and
              <span className='text-pink-600 font-semibold'> Full-Stack Web Development</span>.
              My goal is to build intelligent systems that solve complex problems and create scalable web applications.
            </p>

            <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed">
              With a deep interest in <span className='text-pink-600 font-semibold'>AI</span>,
              I specialize in developing models that drive data-driven decisions.
              My experience includes projects like <span className='text-pink-600 font-semibold'>Recommendation Systems </span>
              and <span className='text-pink-600 font-semibold'>Predictive Models</span>.
              I am well-versed in frameworks like <span className='text-pink-600 font-semibold'>TensorFlow</span> and
              <span className='text-pink-600 font-semibold'> PyTorch</span>.
            </p>

            <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed">
              On the web development side, I create full-stack applications using the
              <span className='text-pink-600 font-semibold'> MERN stack</span>, focusing on
              <span className=' font-semibold'> fast</span>,
              <span className=' font-semibold'> responsive</span>, and
              <span className=' font-semibold'> user-friendly</span> designs.
              Whether integrating <span className='text-pink-600 font-semibold'>AI models</span> or crafting intuitive interfaces,
              I thrive on combining technology with creativity.
            </p>

            <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed">
              Currently, I'm exploring <span className='text-pink-600 font-semibold'>Deep Learning </span>
              and <span className='text-pink-600 font-semibold'> Neural Networks</span>,
              while enhancing my <span className='text-pink-600 font-semibold'>Full-Stack Development</span> skills.
              I'm eager to work on <span >impactful projects</span> that make a difference.
            </p>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
