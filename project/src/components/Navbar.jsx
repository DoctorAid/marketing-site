import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-[#5296B8] font-bold text-xl"
          >
            DoctorAid
          </button>
          
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-600 hover:text-[#5296B8]"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('practice')}
              className="text-gray-600 hover:text-[#5296B8]"
            >
              Doctors
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-[#5296B8]"
            >
              Patients
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-[#5296B8]"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="text-gray-600 hover:text-[#5296B8]"
            >
              Get App
            </button>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="bg-[#5296B8] text-white px-4 py-2 rounded-md hover:bg-[#407a94]"
            >
              Join as Doctor
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
