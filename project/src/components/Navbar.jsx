import React, { useState, useEffect } from 'react';

const Navbar = ({ onGetAppClick, onJoinDoctorClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'Contacts', section: 'contact' }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300 ease-in-out
      ${isScrolled ? 
        'mt-4 mx-4 lg:mx-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg' : 
        'bg-[#D4E5F5]'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-primary hover:bg-primary/10 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="relative text-[#1B4B5A] hover:text-primary transition-colors text-base font-semibold group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </button>
            ))}
            
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
              onClick={() => navigate('/coming-soon')}
              className="border border-primary text-primary px-4 py-1.5 rounded hover:bg-primary hover:text-white transition-colors font-semibold"
            >
              Join as a Doctor
            </button>
            
            <button 
              onClick={onGetAppClick}
              className="bg-primary text-white px-4 py-1.5 rounded-md hover:bg-darkblue transition-all duration-200 font-semibold transform hover:scale-105 hover:shadow-md"
            >
              Get App
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
        `}>
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-4 py-2 text-[#1B4B5A] hover:bg-primary/10 hover:text-primary transition-colors text-base font-semibold"
              >
                {item.name}
              </button>
            ))}
            
            <div className="px-4 py-3 space-y-2">
              <button 
                onClick={() => {
                  onJoinDoctorClick();
                  setIsMenuOpen(false);
                }}
                className="w-full border border-primary text-primary px-4 py-1.5 rounded-md hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
              >
                Join as a Doctor
              </button>
              
              <button 
                onClick={() => {
                  onGetAppClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-primary text-white px-4 py-1.5 rounded-md hover:bg-darkblue transition-all duration-200 font-semibold hover:shadow-md"
              >
                Get App
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;