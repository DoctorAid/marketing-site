import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Management = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '100px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

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
              className="bg-white text-primary px-6 py-3 rounded-md hover:bg-darkblue hover:text-white transition-colors"
            >
              Get App
            </button>
          </div>
          <div className="relative" ref={imageRef}>
            <img 
              src="/src/assets/lap.png" 
              alt="Laptop" 
              className={`w-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                ${isVisible ? 'transform scale-100 opacity-100 translate-y-0' : 'transform scale-110 opacity-0 translate-y-8'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;