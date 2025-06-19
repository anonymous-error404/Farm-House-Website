import { motion } from "framer-motion"; 
import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-responsive-carousel";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jfif";
import bg from "../assets/bg.jpg";
import home1 from "../assets/home1.jfif";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

import FarmInfoSection from "../components/InfoSection";
import AboutPromoSection from "../components/AboutSection";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background hero */}
        <img
          src={bg}
          alt="Background"
          className="hero-background"
        />

        {/* Overlay */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-container"
          >
            <h1 className="hero-title">
              Welcome to <span className="hero-title-accent">Nirmal Farm</span>
            </h1>

            <TypeAnimation
              sequence={[
                "Reconnect with nature 🍃",
                1500,
                "Relax in green serenity 🌳",
                1500,
                "Swim, play, and feast 🌅",
                1500,
              ]}
              wrapper="p"
              className="hero-typewriter"
              repeat={Infinity}
            />

            <p className="hero-description">
              A peaceful 4-acre private retreat in Badlapur with a bungalow, pool, and greenery.
            </p>

            <div className="hero-buttons">
              <NavLink to="/bookings" >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn-primary"
              >
                Book Now
              </motion.button>
              </NavLink>
              <NavLink to="/gallery" >
              <button className="btn-secondary">
                Explore More
              </button>
              </NavLink>
            </div>
          </motion.div>

          {/* Right - hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hero-carousel-container"
          >
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={2000}
            transitionTime={1000}
            emulateTouch
            swipeable
            stopOnHover
            showIndicators={true}
            showArrows={true}
            dynamicHeight={false}
            animationHandler="fade"
            className="hero-carousel"
          >
            <div>
              <img src={hero1} alt="Slide 1" className="hero-carousel-image" />
            </div>
            <div>
              <img src={hero2} alt="Slide 2" className="hero-carousel-image" />
            </div>
            <div>
              <img src={hero3} alt="Slide 3" className="hero-carousel-image" />
            </div>
          </Carousel>
          </motion.div>
        </div>

        {/* SVG Divider */}
        <svg className="svg-divider" viewBox="0 0 1440 320">
            <path fill="#f0fdf4" d="M0,192L80,186.7C160,181,320,171,480,176C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />     
        </svg>

        {/* Gradient divider to smooth transition */}
        <div className="gradient-divider"></div>
      </section>

      {/* A Day at Nirmal Farm - Scroll Section */}
      <section className="day-section">
        <div className="day-section-container">
         
            <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="day-section-title"
            >
            A Day at <span className="day-section-title-accent">Nirmal Farm</span> 🌿
            </motion.h2>

          <div className="day-cards-grid">
            {/* 1st Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="day-card"
            >
              <img src={home1} alt="Arrival" className="day-card-image" />
              <h3 className="day-card-title">Relax Under Nature's Canopy</h3>
              <p className="day-card-description">Enjoy peaceful moments beneath the trees, with cozy seating perfect for tea, chats, or just soaking in the fresh air.</p>
            </motion.div>

            {/* 2nd Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="day-card"
            >
              <img src={home2} alt="Swimming" className="day-card-image" />
              <h3 className="day-card-title">Fun by the Pool</h3>
              <p className="day-card-description">Lounge by the water, soak up the sun, and let your worries float away at our serene farm pool.</p>
            </motion.div>

            {/* 3rd Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="day-card"
            >
              <img src={home3} alt="Lunch" className="day-card-image" />
              <h3 className="day-card-title">Play, Laugh, Repeat</h3>
              <p className="day-card-description">From family fun to friendly matches, our indoor games area is perfect for all age groups to enjoy quality time.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <AboutPromoSection />
      <FarmInfoSection />
        
    </>
  );
}
// }




