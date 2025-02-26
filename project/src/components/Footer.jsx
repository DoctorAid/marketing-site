import { Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1B4B5A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo and Follow Us Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 
                className="text-2xl font-bold cursor-pointer" 
                onClick={() => scrollToSection('hero')}
              >
                Doctor<span className="font-normal">Aid</span>
              </h2>
              <p className="text-sm text-gray-300">
                Your Bridge to a Connected<br />Healthcare World
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <a
                href="https://www.instagram.com/doctoraid.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-white hover:text-gray-300 transition-colors cursor-pointer"
              >
                <Instagram size={24} className="hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Explore</h3>
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 w-fit"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('practice')} 
                className="text-left text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 w-fit"
              >
                Doctors
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 w-fit"
              >
                Patients
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 w-fit"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 w-fit"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <a 
              href="mailto:doctoraid.official@gmail.com"
              className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200 cursor-pointer w-fit"
            >
              doctoraid.official@gmail.com
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
