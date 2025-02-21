import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import Services from "./components/Services";
import Specialities from "./components/Specialities";
import Appointment from "./components/Appointment";
import OurDoctors from "./components/Doctors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <InfoSection />
      <Services />
      <Specialities />
      <Appointment />
      <OurDoctors />
      <Footer /> 
    </div>
  );
}

export default App;
