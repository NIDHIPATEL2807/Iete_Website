import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "When will the problem statements for the hackathon be released?",
    answer: "Problem statements will be released at the start of the hackathon. Make sure to follow our communication channels for updates.",
    potionColor: "from-orange-500/50 to-red-500/50"
  },
  {
    question: "Do projects need to be submitted on a platform or shown at presentation time?",
    answer: "Projects will need to be submitted through our designated platform and presented during the demo session.",
    potionColor: "from-blue-500/50 to-purple-500/50"
  },
  {
    question: "Will my team be allowed to call upon mentors as we please?",
    answer: "Yes, mentors will be available during specified hours to help guide teams with their projects.",
    potionColor: "from-pink-500/50 to-red-500/50"
  },
  {
    question: "What if I've never been in a Hackathon before?",
    answer: "No prior experience is required! We welcome participants of all skill levels and provide resources to help you get started.",
    potionColor: "from-yellow-500/50 to-orange-500/50"
  },
  {
    question: "Which technology should I use?",
    answer: "You're free to use any technology stack that best suits your project's needs. Choose what you're most comfortable with.",
    potionColor: "from-green-500/50 to-emerald-500/50"
  },
  {
    question: "What is theme of this year's problem statements?",
    answer: "The theme will be revealed during the opening ceremony. Stay tuned for the announcement!",
    potionColor: "from-blue-500/50 to-cyan-500/50"
  }
];

const FAQCard = ({ question, answer, potionColor, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full md:w-[calc(50%-1rem)] mb-4"
    >
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <div className="absolute -right-2 -top-2">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${potionColor} animate-pulse`} />
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-white py-2"
        >
          <span className="text-sm md:text-base font-medium text-left pr-4">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 flex-shrink-0" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="text-white/80 text-sm pt-2 pb-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const AnimatedFAQ = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up the Intersection Observer to detect when the FAQ section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);  // Update the visibility state
      },
      { threshold: 0.5 }  // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className=" p-4 md:p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity:  isVisible ? 1:0, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
      >
        FAQs
      </motion.h1>

      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto flex flex-wrap justify-between gap-4"
      >
        {faqs.map((faq, index) => (
          <FAQCard key={faq.question} {...faq} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedFAQ;
