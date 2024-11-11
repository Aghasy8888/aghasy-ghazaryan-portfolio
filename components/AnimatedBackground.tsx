import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated dots or particles */}
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-purple-950 animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
