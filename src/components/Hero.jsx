import { motion, useInView, useAnimation } from 'framer-motion';
import { styles } from '../styles';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fadeIn } from '../utils/motion';

const textAnimations = (duration) => {
  return {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
      },
    },
  };
};

const AnimatedText = ({ text, duration }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start('visible');
      // if (repeatDelay) {
      //   timeout = setTimeout(async () => {
      //     await controls.start('hidden');
      //     controls.start('visible');
      //   }, repeatDelay);
      // }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [controls, isInView]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      {text.split(' ').map((word, index) => (
        <span className="inline-block" key={index}>
          {word.split('').map((char, idx) => (
            <motion.span
              variants={textAnimations(duration)}
              className="inline-block"
              key={idx}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, 2500);
  }, []);
  return (
    <section id="home" className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-center items-center text-center gap-5 pb-20`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          <motion.h1
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.heroHeadText} text-white hero-title`}
          >
            <AnimatedText text="Hi, I'm Maman Racing" duration={0.8} />
          </motion.h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {isRendered ? (
              <AnimatedText text="Front End Developer" duration={0.1} />
            ) : (
              <>&nbsp;</>
            )}
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
