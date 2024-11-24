import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EventOverview = ({ eventImages }) => {
  const containerRef = useRef(null); // Reference for the container
  const isInView = useInView(containerRef, { margin: "0px 0px -50% 0px", once: false }); // Trigger animation when visible

  return (
    <div className="py-14">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Overview of the Event
        </h2>
        {/* Attach ref to the container */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {eventImages?.map((image, index) => (
            <motion.div
              key={image}
              className="rounded overflow-hidden shadow-lg"
              initial={{ x: index % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, opacity: 1 }
                  : { x: index % 2 === 0 ? "-100%" : "100%", opacity: 0 }
              }
              transition={{
                duration: 1.8,
                ease: "easeOut",
                delay: isInView ? index * 0.2 : 0,
              }}
            >
              <img
                src={image}
                alt={`Event overview ${index + 1}`}
                className="w-full object-cover h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
