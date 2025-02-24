import React, { useEffect, useRef } from 'react';
import { LayoutDashboard, Calendar, FileText, UserCircle } from 'lucide-react';

const AnimatedCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-4 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-[29px] p-6 shadow-md hover:shadow-lg transition-shadow h-[246px] flex flex-col items-center">
        <div className="w-[76px] h-[76px] mb-4 flex items-center justify-center text-primary">
          <Icon size={48} />
        </div>
        <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
        <p className="text-center text-base">{description}</p>
      </div>
    </div>
  );
};

const Practice = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Comprehensive Dashboard",
      description: "Track and manage your patients in one place"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Customize appointments based on your availability"
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Provide e-prescriptions with ease"
    },
    {
      icon: UserCircle,
      title: "Professional Profile",
      description: "Reach out to new patients"
    }
  ];

  return (
    <div className="py-20 bg-secondary z-999">
      <div className="container mx-auto px-12  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-12 text-darkblue">
              Your Practice,<br />
              Your Way!
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 100}
                  {...feature}
                />
              ))}
            </div>
          </div>
          <div className="relative h-full overflow-hidden p-0">
            <img 
              src="/young-doctor-getting-ready-work.png" 
              alt="Doctor" 
              className="w-[800px] h-[500px] mt-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;

// Add this CSS to your global styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);