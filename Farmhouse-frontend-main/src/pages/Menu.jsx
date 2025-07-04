// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {menuData} from "../API/GetApi";

// // ✅ Image imports with unique names
// import vegImage from "../assets/menu1.avif";
// import vegThaliImage from "../assets/veg thali.avif";
// import nonVegImage from "../assets/non-Veg.jpg"; // Non-Veg Thali
// import nonVegAltImage from "../assets/menu2.jpg"; // Non-Veg Starters
// import beverageImage from "../assets/menu3.jpg";
// import nonVegBeverageImage from "../assets/omlete.jpeg"; // Non-Veg Snacks & Beverage

// // ✅ Animation variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

// // ✅ Category-based image matching
// const getImageForCategory = (key) => {
//   if (key === "Veg - Starters") return vegImage;
//   if (key === "Veg - Main Course") return vegThaliImage;
//   if (key === "Non-Veg - Starters") return nonVegAltImage;
//   if (key === "Non-Veg - Main Course") return nonVegImage;
//   if (key === "Veg - Snacks&Beverages") return beverageImage;
//   if (key === "Non-Veg - Snacks&Beverages") return nonVegBeverageImage;

//   return "https://via.placeholder.com/400x300?text=No+Image";
// };

// const FoodMenu = () => {
//   const [groupedMenu, setGroupedMenu] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const dishes = await menuData(); // Flat array from Django API
//         const grouped = {};

//         dishes.forEach((dish) => {
//           const type = dish.dishSource?.toLowerCase() === "veg" ? "Veg" : "Non-Veg";
//           const category = dish.dishCategory || "Others";
//           const key = `${type} - ${category}`;

//           if (!grouped[key]) grouped[key] = [];
//           grouped[key].push(dish);
//         });

//         setGroupedMenu(grouped);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch menu:", error);
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, []);

//   return (
//     <div className="bg-[#fffbea] min-h-screen py-10 px-4 md:px-12 text-gray-800 font-sans mt-15">
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//         className="text-4xl text-center font-bold text-accent mb-12"
//       >
//         Food Menu
//       </motion.h1>

//       {loading ? (
//         <p className="text-center text-lg">Loading menu...</p>
//       ) : (
//         <div className="space-y-16">
//           {Object.entries(groupedMenu).map(([key, items], index) => (
//             <motion.div
//               key={key}
//               custom={index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//               className={`flex flex-col md:flex-row ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               } items-stretch gap-6`}
//             >
//               {/* Image */}
//               <motion.div whileHover={{ scale: 1.02 }} className="md:w-1/2 w-full h-full">
//                 <img
//                   src={getImageForCategory(key)}
//                   alt={key}
//                   className="w-full h-130 object-cover rounded-xl shadow-md border border-yellow-100 transition duration-300"
//                 />
//               </motion.div>

//               {/* Dish List */}
//               <div className="md:w-1/2 w-full bg-white backdrop-blur-sm border border-yellow-100 rounded-xl p-5 shadow-md transition-all flex flex-col justify-center">
//                 <div>
//                   <h2 className="text-xl font-bold text-amber-700 mb-3 border-b pb-1 border-yellow-300">
//                     {key}
//                   </h2>
//                   <ul className="space-y-2 text-base">
//                     {items.map((dish) => (
//                       <li
//                         key={dish.dishId}
//                         className="flex justify-between items-center border-b border-yellow-100 pb-1"
//                       >
//                         <div>
//                           <span className="block font-medium">{dish.dishName}</span>
//                           <small className="text-sm text-gray-500">{dish.dishDescription}</small>
//                         </div>
//                         <span className="text-amber-700 font-semibold">₹{dish.dishPrice}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* Optional Note */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mt-12 bg-white border-l-4 border-blue-400 px-5 py-3 text-sm text-gray-800 rounded-lg shadow max-w-xl mx-auto"
//       >
//         <strong className="text-blue-700">Note:</strong> Fish dishes prepared at{" "}
//         <span className="text-amber-700 font-bold">₹400/kg</span> when customers provide raw fish. 🐟✨
//       </motion.div>
//     </div>
//   );
// };

// export default FoodMenu;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { menuData } from "../API/GetApi";

import vegImage from "../assets/menu1.avif";
import vegThaliImage from "../assets/veg thali.avif";
import nonVegImage from "../assets/non-Veg.jpg";
import nonVegAltImage from "../assets/menu2.jpg";
import beverageImage from "../assets/menu3.jpg";
import nonVegBeverageImage from "../assets/omlete.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const getImageForCategory = (key) => {
  if (key === "Veg - Starters") return vegImage;
  if (key === "Veg - Main Course") return vegThaliImage;
  if (key === "Non-Veg - Starters") return nonVegAltImage;
  if (key === "Non-Veg - Main Course") return nonVegImage;
  if (key === "Veg - Snacks&Beverages") return beverageImage;
  if (key === "Non-Veg - Snacks&Beverages") return nonVegBeverageImage;
  return "https://via.placeholder.com/400x300?text=No+Image";
};

