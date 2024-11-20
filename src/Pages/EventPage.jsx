import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Sample event data, you can replace this with an API call to fetch real event data
const eventData = [
  { id: "1", title: "Tech Talk", description: "A talk on the latest tech trends." },
  { id: "2", title: "Hackathon", description: "A coding challenge to innovate new ideas." },
  { id: "3", title: "Web Development Workshop", description: "Learn web development in a hands-on workshop." },
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
      <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
      <p className="text-xl mb-6">{event.description}</p>
      {/* You can add more event details here */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">RSVP</button>
    </div>
  );
};

export default EventPage;
