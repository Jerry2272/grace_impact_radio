import React, { useState } from "react";
import newsletterBg from "../assets/banner_bg.jpg"; // Replace with your image

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    alert(`Subscribed successfully with ${email}`);
    setEmail("");
  };

  return (
    <section
      className="relative text-white py-20 px-6 md:px-20 flex flex-col items-center text-center   overflow-hidden"
      style={{
        background: `url(${newsletterBg}) center/cover no-repeat`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white/80 mb-8">
          Stay updated with our latest programmes, events, and inspirational content delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="w-full flex flex-col sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#E63946] hover:bg-[#ff1a2a]   font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
