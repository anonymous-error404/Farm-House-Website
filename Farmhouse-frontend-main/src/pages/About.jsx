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
      
  
      <div className="max-w-7xl mx-auto">
        {/* Why Stay With Us - First Section */}
        <div className="py-4">
          <WhyStayWithUs />
        </div>

        {/* Location - Second Section */}
        <div className="py-0 bg-[#fffbea]">
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


