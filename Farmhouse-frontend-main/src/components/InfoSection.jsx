import { motion } from "framer-motion";
import { MdAccessTime, MdRestaurantMenu, MdPhone } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

export default function FarmInfoSection() {
  return (
    <section className="farm-info-section">
      <div className="farm-info-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-accent mb-10 " 
        >
          Plan Your Visit
        </motion.h2>
      </div>

      <div className="farm-info-grid">
        {/* Check-in & Check-out */}
        <motion.div
          className="farm-info-card farm-info-card-green"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{delay:0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="farm-info-card-header">
            <MdAccessTime className="farm-info-icon" /> Check-in & Check-out
          </div>
          <p className="farm-info-card-content">
            <strong>Check-in:</strong> 5.00 PM<br />
            <strong>Check-out:</strong> 3.00 PM
          </p>
          <p className="farm-info-note farm-info-note-red">*Changes as per availability</p>
        </motion.div>

        {/* Rates */}
        <motion.div
          className="farm-info-card farm-info-card-yellow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="farm-info-card-header">
            <FaRupeeSign className="farm-info-icon" /> Rates
          </div>
          <ul className="farm-info-card-content">
            <li><strong>Weekend:</strong> ₹2000 / per person</li>
            <li><strong>Weekday:</strong> ₹1800 / per person</li>
            <li><strong>Child (5–10 yrs):</strong> ₹1000</li>
          </ul>
          <p className="farm-info-note farm-info-note-pink">*Only one group at a time</p>
        </motion.div>

        {/* What's Included */}
        <motion.div
          className="farm-info-card farm-info-card-green-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <div className="farm-info-card-header">
            <MdRestaurantMenu className="farm-info-icon" /> What's Included
          </div>
          <ul className="farm-info-card-list">
            <li>Morning Tea</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Evening Tea</li>
            <li>Dinner</li>
          </ul>
          <p className="farm-info-note farm-info-note-yellow">*Starters charged separately</p>
        </motion.div>

        {/* Booking Info */}
        <motion.div
          className="farm-info-card farm-info-card-yellow-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div className="farm-info-card-header">
            <MdPhone className="farm-info-icon" /> Booking Info
          </div>
          <p className="farm-info-card-content">
            Minimum 10 adults required<br />
            Bungalow capacity: 20–25 adults<br /><br />
            <strong>Contact:</strong> <br />
            <a href="tel:9870204394">+91 9870204394</a><br />
            <a href="tel:9870204424">+91 9870204424</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
