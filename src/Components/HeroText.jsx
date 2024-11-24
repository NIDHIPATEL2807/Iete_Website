import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ text }) => {
  // Animation duration and other parameters
  const duration = 20; // Adjust for scroll speed (seconds)

  return (
    <div className="h-[80vh]  flex flex-col items-center justify-between overflow-hidden">
      {/* Top animated text */}
      <motion.div
        className="flex items-center justify-center relative"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
        style={{ opacity: 0.2 }}
      >
        <p className="text-[15vh] md:text-[18vh] font-extrabold uppercase text-white">
          {text}
        </p>
      </motion.div>

      {/* Center main text with shadow */}
      <div className="flex items-center justify-center ">
        <h1
          className="text-center text-white font-extrabold text-[15vh] md:text-[17vh] uppercase"
          style={{
            // textShadow: "0px 5px 15px rgba(255, 255, 255, 0.9)",
          }}
        >
          {text}
        </h1>
      </div>

      {/* Bottom animated text */}
      <motion.div
        className="flex items-center justify-center relative"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
        style={{ opacity: 0.1 }}
      >
        <p className="text-[15vh] md:text-[18vh] font-extrabold uppercase text-white">
          {text}
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
