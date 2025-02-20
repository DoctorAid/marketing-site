import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Practice = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Your Practice,<br />
              Your Way!
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <FaSearch className="text-primary text-xl mb-2" />
                  <h3 className="font-semibold">Find a Doctor</h3>
                  <p className="text-sm text-gray-600">Search for trusted GPs near you</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://placehold.co/500x600?text=Doctor" alt="Doctor" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;