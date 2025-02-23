import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Calendar, FileText, UserCircle } from 'lucide-react';

const Practice = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-12">
              Your Practice,<br />
              Your Way!
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Comprehensive Dashboard Card */}
              <div className="bg-white rounded-[29px] p-6 shadow-md hover:shadow-lg transition-shadow h-[246px] flex flex-col items-center">
                <div className="w-[76px] h-[76px] mb-4 flex items-center justify-center text-primary">
                  <LayoutDashboard size={48} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Comprehensive Dashboard</h3>
                <p className="text-center text-base">Track and manage your patients in one place</p>
              </div>

              {/* Flexible Scheduling Card */}
              <div className="bg-white rounded-[29px] p-6 shadow-md hover:shadow-lg transition-shadow h-[246px] flex flex-col items-center">
                <div className="w-[76px] h-[76px] mb-4 flex items-center justify-center text-primary">
                  <Calendar size={48} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Flexible Scheduling</h3>
                <p className="text-center text-base">Customize appointments based on your availability</p>
              </div>

              {/* Digital Prescriptions Card */}
              <div className="bg-white rounded-[29px] p-6 shadow-md hover:shadow-lg transition-shadow h-[246px] flex flex-col items-center">
                <div className="w-[76px] h-[76px] mb-4 flex items-center justify-center text-primary">
                  <FileText size={48} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Digital Prescriptions</h3>
                <p className="text-center text-base">Provide e-prescriptions with ease</p>
              </div>

              {/* Professional Profile Card */}
              <div className="bg-white rounded-[29px] p-6 shadow-md hover:shadow-lg transition-shadow h-[246px] flex flex-col items-center">
                <div className="w-[76px] h-[76px] mb-4 flex items-center justify-center text-primary">
                  <UserCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Professional Profile</h3>
                <p className="text-center text-base">Reach out to new patients</p>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => navigate('/coming-soon')}
                className="text-primary hover:text-darkblue transition-colors font-semibold"
              >
                Download Now
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/src/assets/young-doctor-getting-ready-work.png" 
              alt="Doctor" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;