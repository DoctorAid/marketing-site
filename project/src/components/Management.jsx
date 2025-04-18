import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { Stethoscope } from "lucide-react";

const Management = () => {
  const navigate = useNavigate();
  const [animationState, setAnimationState] = useState('initial');
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  // Original timing-based animation
  useEffect(() => {
    // First set to loading after a brief delay
    const loadingTimer = setTimeout(() => {
      setAnimationState('loading');
    }, 100);
    
    // Then set to complete after animation duration
    const completeTimer = setTimeout(() => {
      setAnimationState('complete');
    }, 1200);
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  // New IntersectionObserver animation from Connection component
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
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Manage Your<br />
              Practice with Ease
            </h2>
            <p className="text-blue-100 mb-8">
              DoctorAid helps GPs focus on their patients by providing a smart, efficient way to manage appointments, send reminders, and practice admin in one place.
            </p>
            <button 
                onClick={() => navigate('/early-access')}
                className="group relative overflow-hidden w-100 bg-white text-primary border border-primary px-6 py-3 rounded-md hover:scale-105
                 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <Stethoscope className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12 z-10" />
                <span className="font-medium relative z-10">Join as a Doctor</span>
                <div className="absolute inset-0 group-hover:text-darkblue  duration-300" />
              </button>
          </div>
          
          {/* Image container with combined animations */}
          <div 
            ref={imageRef} 
            className="relative overflow-hidden h-64 sm:h-96 md:h-auto will-change-transform"
          >
            {/* Background glow effect */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${animationState !== 'initial' ? 'opacity-60' : 'opacity-0'}`}
            />
            
            {/* Image container with animation - combining both transition styles */}
            <div className={`
              relative z-10
              transition-transform duration-1000 ease-out
              ${isVisible ? 'translate-y-0' : 'translate-y-[100px]'}
            `}>
              <img 
                src="/lap.png" 
                alt="Laptop" 
                className={`
                  w-full 
                  transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  will-change-transform
                  ${isVisible ? 
                    'transform scale-100 opacity-100 translate-y-0' : 
                    'transform scale-110 opacity-0 translate-y-8'
                  }
                  ${animationState === 'initial' ? 'opacity-0' : 
                    animationState === 'loading' ? 'opacity-80' : 
                    'opacity-100'}
                `}
              />
              
              {/* Overlay animation effect */}
              <div className={`absolute inset-0 to-transparent mix-blend-overlay transition-opacity duration-1000
                ${animationState === 'complete' ? 'opacity-30' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;