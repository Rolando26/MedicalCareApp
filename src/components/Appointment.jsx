// import { FaCalendarAlt } from "react-icons/fa";
import scheduleIllustration from "../assets/calendar.png";

const Appointment = () => {
  return (
    <section className="bg-white py-16 font-inter flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between max-w-5xl">
        
        {/* Left Content - Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h3 className="text-blue-500 text-sm font-medium uppercase tracking-wide mb-1">
            Time Table
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Appointment Schedules
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            Stay on top of your health with our seamless appointment scheduling.
            Plan your visits efficiently with real-time availability updates and
            hassle-free bookings.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-base md:text-lg rounded-full hover:bg-blue-600 transition">
            Schedules
          </button>
        </div>

        {/* Right Content - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={scheduleIllustration}
            alt="Appointment Schedule"
            className="w-64 md:w-80 drop-shadow-lg rounded-[80px] md:rounded-[60px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Appointment;
