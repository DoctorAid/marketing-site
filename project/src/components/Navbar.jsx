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
    <nav className="bg-[#D4E5F5] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
          >
            <span className="text-[#1B4B5A] text-3xl font-bold">D</span>
          </button>
          
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[#1B4B5A] hover:text-primary transition-colors text-base font-semibold"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('practice')}
              className="text-[#1B4B5A] hover:text-primary transition-colors text-base font-semibold"
            >
              Doctors
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-[#1B4B5A] hover:text-primary transition-colors text-base font-semibold"
            >
              Patients
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#1B4B5A] hover:text-primary transition-colors text-base font-semibold"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#1B4B5A] hover:text-primary transition-colors text-base font-semibold"
            >
              Contacts
            </button>
            <button 
              onClick={() => navigate('/early-access')}
              className="border border-primary text-primary px-4 py-1.5 rounded hover:bg-primary hover:text-white transition-colors font-semibold"
            >
              Join as a Doctor
            </button>
            <button 
              onClick={() => navigate('/coming-soon')}
              className="bg-primary text-white px-4 py-1.5 rounded hover:bg-darkblue transition-colors font-semibold"
            >
              Get App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
