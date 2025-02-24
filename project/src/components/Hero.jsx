import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero = ({ onGetAppClick, onJoinDoctorClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const animationRef = useRef(null);
  const circlesRef = useRef([]);
  const scrollTimerRef = useRef(null);

  // Initialize circle properties
  useEffect(() => {
    circlesRef.current = Array(5).fill().map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 100 + Math.random() * 200,
      baseSpeedX: (Math.random() - 1) * 8, // Increased base speed
      baseSpeedY: (Math.random() - 1) * 8, // Increased base speed
      speedX: 0,
      speedY: 0,
      opacity: 0.1 + Math.random() * 0.2
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Set scrolling state to true
      setIsScrolling(true);
      
      // Clear any existing timer
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      
      // Set a timer to detect when scrolling stops
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100); // Short delay to detect when scrolling stops
    };

    const handleResize = () => {
      // Adjust circle positions on window resize
      circlesRef.current = circlesRef.current.map(circle => ({
        ...circle,
        x: Math.min(circle.x, window.innerWidth),
        y: Math.min(circle.y, window.innerHeight)
      }));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Trigger initial animation
    setIsVisible(true);
    
    // Start with not scrolling state
    setIsScrolling(false);

    // Start the animation
    startAnimation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    const animate = () => {
      const canvas = document.getElementById('background-animation');
      if (!canvas) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const ctx = canvas.getContext('2d');
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Update and draw circles
      circlesRef.current.forEach((circle, index) => {
        // Adjust speed based on scrolling state
        const speedMultiplier = isScrolling ? 0.2 : 1.0; // Slower when scrolling, faster when static
        
        // Update circle speeds
        circle.speedX = circle.baseSpeedX * speedMultiplier;
        circle.speedY = circle.baseSpeedY * speedMultiplier;
        
        // Update position
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Bounce off edges
        if (circle.x < -circle.size) circle.x = width + circle.size;
        if (circle.x > width + circle.size) circle.x = -circle.size;
        if (circle.y < -circle.size) circle.y = height + circle.size;
        if (circle.y > height + circle.size) circle.y = -circle.size;

        // Create gradient for the circle
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.size
        );
        gradient.addColorStop(0, `rgba(68, 200, 252, ${circle.opacity})`);
        gradient.addColorStop(0.5, `rgba(68, 200, 252, ${circle.opacity * 1.7})`);
        gradient.addColorStop(1, 'rgba(68, 163, 252, 0)');

        // Draw circle
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="bg-light min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <canvas 
        id="background-animation" 
        className="absolute top-0 left-0 w-full h-full z-0 opacity-80"
      />

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-transform duration-300"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-[74px] leading-tight lg:leading-[76px] font-bold mb-4 mt-24 md:mt-[100px]">
              Your <span className="text-primary">Bridge</span> to<br />
              a Connected<br />
              Healthcare World
            </h1>
            <p className={`text-gray-600 text-base md:text-[16px] mb-6 max-w-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              DoctorAid is a seamless healthcare platform connecting general practitioners and patients. It features an intuitive app for patients and a powerful doctor&apos;s dashboard for efficient patient management, enhancing communication and care.
            </p>
            <div className={`space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={onGetAppClick}
                className="group relative bg-gradient-to-r from-primary to-blue-400 text-white px-3 py-3 rounded-md
                  overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                  flex items-center gap-3"
              >
                <Download className="w-5 h-5 transition-transform duration-500  group-hover:text-primary" />
                <span className="font-medium">Get App</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:-translate-x-[-5px] group-hover:text-black " />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <p className="text-darkblue text-[16px] mb-2 mt-6">
                Staring your own practice?Staring your own practice?
              </p>
              <button 
                onClick={onJoinDoctorClick}
                className="bg-white text-primary border border-primary px-6 py-3 rounded-md hover:bg-darkblue hover:text-white hover:border-darkblue transition-all duration-300 transform hover:scale-105"
              >
                Join as a Doctor
              </button>
            </div>
          </div>

          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{
              transform: `translateY(${scrollY * -0.2}px)`
            }}
          >
            <div className="relative w-[1000px]  pr-40 pt-40 h-[900px]">
              <div className="absolute -inset-4 bg-secondary-100 rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src="/mokck ne.png"
                alt="Platform mockup"
                className="w-full h-auto scale-600 relative z-10 transition-transform duration-300 hover:scale-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;