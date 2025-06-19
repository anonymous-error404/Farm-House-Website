// import { motion } from "framer-motion";
// import { MdAccessTime, MdAttachMoney, MdRestaurantMenu, MdPhone } from "react-icons/md";

// export default function FarmInfoSection() {
//   const cardStyle =
//     "bg-white rounded-xl shadow-lg p-6 flex flex-col items-start space-y-3 border-t-4";

//   return (
//     <section className="bg-[#fffbea] px-6 py-10">
//       <div className="max-w-7xl mx-auto text-center mb-12 ">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-green-900" 
//         >
//           Plan Your Visit
//         </motion.h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         {/* Check-in & Check-out */}
//         <motion.div
//           className={`${cardStyle} border-green-600`}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex items-center text-green-700 text-2xl">
//             <MdAccessTime className="mr-2" /> Check-in & Check-out
//           </div>
//           <p className="text-green-800">
//             <strong>Check-in:</strong> 5.00 PM<br />
//             <strong>Check-out:</strong> 3.00 PM
//           </p>
//           <p className="text-sm text-red-500 italic">*Changes as per availability</p>
//         </motion.div>

//         {/* Rates */}
//         <motion.div
//           className={`${cardStyle} border-yellow-600`}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex items-center text-yellow-700 text-2xl">
//             <MdAttachMoney className="mr-2" /> Rates
//           </div>
//           <ul className="text-green-800">
//             <li><strong>Weekend:</strong> ₹2000 / per person</li>
//             <li><strong>Weekday:</strong> ₹1800 / per person</li>
//             <li><strong>Child (5–10 yrs):</strong> ₹1000</li>
//           </ul>
//           <p className="text-sm text-pink-600 italic">*Only one group at a time</p>
//         </motion.div>

//         {/* What's Included */}
//         <motion.div
//           className={`${cardStyle} border-green-700`}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex items-center text-green-800 text-2xl">
//             <MdRestaurantMenu className="mr-2" /> What's Included
//           </div>
//           <ul className="list-disc list-inside text-green-800 gap-1">
//             <li>Morning Tea</li>
//             <li>Breakfast</li>
//             <li>Lunch</li>
//             <li>Evening Tea</li>
//             <li>Dinner</li>
//           </ul>
//           <p className="text-sm text-yellow-600 italic">*Starters charged separately</p>
//         </motion.div>

//         {/* Booking Info */}
//         <motion.div
//           className={`${cardStyle} border-yellow-700`}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex items-center text-yellow-800 text-2xl">
//             <MdPhone className="mr-2" /> Booking Info
//           </div>
//           <p className="text-green-800">
//             Minimum 10 adults required<br />
//             Bungalow capacity: 20–25 adults<br /><br />
//             <strong>Contact:</strong> <br />
//             +91 9870204394<br />
//             +91 9870204424
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { MdAccessTime, MdAttachMoney, MdRestaurantMenu, MdPhone } from "react-icons/md";

export default function FarmInfoSection() {
  return (
    <section className="farm-info-section">
      <div className="farm-info-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="farm-info-title" 
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
          transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="farm-info-card-header">
            <MdAttachMoney className="farm-info-icon" /> Rates
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
          transition={{ duration: 0.5, delay: 0.2 }}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="farm-info-card-header">
            <MdPhone className="farm-info-icon" /> Booking Info
          </div>
          <p className="farm-info-card-content">
            Minimum 10 adults required<br />
            Bungalow capacity: 20–25 adults<br /><br />
            <strong>Contact:</strong> <br />
            <p><a href="tel:9870204394">+91 9870204394</a></p>
          <p><a href="tel:9870204424">+91 9870204424</a></p>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
