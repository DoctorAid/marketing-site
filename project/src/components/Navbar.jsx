import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-secondary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-1">
            <span className="text-2xl font-bold text-primary">DoctorAid</span>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary">Doctors</a>
              <a href="#" className="text-gray-600 hover:text-primary">Patients</a>
              <a href="#" className="text-gray-600 hover:text-primary">About Us</a>
              <a href="#" className="text-gray-600 hover:text-primary">Contacts</a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex-1 flex justify-end">
            <button className="bg-white text-primary border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white mr-2">
              Join as Doctor
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-primary">
              Get App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
