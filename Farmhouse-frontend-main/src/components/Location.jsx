import React from 'react';

const Location = () => {
  return (
    <div className="w-full py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-accent mb-20">Our Location</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120526.63484268678!2d73.08593883906244!3d19.26246796610933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be78d0013bb815b%3A0x511225329843361b!2sNirmal%20Farm!5e0!3m2!1sen!2sin!4v1749839275532!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="eager"
              // referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Description Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="text-3xl text-primary font-semibold mb-2">Convenient Location: A Tranquil </h3>
              <p className=" text-3xl text-primary font-semibold mb-8">Escape Near Mumbai</p>
              <p className="text-gray-700 text-primary-light leading-relaxed">
              Nirmal Farm is located in Vasind, approximately 55 km (34 miles) northeast of Mumbai in a straight line, and about 63–69 km by road via the Mumbai–Nashik Highway—a scenic 1‑hour to 1‑hour 10‑minute drive . It’s easily accessible from Mumbai, Thane, and Kalyan, making it the ideal weekend retreat—close enough, yet feels a world away.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Location; 