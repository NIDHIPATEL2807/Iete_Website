// 

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import AtharvaImg from '../assets/Atharva.jpg';

const TeamCard = ({ name, position, image, instagram, linkedin, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 250 }} // Initial state: invisible, slight scale and vertical offset
      whileInView={{
        opacity: 1, // Fade in
        y: 0, // Slide in
        scale: 1, // Normal scale
        transition: {
          duration: 0.5,
          delay: index * 0.1, // Delay for staggered animation
        },
      }}
      viewport={{ once: false, margin: "-50px" }} // Re-trigger animation when scrolling back into view
      className="flex flex-col items-center justify-center p-4"
    >
      {/* Image Container with Hover Effects */}
      <motion.div
        className="w-60 h-80 overflow-hidden rounded-lg"
        whileHover={{
          scale: 1.05, // Scale effect on hover
          transition: { duration: 0.5 },
        }}
      >
        <img
          src={AtharvaImg}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:shadow-xl"
        />
      </motion.div>

      {/* Name and Position with Fade In Slide Effect */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and a slight vertical offset
        whileInView={{
          opacity: 1, // Fade in when in view
          y: 0, // Slide into position
        }}
        transition={{ delay: 0.2 }} // Delay for staggered animation
      >
        <h5 className="text-lg font-semibold text-white">{name}</h5>
        <h6 className="text-sm font-medium text-gray-200">{position}</h6>
      </motion.div>

      {/* Social Media Icons with Slide-In Effect */}
      <motion.div
        className="flex space-x-4 mt-2"
        initial={{ opacity: 0, y: 50 }} // Start off-screen (left side)
        whileInView={{ opacity: 1, x:0,y:0 }} // Slide in from the left when in view
        transition={{ delay: 0.3 }} // Delay for staggered animation
      >
        {instagram && (
          <motion.a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }} // Hover scale effect
            whileTap={{ scale: 0.9 }} // Tap scale effect
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
            whileHover={{ scale: 1.2 }} // Hover scale effect
            whileTap={{ scale: 0.9 }} // Tap scale effect
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
