import { FaRegCalendarCheck } from "react-icons/fa";
import doctorIllustration from "../assets/hand.png";

const Specialities = () => {
  return (
    <section className="bg-blue-50 py-16 font-inter">
      <div className="container mx-auto px-10 text-center">
        {/* Section Title */}
        <h3 className="text-blue-500 text-sm font-medium uppercase tracking-wide">Features</h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">Our Speciality</h2>

        {/* Speciality Card */}
        <div className="mt-12 flex items-center justify-center">
          <div className="bg-blue-500 text-white px-12 py-8 rounded-2xl flex items-center shadow-lg w-[750px] relative">
            {/* Icon & Text */}
            <div className="flex flex-col items-start space-y-3 w-2/3">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full text-blue-500 text-2xl flex items-center justify-center">
                  <FaRegCalendarCheck />
                </div>
                <h3 className="text-xl font-semibold">Online Appointment</h3>
              </div>
              <p className="text-sm text-blue-100 text-justify leading-relaxed">
                <b className="text-white-300"> Seamless Online Consultations - Book Your Appointment Anytime, Anywhere. </b>
              </p>
              {/* Left-Aligned Button */}
              <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-100 transition text-sm self-start">
                Learn More
              </button>
            </div>
            {/* Illustration - Positioned Well */}
            <img
              src={doctorIllustration}
              alt="Doctor Stethoscope"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
