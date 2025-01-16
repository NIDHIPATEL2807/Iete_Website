import React from 'react';
import HomeCard from './HomeCard';

const cardData = [
  {
    heading: "Overview",
    content: "To advance Science and Technology for Electronics, Telecommunication, Computers, Information Technology and related areas.",
  },
  {
    heading: "Aim",
    content: "To promote general advancement of electronics and telecommunication engineering and to foster technological innovation.",
  },
  {
    heading: "Vision",
    content: "To make technology more simple, innovative and accessible to everyone and to create a scientific temper in every member.",
  },
];

const HomeCardSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-16 p-8">
      {cardData.map((data, index) => (
        <HomeCard key={index} heading={data.heading} content={data.content} />
      ))}
    </div>
  );
};

export default HomeCardSection;
