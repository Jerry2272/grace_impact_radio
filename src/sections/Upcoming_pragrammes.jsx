import React, { useState } from "react";
import upcoming_img from "../assets/banner_bg.jpg"; // Programme flyer
import speaker_img from "../assets/banner_bg.jpg"; // Replace with actual speaker image

// Flatten all programmes into an array with day info
const programmes = {
  Monday: [
    { time: "6:00 AM - 8:00 AM", title: "Morning Devotion", host: "Pastor John", flyer: upcoming_img, speaker: speaker_img , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue maecenas commodo mollis sagittis quisque.'},
    { time: "12:00 PM - 2:00 PM", title: "Gospel Midday", host: "DJ Grace", flyer: "/flyers/gospel-midday.jpg", speaker: speaker_img },
    { time: "8:00 PM - 10:00 PM", title: "Faith Talk", host: "Rev. Daniel", flyer: "/flyers/faith-talk.jpg", speaker: speaker_img },
  ],
  // ... other days remain unchanged, add `speaker` field as needed
};

// Helper: flatten programmes into an array
const getAllProgrammes = () => {
  return Object.entries(programmes).flatMap(([day, shows]) =>
    shows.map((show) => ({ day, ...show }))
  );
};

const UpcomingProgrammes = () => {
  const allProgrammes = getAllProgrammes();
  const [nextShow] = useState(allProgrammes[0]); // you can later compute the actual upcoming show

  return (
    <section className="text-white py-16 px-6 md:px-[100px] flex flex-col md:flex-row items-center justify-center">
      {/* Flyer */}
      <div
        className="flex-1 w-full md:w-1/2 h-[360px] flex justify-center overflow-hidden shadow-lg"
        data-aos="fade-right"
      >
        <img
          src={nextShow.flyer}
          alt={nextShow.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div
        className="flex-1 w-full md:w-1/2 p-8 py-14 bg-[#B0040F] flex flex-col md:flex-row items-center"
        data-aos="fade-left"
      >
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Programme</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{nextShow.title}</h3>
          <p>{nextShow.description}</p>
          <p className="text-white/80 mb-2">Hosted by {nextShow.host}</p>
          <span className="text-[#E63946] font-semibold">{nextShow.day} | {nextShow.time}</span>
        </div>

        {/* Speaker */}
        <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden shadow-lg">
          <img
            src={nextShow.speaker}
            alt={nextShow.host}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingProgrammes;
