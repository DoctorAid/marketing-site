import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";


const Connection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure smoother animation
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Increased threshold for better timing
        rootMargin: '100px' // Increased margin to start animation earlier
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          
          {/* Image container - restored original styling for large screens */}
          <div 
            ref={imageRef}
            className="relative h-64 sm:h-96 md:h-[500px] overflow-hidden will-change-transform mt-6 md:mt-0"
          >
            <div 
              className={`
                absolute top-0 -bottom-40 right-0 left-0 z-9
                transition-transform duration-1000 ease-out
                ${isVisible ? 'translate-y-0' : 'translate-y-[100px]'}
              `}
            >
              <img 
                src="/docphone.png" 
                alt="Doctor using mobile app" 
                className={`
                  w-full h-auto
                  transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  will-change-transform 
                  ${isVisible ? 
                    'transform scale-100 opacity-100 translate-y-0' : 
                    'transform scale-110 opacity-0 translate-y-8'
                  }
                `}
              />
            </div>
          </div>
          
          {/* Text content - responsive text sizes and spacing */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Connect with<br />
              Your Doctor
            </h2>
            <p className="text-blue-100 mb-6 md:mb-8 text-sm sm:text-base">
              Experience seamless communication with your healthcare provider through DoctorAid. Schedule appointments, receive timely reminders, and stay connected with your doctor for better healthcare management.
            </p>
            <button 
                className="group relative bg-gradient-to-r from-primary to-blue-400 text-white px-6 py-3 rounded-lg
                  overflow-hidden transition-all duration-300 hover:shadow-lg
                  flex items-center gap-3 w-full sm:w-auto"
              >
                <span className="font-medium z-10">Get App</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;