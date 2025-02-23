import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserSearch, Calendar, ClipboardList, History } from 'lucide-react';

const FeatureCard = () => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <FaSearch className="text-primary text-xl algin-center" />
    </div>
    <h3 className="text-lg font-semibold mb-2">Find a Doctor</h3>
    <p className="text-gray-600 text-sm">Search for trusted GPs near you</p>
  </div>
);

const Features = () => {
  const navigate = useNavigate();

  return (
    
    <div className="py-20">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Effortless Healthcare at<br />Your Fingertips
        </h2>
      </div>
      <div className="flex flex-cols-1 justify-center md:grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="flex flex-col max-w-7xl items-center justify-center">
          <div className="w-[221px] h-[246px] relative">
            <div className="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
            <div className="w-[76px] h-[76px] left-[73px] top-[41px] absolute flex items-center justify-center">
              <UserSearch size={48} className="text-[#5296B8]" />
            </div>
            <div className="w-[180px] h-[45px] left-[20px] top-[136px] absolute text-center text-black text-xl font-bold font-['Raleway']">Find a Doctor</div>
            <div className="w-[140px] h-[45px] left-[41px] top-[174px] absolute text-center text-black text-base font-normal font-['Raleway']">Search for trusted GPs near you</div>
          </div>
        </div>
        <div className="flex flex-col max-w-7xl items-center justify-center">
          <div className="w-[221px] h-[246px] relative">
            <div className="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
            <div className="w-[76px] h-[76px] left-[73px] top-[41px] absolute flex items-center justify-center">
              <Calendar size={48} className="text-[#5296B8]" />
            </div>
            <div className="w-[200px] h-[45px] left-[10px] top-[126px] absolute text-center text-black text-lg font-bold font-['Raleway'] leading-tight">Appointment<br />Booking</div>
            <div className="w-[160px] h-[45px] left-[31px] top-[180px] absolute text-center text-black text-base font-normal font-['Raleway']">Manage your appointments easily</div>
          </div>
        </div>
        <div className="flex flex-col max-w-7xl items-center justify-center">
          <div className="w-[221px] h-[246px] relative">
            <div className="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
            <div className="w-[76px] h-[76px] left-[73px] top-[41px] absolute flex items-center justify-center">
              <ClipboardList size={48} className="text-[#5296B8]" />
            </div>
            <div className="w-[200px] h-[45px] left-[10px] top-[120px] absolute text-center text-black text-xl font-bold font-['Raleway']">Record Keeping</div>
            <div className="w-[140px] h-[45px] left-[41px] top-[160px] absolute text-center text-black text-base font-normal font-['Raleway']">Keep your medical records organized and secure</div>
          </div>
        </div>
        <div className="flex flex-col max-w-7xl items-center justify-center">
          <div className="w-[221px] h-[246px] relative">
            <div className="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
            <div className="w-[76px] h-[76px] left-[73px] top-[41px] absolute flex items-center justify-center">
              <History size={48} className="text-[#5296B8]" />
            </div>
            <div className="w-[180px] h-[45px] left-[20px] top-[136px] absolute text-center text-black text-xl font-bold font-['Raleway']">User History</div>
            <div className="w-[140px] h-[45px] left-[41px] top-[174px] absolute text-center text-black text-base font-normal font-['Raleway']">Track your medical history and visits</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="/src/assets/child-cheerful-laughing-parent.png" alt="Happy family" className="mb-[-4.85%] w-[50%] h-auto" />
      </div>
    </div>
  );
};

export default Features;