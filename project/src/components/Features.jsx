import React from 'react';
import { FaSearch } from 'react-icons/fa';

const FeatureCard = () => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <FaSearch className="text-primary text-xl algin-center" />
    </div>
    <h3 className="text-lg font-semibold mb-2">Find a Doctor</h3>
    <p className="text-gray-600 text-sm">Search for trusted GPs near you</p>
  </div>
);

const Features = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Effortless Healthcare at<br />Your Fingertips
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default Features;