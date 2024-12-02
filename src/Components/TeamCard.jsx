// import React from 'react';
// import link from '../icons/linkedin.png'; // Path to LinkedIn icon
// import inst from '../icons/insta.png'; // Path to Instagram icon
// import exp from 'constants';

// const TeamCard = ({ name, position, image, instagram, linkedin }) => {
//   return (
//     <div className="flex flex-col items-center text-center space-y-3">
//       {/* Image */}
//       <div className="w-60 h-80 overflow-hidden transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90">
//         <img 
//           src={image} 
//           alt={name} 
//           className="w-full h-full object-cover inline-block transition-transform duration-300 ease-in-out transform shadow-2xl  hover:-translate-y-2 hover:shadow-lg" 
//         />
//       </div>

//       {/* Name and Position */}
//       <div>
//         <h5 className="text-lg font-semibold text-white">{name}</h5>
//         <h6 className="text-sm font-medium text-gray-200">{position}</h6>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex space-x-4">
//         {instagram && (
//           <a 
//             href={instagram} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="hover:opacity-80"
//           >
//             <img 
//             src={inst}
//               alt="Instagram" 
//               className="w-8 h-8"
//             />
//           </a>
//         )}
//         {linkedin && (
//           <a 
//             href={linkedin} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="hover:opacity-80"
//           >
//             <img 
//               src={link}
//               alt="LinkedIn" 
//               className="w-8 h-8"
//             />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TeamCard

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamCard = ({ name, position, image, instagram, linkedin, index }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col items-center justify-center p-4"
    >
      {/* Image Container */}
      <div
        className="w-60 h-80 overflow-hidden rounded-lg"
       
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:shadow-xl"
          data-aos="fade-up"
        />
      </div>

      {/* Name and Position */}
      <div className="mt-4 text-center">
        <h5 className="text-lg font-semibold text-white">{name}</h5>
        <h6 className="text-sm font-medium text-gray-200">{position}</h6>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-2">
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 w-8 h-8"
          >
            <FaInstagram className="w-full h-full" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 w-8 h-8"
          >
            <FaLinkedin className="w-full h-full" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
