import heroImage from "../assets/doctor_female.jpg"; // Update with actual image path

function Hero() {
  return (
    <section className="relative bg-blue-50 py-20 font-inter">
      <div className="container mx-auto px-10 flex items-center justify-between relative">
        {/* Left Content */}
        <div className="max-w-lg z-10">
          <h2 className="text-6xl font-bold text-gray-800 leading-tight">
            Healthcare <br /> <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Revolutionizing healthcare with smart solutions. Easily find experienced doctors, 
            schedule appointments with ease, and access high-quality medical care anytime, anywhere. 
            Your health, our priority.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition">
            Find Doctors
          </button>
        </div>

        {/* Right Image Bigger and Perfect Rounded */}
        <div className="relative w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Doctor"
            className="w-[550px] h-[550px] object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
