//  import React from 'react';
// import { motion } from 'framer-motion';
// import AtharvaImg from '../assets/Atharva.jpg'; // Replace with the correct path to Atharva's image

// const TeamCard = ({ name, position, image, instagram, linkedin, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ 
//         opacity: 1, 
//         scale: 1,
//         transition: { 
//           duration: 0.5,
//           delay: index * 0.1,
//         },
//       }}
//       viewport={{ once: true, margin: "-50px" }}
//       className="flex flex-col items-center justify-center p-4"
//     >
//       {/* Image Container with Hover Effects */}
//       <motion.div
//         className="w-60 h-80 overflow-hidden rounded-lg"
//         whileHover={{ 
//           scale: 1.05,
//           transition: { duration: 0.3 },
//         }}
//       >
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:shadow-xl"
//         />
//       </motion.div>

//       {/* Name and Position */}
//       <motion.div
//         className="mt-4 text-center"
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <h5 className="text-lg font-semibold text-white">{name}</h5>
//         <h6 className="text-sm font-medium text-gray-200">{position}</h6>
//       </motion.div>

//       {/* Social Media Icons */}
//       <motion.div
//         className="flex space-x-4 mt-2"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         {instagram && (
//           <motion.a
//             href={instagram}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             className="w-8 h-8"
//           >
//             <img 
//               src="/api/placeholder/32/32" 
//               alt="Instagram" 
//               className="w-full h-full"
//             />
//           </motion.a>
//         )}
//         {linkedin && (
//           <motion.a
//             href={linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             className="w-8 h-8"
//           >
//             <img 
//               src="/api/placeholder/32/32" 
//               alt="LinkedIn" 
//               className="w-full h-full"
//             />
//           </motion.a>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// const teamData = {
//   facultyAdvisor: {
//     name: 'Dr. John Doe',
//     position: 'Faculty Advisor',
//     image: AtharvaImg,
//     instagram: 'https://www.instagram.com/johndoe',
//     linkedin: 'https://www.linkedin.com/in/johndoe/',
//   },
//   coreTeam: [
//     { name: 'Atharva Chavan', position: 'Executive Core', image: AtharvaImg, instagram: 'https://www.instagram.com/atharva/', linkedin: 'https://www.linkedin.com/in/atharva/' },
//     { name: 'John Smith', position: 'Core Member', image: AtharvaImg, instagram: 'https://www.instagram.com/johnsmith/', linkedin: 'https://www.linkedin.com/in/johnsmith/' },
//     { name: 'Jane Doe', position: 'Core Member', image: AtharvaImg, instagram: 'https://www.instagram.com/janedoe/', linkedin: 'https://www.linkedin.com/in/janedoe/' },
//     { name: 'Alice Johnson', position: 'Core Member', image: AtharvaImg, instagram: 'https://www.instagram.com/alicejohnson/', linkedin: 'https://www.linkedin.com/in/alicejohnson/' },
//     { name: 'Bob Williams', position: 'Core Member', image: AtharvaImg, instagram: 'https://www.instagram.com/bobwilliams/', linkedin: 'https://www.linkedin.com/in/bobwilliams/' },
//   ],
// };

// const TeamMembers = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Faculty Advisor Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex justify-center mb-16"
//       >
//         <TeamCard 
//           {...teamData.facultyAdvisor}
//           index={0}
//         />
//       </motion.div>

//       {/* Core Team Grid */}
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 place-items-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         {teamData.coreTeam.map((person, index) => (
//           <TeamCard 
//             key={index}
//             {...person}
//             index={index + 1}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default TeamMembers;

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import AtharvaImg from '../assets/Atharva.jpg';

const TeamCard = ({ name, position, image, instagram, linkedin, index }) => {
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
      {/* Image Container with Hover Effects */}
      <motion.div
        className="w-60 h-80 overflow-hidden rounded-lg"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <img
          src={AtharvaImg}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:shadow-xl"
        />
      </motion.div>

      {/* Name and Position */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h5 className="text-lg font-semibold text-white">{name}</h5>
        <h6 className="text-sm font-medium text-gray-200">{position}</h6>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="flex space-x-4 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {instagram && (
          <motion.a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-pink-500 w-8 h-8"
          >
            <FaInstagram className="w-full h-full" />
          </motion.a>
        )}
        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-500 w-8 h-8"
          >
            <FaLinkedin className="w-full h-full" />
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

const teamData = {
  facultyAdvisor: {
    name: 'Dr. John Doe',
    position: 'Faculty Advisor',
    image: '/assets/faculty.jpg', // Update the path to your image
    instagram: 'https://www.instagram.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },
  coreTeam: [
    { name: 'Member 1', position: 'Position 1', image: '/assets/member1.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 2', position: 'Position 2', image: '/assets/member2.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 3', position: 'Position 3', image: '/assets/member3.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 4', position: 'Position 4', image: '/assets/member4.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 5', position: 'Position 5', image: '/assets/member5.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 6', position: 'Position 6', image: '/assets/member6.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 7', position: 'Position 7', image: '/assets/member7.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 8', position: 'Position 8', image: '/assets/member8.jpg', instagram: '#', linkedin: '#' },
    { name: 'Member 9', position: 'Position 9', image: '/assets/member9.jpg', instagram: '#', linkedin: '#' },
  ],
};

const TeamMembers = () => {
  return (
    <div className="space-y-10 m-5">
      {/* Faculty Advisor Section */}
      <section className="flex justify-center mb-10">
        <div className="w-1/4">
          <TeamCard
            name={teamData.facultyAdvisor.name}
            position={teamData.facultyAdvisor.position}
            image={teamData.facultyAdvisor.image}
            instagram={teamData.facultyAdvisor.instagram}
            linkedin={teamData.facultyAdvisor.linkedin}
            index={0}
          />
        </div>
      </section>

      {/* Core Team Section: 3 Rows, 3 Members Each */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamData.coreTeam.map((person, index) => (
          <TeamCard
            key={index}
            name={person.name}
            position={person.position}
            image={person.image}
            instagram={person.instagram}
            linkedin={person.linkedin}
            index={index + 1}
          />
        ))}
      </section>
    </div>
  );
};

export default TeamMembers;

