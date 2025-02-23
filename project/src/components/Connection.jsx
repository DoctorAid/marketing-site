import React from 'react';
import { useNavigate } from 'react-router-dom';

const Connection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Connect with<br />
              Your Doctor
            </h2>
            <p className="text-blue-100 mb-8">
              Experience seamless communication with your healthcare provider through DoctorAid. Schedule appointments, receive timely reminders, and stay connected with your doctor for better healthcare management.
            </p>
            <button
              onClick={() => navigate('/coming-soon')}
              className="bg-white text-primary px-6 py-3 rounded-md hover:bg-blue-50"
            >
              Download Now
            </button>
          </div>
          <div className="relative">
            <img src="/src/assets/docphone.png" alt="Doctor using mobile app" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;