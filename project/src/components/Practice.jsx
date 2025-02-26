import React, { useEffect, useRef, useState } from 'react';
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

  // Added state for image visibility
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure smoother animation
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Increased threshold for better timing
        rootMargin: '100px' // Increased margin to start animation earlier
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
          <div 
            ref={imageRef}
            className="relative hidden lg:block h-[700px] will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/50 to-transparent rounded-[40px] blur-3xl" />
            <div 
              className={`
                absolute top-0 bottom-0 right-0 left-0 z-9
                transition-transform duration-1000 ease-out
                ${isVisible ? 'translate-y-0' : 'translate-y-[100px]'}
              `}
            >
              <img 
                src="/young-doctor-getting-ready-work.png"
                alt="Doctor using digital tools" 
                className={`
                  relative w-full h-full object-cover object-center
                  transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  will-change-transform  z-60
                  ${isVisible ? 
                    'transform scale-100 opacity-100 translate-y-0' : 
                    'transform scale-110 opacity-0 translate-y-8'
                  }
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;