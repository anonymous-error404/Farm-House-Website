import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="w-full py-16 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary-dark">Ready to escape the city and unwind in nature?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/book"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Book Your Stay
          </Link>
          <Link
            to="/gallery"
            className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary-light hover:text-secondary transition-colors"
          >
            See Our Farm Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 