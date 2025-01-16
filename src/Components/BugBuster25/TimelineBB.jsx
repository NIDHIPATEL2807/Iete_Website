// import React from 'react';
// import TimelineCardBB from './TimelineCardBB';
// import './TimelineBB.css';

// const timelineData = [
//   {
//     image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
//     title: 'Phase 1: Pre-Event Workshop',
//     date: 'January 10, 2025 | 10:00 AM',
//     description: 'A workshop on Troubleshooting, Microcontroller Programming, and PCB Design.',
//     side: 'left',
//   },
//   {
//     image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
//     title: 'Phase 2: Hardware Hackathon',
//     date: 'January 15, 2025 | 9:00 AM',
//     description: 'Kickstart the hardware hackathon and build innovative projects.',
//     side: 'right',
//   },
//   {
//     image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
//     title: 'Phase 3: Prototype Testing',
//     date: 'January 20, 2025 | 11:00 AM',
//     description: 'Test your prototypes and get feedback from experts.',
//     side: 'left',
//   },
//   {
//     image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
//     title: 'Phase 4: Final Presentation',
//     date: 'January 25, 2025 | 2:00 PM',
//     description: 'Present your final projects to the panel of judges.',
//     side: 'right',
//   },
// ];

// const TimelineBB = () => {
//   return (
//     <div className="timeline-container">
//       <div className="timeline-line"></div>
//       {timelineData.map((item, index) => (
//         <TimelineCardBB
//           key={index}
//           image={item.image}
//           title={item.title}
//           date={item.date}
//           description={item.description}
//           side={item.side}
//         />
//       ))}
//     </div>
//   );
// };

// export default TimelineBB;


import React from 'react';
import TimelineCardBB from './TimelineCardBB';
import './TimelineBB.css';

const timelineData = [
  {
    image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
    title: 'Phase 1: Pre-Event Workshop',
    date: 'January 10, 2025 | 10:00 AM',
    description: 'A workshop on Troubleshooting, Microcontroller Programming, and PCB Design.',
    side: 'left',
  },
  {
    image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
    title: 'Phase 2: Hardware Hackathon',
    date: 'January 15, 2025 | 9:00 AM',
    description: 'Kickstart the hardware hackathon and build innovative projects.',
    side: 'right',
  },
  {
    image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
    title: 'Phase 3: Prototype Testing',
    date: 'January 20, 2025 | 11:00 AM',
    description: 'Test your prototypes and get feedback from experts.',
    side: 'left',
  },
  {
    image: 'http://riccardotartaglia.it/img/deadpool/deadpool.png',
    title: 'Phase 4: Final Presentation',
    date: 'January 25, 2025 | 2:00 PM',
    description: 'Present your final projects to the panel of judges.',
    side: 'right',
  },
];

const TimelineBB = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <TimelineCardBB
          key={index}
          image={item.image}
          title={item.title}
          date={item.date}
          description={item.description}
          side={item.side}
          index={index}  // Pass index to control the vertical position
        />
      ))}
    </div>
  );
};

export default TimelineBB;

