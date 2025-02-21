import { useState } from "react";
import { FaStethoscope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 font-inter">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-blue-600">
          <FaStethoscope className="mr-2" /> MedCare
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 text-lg">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Doctors</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Desktop Appointment Button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Appointment
        </button>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 md:hidden`}
      >
        {/* Close Button (X) - Now Fully Visible & Functional */}
        <button
          className="absolute top-5 right-5 text-gray-700 text-3xl z-50 focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg text-gray-700">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Doctors</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
          <li>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Appointment
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
