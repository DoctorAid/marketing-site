import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300 ease-in-out
      ${isScrolled ? 
        'mt-4 mx-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg' : 
        'bg-[#D4E5F5]'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <button 
  onClick={() => scrollToSection('hero')}
  className="flex items-center transform hover:scale-110 transition-transform duration-200"
>
  <img 
    src="/src/assets/Asset 3.svg" 
    alt="Logo" 
    className="h-5 w-auto"  // Adjust height as needed
  />
</button>
          
          <div className="flex items-center space-x-6">
            {[
              { name: 'Home', section: 'hero' },
              { name: 'Doctors', section: 'practice' },
              { name: 'Patients', section: 'features' },
              { name: 'About Us', section: 'about' },
              { name: 'Contacts', section: 'contact' }
            ].map((item) => (
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
              onClick={() => navigate('/coming-soon')}
              className="border border-primary text-primary px-4 py-1.5 rounded-md hover:bg-primary hover:text-white transition-all duration-200 font-semibold transform hover:scale-105"
            >
              Join as a Doctor
            </button>
            
            <button 
              onClick={() => navigate('/coming-soon')}
              className="bg-primary text-white px-4 py-1.5 rounded-md hover:bg-darkblue transition-all duration-200 font-semibold transform hover:scale-105 hover:shadow-md"
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