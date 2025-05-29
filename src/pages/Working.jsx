import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Hammer,
  Rocket,
  Wrench,
  Zap,
  Mic,
  Headphones,
  Video,
  MessagesSquare,
  Bot,
  Activity,
  Swords,
  Goal
} from 'lucide-react';
import { useEffect } from 'react';

const WorkingOn = () => {
  useEffect(() => {
    document.title = 'Working On - Portfolio'; // Update the document title
    //Take to the top on load
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run only once on mount
  
  const project = {
    title: 'AI Subs for VLC',
    description:
      'Creating a powerful tool that adds real-time AI-generated subtitles to videos playing in VLC Media Player. This enhances accessibility and user experience by automatically transcribing speech without altering VLC’s core engine.',
    status: 'Completed',
    progress: 100,
    tools: [
      'Python',
      'SpeechRecognition',
      'OpenCV',
      'TensorFlow',
      'VLC Python Bindings',
      'pyaudio',
      'NLTK'
    ],
    tasks: [
      'Capture real-time audio from VLC media output',
      'Convert speech to text using a pre-trained deep learning model',
      'Overlay generated subtitles on the VLC window in sync',
      'Minimize latency between spoken words and subtitles',
      'Build a lightweight UI to toggle subtitle display in real time'
    ],
    challenges: [
      'Extracting audio from VLC without modifying core source code',
      'Maintaining low-latency subtitle generation for real-time sync',
      'Handling noisy audio, multiple accents, and different speaking speeds',
      'Overlaying text on VLC without interfering with video playback'
    ],
    goals: [
      'Deliver real-time subtitles with high accuracy',
      'Ensure compatibility across VLC versions and platforms',
      'Support multiple languages using switchable speech models',
      'Maintain a lightweight system footprint with fast response times'
    ]
  };
  
  return (
    <section
      id="working-on"
      className="relative overflow-hidden py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen"
    >
      {/* Neon Circles - All Teal */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 left-1/4 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-teal-400 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />

      {/* Container */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl p-10 max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-teal-400 drop-shadow-lg"
          >
            <Rocket className="inline-block mx-2 text-teal-300" size={50} />
            Working On
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg max-w-3xl text-zinc-300 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10"
          >
            <span className="inline-block bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              {project.status}
            </span>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <p className="text-zinc-400 text-sm">Progress</p>
            <div className="w-full md:w-1/2 bg-zinc-700 rounded-full h-3 mt-2">
              <div
                className="bg-teal-400 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <p className="text-zinc-300 text-sm mt-1">{project.progress}% Complete</p>
          </motion.div>

          {/* Tools & Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8"
          >
            <p className="text-zinc-400 text-sm"><Wrench className="inline-block mx-2"/> Tools & Technologies</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center gap-2 text-zinc-200 text-sm bg-zinc-800/70 backdrop-blur-md px-3 py-1 rounded-md shadow-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8"
          >
            <p className="text-zinc-400 text-sm"><Activity className="inline-block mx-2" />Current Tasks</p>
            <ul className="mt-4 text-zinc-300 text-sm list-disc list-inside space-y-2">
              {project.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.2 }}
            className="mt-8"
          >
            <p className="text-zinc-400 text-sm"><Swords className="inline-block mx-2"/> Challenges</p>
            <ul className="mt-4 text-zinc-300 text-sm list-disc list-inside space-y-2">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-8"
          >
            <p className="text-zinc-400 text-sm"><Goal className="inline-block mx-2" />Goals</p>
            <ul className="mt-4 text-zinc-300 text-sm list-disc list-inside space-y-2">
              {project.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingOn;
