// src/components/LoadingXAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './LoadingXAnimation.css'; // Optional: for additional styling
import logo from "../assets/ietelogoblack2.png"
const LoadingXAnimation = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-animation"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
<motion.img
  src={logo}
  alt="Loading..."
  className="loading-image"
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>


      </motion.div>
     </div>
  );
};

export default LoadingXAnimation;