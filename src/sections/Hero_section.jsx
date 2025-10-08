import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import hero_banner from '../assets/banner_bg.jpg';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="relative h-[100vh] flex flex-col md:flex-row pb-12 items-center justify-between lg:pt-[7em] px-4 md:px-20 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #0B0B2A 40%, #1A1A4A 100%)",
        backgroundImage: `url(${hero_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Right Side: Now Playing */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-auto z-[999] mb-8 md:mb-0">
        {/* DJ Image Placeholder */}
        {/* <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80"
          alt="Grace Impact Radio DJ"
          className="rounded-2xl shadow-2xl w-[90%] md:w-[80%]"
        /> */}

        {/* Now Playing Box */}
        <div className="absolute bottom-0  md:-bottom-6 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 bg-[#0B0B2A] w-[90%] md:w-[80%] rounded-xl py-2 px-5 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300 border border-[#E30613]/70 shadow-md space-y-2 sm:space-y-0 sm:space-x-4 z-10"
       
        >
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">Now Playing</p>
            <p className="text-[#00FFFF] truncate">"Power in the Word – Rev O"</p>
          </div>
          <button
            onClick={togglePlay}
            className="bg-[#E30613] text-white rounded-full p-3 hover:bg-[#00e0e0] transition"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>

      {/* Left Side: Text Content */}
      <div className="z-10 w-full md:w-1/2 space-y-5 mt-12 md:mt-0 text-center md:text-right">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFFF] tracking-tight leading-tight">
          LISTEN <br /> GRACE IMPACT <span className="text-[#E30613]">RADIO</span> 
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-white/80">
          GRACE IMPACT RADIO is a 24/7 online radio station.
        </p>

        {/* Listen Button */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 bg-gradient-to-r from-[#E30613] to-[#000] text-white font-semibold px-6 py-3 hover:from-[#00e0e0] hover:to-[#0077cc] transition-all duration-300 shadow-lg"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            {isPlaying ? "Pause Live" : "Listen Live"}
          </button>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src="https://listen.mixlr.com/00c2c9f25787682c27d286c2ad66c7ff"
        />
      </div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-[#0B0B2A]/80 opacity-70"></div>
    </section>
  );
};

export default Hero;
