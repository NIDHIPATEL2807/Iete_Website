

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

// import React from "react";


// const AnimatedText = () => {
//   return (
//     <div style={styles.body}>
//       <p style={styles.p}>
//         MEET OUR TEAM
//         <span style={styles.span}>IETE 2024-25</span>
//       </p>
//     </div>
//   );
// };

// const styles = {
//   body: {
//     font: "500 2em/1.5 'Neuton'",
//     background: "#090d00",
//     color: "rgba(255,255,255,.25)",
//     textAlign: "center",
//     margin: "0",
//     height: "100vh", // To ensure full-page height
//     overflow: "hidden",
//   },
//   p: {
//     textTransform: "uppercase",
//     letterSpacing: ".5em",
//     display: "inline-block",
//     border: "4px double rgba(255,255,255,.25)",
//     padding: "1.5em 0em",
//     position: "absolute",
//     top: "18%",
//     left: "50%",
//     width: "40em",
//     margin: "0 0 0 -20em",
//   },
//   span: {
//     font: "700 4em/1 'Oswald', sans-serif",
//     letterSpacing: "0",
//     padding: ".25em 0 .325em",
//     display: "block",
//     margin: "0 auto",
//     textShadow: "0 0 80px rgba(255,255,255,.5)",
//     background: "url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y",
//     WebkitBackgroundClip: "text",
//     backgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     WebkitAnimation: "aitf 80s linear infinite",
//     WebkitTransform: "translate3d(0,0,0)",
//     WebkitBackfaceVisibility: "hidden",
//   },
// };

// // Keyframes are not supported in inline styles, so use CSS for animations
// export default AnimatedText;
