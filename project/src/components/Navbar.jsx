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
              src="/src/assets/Asset 3.svg" 
              alt="Logo" 
              className="h-5 w-auto"
            />
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
              className="text-[#1B4B5A] hover:text-primary transition-colors text-base font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#1B4B5A] hover:text-primary transition-colors text-base font-medium"
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
              onClick={() => navigate('/coming-soon')}
              className="bg-primary text-white px-4 py-1.5 rounded hover:bg-darkblue transition-colors font-semibold"
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