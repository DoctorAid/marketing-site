import React, { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight, Stethoscope } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Hero = ({ onGetAppClick, onJoinDoctorClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const animationRef = useRef(null);
  const circlesRef = useRef([]);
  const scrollTimerRef = useRef(null);
  const navigate = useNavigate();

  // Optimized circle initialization
  useEffect(() => {
    const initializeCircles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      circlesRef.current = Array(5).fill().map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.min(width, height) * (0.1 + Math.random() * 0.2), // Responsive sizes
        baseSpeedX: (Math.random() - 0.5) * 4,
        baseSpeedY: (Math.random() - 0.5) * 4,
        speedX: 0,
        speedY: 0,
        opacity: 0.1 + Math.random() * 0.15
      }));
    };

    initializeCircles();
    window.addEventListener('resize', initializeCircles);
    return () => window.removeEventListener('resize', initializeCircles);
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
    setIsScrolling(true);
    
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }
    
    scrollTimerRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    const animate = () => {
      const canvas = document.getElementById('background-animation');
      if (!canvas) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circlesRef.current.forEach(circle => {
        const speedMultiplier = isScrolling ? 0.15 : 0.8;
        
        circle.speedX = circle.baseSpeedX * speedMultiplier;
        circle.speedY = circle.baseSpeedY * speedMultiplier;
        
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Improved edge handling
        if (circle.x < -circle.size) circle.x = canvas.width + circle.size;
        if (circle.x > canvas.width + circle.size) circle.x = -circle.size;
        if (circle.y < -circle.size) circle.y = canvas.height + circle.size;
        if (circle.y > canvas.height + circle.size) circle.y = -circle.size;

        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.size
        );
        
        gradient.addColorStop(0, `rgba(68, 200, 252, ${circle.opacity})`);
        gradient.addColorStop(0.6, `rgba(68, 200, 252, ${circle.opacity * 2})`);
        gradient.addColorStop(1, 'rgba(68, 163, 252, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isScrolling]);

  return (
    <div className="relative overflow-hidden bg-light min-h-[100vh] w-full">
      <canvas 
        id="background-animation" 
        className="fixed top-0 left-0 w-full h-full z-0 opacity-70"
      />

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative z-10"
        style={{
          transform: `translateY(${Math.min(scrollY * 0.1, 100)}px)`
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[74px] leading-tight font-bold mb-6 mt-16 md:mt-0">
              Your <span className="text-primary">Bridge</span> to<br />
              a Connected<br />
              Healthcare World
            </h1>
            
            <p className={`text-gray-600 text-sm sm:text-base lg:text-lg mb-8 max-w-lg transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              DoctorAid is a seamless healthcare platform connecting general practitioners and patients. It features an intuitive app for patients and a powerful doctor's dashboard for efficient patient management, enhancing communication and care.
            </p>

            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button 
                onClick={() => navigate('/coming-soon')}
                className="group relative bg-gradient-to-r from-primary to-blue-400 text-white px-6 py-3 rounded-lg
                  overflow-hidden transition-all duration-300 hover:shadow-lg
                  flex items-center gap-3 w-full sm:w-auto"
              >
                <span className="font-medium z-10">Get App</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="space-y-3">
                <p className="text-darkblue text-sm sm:text-base">
                  Starting your own practice?
                </p>
                <button 
                  onClick={() => navigate('/early-access')}
                  className="group relative overflow-hidden w-full sm:w-auto bg-white text-primary border border-primary px-6 py-3 rounded-lg
                    hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md"
                >
                  <Stethoscope className="w-4 h-4 transition-transform duration-500 group-hover:rotate-12 z-10" />
                  <span className="font-medium relative z-10">Join as a Doctor</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 mt-8 lg:mt-0 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              transform: `translateY(${Math.min(scrollY * -0.15, 50)}px)`
            }}
          >
            <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
              <div className="absolute -inset-4  animate-pulse" />
              <img
                src="/mokck ne.png"
                alt="Platform mockup"
                className="w-full h-auto relative z-10 transition-transform duration-300 hover:scale-120"
                style={{
                  maxWidth: '150%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;