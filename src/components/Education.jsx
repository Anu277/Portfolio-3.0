import { motion } from 'framer-motion';

const Education = () => (
  <section
    className="py-20 mt-20 bg-gradient-to-b from-zinc-900  to-zinc-900 text-white min-h-screen"
  >
    <div className='w-3/4 border-b border-teal-200 mx-auto'></div>

    <div className="py-20 container mx-auto px-6 flex justify-center">
      <div className="w-full max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-extrabold text-teal-400 uppercase tracking-tight drop-shadow-lg text-center"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 text-lg text-zinc-300 text-center"
        >
          They didn’t teach me, I forged my skills and mastered code through grit, random sources, and relentless self-learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="mt-10 space-y-6"
        >
          <div className="p-6 bg-zinc-800 border-l-4 border-teal-400 shadow-lg">
            <h3 className="text-xl font-semibold text-white uppercase tracking-wide text-center">
              Jawaharlal Nehru Technological University, Hyderabad
            </h3>
            <p className="mt-2 text-zinc-300 text-center">
              B.Tech. - Computer Science & Engineering
            </p>
            <p className="text-zinc-400 text-sm text-center">
              2021 - 2025 | CGPA: 6.77 / 10
            </p>
          </div>
          <div className="p-6 bg-zinc-800 border-l-4 border-teal-400 shadow-lg">
            <h3 className="text-xl font-semibold text-white uppercase tracking-wide text-center">
              Narayana Junior College, Adibatla
            </h3>
            <p className="mt-2 text-zinc-300 text-center">
              12th | TSBIE
            </p>
            <p className="text-zinc-400 text-sm text-center">
              2021 | Percentage: 95.80 / 100
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    <div className='my-20 w-3/4 border-b border-zinc-700 mx-auto'></div>

  </section>
);

export default Education;