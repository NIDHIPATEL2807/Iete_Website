// src/components/EventCarousel.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel' // added carousel library for adding carausels
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const EventCarousel = () => {
  

  return (
    <div className="relative">
       <Carousel showThumbs={false} autoPlay infiniteLoop className="mb-12">
        
   {/* Sample Carousel Items */}
        <motion.div
          className="h-96 bg-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Event 1"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="h-96 bg-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Event 2"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Add more carousel items here */}
        </Carousel>

    </div>
  );
};

export default EventCarousel;
