import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";
import logo from '../assets/gir_logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" text-white px-6 py-4 shadow-md fixed w-full top-0 z-[100]"
    style={
      { background: 'linear-gradient(90deg, #0B0B2A 60%, #1A1A4A 100%)' }
    }
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
              <img src={logo} alt="Grace Impact Radio Logo" className="w-50 h-20 object-cover" /> 
            </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[15px] font-medium">
          <li className="hover:text-[#00FFFF] transition duration-300 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-[#00FFFF] transition duration-300 cursor-pointer">
            <a href="/about">About Us</a>
            </li>
          <li className="hover:text-[#00FFFF] transition duration-300 cursor-pointer">Show Schedule</li>
          <li className="hover:text-[#00FFFF] transition duration-300 cursor-pointer">Blog</li>
          <li className="hover:text-[#00FFFF] transition duration-300 cursor-pointer">Pages</li>
          <li className="hover:text-[#00FFFF] transition duration-300 cursor-pointer">Contact</li>
        </ul>

        {/* Sponsor Button */}
        <button className="hidden md:block bg-[#E30613] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#00e0e0] transition"
        onClick={() => navigate('')}
        >
          Sponsor
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A1A] mt-4 pb-4 px-4 space-y-3 text-center border-t border-gray-700">
           <p className="hover:text-[#00FFFF] transition duration-300 cursor-pointer">
            <a href="/">Home</a>
          </p>
          <p className="hover:text-[#00FFFF] ">
            <a href="/about" className="transition duration-300 cursor-pointer">About Us</a>
            </p>
          <p className="hover:text-[#00FFFF] cursor-pointer">Show Schedule</p>
          <p className="hover:text-[#00FFFF] cursor-pointer">Blog</p>
          <p className="hover:text-[#00FFFF] cursor-pointer">Pages</p>
          <p className="hover:text-[#00FFFF] cursor-pointer">Contact</p>
          <button className="bg-[#00FFFF] text-black px-5 py-2 rounded-md font-semibold w-full hover:bg-[#00e0e0] transition">
            Sponsor
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
