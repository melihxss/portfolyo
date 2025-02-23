import { useState, useEffect } from "react";
import AboutSection from "./AboutMe.jsx";
import "./homepage.css";
import video from "../../videos/video3.mp4";
import Navbar from "../../components/Navbar.jsx";
import Vision from "../../routes/home/Vision.jsx";
import Educations from "../../routes/home/Educations.jsx";
import Contact from "../../routes/home/Contact.jsx";

const HomePage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".fade-in-section").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-10");
        } else {
          el.classList.add("opacity-0", "translate-y-10");
        }
      });
    };

    if (videoLoaded) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoLoaded]);

  return (
    <>
      {!videoLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl">
          Yükleniyor...
        </div>
      )}

      <div className={`relative w-full h-screen overflow-hidden ${!videoLoaded ? "hidden" : ""}`}>
        <video
          className="absolute top-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          onLoadedData={() => setVideoLoaded(true)} 
        >
          <source src={video} type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        <div className="absolute inset-0 bg-black/50"></div>
        <Navbar />
        <div className="absolute top-3/12 flex w-full justify-center">
          <div className="inline-block p-2">
            <ul className="flex flex-col gap-5 text-center text-white font-bold font-sans text-2xl">
              <li>Portfolyo Web Siteme Hoşgeldiniz!</li>
              <li>
                <h1 className="text-4xl font-mono overflow-hidden border-r-4 border-white pr-2 animate-typing whitespace-nowrap">
                  Web Developer...
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {videoLoaded && (
        <>
          <div className="w-full bg-gray-300 h-auto fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
            <AboutSection />
          </div>

          <div className="w-full bg-gray-100 fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
            <Vision />
          </div>

          <div className="w-full bg-gray-100 fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
            <Educations />
          </div>

          <div className="w-full bg-gray-100 fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
            <Contact />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
