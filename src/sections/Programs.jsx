import React, { useState } from "react";
import flyers1 from '../assets/lunch_banner.jpg';
import flyers2 from '../assets/village_flyer.jpg';
import flyers3 from '../assets/express_me.jpg';

const programmes = {
  Monday: [
    {
      time: "6:00 AM - 8:00 AM",
      title: "Lunch Hour Prayer",
      host: "Obinna Nwankwo",
      flyer: flyers1
    },
    {
      time: "6:00 AM - 8:00 AM",
      title: "Grace Hour",
      host: "Evangelist Ruth",
      flyer: flyers1,
    },
    {
      time: "8:00 PM - 10:00 PM",
      title: "Faith Talk",
      host: "Rev. Daniel",
      flyer: flyers2
    },
  ],
  Tuesday: [
     {
      time: "Every Tuesday 3pm",
      title: "Village Square",
      host: "Mighty Woman",
      flyer: flyers2
    },
    {
      time: "Every Tuesday 1pm",
      title: "Express Me",
      host: "Aunty Chizzy",
      flyer: flyers3
    },
  ],
  Wednesday: [
    {
      time: "7:00 AM - 9:00 AM",
      title: "Commanding the Morning",
      host: "Pastor Chris",
      flyer: "/flyers/commanding-morning.jpg",
    },
    {
      time: "6:00 PM - 8:00 PM",
      title: "Word & Prayer",
      host: "Min. Victor",
      flyer: "/flyers/word-prayer.jpg",
    },
  ],
  Thursday: [
    {
      time: "8:00 AM - 10:00 AM",
      title: "Testimony Time",
      host: "Sis. Mary",
      flyer: "/flyers/testimony-time.jpg",
    },
    {
      time: "7:00 PM - 9:00 PM",
      title: "Evening Praise",
      host: "DJ Faith",
      flyer: "/flyers/evening-praise.jpg",
    },
  ],
  Friday: [
    {
      time: "9:00 AM - 11:00 AM",
      title: "The Grace Zone",
      host: "Pastor David",
      flyer: "/flyers/grace-zone.jpg",
    },
    {
      time: "5:00 PM - 7:00 PM",
      title: "Youth Impact",
      host: "Bro. Samuel",
      flyer: "/flyers/youth-impact.jpg",
    },
  ],
  Saturday: [
    {
      time: "10:00 AM - 12:00 PM",
      title: "Gospel Vibes",
      host: "DJ Joy",
      flyer: "/flyers/gospel-vibes.jpg",
    },
    {
      time: "6:00 PM - 8:00 PM",
      title: "Family Talk",
      host: "Mrs. Esther",
      flyer: "/flyers/family-talk.jpg",
    },
  ],
  Sunday: [
    {
      time: "7:00 AM - 9:00 AM",
      title: "Sunday Worship Live",
      host: "Church Studio",
      flyer: "/flyers/sunday-worship.jpg",
    },
    {
      time: "5:00 PM - 7:00 PM",
      title: "Grace Moments",
      host: "Pastor Peter",
      flyer: "/flyers/grace-moments.jpg",
    },
  ],
};

const ProgrammesSection = () => {
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <section className="bg-[#B0040F] py-16 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Weekly Programmes
        </h2>
        <p className="text-white/80 max-w-md mx-auto">
          Tune in to your favorite shows every day of the week!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(programmes).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 font-semibold transition-all ${
              activeDay === day
                ? "bg-[#E63946] text-white"
                : "bg-white/80 hover:bg-white text-gray-800"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Programme list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programmes[activeDay].map((show, index) => (
       <div
  key={index}
  className="relative overflow-hidden shadow-lg hover:scale-105 transition-transform"
  style={{
    backgroundImage: `url(${show.flyer})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "16rem", // adjust height as needed
  }}
>
  {/* Overlay for info */}
  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
    <h3 className="text-white font-bold text-lg">{show.title}</h3>
    <p className="text-white/80 text-sm">Hosted by {show.host}</p>
    <span className="text-white/80 font-semibold mt-2 block">
      {show.time}
    </span>
  </div>
</div>

        ))}
      </div>
    </section>
  );
};

export default ProgrammesSection;
