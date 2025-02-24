import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
          <div 
            ref={imageRef}
            className="relative h-[400px] overflow-visible will-change-transform"
          >
            <div 
              className={`
                absolute top-0 -bottom-40 right-0 left-0
                transition-transform duration-1000 ease-out
                ${isVisible ? 'translate-y-0' : 'translate-y-[100px]'}
              `}
            >
              <img 
                src="/src/assets/docphone.png" 
                alt="Doctor using mobile app" 
                className={`
                  w-full h-[600px] object-cover object-top
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
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Connect with<br />
              Your Doctor
            </h2>
            <p className="text-blue-100 mb-8">
              Experience seamless communication with your healthcare provider through DoctorAid. Schedule appointments, receive timely reminders, and stay connected with your doctor for better healthcare management.
            </p>
            <button
              onClick={() => navigate('/coming-soon')}
              className="bg-white text-primary px-6 py-3 rounded-md hover:bg-darkblue hover:text-white transition-colors"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
