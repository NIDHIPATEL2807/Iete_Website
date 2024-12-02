import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EventCard = ({ id, title, description, tags, image }) => {
  const navigate = useNavigate();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1.2 },
    hover: { scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
    hover: { opacity: 0.3 },
  };

  return (
    <motion.div
      className="relative  h-[80vh] bg-black text-white flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl group cursor-pointer"
      onClick={() => navigate(`/events/${id}`)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Image Section */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        initial="initial"
        whileHover="hover"
        variants={imageVariants}
      >
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-70"
          variants={overlayVariants}
        />
      </motion.div>

      {/* Content Section */}
      <div className="z-10 relative p-8 md:p-16 flex flex-col justify-center text-center md:text-left w-full md:w-2/3">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide uppercase text-white"
          variants={textVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 font-light leading-relaxed text-gray-300"
          variants={textVariants}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start"
          variants={textVariants}
        >
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 py-2 px-4 rounded-full uppercase text-sm font-medium shadow-md hover:bg-gray-700 transition-colors"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Interactive Hover Elements */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 text-white bg-gray-900/60 py-3 px-6 rounded-full shadow-lg text-lg font-bold cursor-pointer hover:bg-gray-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate(`/events/${id}`)}
      >
        Explore Event
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
