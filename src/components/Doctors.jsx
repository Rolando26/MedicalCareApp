import doctor1 from "../assets/doctor.jpg";
import doctor2 from "../assets/doctor.jpg";
import doctor3 from "../assets/doctor.jpg";

const OurDoctors = () => {
  return (
    <section className="bg-blue-50 py-16 font-inter text-center">
      <div className="container mx-auto px-10 max-w-5xl">
        {/* Section Title */}
        <h3 className="text-blue-500 text-sm font-medium uppercase tracking-wide mb-1">
          Team
        </h3>
        <h2 className="text-4xl font-bold text-gray-800">Our Doctors</h2>

        {/* Doctors Grid */}
        <div className="mt-12 flex justify-center gap-10">
          <div className="bg-linear-to-t from-sky-500 to-indigo-500 p-6 rounded-2xl shadow-lg text-center w-60 text-sky-50">
            <img src={doctor1} alt="Doctor 1" className="w-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-semibold">Mamman Bo</h3>
            <p className="text-sm text-sky-50">Cardiology</p>
          </div>
          <div className="bg-linear-to-t from-sky-500 to-indigo-500 p-6 rounded-2xl shadow-lg text-center w-60 text-sky-50">
            <img src={doctor2} alt="Doctor 2" className="w-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-semibold">Reda Siana</h3>
            <p className="text-sm text-sky-50">Cardiology</p>
          </div>
          <div className="bg-linear-to-t from-sky-500 to-indigo-500 p-6 rounded-2xl shadow-lg text-center w-60 text-sky-50">
            <img src={doctor3} alt="Doctor 3" className="w-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-semibold">Yaroslav Hawa</h3>
            <p className="text-sm text-sky-50">Cardiology</p>
          </div>
        </div>

        {/* See All Button */}
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition">
          See All
        </button>
      </div>
    </section>
  );
};

export default OurDoctors;
