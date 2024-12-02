// src/pages/Events.jsx
import EventCarousel from '@/Components/EventCarausel';
import EventCard from '@/Components/EventCard';
import React from 'react';
import bugbuster from '../assets/bugbuster1.jpg';
import bugbuster2 from '../assets/bugbuster2.jpg';
const Events = () => {
  const latestEvents = [
    {
      id: 1,
      title: "Udaan 2024",
      date: "August 10, 2024",
      description: "A magical evening of fun and chilling to welcome students!",
      image: bugbuster,
      tags: [
        "24-hour coding marathon",
        "Collaborate with like-minded peers",
        "Prizes for top-performing teams",
      ],
    },
    {
      id: 2,
      title: "Bug Buster 2023",
      date: "February 15, 2023",
      description: "One of its kind hackathon only for hardware enthusiasts",
      image: bugbuster2,
      tags: [
        "24-hour coding marathon",
        "Collaborate with like-minded peers",
        "Prizes for top-performing teams",
      ],
      
    },
  ];

  // const moreEvents = [
  //   {
  //     title: "Art Exhibition",
  //     date: "March 5, 2024",
  //     description: "Explore a collection of modern art from top artists.",
  //     image: "https://via.placeholder.com/400x300",
  //   },
  //   {
  //     title: "Food Festival",
  //     date: "April 12, 2024",
  //     description: "Taste delicacies from around the world at this exciting festival.",
  //     image: "https://via.placeholder.com/400x300",
  //   },
  //   // Add more events here
  // ];


  return (
    <div className="container mx-auto px-6 py-12">
      {/* Carousel Section */}
      <EventCarousel />

      {/* Latest Events Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900">Latest Events</h2>
        <div className="mt-6 grid grid-cols-1 gap-8">
          {latestEvents?.map((event, index) => (
            <EventCard
              id = {event.id}
              key={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
              image={event.image}
              tags={event.tags}
            />
          ))}
        </div>
      </section>

      {/* More Events Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900">More Events</h2>
        <div className="mt-6 grid grid-cols-1 gap-8">
          {/* {moreEvents?.map((event, index) => (
            <EventCard
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              image={event.image}
            />
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default Events;
