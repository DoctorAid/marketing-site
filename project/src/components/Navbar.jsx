import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowRight, Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onGetAppClick, onJoinDoctorClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { name: 'Home', section: 'hero' },
    { name: 'Doctors', section: 'practice' },
    { name: 'Patients', section: 'features' },
    { name: 'About Us', section: 'about' },
    { name: 'Contact', section: 'contact' }
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled ? 
          'mt-4 mx-4 lg:mx-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg' : 
          'bg-[#D4E5F5]'
        }
      `}
    >
      <div className="  px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center transform hover:scale-110 transition-transform duration-200"
          >
            <img 
              src="/Asset 3.svg" 
              alt="Logo" 
              className="h-5 w-auto"
            />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="text-[#1B4B5A] transition-colors duration-200 text-base font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-400 hover:after:w-full after:transition-all after:duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-blue-400 hover:text-transparent hover:bg-clip-text"
              >
                {item.name}
              </button>
            ))}
            
            <button 
              onClick={() => navigate('/early-access')}
              className="group relative overflow-hidden bg-white text-primary border border-primary px-5 py-2 rounded-md hover:bg-darkblue hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Stethoscope className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12 hover:text-white z-10" />
              <span className="font-medium relative z-10">Join as a Doctor</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => navigate('/coming-soon')}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-400 text-white px-5 py-2 rounded-md hover:bg-white hover:text-primary hover:border hover:border-primary transition-all duration-300 flex items-center gap-2"
            >
              <span className="font-medium relative z-10">Get App</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1B4B5A] hover:bg-primary/10 transition-colors duration-200 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X size={24} className="transition-transform duration-300 ease-in-out" />
            ) : (
              <Menu size={24} className="transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            lg:hidden
            transition-all duration-300 ease-in-out
            ${isMenuOpen 
              ? 'max-h-screen opacity-100 border-t border-gray-200 mt-2' 
              : 'max-h-0 opacity-0 border-t-0'
            }
            overflow-hidden
          `}
        >
          <div className="py-3 space-y-1">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-4 py-3 text-[#1B4B5A] hover:bg-gradient-to-r hover:from-primary hover:to-blue-400 hover:text-transparent hover:bg-clip-text transition-all duration-200 text-base font-semibold rounded-md"
              >
                {item.name}
              </button>
            ))}
            
            <div className="px-4 py-4 space-y-3 mt-2">
              <button 
                onClick={() => {
                  navigate('/early-access');
                  setIsMenuOpen(false);
                }}
                className="group relative overflow-hidden w-full bg-white text-primary border border-primary px-5 py-2.5 rounded-md
                  hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Stethoscope className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" />
                <span className="font-medium relative z-10">Join as a Doctor</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                onClick={() => {
                  navigate('/coming-soon');
                  setIsMenuOpen(false);
                }}
                className="group relative bg-white text-primary border border-primary px-3 py-3 rounded-md
                  overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-400 hover:text-white
                  flex items-center gap-3"
              >
                <Download className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                <span className="font-medium">Get App</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;