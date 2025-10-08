import React from "react";
import aboutImg from "../assets/banner_bg.jpg"; // replace with your actual image path

const AboutSection = () => {
  return (
    <section className="text-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center">
      {/* Image */}
      <div
        className="flex-1 w-full md:w-1/2 h-64 sm:h-80 md:h-[360px] flex justify-center"
        data-aos="fade-right"
      >
        <img
          src={aboutImg}
          alt="Grace Impact Radio studio"
          className="shadow-lg w-full h-full object-cover "
        />
      </div>

      {/* Text Content */}
      <div
        className="flex-1 w-full md:w-1/2 p-6 sm:p-10 bg-[#B0040F]  flex flex-col justify-center"
        data-aos="fade-left"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          About Grace Impact Radio
        </h2>
        <p className="text-white leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
          Grace Impact Radio is a 24/7 online gospel radio station dedicated to
          spreading the message of grace through sound teaching, inspiring music,
          and uplifting entertainment. We are committed to reaching souls across
          the world with quality Word and music that impacts lives for Christ.
        </p>
      <div>
          <a
          href="/about"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E30613] to-[#000] hover:from-[#b82633] hover:to-[#1a0000] px-6 py-3 text-white font-medium transition rounded-md"
        >
          Learn More
        </a>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