const FoodMenu = () => {
  const [starters, setStarters] = useState({});
  const [mainCourse, setMainCourse] = useState({});
  const [snacks, setSnacks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const dishes = await menuData();
        const startersGroup = {};
        const mainCourseGroup = {};
        const snacksGroup = {};

        dishes.forEach((dish) => {
          const type = dish.dishSource?.toLowerCase() === "veg" ? "Veg" : "Non-Veg";
          const category = dish.dishCategory || "Others";
          const key = `${type} - ${category}`;

          if (category.toLowerCase().includes("starter")) {
            if (!startersGroup[key]) startersGroup[key] = [];
            startersGroup[key].push(dish);
          } else if (category.toLowerCase().includes("main")) {
            if (!mainCourseGroup[key]) mainCourseGroup[key] = [];
            mainCourseGroup[key].push(dish);
          } else if (category.toLowerCase().includes("snacks") || category.toLowerCase().includes("beverage")) {
            if (!snacksGroup[key]) snacksGroup[key] = [];
            snacksGroup[key].push(dish);
          }
        });

        setStarters(startersGroup);
        setMainCourse(mainCourseGroup);
        setSnacks(snacksGroup);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const renderStarters = () => (
    <div className="space-y-12 mb-10">
      <h2 className="text-2xl font-bold text-center text-amber-800">Starters</h2>
      {Object.entries(starters).map(([key, items], index) => (
        <motion.div
          key={key}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} gap-4 items-stretch`}
        >
          <img
            src={getImageForCategory(key)}
            alt={key}
            className="md:w-1/2 w-full max-h-92 object-cover rounded-xl shadow"
          />

          <div className="md:w-1/2 bg-white border border-yellow-100 rounded-xl p-4 shadow">
            <h3 className="text-lg font-bold text-amber-700 mb-2 border-b pb-1 border-yellow-300">{key}</h3>
            <ul className="space-y-2">
              {items.map((dish) => (
                <li key={dish.dishId} className="flex justify-between border-b border-yellow-100 pb-1">
                  <div>
                    <span className="block font-medium">{dish.dishName}</span>
                    <small className="text-sm text-gray-500">{dish.dishDescription}</small>
                  </div>
                  <span className="text-amber-700 font-semibold">₹{dish.dishPrice}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderMainCourse = () => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">Main Course</h2>
    <div className="flex flex-col lg:flex-row gap-6">
      {Object.entries(mainCourse).map(([key, items], index) => (
        <motion.div
          key={key}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full lg:w-1/2 space-y-4"
        >
          <img
            src={getImageForCategory(key)}
            alt={key}
            className="w-full max-h-90 object-cover rounded-xl shadow"
          />

          {items.map((dish) => (
            <div
              key={dish.dishId}
              className="bg-white border border-yellow-100 rounded-xl p-4 shadow text-left"
            >
              <h3 className="text-lg font-bold text-amber-700">{key}</h3>
              <p className="text-gray-800 font-semibold">{dish.dishName}</p>
              <p className="text-sm text-gray-500">{dish.dishDescription}</p>
              {/* No price for main course */}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  </div>
);

  const renderSnacks = () => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">Snacks & Beverages</h2>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-white rounded-xl shadow border border-yellow-100 p-6 space-y-4"
    >
      {Object.entries(snacks).map(([key, items]) =>
        items.map((dish) => (
          <div key={dish.dishId} className="flex justify-between border-b border-yellow-100 pb-1">
            <div>
              <span className="block font-medium text-amber-700">{dish.dishName}</span>
              <small className="text-sm text-gray-500">{dish.dishDescription}</small>
            </div>
            <span className="text-amber-700 font-semibold">₹{dish.dishPrice}</span>
          </div>
        ))
      )}
    </motion.div>
  </div>
);


  return (
    <div className="bg-[#fffbea] min-h-screen py-10 px-4 md:px-12 text-gray-800 font-sans mt-12">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl text-center font-bold text-amber-800 mb-10"
      >
        Food Menu
      </motion.h1>

      {loading ? (
        <p className="text-center text-lg">Loading menu...</p>
      ) : (
        <>
          {renderStarters()}
          {renderMainCourse()}
          {renderSnacks()}
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 bg-white border-l-4 border-blue-400 px-4 py-2 text-sm text-gray-800 rounded shadow max-w-xl mx-auto"
      >
        <strong className="text-blue-700">Note:</strong> Fish dishes prepared at{" "}
        <span className="text-amber-700 font-bold">₹400/kg</span> when customers provide raw fish. 🐟✨
      </motion.div>
    </div>
  );
};

export default FoodMenu;
