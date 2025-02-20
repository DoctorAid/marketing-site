import React from 'react';

const Hero = () => {
  return (
    <div className="bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[74px] leading-[76px] font-bold mb-4">
              Your <span className="text-primary">Bridge</span> to<br />
              a Connected<br />
              Healthcare World
            </h1>
            <p className="text-gray-600 text-[16px] mb-8">
              DoctorMed is a user-friendly platform designed for both medical practitioners and their patients. It streamlines all aspects of the patient visit and is well designed platform that allows to manage their practice.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary">
              Get App →
            </button>
            <p className="text-darkblue text-[16px] mb-8 ">
            Need to register as a Doctor?</p>
            <button className="ml-4 bg-white text-primary border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white">
              Join as Doctor
            </button>
          </div>
          <div className="relative">
            <img src="https://placehold.co/600x400?text=Platform+Preview" alt="Platform mockup" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;