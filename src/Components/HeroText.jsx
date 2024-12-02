import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroText = ({ title, contact, location, description }) => {
  return (
    <div className="h-screen mt-28 ">
    <div className="  relative text-white flex flex-col md:flex-row items-center md:items-start">
    <div className="md:w-1/2 h-[70vh] text-center md:text-left mt-16 md:mt-0 flex flex-col ">  
    <div className=" ">
    <FaArrowLeft
    className="text-5xl  text-bold"
    />
    </div>
   
    <div>
        <h1 className="mt-10 text-8xl font-bold font-pricedown">{title}</h1>
        <div className="flex items-center justify-center md:justify-start mt-4">
            <i className="fas fa-map-marker-alt text-xl"></i>
            <span className="ml-2 pt-5 text-xl font-pricedown">{location}</span>
        </div>
        <p className="mt-5 text-xl "> {contact}</p>
        </div>
        <div className="mt-20 flex gap-10 space-x-4">
    <button className="w-24 h-24 rounded-full border-2 border-yellow-500 flex items-center justify-center">
    {/* need to increase the size of icon */}
    <FaArrowLeft className=" 
    text-5xl
    text-yellow-500
    " />

    </button>
    <button className="w-24 h-24 rounded-full border-2 border-yellow-500 flex items-center justify-center">
    <FaArrowRight
    className="text-5xl text-yellow-500"
    />
    </button>
</div>
    </div>
    <div className="md:w-1/2 h-[70vh] flex flex-col items-center mt-8 md:mt-0">
        <div className=" bg-black flex items-center justify-center">
            <img src="https://placehold.co/600x250" alt="Event logo" className=""/>
        </div>
        <div className="mt-16 px-4 z-10 text-center md:text-left">
            <p className="text-lg  font-bold">
              {description}
            </p>
        </div>
    </div>
</div>


</div>
);
};

export default HeroText;
