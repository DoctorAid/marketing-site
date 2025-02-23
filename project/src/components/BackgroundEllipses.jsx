import React, { useState, useEffect } from 'react';

const Circle = ({ size, initialX, initialY }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  
  useEffect(() => {
    const moveCircle = () => {
      const maxX = window.innerWidth - size;
      const maxY = window.innerHeight - size;
      
      setPosition({
        x: Math.random() * maxX,
        y: Math.random() * maxY
      });
    };
    
    const interval = setInterval(moveCircle, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [size]);
  
  return (
    <div style={{
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      left: `${position.x}px`,
      top: `${position.y}px`,
      background: '#C9E4F3',
      filter: 'blur(100px)',
      transition: 'all 5s ease-in-out'
    }} />
  );
};

const BackgroundCircles = () => {
  const circles = [
    { size: 470, x: 614, y: 504 },    // Large circle
    { size: 400, x: 100, y: 100 },    // Medium circle
    { size: 300, x: 200, y: 300 },    // Medium circle
    { size: 250, x: 500, y: 400 },    // Small circle
    { size: 200, x: 800, y: 600 },    // Smaller circle
  ];

  return (
    <div style={{ 
      position: 'absolute', // changed from 'fixed' to 'absolute'
      inset: 0, 
      overflow: 'hidden'
    }}>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          size={circle.size}
          initialX={circle.x}
          initialY={circle.y}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles;
