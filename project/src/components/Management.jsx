import { useNavigate } from 'react-router-dom';

const Management = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Manage Your<br />
              Practice with Ease
            </h2>
            <p className="text-blue-100 mb-8">
              DoctorAid helps GPs focus on their patients by providing a smart, efficient way to manage appointments, send reminders, and practice admin in one place.
            </p>
            <button
              onClick={() => navigate('/coming-soon')}
              className="bg-white text-primary px-6 py-3 rounded-md hover:bg-blue-50"
            >
              Get App
            </button>
          </div>
          <div className="relative">
            <img src="/src/assets/lap.png" alt="Laptop" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;