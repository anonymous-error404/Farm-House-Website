import React from 'react'
import HeroSection from '../components/HeroSection'
import Location from '../components/Location'
import WhyStayWithUs from '../components/WhyStayWithUs'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <HeroSection />
      
      {/* Main Content - With Side Margins */}
      <div className="text-center text-primary-dark px-4">
          <h1 className="text-5xl font-bold mt-15 mb-8">Welcome to Nirmal Farms</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary">
            We built this farmhouse as an escape from the city — and now we're opening it to others looking for peace, greenery, and comfort.
          </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Why Stay With Us - First Section */}
        <div className="py-20">
          <WhyStayWithUs />
        </div>

        {/* Location - Second Section */}
        <div className="py-0 bg-cream">
          <Location />
        </div>

        {/* Testimonials - Third Section */}
        <div className="py-20">
          <Testimonials />
        </div>
      </div>

      {/* Call to Action - Full Width */}
      <CallToAction />
    </div>
  )
}

export default About
