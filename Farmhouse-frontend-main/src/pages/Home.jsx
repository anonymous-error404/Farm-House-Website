import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer'

// ✅ Assets
import home1 from "../assets/home1.jfif";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import Gallery3 from "../assets/gallery3.jpeg";
import Gallery4 from "../assets/gallery4.jpeg";
import Gallery2 from "../assets/gallery2.jpeg";
import bgVideo from "../assets/bgvideo.mp4"; // ✅ Correct import

// ✅ Components
import FarmInfoSection from "../components/InfoSection";
import AboutPromoSection from "../components/AboutSection";

export default function Home() {
  return (
    <>
      {/* ✅ Hero Section with Video + Carousel */}
      <section className="relative h-screen w-full"> 
        <video
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 h-full w-full bg-black/50 z-10" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center px-4 max-w-xl w-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            interval={3000}
            transitionTime={1000}
            showArrows={false}
            showIndicators
            swipeable
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Reconnect with Nature</h1>
              <p className="text-lg">Enjoy peaceful mornings at Nirmal Farm</p>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Swim, Play, Relax</h1>
              <p className="text-lg">Private pool, green lawns, and family fun</p>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Farm-to-Table Freshness</h1>
              <p className="text-lg">Taste organic food straight from our farm</p>
            </div>
          </Carousel>
        </div>
      </section>

{/* Booking Form OVERLAPPING the carousel bottom */}
{/* <section className="relative bg-amber-50 pb-16">
  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-30 w-[95%] max-w-6xl">
    <div className="bg-white shadow-xl rounded-xl p-6 md:p-8">
      <form className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-end">
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Check In</label>
          <input type="date" className="p-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Check Out</label>
          <input type="date" className="p-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Adults</label>
          <select className="p-2 border rounded">
            <option>1</option><option>2</option><option>3</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Children</label>
          <select className="p-2 border rounded">
            <option>0</option><option>1</option><option>2</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Rooms</label>
          <select className="p-2 border rounded">
            <option>1</option><option>2</option><option>3</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-amber-600 text-white font-semibold px-6 py-2 rounded hover:bg-amber-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  </div>
</section> */}



      {/* Welcome Section */}
  <section className="day-section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
        {/* Left Image Section */}
         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{delay:0.3, duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true}}
          >
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            <img
              src={Gallery4}
              alt="Main Room"
              className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Smaller Overlapping Image */}
          <img
            src={Gallery2}
            alt="Farm room"
            className="absolute bottom-[-30px] right-[-20px] h-70 rounded-xl shadow-xl border-4 border-white object-cover"
          />
        </div>
        </motion.div>

        {/* Right Text Section */}
        <div >
        <motion.div
            initial={{opacity: 0, x: 20 }}
            transition={{ delay: 0.5,duration: 1, ease: "easeOut"}}
            whileInView={{ opacity: 1,x:0 }}
            viewport={{ once: true }}
         >
        <h2 className="hero-title">
        Welcome to <span className="hero-title-accent">Nirmal Farm</span>
         </h2>
        
          <p className="hero-description m-4">
            Nestled amidst lush greenery and open skies, Nirmal Farm is your escape into nature's peace and simplicity. Located away from the hustle of city life, our farm offers the perfect setting for family outings, weekend getaways, and soulful relaxation.
          </p>
          
              <NavLink to="/about">
                <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white">
                  know more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </NavLink>
            </motion.div>
        </div>
      </div>
    </section>

      {/* A Day at Nirmal Farm */}
<section className="day-section">
  <div className="day-section-container ">
    <motion.h2
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="day-section-title"
    >
      A Day At <span className="day-section-title-accent">Nirmal Farm</span>
    </motion.h2>

    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {[home1, home2, home3].map((image, index) => {
        const titles = [
          "Relax Under Nature's Canopy",
          "Fun by the Pool",
          "Play, Laugh, Repeat",
        ];
        const descriptions = [
          "Enjoy peaceful moments beneath the trees, with cozy seating perfect for tea, chats, or just soaking in the fresh air.",
          "Lounge by the water, soak up the sun, and let your worries float away at our serene farm pool.",
          "From family fun to friendly matches, our indoor games area is perfect for all age groups to enjoy quality time.",
        ];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.8 }}
            className="bg-white shadow-md rounded-xl overflow-hidden text-center"
          >
            <div className="overflow-hidden">
              <img
                src={image}
                alt={titles[index]}
                className="h-70 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-2">{titles[index]}</h2>
              <p className="text-green-600 text-sm">{descriptions[index]}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


      {/* Dining Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-amber-50">
        <div className="max-w-[90rem] w-full grid grid-cols-1 lg:grid-cols-2 rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative h-64 md:h-80 lg:h-auto overflow-hidden">
            <img src={Gallery3} alt="Dining Area" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-white">
            <div className="max-w-lg w-full flex flex-col gap-8">
              <div className="text-sm font-medium text-orange-500 uppercase tracking-widest">OUR MENU</div>
              <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">Dining & Drinks</h2>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed">
                At Nirmal Farm, every meal is an experience rooted in authenticity and love. We serve home-style, locally-inspired dishes that blend traditional flavors with farm-fresh ingredients — straight from our garden to your plate.
              </p>
              <NavLink to="/menu">
                <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white">
                  know more
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <AboutPromoSection />
      <FarmInfoSection />
      <Footer />
    </>
  );
}

