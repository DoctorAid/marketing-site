import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Stethoscope } from "lucide-react";


const Management = () => {
  const navigate = useNavigate();
  const [animationState, setAnimationState] = useState('initial');

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
                className="group relative overflow-hidden w-100 bg-white text-primary border border-primary px-6 py-3 rounded-md hover:scale-105
                 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Stethoscope className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12 z-10" />
                <span className="font-medium relative z-10">Join as a Doctor</span>
                <div className="absolute inset-0 group-hover:text-darkblue  duration-300" />
              </button>
          </div>
          <div className="relative overflow-hidden ">
            {/* Background glow effect */}
            <div className={`absolute inset-0  transition-opacity duration-1000 ease-in-outx
              ${animationState !== 'initial' ? 'opacity-60' : 'opacity-0'}`}
            />
            
            {/* Image container with animation */}
            <div className="relative z-10">
              <img 
                src="/lap.png" 
                alt="Laptop" 
                className={`w-full transition-all duration-700 ease-out
                  ${animationState === 'initial' ? 'opacity-0 translate-y-12 scale-95' : 
                    animationState === 'loading' ? 'opacity-80 translate-y-1 scale-98' : 
                    'opacity-100 translate-y-0 scale-100'}`}
              />
              
              {/* Overlay animation effect */}
              <div className={`absolute inset-0  to-transparent mix-blend-overlay transition-opacity duration-1000
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