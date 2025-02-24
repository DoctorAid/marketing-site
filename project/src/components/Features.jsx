import React, { useEffect, useRef } from 'react';
import { UserSearch, Calendar, ClipboardList, History } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="w-[221px] h-[246px] relative bg-light rounded-[29px] shadow-md hover:shadow-lg transition-all duration-300">
    <div className="absolute top-[41px] left-1/2 -translate-x-1/2">
      <div className="w-[76px] h-[76px] flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="absolute top-[136px] left-1/2 -translate-x-1/2 w-[180px] text-center">
      <h3 className="text-xl font-bold text-darkblue font-['Raleway']">{title}</h3>
      <p className="mt-2 text-base text-darkblue/80 font-['Raleway']">{description}</p>
    </div>
  </div>
);

const AnimatedCard = ({ delay = 0, ...props }) => {
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
      <FeatureCard {...props} />
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <UserSearch size={48} className="text-primary" />,
      title: "Find a Doctor",
      description: "Search for trusted GPs near you"
    },
    {
      icon: <Calendar size={48} className="text-primary" />,
      title: "Appointment Booking",
      description: "Manage your appointments easily"
    },
    {
      icon: <ClipboardList size={48} className="text-primary" />,
      title: "Record Keeping",
      description: "Keep your medical records organized and secure"
    },
    {
      icon: <History size={48} className="text-primary" />,
      title: "User History",
      description: "Track your medical history and visits"
    }
  ];

  return (
    <div className="py-20 bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-darkblue">
          Effortless Healthcare at<br />Your Fingertips
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {features.map((feature, index) => (
          <AnimatedCard
            key={index}
            delay={index * 100}
            {...feature}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <img 
          src="/public/child-cheerful-laughing-parent.png" 
          alt="Happy family" 
          className="mb-[-4.85%] w-[50%] h-auto" 
        />
      </div>
    </div>
  );
};

export default Features;

const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);