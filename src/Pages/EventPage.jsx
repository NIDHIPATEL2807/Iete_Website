import EventOverview from "@/Components/EventOverview";
import HeroSection from "@/Components/HeroText";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const eventData = [
  { 
    id: "1", 
    title: "Bug Buster", 
    description: "One of its kind hackathon",
    heroImage: "https://via.placeholder.com/1920x1080", // Replace with actual image URL
    images : ["https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400"],
    subtitle: "Exploring the future of technology",
    summary: "Join us to discuss the latest innovations in the tech industry, including AI, ML, and Web 3.0.",
    keyPoints: [
      "Keynote speakers from top tech companies",
      "Hands-on sessions on emerging technologies",
      "Networking opportunities with industry leaders",
    ],
  },
  { 
    id: "2", 
    title: "Hackathon", 
    description: "A coding challenge to innovate new ideas.",
    heroImage: "https://via.placeholder.com/1920x1080", // Replace with actual image URL
    images : ["https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400"],

    subtitle: "Code. Create. Compete.",
    summary: "Showcase your coding skills in this thrilling hackathon and win amazing prizes.",
    keyPoints: [
      "24-hour coding marathon",
      "Collaborate with like-minded peers",
      "Prizes for top-performing teams",
    ],
  },
  { 
    id: "3", 
    title: "Web Development Workshop", 
    description: "Learn web development in a hands-on workshop.",
    heroImage: "https://via.placeholder.com/1920x1080", // Replace with actual image URL
    images : ["https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400"],

    subtitle: "Master the art of web development",
    summary: "Dive into front-end and back-end development with expert guidance.",
    keyPoints: [
      "Interactive coding sessions",
      "Learn HTML, CSS, JavaScript, and React",
      "Build a project by the end of the workshop",
    ],
  },
];


const EventPage = () => {
  const { eventId } = useParams();  // Get eventId from URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Find the event based on eventId, or fetch from API
    const eventDetail = eventData.find(event => event.id === eventId);
    if (eventDetail) {
      setEvent(eventDetail);
    } else {
      // Handle case when event not found (e.g., show 404 or error)
      setEvent(null);
    }
  }, [eventId]);

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="container mx-auto px-6 lg:px-16 py-12">
  {/* <div
    className="w-full h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url('${event.heroImage}')` }}
  >
    <div className="bg-black bg-opacity-50 text-white text-center p-8 rounded">
      <h1 className="text-5xl font-bold mb-4">{event.title}</h1>
      <p className="text-2xl">{event.subtitle}</p>
    </div>
  </div>
    Event Details Section */}
   <HeroSection text="BUGBUSTERS 2023" />
    {/* <div className="container mx-auto px-6 lg:px-16 py-12">
    <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
    <p className="text-xl mb-6">{event.description}</p>

  </div> */}
  {/* Event Summary Section */}
  <EventOverview eventImages={event.images} />
    </div>
  );
};

export default EventPage;
