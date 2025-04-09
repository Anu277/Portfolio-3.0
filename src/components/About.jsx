
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CLOUDS2 from "vanta/dist/vanta.clouds.min";
import { motion } from "framer-motion";

const About = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS2({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x0, // tailwind gray-900
          cloudColor: 0xffffff,
          cloudShadowColor: 0x000000,
          sunColor: 0x0,
          sunGlareColor: 0x0,
          speed: 0.6
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="about"
      ref={vantaRef}
      className="relative py-20 min-h-lvh text-white overflow-hidden"
    >
      {/* <div className="absolute inset-0 z-0" /> */}
      <div className="relative my-50 z-10 container m-auto text-center p-6 backdrop-blur-sm">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl font-extrabold text-teal-400 drop-shadow-lg "
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-6 text-lg max-w-4xl mx-auto md:text-zinc-500 text-white leading-relaxed"
        >
          <div className="max-w-4xl mx-auto text-center text-zinc-500 leading-relaxed">
            Hey, I’m Anurag Bheemani—a <strong className="text-pink-500">Full Stack Developer</strong> and <strong className="text-pink-500">Machine Learning enthusiast</strong> who loves cooking up solutions that mix smart tech with user-friendly vibes. I’m currently tackling my <strong className="text-pink-500">B.Tech in Computer Science Engineering (AI & ML)</strong> at <strong className="text-pink-500">JNTUH UCE Manthani</strong> (yes, I’m still surviving those late-night study sessions!).

            <br /><br />
            <span className="font-extrabold">What’s my thing? </span>
             I don’t just build pretty frontends or play with ML models—I mash them together into systems that (hopefully) don’t crash. Think <strong className="text-pink-500">cloud-based web apps</strong> with clever backends or <strong className="text-pink-500">mobile apps</strong> with face recognition that doesn’t mistake my dog for me. I handle the whole shebang!

            <br /><br />
            I’ve tinkered with <strong className="text-pink-500">React.js</strong>, <strong className="text-pink-500">FastAPI</strong>, <strong className="text-pink-500">MongoDB</strong>, <strong className="text-pink-500">Streamlit</strong>, <strong className="text-pink-500">Tailwind CSS</strong>, <strong className="text-pink-500">Node.js</strong>, and tools like <strong className="text-pink-500">MediaPipe</strong>, <strong className="text-pink-500">Scikit-learn</strong>, and <strong className="text-pink-500">OpenCV</strong>. During my <strong className="text-pink-500">GLOOMDEV internship</strong>, I helped build web platforms, chatbot that sometimes talk back with errors although I smashed the bot and works well, and e-commerce sites—oh, and I’ve wrestled with <strong className="text-pink-500">Google Cloud</strong> and <strong className="text-pink-500">AWS</strong> to keep things running (spoiler: I mostly won).

            <br /><br />
            If you’re into building <strong className="text-pink-500">smart web apps (sometimes android apps with react native)</strong> that actually work (and maybe share a laugh over a coding fail), let’s team up!
          </div>        </motion.p>
      </div>
    </section>
  );
};

export default About;
