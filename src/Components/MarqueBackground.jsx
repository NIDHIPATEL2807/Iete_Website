import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 text-yellow-500 opacity-20 font-pricedown">
      {/* Top marquee: Left to Right */}
      <Marquee className="text-10xl font-bold" gradient={false} speed={50}>
        <span className="mx-8">BUGBUSTER</span>
        
      </Marquee>

      {/* Bottom marquee: Right to Left */}
      <Marquee className="text-10xl font-bold mt-8" gradient={false} direction="right" speed={50}>
        <span className="mx-8">BUGBUSTER</span>
        
      </Marquee>
    </div>
  );
};

export default MarqueeBackground;
