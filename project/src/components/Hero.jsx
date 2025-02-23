import React from 'react';
import BackgroundEllipses from './BackgroundEllipses';
const Hero = () => {
  return (
    <div className="bg-light h-screen relative">
      <BackgroundEllipses />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[74px] leading-[76px] font-bold mb-4 mt-[100px]">
              Your <span className="text-primary">Bridge</span> to<br />
              a Connected<br />
              Healthcare World
            </h1>
            <p className="text-gray-600 text-[16px] mb-8">
              DoctorAid is a seamless healthcare platform connecting general practitioners and patients. It features an intuitive app for patients and a powerful doctor’s dashboard for efficient patient management, enhancing communication and care.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary">
              Get App →
            </button>
            <p className="text-darkblue text-[16px] mb-3 mt-">
              Need to register as a Doctor?
            </p>
            <button className="ml-4 bg-white text-primary border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white">
              Join as Doctor
            </button>
          </div>
          <div className="relative">
            {/*
            <img
              src="https://placehold.co/600x400?text=Platform+Preview"
              alt="Platform mockup"
              className="w-full rounded-lg shadow-xl"
            />
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;