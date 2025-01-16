import React from 'react';
import Spline from '@splinetool/react-spline';
import { Card } from '@/components/ui/card';

const HomeEvent = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center">
      {/* Spline Component as Background */}
      <Spline
        className="w-full h-full p-0 m-0"
        scene="https://prod.spline.design/JeNulpnRHRvS75lO/scene.splinecode"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh', // Keep the Spline height full
        }}
      />

      {/* Left promotional card */}
      <div className="absolute left-0 w-1/3 h-auto bg-gradient-to-b from-blue-900 to-black p-8 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="flex flex-col items-center text-white">
            <div className="w-24 h-24 mb-4">
              {/* Example logo placeholder - replace with actual logo */}
              <div className="w-full h-full rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-3xl">Logo</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-wider mb-2">EVENT NAME</h1>
            <p className="text-2xl font-light">2024</p>
            <div className="mt-8 text-lg">
              12TH - 18TH FEBRUARY
            </div>
          </div>
        </div>
      </div>

      {/* Right content section */}
      <div className="ml-[33%] w-2/3 h-auto flex items-center justify-center">
        {/* Background image (optional, if you want to replace it with Spline) */}
        <div className="absolute inset-0 bg-gray-200">
          <div className="w-100vw h-100vh bg-cover bg-center" style={{ backgroundImage: "url('https://www.nativeplanet.com/img/2023/06/harishchandragad1-1686645298.jpg')" }} />
        </div>

        {/* Overlay card */}
        <Card className="absolute top-1/4 left-8 w-[70%] h-[300px] bg-black/75 text-white p-8 rounded-lg backdrop-blur-sm flex flex-row items-center justify-between">
          <div className="flex flex-col w-1/2">
            <h2 className="text-2xl font-bold mb-4">Rise to Conquer</h2>
            <p className="text-lg leading-relaxed">
              Gear up for our 2024 event - where the future promises an exhilarating showcase of talent! 
              The upcoming Annual gathering will feature multiple thrilling activities, 
              attracting participants from across the region. With an expected footfall 
              of over 3000 people, anticipate an electric atmosphere of fierce competition 
              and unforgettable moments.
            </p>
            <div className="mt-4 text-sm text-gray-300">
              #Event2024 #FutureSpectacle
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-3xl text-white">Logo</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeEvent;
