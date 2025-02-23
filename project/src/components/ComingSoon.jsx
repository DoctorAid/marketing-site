import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#5296B8] mb-4">Coming Soon!</h1>
        <p className="text-gray-600 mb-8">We are working hard to bring you something amazing.</p>
        <button 
          onClick={() => navigate('/')}
          className="text-primary hover:text-darkblue transition-colors"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon; 