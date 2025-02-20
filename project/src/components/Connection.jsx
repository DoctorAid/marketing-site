import React from 'react';

const Connection = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Bringing Patients &<br />
              Doctors Together
            </h2>
            <p className="text-blue-100 mb-8">
              Whether you're a patient booking appointments or a doctor managing your schedule, everything you need is just a tap away.
            </p>
            <button className="bg-white text-primary px-6 py-3 rounded-md hover:bg-blue-50">
              Download Now →
            </button>
          </div>
          <div className="relative">
            <img src="https://placehold.co/300x600?text=Mobile+App" alt="Mobile app" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;