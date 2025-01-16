import React from 'react';
import Spline from '@splinetool/react-spline';
import HomeCard from './HomeCard';
import HomeCardSection from './HomeCardSection';
import InfoData from './InfoData';

const HomeData = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Spline Component as Background */}
      {/* <Spline
        className="w-full h-full p-0 m-0"
        scene="https://prod.spline.design/JeNulpnRHRvS75lO/scene.splinecode"
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      /> */}

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        
        <p className="text-sm sm:text-lg lg:text-xl  font-sans mt-4">
        <InfoData/>
          <HomeCardSection/>
          
          
        </p>
      </div>
    </div>
  );
};

export default HomeData;
