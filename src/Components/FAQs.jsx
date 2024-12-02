import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';



const FAQCard = ({ question, answer, potionColor, index, showDollarSign }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full md:w-[calc(50%-1rem)] mb-4"
    >
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 relative">
        

        
        <button
          type="button"
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
            <div className='
            w-4 h-4 flex-shrink-0
            '>
            $
            </div>
            {/* <ChevronDown className="w-4 h-4 flex-shrink-0" /> */}
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
              <div className="text-white/80 text-sm pt-2 pb-4">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const AnimatedFAQ = ({ faqs }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
    <div className="p-4 md:p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
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
          <FAQCard key={faq.question} {...faq} index={index} showDollarSign={true} />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedFAQ;
