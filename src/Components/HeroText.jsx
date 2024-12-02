import React from "react";

const HeroText = ({ title, contact, location, description }) => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background Moving Text */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute whitespace-nowrap text-[12rem] lg:text-[16rem] font-extrabold text-gray-800 opacity-10 animate-marquee">
          MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-8 flex flex-col items-center justify-center min-h-screen text-center md:px-12">
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <button className="text-3xl text-gray-300 hover:text-white transition duration-200">
            ←
          </button>
        </div>

        {/* Title */}
        <h1 className="text-6xl lg:text-8xl font-bold mb-8">{title}</h1>

        {/* Location */}
        <p className="text-lg lg:text-2xl text-gray-400 mb-4 flex items-center gap-2">
          📍 <span>{location}</span>
        </p>

        {/* Contact */}
        <p className="text-lg lg:text-xl text-yellow-500 mb-12">
          Contact: {contact}
        </p>

        {/* Description */}
        <p className="max-w-3xl text-gray-300 text-sm lg:text-base leading-relaxed">
          {description}
        </p>

        {/* Navigation Arrows */}
        <div className="flex gap-6 mt-12">
          <button className="w-14 h-14 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-2xl transition">
            ←
          </button>
          <button className="w-14 h-14 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-2xl transition">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
