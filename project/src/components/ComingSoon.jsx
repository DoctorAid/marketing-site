import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const animationRef = useRef(null);
  const circlesRef = useRef([]);
  const scrollTimerRef = useRef(null);

  // Initialize circles
  useEffect(() => {
    const initializeCircles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      circlesRef.current = Array(5).fill().map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.min(width, height) * (0.05 + Math.random() * 0.15), // Smaller on mobile
        baseSpeedX: (Math.random() - 0.5) * 2, // Reduced speed
        baseSpeedY: (Math.random() - 0.5) * 2, // Reduced speed
        speedX: 0,
        speedY: 0,
        opacity: 0.1 + Math.random() * 0.15
      }));
    };

    initializeCircles();
    window.addEventListener('resize', initializeCircles);
    return () => window.removeEventListener('resize', initializeCircles);
  }, []);

  // Handle scroll events
  const handleScroll = useCallback(() => {
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

  // Canvas animation
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

        // Edge handling
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
    <div className="relative overflow-hidden bg-light min-h-screen w-full">
      {/* Canvas background animation */}
      <canvas 
        id="background-animation" 
        className="fixed top-0 left-0 w-full h-full z-0 opacity-70"
      />
      
      {/* Content */}
      <div className={`min-h-screen flex items-center justify-center relative z-10 transition-all duration-1000 ease-out px-4 sm:px-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5296B8] mb-4">Hang on Tight!</h1>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">We are working hard to bring you something amazing.</p>
          
          {/* Updated button to match "Get App" style */}
          <button 
            onClick={() => navigate('/')}
            className="group relative bg-gradient-to-r from-primary to-blue-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg
              overflow-hidden transition-all duration-300 hover:shadow-lg
              flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:-translate-x-1 z-10" />
            <span className="font-medium z-10">Back to Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;