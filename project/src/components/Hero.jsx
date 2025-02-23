import React, { useEffect, useState } from "react";

const Hero = ({ onGetAppClick, onJoinDoctorClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Trigger initial animation
    setIsVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-light min-h-screen relative overflow-hidden">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-transform duration-300"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h1 className="text-[74px] leading-[76px] font-bold mb-4 mt-[100px]">
              Your <span className="text-primary">Bridge</span> to<br />
              a Connected<br />
              Healthcare World
            </h1>
            <p className={`text-gray-600 text-[16px] mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              DoctorAid is a seamless healthcare platform connecting general practitioners and patients. It features an intuitive app for patients and a powerful doctor&apos;s dashboard for efficient patient management, enhancing communication and care.
            </p>
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={onGetAppClick}
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-darkblue transition-colors"
              >
                Get App →
              </button>
              <p className="text-darkblue text-[16px] mb-3 mt-6">
                Need to register as a Doctor?
              </p>
              <button 
                onClick={onJoinDoctorClick}
                className="bg-white text-primary border border-primary px-6 py-3 rounded-md hover:bg-darkblue hover:text-white hover:border-darkblue transition-colors"
              >
                Join as a Doctor
              </button>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{
              transform: `translateY(${scrollY * -0.2}px)`
            }}
          >
            <img
              src="/src/assets/mokck ne.png"
              alt="Platform mockup"
              className="w-full h-150 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;