import { motion } from 'framer-motion';

const Experience = () => (
  <section
    className=" bg-gradient-to-b from-zinc-900  to-zinc-900 text-white min-h-lvh flex flex-col items-center justify-around"
  >
    <div className='my-10 w-1/2 border-b border-pink-400 '></div>
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-extrabold text-pink-500 uppercase tracking-tight drop-shadow-lg text-center"
      >
        Experience ✨
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto text-center"
      >
        Milestones of grit—where I turned sweat into code that works.
      </motion.p>

      <div className="mt-12 relative max-w-7xl mx-auto">
        {/* Pink Timeline Spine */}
        {/* <div className="absolute  transform -translate-x-1/2 w-1 bg-pink-500 h-full"></div> */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="relative mb-12 p-6 bg-zinc-800 shadow-lg border-t-4 border-pink-500 w-full md:w-full mx-auto rounded-lg"
        >
          {/* <div className="absolute top-0 left-[-1.5rem] w-4 h-4 bg-pink-500 rounded-full transform translate-y-[-50%]"></div> */}
          <h3 className="text-xl font-semibold text-pink-500 uppercase tracking-wide">
            Full Stack Web Developer | Intern
          </h3>
          <p className="mt-2 text-zinc-300 text-lg">
            GLOOMDEV | 17 Jul, 2024 - 16 Dec, 2024
          </p>
          <ul className="mt-4 list-none space-y-2 text-zinc-300">
            <li>✦ Launched <strong className="text-pink-500">gloom-dev.com</strong> in just 30 days—beat the clock and survived the caffeine overdose!</li>
            <li>✦ Built a <strong className="text-pink-500">React chatbot</strong> with <strong className="text-pink-500">Streamlit</strong> and <strong className="text-pink-500">LangChain</strong> for PDF help on GloomDev, powered by <strong className="text-pink-500">Google Generative AI</strong>—it talks smart now, even after I wrestled its bugs!</li>
            <li>✦ Cranked out three extra <strong className="text-pink-500">React frontend projects</strong>—stacked ‘em up like a coding pro.</li>
            <li>✦ Tackled a full-stack <strong className="text-pink-500">e-commerce website</strong> with the <strong className="text-pink-500">MERN stack</strong>—shop ‘til it drops, but it didn’t!</li>
          </ul>
        </motion.div>

        {/* Add more experiences here with alternating sides */}
      </div>
    </div>
    <div className=' w-3/4 border-b border-zinc-600 '></div>
  </section>
);

export default Experience;