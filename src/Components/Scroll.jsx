

import React from 'react';

const Scroll = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* First full height section with marquee */}

      <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
  <div className="absolute w-full whitespace-nowrap flex animate-marquee sm:animate-marquee-sm lg:animate-marquee-lg">
    <span className="mx-4 text-8xl sm:text-8xl font-semibold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 bg-clip-text text-transparent">
      Team 2024-25 • Team 2024-25 • Team 2024-25 • Team 2024-25 •&nbsp;
    </span>
    <span className="mx-4 text-8xl sm:text-8xl font-semibold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 bg-clip-text text-transparent">
      Team 2024-25 • Team 2024-25 • Team 2024-25 • Team 2024-25 •&nbsp;
    </span>
  </div>
</section>




      {/* Second full height section
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800">Second Page Content</h2>
      </section> */}
    </div>
  );
};

// Add custom animation to tailwind
const style = document.createElement('style');
style.textContent = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-marquee {
    animation: marquee 8s linear infinite;
  }
`;
document.head.appendChild(style);

export default Scroll;
