import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        

        <Link to="/" className="text-2xl font-bold">
          🎬 Studio Management
        </Link>

     
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/our-studios" className="hover:text-gray-300">Our Studios</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/our-studios" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Our Studios</Link>
          <Link to="/about" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Auth Buttons (Mobile) */}
          <Link
            to="/login"
            className="block text-center border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block text-center bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
