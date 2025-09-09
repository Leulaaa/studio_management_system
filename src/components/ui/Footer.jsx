import React from 'react';
import AppleImg from '../../assets/Apple.png';
import GoogleImg from '../../assets/Play.png';
import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Left Section - Logo and Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img src={Logo} alt="Logo" className="w-16 h-auto" />
          <p className="max-w-xs text-sm">
            Stay connected with the latest insights, tips, and updates from the world of studio management. From lighting and equipment to workflow optimization and creative inspiration, we share everything you need to run a successful studio.
          </p>
        </div>
          <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/our-studio" className="hover:text-white">Our Studios</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">📍 Addis Ababa, Ethiopia</p>
          <p className="text-sm">📞 +251 900 123 456</p>
          <p className="text-sm">✉️ info@studiomanagement.com</p>
        </div>
        {/* Right Section - App Downloads */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <h4 className="text-sm font-semibold text-white">DOWNLOAD OUR APP</h4>
          <div className="flex flex-col space-y-2">
            {/* Apple App */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <img src={AppleImg} alt="Apple Store" className="w-6 h-6" />
              <span className="text-xs">
                Download now <br />App Store
              </span>
            </button>

            {/* Google Play */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <img src={GoogleImg} alt="Google Play Store" className="w-6 h-6" />
              <span className="text-xs">
                Download now <br />Play Store
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
        <p>© Copyright 2025 | Studio Management System</p>
      </div>
    </footer>
  );
};

export default Footer;
