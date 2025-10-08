import React from "react"; 
import heroImg from "../assets/banner_bg.jpg"; 
import statsImg from "../assets/banner_bg.jpg"; 
import NewsletterSection from "../sections/Newsletter";
import Footer from "../components/Footer";

const AboutPage = () => { 
    const stats = [
    { number: "24K+", label: "Listeners" },
    { number: "50+", label: "Radio Jockeys" },
    { number: "30+", label: "Shows" },
    { number: "20+", label: "Awards" },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen"> 
      {/* Main Content */}
      <main className="mt-[4em] bg-white">
        {/* Page Title */}
        <section className="text-center px-6 pt-20 flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl font-bold text-[#B0040F] mb-4">About Grace Impact Radio</h1>
          <p className="text-[#000] max-w-6xl mx-auto text-2xl">
            Grace Impact Radio is a 24/7 online gospel station committed to spreading life-changing words, music, and entertainment. Our mission is to inspire, uplift, and unite listeners through quality Christian content while maintaining excellence and integrity.
          </p>
        </section>

        {/* Vision & Mission Sections */}
        <article className="py-10 bg-[#B0040F] px-10 space-y-8">
          {/* Vision */}
          <section className="flex flex-col lg:flex-row items-stretch justify-center">
            <div className="lg:w-1/2 w-full">
              <img src={heroImg} alt="Vision" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 w-full bg-black text-white p-6 lg:p-10 flex flex-col justify-center text-center">
              <h2 className="text-3xl font-bold mb-6">Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Transforming lives and cultures through the power of positive media, 24/7.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="flex flex-col lg:flex-row-reverse items-stretch justify-center">
            <div className="lg:w-1/2 w-full">
              <img src={heroImg} alt="Mission" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 w-full bg-black text-white p-8 lg:p-10 flex flex-col justify-center text-center">
              <h2 className="text-3xl font-bold mb-6">Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To broadcast life-changing words, music, and entertainment that inspire, uplift, and unite, while maintaining a platform of excellence and integrity.
              </p>
            </div>
          </section>

          {/* Additional Info */}
          <section className="flex flex-col lg:flex-row items-stretch justify-center">
            <div className="lg:w-1/2 w-full">
              <img src={heroImg} alt="Studio" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 w-full bg-black text-white p-8 lg:p-10 flex flex-col justify-center text-center">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Grace Impact Radio is committed to reaching souls worldwide through the power of media. We combine inspiring music, teachings, and uplifting programs to transform lives for Christ.
              </p>
            </div>
          </section>
        </article>
      </main> 
 
 
    <section className=" text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Stats */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center py-6 bg-[#000]">
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <img
            src={statsImg}
            alt="Grace Impact Radio Stats"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>


<NewsletterSection />
<Footer />
    </div>
  );
};

export default AboutPage;
