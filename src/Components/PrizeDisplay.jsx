import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Trophy images - these should be imported or passed as URLs
import firstPlaceTrophy from '../assets/first.webp';
import secondPlaceTrophy from '../assets/second.webp';
import thirdPlaceTrophy from '../assets/third.webp';

const Prizes = ({ prizes }) => {
  // UseIntersectionObserver for detecting when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow the animation to trigger multiple times as the component enters and leaves view
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  // Spring animations for the trophies
  const springConfig = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.8)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 180, friction: 12 },
  };

  const firstSpring = useSpring({
    ...springConfig,
    delay: 300, // Delay for the first trophy
  });

  const secondSpring = useSpring({
    ...springConfig,
    delay: 600, // Delay for the second trophy
  });

  const thirdSpring = useSpring({
    ...springConfig,
    delay: 900, // Delay for the third trophy
  });

  return (
    <div className=" p-4 md:p-8">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity:  1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
    >
        Prize  Distribution
    </motion.h1>
    <div
      ref={ref}
      className="flex justify-center items-center  space-x-16 md:space-x-24 gap-20"
    >
        {/* title for prize distirbution */}
      <div className="flex justify-center items-center">
        {/* Second Place - Left Trophy Animation */}
        <animated.div style={secondSpring} className="mb-6">
          <img
            src={secondPlaceTrophy}
            alt="2nd Place"
            className="w-56 h-56 md:w-64 md:h-64 mb-2 transition-transform transform hover:scale-110"
          />
          <div className="text-white text-3xl md:text-4xl  text-center mt-4">
            2nd Place
          </div>
          <div className="text-white text-2xl md:text-3xl font-semibold text-center mt-2">
            {prizes.secondPlace}
          </div>
        </animated.div>
      </div>

      <div className="flex justify-center items-center">
        {/* First Place - Center Trophy Animation */}
        <animated.div style={firstSpring} className="mb-6">
          <img
            src={firstPlaceTrophy}
            alt="1st Place"
            className="w-64 h-64 md:w-80 md:h-80 mb-2 transition-transform 
            mix-blend-screen
            transform hover:scale-110"
          />
          <div className="text-white text-3xl md:text-4xl  text-center mt-4">
            1st Place
          </div>
          <div className="text-white text-2xl md:text-3xl font-semibold text-center mt-2">
            {prizes.firstPlace}
          </div>
        </animated.div>
      </div>

      <div className="flex justify-center items-center">
        {/* Third Place - Right Trophy Animation */}
        <animated.div style={thirdSpring} className="mb-6">
          <img
            src={thirdPlaceTrophy}
            alt="3rd Place"
            className="w-56 h-56 md:w-64 md:h-64 mb-2 transition-transform transform hover:scale-110"
          />
          <div className="text-white text-3xl md:text-4xl  text-center mt-4">
            3rd Place
          </div>
          <div className="text-white text-2xl md:text-3xl  text-center mt-2">
            {prizes.thirdPlace}
          </div>
        </animated.div>
      </div>
    </div>
    </div>
  );
};

export default Prizes;
