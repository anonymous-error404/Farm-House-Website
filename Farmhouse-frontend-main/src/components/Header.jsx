
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "hover:text-green-600";
  const activeClass = "text-green-700 font-bold";

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" >
        <div className="text-2xl font-bold text-green-700">
          Nirmal Farm
        </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>About</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? activeClass : linkClass}>Gallery</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? activeClass : linkClass}>Menu</NavLink>
          <NavLink to="/blogs" className={({ isActive }) => isActive ? activeClass : linkClass}>Blogs</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <NavLink to="/bookings">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
              Book Now
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-3 font-medium text-gray-700">
            <NavLink to="/" end onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? activeClass : linkClass}>About</NavLink>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? activeClass : linkClass}>Gallery</NavLink>
            <NavLink to="/menu" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? activeClass : linkClass}>Menu</NavLink>
            <NavLink to="/blogs" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? activeClass : linkClass}>Blogs</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
            <NavLink to="/bookings" onClick={() => setIsOpen(false)}>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
                Book Now
              </button>
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}