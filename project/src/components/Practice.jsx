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
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-between">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center text-primary">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <h3 className="text-darkblue text-lg sm:text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
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
    <div className="relative py-16 sm:py-20 bg-gradient-to-br from-secondary-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-darkblue leading-tight">
              Your Practice,<br />
              Your Way!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 100}
                  {...feature}
                />
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/50 to-transparent rounded-[40px] blur-3xl" />
            <img 
              src="/young-doctor-getting-ready-work.png"
              alt="Doctor using digital tools" 
              className="relative w-full h-[700px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;