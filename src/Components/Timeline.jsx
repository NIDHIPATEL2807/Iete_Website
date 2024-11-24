import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    date: "29th February",
    title: "Registrations Open",
    color: "from-red-500 to-orange-500",
    glowColor: "bg-red-500/20",
    textColor: "text-red-400"
  },
  {
    date: "22nd March",
    title: "Registrations Ends",
    color: "from-blue-500 to-cyan-500",
    glowColor: "bg-blue-500/20",
    textColor: "text-blue-400"
  },
  {
    date: "26th March",
    title: "Final shortlist",
    color: "from-green-500 to-emerald-500",
    glowColor: "bg-green-500/20",
    textColor: "text-green-400"
  },
  {
    date: "1st April",
    title: "Event Starts",
    color: "from-purple-500 to-pink-500",
    glowColor: "bg-purple-500/20",
    textColor: "text-purple-400"
  }
];

const TimelineEvent = ({ date, title, color, glowColor, textColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-shrink-0 flex flex-col items-center w-[400px] px-8 py-8"
    >
      <div className={`relative w-48 h-48 ${glowColor} rounded-full flex items-center justify-center`}>
        <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-sm" />
        <div className={`absolute w-44 h-44 rounded-full bg-gradient-to-b ${color} opacity-80`} />
        
        <div className="absolute w-16 h-16 bg-black/80 rounded-full transform rotate-45 flex items-center justify-center">
          <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-sm transform -rotate-45`} />
        </div>
        
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              top: `${50 + Math.cos(i * Math.PI / 2) * 50}%`,
              left: `${50 + Math.sin(i * Math.PI / 2) * 50}%`
            }}
          />
        ))}

        <div className="absolute left-full w-16 h-[2px] bg-gradient-to-r from-white/50 to-transparent" />
        <div className="absolute right-full w-16 h-[2px] bg-gradient-to-l from-white/50 to-transparent" />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mt-6"
      >
        <h3 className={`text-2xl font-bold ${textColor}`}>{date}</h3>
        <p className="text-white/80 mt-2">{title}</p>
      </motion.div>
    </motion.div>
  );
};

const MagicalTimeline = () => {
  const timelineRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    // Clean up timeout on component unmount
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleWheel = (event) => {
    if (timelineRef.current) {
      const container = timelineRef.current;
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
      
      // Check if the scroll is primarily horizontal
      const isHorizontalScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      
      // If we're not at the edges OR we're scrolling horizontally
      if ((!isAtStart && !isAtEnd) || isHorizontalScroll) {
        event.preventDefault();
        
        // Update scroll position
        const delta = event.deltaY || event.deltaX;
        container.scrollLeft += delta;
        
        // Set scrolling state
        setIsScrolling(true);
        
        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        // Set new timeout to detect when scrolling ends
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    }
  };

  useEffect(() => {
    // Add/remove body scroll lock based on isScrolling state
    if (isScrolling) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isScrolling]);

  return (
    <div className="">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white text-center py-12"
      >
         Timeline
      </motion.h1>

      <div className="relative w-full " onWheel={handleWheel}>
        <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10" />
        
        <div
          ref={timelineRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-4"
          style={{ maxHeight: "400px" }}
        >
          <div className="flex min-w-full items-center px-16">
            <div className="w-8 h-8 flex-shrink-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-white/20 rounded-full"
              />
            </div>
            
            {events.map((event) => (
              <TimelineEvent key={event.date} {...event} />
            ))}
            
            <div className="w-8 h-8 flex-shrink-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-white/20 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-4xl mx-auto text-white/70 text-center">
        </div>
      </div>
    </div>
  );
};

export default MagicalTimeline;