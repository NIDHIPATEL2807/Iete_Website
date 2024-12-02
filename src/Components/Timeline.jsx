// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { motion } from 'framer-motion'; // Framer Motion for animation

// const MapComp = ({ events }) => {
//   const position = [51.505, -0.09];

//   return (
//     <div className="w-full h-screen"> {/* Ensuring the parent div takes up full width and height */}
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComp;


import React from 'react';
import mapimg from "../assets/map.png"; // Ensure correct import
import pathimg from "../assets/path.png"; // Ensure correct import
import './Timeline.css'; // Import the CSS file

const Timeline = () => {
  const timelineEvents = [
    {
      date: '6th April',
      time: '',
      event: 'Hybrid mode workshop',
      position: { top: '20vw', left: '42vw', side: 'right' },
    },
    {
      date: '7/8th April',
      time: '',
      event: 'Online doubt solving and mock test',
      position: { top: '38vw', left: '56.5vw', side: 'left' },
    },
    {
      date: '9th April',
      time: '',
      event: 'Online quiz and simulation round',
      position: { top: '56vw', left: '43vw', side: 'right' },
    },
    {
      date: '13th April',
      time: '',
      event: 'Offline hardware troubleshooting evaluation',
      position: { top: '70vw', left: '57vw', side: 'left' },
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-800">
      {/* Background map image */}
      <img 
        src={mapimg} 
        alt="Map" 
        className="w-full h-auto absolute" 
        style={{
          height: '700px', // Height of the cropped area
          objectFit: 'cover', // Ensures the image fills the space
          objectPosition: 'top center', // Aligns the portion you want to display
          overflow: 'hidden', // Hides the rest of the image
        }}
      />

      {/* Timeline heading */}
      <h1 className="text-white absolute text-4xl md:text-8xl md:top-4 left-1/2 transform -translate-x-1/2 font-pricedown transition-opacity duration-500 opacity-100">
        Timeline
      </h1>

      {/* Path connecting events */}
      <div 
        className="absolute left-[35vw] top-[20vw] max-h-screen overflow-hidden"
        style={{ height: 'auto' }}
      >
        <img 
          src={pathimg} 
          alt="Path" 
          className="w-[22vw]" 

          style={{
            height: '350px', // Height of the cropped area
            objectFit: 'cover', // Ensures the image fills the space
            objectPosition: 'top center', // Aligns the portion you want to display
            overflow: 'hidden', // Hides the rest of the image
          }}
        />
      </div>

      {/* Timeline events */}
      {timelineEvents.map((event, index) => (
        <div 
          key={index} 
          className="pin absolute transition-opacity duration-500 opacity-100"
          style={{ top: event.position.top, left: event.position.left }}
        >
          {/* Pin circle */}
          <div 
            className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full border-2 border-black"
            style={{ top: '-10px', left: '-10px' }}
          />
          
          {/* Event details */}
          <div 
            className={`absolute w-[120px] md:w-[270px] p-3 sm:p-5 bg-black bg-opacity-60 rounded-md border-2 border-yellow-500 ${event.position.side === 'right' ? 'right-4 sm:right-8' : 'left-4 sm:left-8'}`}
            style={{ 
              boxShadow: 'rgba(255, 215, 0, 0.7) 0px 0px 15px, rgba(255, 215, 0, 0.5) 0px 0px 25px',
              transform: 'translateY(-50%)',
              top: '0px',
            }}
          >
            {/* Event time */}
            {event.time && (
              <div 
                className="text-yellow-500 text-xs md:text-3xl font-pricedown"
                style={{ textShadow: 'rgba(0, 0, 0, 0.9) 2px 2px 5px' }}
              >
                {event.time}
              </div>
            )}
            {/* Event date */}
            <div 
              className="text-yellow-500 text-xs md:text-3xl mb-1 sm:mb-2 font-pricedown"
              style={{ textShadow: 'rgba(0, 0, 0, 0.9) 2px 2px 5px' }}
            >
              {event.date}
            </div>
            {/* Event description */}
            <div 
              className="text-white text-xs md:text-3xl font-bold"
              style={{ textShadow: 'rgba(0, 0, 0, 0.9) 2px 2px 5px' }}
            >
              {event.event}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Timeline;

