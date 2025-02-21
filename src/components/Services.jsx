import doctorImage from "../assets/doc.png"; // Update with actual image path
import { FaTooth, FaHeartbeat, FaEye, FaPills, FaBone } from "react-icons/fa";

const Services = () => {
  return (
    <section className="py-20 bg-white font-inter">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content - Doctor Image with Labels */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-[280px] md:w-[350px] relative z-10 rounded-xl shadow-lg"
          />

          {/* Service Labels - Adjusted for Responsiveness */}
          <div className="absolute top-8 left-2 md:left-0 bg-white shadow-md px-3 py-1 rounded-full flex items-center space-x-2 text-xs md:text-sm">
            <FaEye className="text-blue-600 text-sm md:text-lg" />
            <span className="text-gray-700 font-medium">Eye Care</span>
          </div>
          <div className="absolute top-32 left-0 md:-left-10 bg-white shadow-md px-3 py-1 rounded-full flex items-center space-x-2 text-xs md:text-sm">
            <FaPills className="text-blue-600 text-sm md:text-lg" />
            <span className="text-gray-700 font-medium">Medicine</span>
          </div>
          <div className="absolute top-28 right-0 md:-right-10 bg-white shadow-md px-3 py-1 rounded-full flex items-center space-x-2 text-xs md:text-sm">
            <FaHeartbeat className="text-blue-600 text-sm md:text-lg" />
            <span className="text-gray-700 font-medium">Cardiology</span>
          </div>
          <div className="absolute bottom-4 left-2 md:left-0 bg-white shadow-md px-3 py-1 rounded-full flex items-center space-x-2 text-xs md:text-sm">
            <FaTooth className="text-blue-600 text-sm md:text-lg" />
            <span className="text-gray-700 font-medium">Dental</span>
          </div>
          <div className="absolute bottom-10 right-2 md:-right-6 bg-white shadow-md px-3 py-1 rounded-full flex items-center space-x-2 text-xs md:text-sm">
            <FaBone className="text-blue-600 text-sm md:text-lg" />
            <span className="text-gray-700 font-medium">Orthopedic</span>
          </div>
        </div>

        {/* Right Content - Service Description */}
        <div className="w-full md:max-w-lg text-center md:text-left">
          <h3 className="text-blue-600 text-lg md:text-xl font-medium uppercase">
            Service
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
            Our Medical Services
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            We provide top-notch medical services with experienced professionals,
            advanced technology, and a patient-centric approach. From dental care to
            cardiology, we ensure quality treatment for your health needs.
          </p>
          <button className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-blue-500 text-white text-base md:text-lg rounded-full hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
