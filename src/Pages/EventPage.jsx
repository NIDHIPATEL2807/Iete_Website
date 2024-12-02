import EventOverview from "@/Components/EventOverview";
import AnimatedFAQ from "@/Components/FAQs";
import HeroText from "@/Components/HeroText";
import MarqueeBackground from "@/Components/MarqueBackground";
import PrizeDisplay from "@/Components/PrizeDisplay";
import ImageCarousel from "@/Components/SpecialEventImages";
import MapComp from "@/Components/Timeline";
import MagicalTimeline from "@/Components/Timeline";
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
    title: "BugBuster 2024",
    tagline : "We Got Bugbuster Before GTA 6", 
    description: "A coding challenge to innovate new ideas.",
    heroImage: "https://via.placeholder.com/1920x1080", // Replace with actual image URL
    images : ["https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400","https://via.placeholder.com/600x400"],

    subtitle: "Code. Create. Compete.",
    summary: "Showcase your coding skills in this thrilling hackathon and win amazing prizes.",
    tags: [
      "24-hour coding marathon",
      "Collaborate with like-minded peers",
      "Prizes for top-performing teams",
    ],
    timeline:[
      { description: "Event 1: Kickoff Meeting" },
      { description: "Event 2: Design Phase" },
      { description: "Event 3: Development Starts" },
      { description: "Event 4: Testing Phase" },
      { description: "Event 5: Product Launch" },
    ],
    prizesData : {
      firstPlace: '₹1,50,000',
      secondPlace: '₹1,00,000',
      thirdPlace: '₹50,000',
    },
     faqs : [
      {
        question: "When will the problem statements for the hackathon be released?",
        answer: "Problem statements will be released at the start of the hackathon. Make sure to follow our communication channels for updates.",
        potionColor: "from-orange-500/50 to-red-500/50"
      },
      {
        question: "Do projects need to be submitted on a platform or shown at presentation time?",
        answer: "Projects will need to be submitted through our designated platform and presented during the demo session.",
        potionColor: "from-blue-500/50 to-purple-500/50"
      },
      {
        question: "Will my team be allowed to call upon mentors as we please?",
        answer: "Yes, mentors will be available during specified hours to help guide teams with their projects.",
        potionColor: "from-pink-500/50 to-red-500/50"
      },
      {
        question: "What if I've never been in a Hackathon before?",
        answer: "No prior experience is required! We welcome participants of all skill levels and provide resources to help you get started.",
        potionColor: "from-yellow-500/50 to-orange-500/50"
      },
      {
        question: "Which technology should I use?",
        answer: "You're free to use any technology stack that best suits your project's needs. Choose what you're most comfortable with.",
        potionColor: "from-green-500/50 to-emerald-500/50"
      },
      {
        question: "What is theme of this year's problem statements?",
        answer: "The theme will be revealed during the opening ceremony. Stay tuned for the announcement!",
        potionColor: "from-blue-500/50 to-cyan-500/50"
      }
    ]
    
  
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
  const events = [
    { location: [51.505, -0.09], description: 'Event 1' },
    { location: [51.515, -0.1], description: 'Event 2' },
    { location: [51.525, -0.12], description: 'Event 3' }
  ];

  return (
    <div className="container mx-auto px-6 lg:px-16 py-12">
      <div className="relative h-screen">
        <MarqueeBackground/>
   <HeroText title={event.title}
    
    contact={event.tagline}
    description="Bugbuster is a talent hunt for the most versatile singer among the participants. The event is split into two categories, Eastern and Western. The event consists of an audition round and a final round. 4 finalists will be selected from each category. A winner and runner up will be awarded from each category."

   />
   </div>

  <ImageCarousel images={event.images} />
  
  <div className="container mx-auto px-6 lg:px-16 py-12">
  <h1 className="text-center text-2xl font-bold mb-5">Event Map</h1>
     <MapComp events={events}  />
    </div>
    <div className="container mx-auto px-6 lg:px-16 py-12">
      <PrizeDisplay prizes={event.prizesData} />
    </div>
    <div className="container mx-auto px-6 lg:px-16 py-12">
      <AnimatedFAQ faqs={ event.faqs} />
    </div>
    </div>
  );
};

export default EventPage;
