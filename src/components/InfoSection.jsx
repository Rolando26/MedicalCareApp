import { FaClock, FaUserMd, FaMapMarkerAlt, FaCalendarCheck } from "react-icons/fa";

const InfoSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 font-inter">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Opening Hours */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaClock className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Opening Hours</h3>
            <p className="text-gray-600 mt-2">Mon - Fri: 8:00am - 10:00pm</p>
          </div>

          {/* Appointment */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaCalendarCheck className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Appointment</h3>
            <p className="text-gray-600 mt-2">Request an appointment easily.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              Request
            </button>
          </div>

          {/* Find Doctors */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaUserMd className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Find Doctors</h3>
            <p className="text-gray-600 mt-2">Search for experienced doctors.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              Doctors
            </button>
          </div>

          {/* Find Locations */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaMapMarkerAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Find Locations</h3>
            <p className="text-gray-600 mt-2">Locate nearby medical centers.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              Locations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
