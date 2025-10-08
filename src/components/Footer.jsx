import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* About */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Grace Impact Radio</h2>
          <p className="text-white/80">
            Broadcasting gospel programmes 24/7 to inspire, uplift, and bring people closer to Christ.
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col md:items-start">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-white/80">
            <li><a href="/" className="hover:text-[#E63946]">Home</a></li>
            <li><a href="/about" className="hover:text-[#E63946]">About</a></li>
            <li><a href="/programmes" className="hover:text-[#E63946]">Programmes</a></li>
            <li><a href="/contact" className="hover:text-[#E63946]">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-white/80">Email: info@graceimpactradio.com</p>
          <p className="text-white/80">Phone: +234 800 000 0000</p>
          <p className="text-white/80">Address: 123 Gospel Street, Lagos, Nigeria</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} Grace Impact Radio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
