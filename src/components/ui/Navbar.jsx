import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null); 

  return (
    <nav className="bg-black text-white py-2 px-4"> 
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mr-6"> 
          <img src={Logo} alt="Logo" className="h-12 w-auto" /> 
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold"> 
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors">
              OUR STUDIOS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors">
              BLOG
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors">
              CATEGORIES
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* LOGIN Button */}
          <button
            onMouseEnter={() => setHoveredButton('login')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-5 py-1.5 border border-white rounded-full text-sm font-semibold transition-all duration-300 ${
              hoveredButton === 'login'
                ? 'bg-white text-black'
                : hoveredButton === 'signup'
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            LOGIN
          </button>

          {/* SIGN UP Button */}
          <button
            onMouseEnter={() => setHoveredButton('signup')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-5 py-1.5 border border-white rounded-full text-sm font-semibold transition-all duration-300 ${
              hoveredButton === 'signup' ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
