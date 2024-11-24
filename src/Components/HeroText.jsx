import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = ({ eventName }) => {
  return (
    <div className="relative h-[80vh] flex flex-col items-center justify-center  overflow-hidden">
      {/* Animated Glitch Background */}
      <motion.div
        className="absolute inset-0 bg-black opacity-30"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      
      {/* Main Title with Glitch Animation */}
      <motion.h1
        className="text-6xl md:text-8xl text-white font-extrabold text-center relative"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="glitch-text">
          {eventName} <span className="text-yellow-400"> BugBusters 2023</span>
        </span>
      </motion.h1>

      {/* Subtitle with a little glitch */}
      <motion.p
        className="text-lg md:text-2xl text-white mt-4 text-center relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Join us to debug the biggest tech challenges!
      </motion.p>

      {/* Call to Action Button */}
      <motion.a
        href="#register"
        className="mt-8 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* Register Now */}
      </motion.a>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-10 flex items-center justify-center animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <FaArrowDown className="text-white text-4xl" />
      </motion.div>

      {/* Glitching Bug Animation */}
      <motion.div
        className="absolute top-1/4 right-40 w-24 h-24 bg-yellow-500 rounded-full animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-20 h-20 bg-red-500 rounded-full animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HeroSection;
