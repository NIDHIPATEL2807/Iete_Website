import React from 'react';
import AnimatedFAQ from '../FAQs';

const Faqdata = [
  {
    faqs: [
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
        question: "What is the theme of this year's problem statements?",
        answer: "The theme will be revealed during the opening ceremony. Stay tuned for the announcement!",
        potionColor: "from-blue-500/50 to-cyan-500/50"
      }
    ]
  }
];

const BugBusterFaq = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-12 font-MarvelFont">
      <AnimatedFAQ faqs={Faqdata[0].faqs} />
    </div>
  );
}

export default BugBusterFaq;
