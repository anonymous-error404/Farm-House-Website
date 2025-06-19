import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="relative w-full h-[80vh]" 
      style={{ 
        backgroundImage: "url('/road.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
      </div>
    </div>
  );
};

export default HeroSection; 