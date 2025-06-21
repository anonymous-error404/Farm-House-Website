import React from 'react';

// const HeroSection = () => {
//   return (
//     <div 
//       className="relative w-full h-[80vh]" 
//       style={{ 
//         backgroundImage: "url('/road.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       <div className="absolute inset-0 flex items-center justify-center">
//       </div>
//     </div>
//   );
// };

// export default HeroSection; 

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative hero-section min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/road.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with blur and tint */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          className="hero-title text-4xl md:text-6xl text-white mt-16"
        >
          Embrace the Journey
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white max-w-2xl text-lg md:text-xl opacity-90 "
        >
         We built this farmhouse as an escape from the city — and now we're opening it to others looking for peace, greenery, and comfort.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
