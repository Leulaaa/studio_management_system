import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo-removebg-preview.png";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/", { replace: true }); // prevent back navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenuAndNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white py-2 px-4 fixed w-full top-0 z-500 shadow-md z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li>
            <button onClick={() => navigate("/")} className="hover:text-blue-400 transition-colors">
              HOME
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/our-studio")} className="hover:text-blue-400 transition-colors">
              OUR STUDIOS
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/blog")} className="hover:text-blue-400 transition-colors">
              BLOG
            </button>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-1.5 border border-white rounded-full text-sm font-semibold bg-white text-black hover:bg-black hover:text-white"
              >
                LOGIN
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-5 py-1.5 border border-white rounded-full text-sm font-semibold bg-black text-white hover:bg-white hover:text-black"
              >
                SIGN UP
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-5 py-1.5 border border-white rounded-full text-sm font-semibold bg-white text-black hover:bg-black hover:text-white"
              >
                DASHBOARD
              </button>
              <button
                onClick={logoutHandler}
                className="px-5 py-1.5 border border-white rounded-full text-sm font-semibold bg-black text-white hover:bg-red-500"
              >
                LOGOUT
              </button>
            </>
          )}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 bg-black text-white pb-6">
          <button
            onClick={() => closeMenuAndNavigate("/")}
            className="block w-full text-left font-medium hover:text-blue-400"
          >
            HOME
          </button>
          <button
            onClick={() => closeMenuAndNavigate("/our-studio")}
            className="block w-full text-left font-medium hover:text-blue-400"
          >
            OUR STUDIOS
          </button>
          <button
            onClick={() => closeMenuAndNavigate("/blog")}
            className="block w-full text-left font-medium hover:text-blue-400"
          >
            BLOG
          </button>

          <hr className="border-gray-600 my-2" />

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => closeMenuAndNavigate("/login")}
                className="block w-full text-left font-medium hover:text-blue-400"
              >
                LOGIN
              </button>
              <button
                onClick={() => closeMenuAndNavigate("/signup")}
                className="block w-full text-left font-medium hover:text-blue-400"
              >
                SIGN UP
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => closeMenuAndNavigate("/dashboard")}
                className="block w-full text-left font-medium hover:text-blue-400"
              >
                DASHBOARD
              </button>
              <button
                onClick={logoutHandler}
                className="block w-full text-left font-medium hover:text-red-500"
              >
                LOGOUT
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
