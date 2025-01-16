import React from 'react';
import Spline from '@splinetool/react-spline';
import Led from './Led'; // Assuming your LED component is in this file
import HomeData from './HomeData';
import ImageGrid from './ImageGrid';

export default function App() {
  return (
    <div className="relative w-screen">
      {/* Spline Background */}
      <Spline
        className="absolute top-0 left-0 w-full h-full"
        scene="https://prod.spline.design/JeNulpnRHRvS75lO/scene.splinecode"
        style={{
          zIndex: -1, // Ensure Spline stays in the background
          transform: 'scale(1.3)', // Adjust scale for zoom
          transformOrigin: 'center', // Keep zoom centered
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center w-full">
        {/* Slide 1: LED and Text Overlay */}
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          {/* LED 3D Model */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <Led />
          </div>

          {/* Text Overlay */}
          <div className="relative text-center text-white font-sans z-10">
            <h1 className="text-8xl p-5">IETE SPIT</h1>
            <p className="text-lg pt-1">
              Sardar Patel Institute Of Technology, Mumbai.
            </p>
          </div>
        </div>

        {/* Slide 2: HomeData */}
        <div className="w-screen h-screen flex items-center justify-center">
          <HomeData />
        </div>

        {/* Slide 3: ImageGrid */}
        <div className="w-screen h-screen flex items-center justify-center">
          <ImageGrid />
        </div>
      </div>
    </div>
  );
}
