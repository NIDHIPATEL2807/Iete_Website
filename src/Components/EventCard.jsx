import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ id,title, date, description, image }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col lg:flex-row bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Content Section */}
      <div className="flex flex-col justify-center p-6 lg:w-1/3">
        {/* Date and Title */}
        <div className="mb-6">
  <div className="flex items-center justify-start space-x-6">
    {/* Date Circle */}
    <div className="flex flex-col items-center justify-center bg-pink-500 text-white w-20 h-20 rounded-full shadow-lg">
      <div className="text-base font-semibold uppercase">
        {new Date(date).toLocaleString('default', { month: 'short' })}
      </div>
      <div className="text-3xl font-extrabold">
        {new Date(date).getDate()}
      </div>
    </div>

    {/* Title Section */}
    <div>
      <h1 className="text-4xl font-extrabold text-white leading-tight">{title}</h1>
      {/* <p className="text-base text-gray-400 mt-2">
        {new Date(date).toLocaleString('default', { weekday: 'long' })}, {new Date(date).toLocaleDateString()}
      </p> */}
    </div>
  </div>
</div>

        {/* Location and Date */}
        <div className="text-sm text-gray-400 mb-4">
          <div className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt text-pink-500 mr-2" />
            {/* <span>Gyan Manch</span> -{' '}
            <span className="underline cursor-pointer">Get Directions</span> */}
          </div>
          <div className="flex items-center">
            <i className="fas fa-calendar-alt text-pink-500 mr-2"/>
            <span>
              {new Date(date).toLocaleString('default', { weekday: 'long' })},{' '}
              {new Date(date).toLocaleDateString()} at 5:30 PM
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

        {/* Action Button */}
        <div className="w-full">
          <Button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-5 rounded-lg" 
          
          onClick={() => {
            // console.log('Button clicked');
            navigate(`/events/${id}`);
            console.log(id);
          }}
        >
            Learn More About Event
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-2/3 flex justify-center items-center bg-gray-800">
        <img
          src={image}
          alt={title}
          className="object-cover w-4/5 h-full rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default EventCard;
